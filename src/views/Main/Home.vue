<template>
  <div class="container-fluid">
      <div class="row p-2 header">
          <div class="col-10">
              <h3 class="float-left">TODOs List</h3>
          </div>
          <div class="col-2">
            <button class="btn btn-warning border-0">
                <span>Sign Out</span>
            </button>
          </div>
      </div>
      <div class="container">
          <div class="mt-5">
              <div class="row">
                  <div class="col-10">
                    <h2 class="float-left">Admin</h2>
                  </div>
                  <div class="col-2">
                    <button class="btn btn-outline-primary border-0">
                        <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
          </div>
      </div>
      <div class="row m-3">
          <div class="col-md-4">
              <Label/>
          </div>
      </div>
      <!-- <div class="d-flex align-items-end footer">
          <div class="col">2021</div>
      </div> -->
  </div>
</template>

<script>
import Label from '../../components/Label'
export default {
  name: 'Home',
  components: {
    Label
  }

}
</script>

<style scoped>
.container-fluid {
background-color: #F7E68F;
min-height: 630px;
height: 100%;
}

.header {
    background-color:  #74757A;
    color: white;
}
</style>
