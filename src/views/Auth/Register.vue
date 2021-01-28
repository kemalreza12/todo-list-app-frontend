<template>
  <div class="container-fluid">
      <div class="container">
        <div class="title pt-5">
            <h2>TODOs List</h2>
        </div>

        <div class="d-flex justify-content-center h-100">
          <div class="card">
              <div class="card-header">
                  <h3>Sign Up</h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="handleReg">
                  <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="username" v-model="username">
                </div>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" class="form-control" placeholder="password" v-model="password">
                </div>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user-tag"></i></span>
                    </div>
                    <select class="form-select form-control" id="inputGroupSelect01" v-model="role_id">
                        <option value="1">Administrator</option>
                        <option value="2">Member</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="submit" value="Register" class="btn btn-primary float-right">
                </div>
                </form>
              </div>

            <div class="card-footer"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      role_id: ''
    }
  },
  methods: {
    handleReg (e) {
      e.preventDefault()
      const data = {
        username: this.username,
        password: this.password,
        role_id: this.role_id
      }
      this.register(data)
        .then(() => {
          this.$router.push('/')
        })
    },
    ...mapActions(['register'])
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
