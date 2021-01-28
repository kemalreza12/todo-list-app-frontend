import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    labels: [],
    paginations: null,
    todos: []
  },
  mutations: {
    setTodos (state, payload) {
      state.todos = payload
    },
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
    },
    setLabels (state, payload) {
      // console.log(payload)
      state.labels = payload
    },
    setDelete (state, id) {
      console.log(id)
      state.labels = state.lebels.filter(item => item.id !== id)
    },
    setPaginations (state, payload) {
      state.paginations = payload
    }
  },
  actions: {
    interceptorsResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result.message)
        if (error.response.status === 401) {
          if (error.response.data.result.message === 'Token Invalid') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/')
            alert('maaf anda tidak boleh merubah token dengan sendirinya')
          } else if (error.response.data.result.message === 'Token Expired') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/')
            alert('maaf session habis silahkan login kembali')
          }
        }
        return Promise.reject(error)
      })
    },
    interceptorsRequest (context) {
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${context.state.token}`
        return config
      }, function (error) {
        // Do something with request error
        return Promise.reject(error)
      })
    },
    login (context, payload) {
      // context.commit('setNotif', 'loading')
      // if (!payload.email) {
      //   context.commit('setNotif', 'Please insert your email')
      // }
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/login`, payload)
          .then((res) => {
            context.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            // axios.defaults.headers.common.Authorization = `Bearer ${res.data.result.token}`
            resolve(res.data.result[0])
            router.push('/home')
          })
          .catch((err) => {
            console.log(err.response.data.result)
            reject(err)
          })
      })
    },
    register (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/register`, payload)
          .then((res) => {
            console.log(res)
            // axios.defaults.headers.common.Authorization = `Bearer ${res.data.result.token}`
            resolve(res.data.result[0])
            router.push('/')
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getLabel (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/labels${payload || ''}`)
          .then((res) => {
            console.log(res)
            context.commit('setLabels', res.data.result)
            // context.commit('setPaginations', res.data.paginations)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    insertLabel (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/labels`, payload)
          .then((res) => {
            // console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    editLabel (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/labels/` + payload.id, payload.data)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    deleteLabel (context, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_BASE_URL}/api/v1/labels/` + id)
          .then((res) => {
            console.log(res.data)
            context.commit('setDelete', id)
            resolve(res.data)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getTask (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/todos/`)
          .then((res) => {
            console.log(res.data)
            context.commit('setTodos', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        if (this.state.token !== null) {
          localStorage.removeItem('token')
        }
      })
    }
  },
  getters: {
    getTodos (state) {
      return state.todos
    },
    isLogin (state) {
      return state.token || localStorage.getItem('token')
    },
    isRegister (state) {
      return state.token !== null
    },
    getLabel (state) {
      console.log(state.labels)
      return state.labels
    },
    getPage (state) {
      return state.paginations
    }
  },
  modules: {
  }
})
