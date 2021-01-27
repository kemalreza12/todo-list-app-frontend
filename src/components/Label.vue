<template>
  <div class="container">
      <div class="card">
          <div class="card-header">
              <div class="row">
                  <div class="col-sm-8">
                      <h3 class="float-left">Daily</h3>
                  </div>
                  <div class="col-sm-2">
                    <button
                      class="btn btn-outline-primary border-0 ml-2"
                    >
                      <span class="fa fa-edit"></span>
                    </button>
                  </div>
                  <div class="col-sm-2">
                    <button class="btn btn-outline-danger border-0">
                      <span class="fa fa-trash"></span>
                    </button>
                  </div>
              </div>
          </div>
          <div class="card-body">
              <div class="desc"><p>sample</p></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Label'

}
</script>

<style scoped>
.card {
    background-color: #F6BC67;
    height: 350px;
}
</style>
