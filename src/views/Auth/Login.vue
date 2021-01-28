<template>
  <div class="container-fluid m-0 p-0">
      <div class="container">
        <div class="title pt-5 ">
            <h2>TODOs List</h2>
        </div>

        <div class="d-flex justify-content-center h-100">
          <div class="card">
              <div class="card-header">
                  <h3>Sign In</h3>
              </div>

              <div class="card-body">
                <form @submit.prevent="handleLogin">
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="text" class="form-control" v-model="username" placeholder="username" required>
                </div>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                <input type="password" class="form-control" v-model="password" placeholder="password" required>
                </div>
                <div class="form-group">
                  <router-link to="/home">
                    <input type="submit" value="Login" class="btn btn-primary float-right" @click="handleLogin">
                  </router-link>
                </div>
            </form>
              </div>

            <div class="card-footer">
                <div class="d-flex justify-content-center links">
                    Don't have an account?<router-link to="/register">Sign Up</router-link>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (e) {
      e.preventDefault()
      const data = {
        username: this.username,
        password: this.password
      }
      this.login(data).then((res) => {
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
}

.container-fluid {
  background-image: url('../../assets/pexels-suzy-hazelwood-1226398.jpg');
  height: 630px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
height: 100%;
align-content: center;
}

.card {
height: 370px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.1) !important;
}

</style>
