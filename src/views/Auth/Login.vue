<template>
  <div class="login">
      <div class="container">
        <div class="title mt-5 mb-4">
            <h2>TODOs List</h2>
        </div>

        <div class="d-flex justify-content-center h-100">
          <div class="card">
              <div class="card-header">
                  <h3>Sign In</h3>
              </div>
              <div class="card-body">
                <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="username">
                </div>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                <input type="password" class="form-control" placeholder="password">
                </div>
                <div class="form-group">
                    <input type="submit" value="Login" class="btn btn-primary float-right">
                </div>
              </div>

            <div class="card-footer">
                <div class="d-flex justify-content-center links">
                    Don't have an account?<a href="#">Sign Up</a>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login'

}
</script>

<style scoped>
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
