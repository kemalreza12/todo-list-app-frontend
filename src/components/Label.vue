<template>
  <div class="container">
      <div class="card">
          <div class="card-header">
              <div class="row">
                  <div class="col-sm-8">
                      <h3 class="float-left">{{item.label}}</h3>
                  </div>
                  <div class="col-sm-2">
                    <button
                      class="btn btn-outline-primary border-0 ml-2" @click="$emit('event-update')">
                      <span class="fa fa-edit"></span>
                    </button>
                  </div>
                  <div class="col-sm-2">
                    <button class="btn btn-outline-danger border-0" @click="$emit('del-event')">
                      <span class="fa fa-trash"></span>
                    </button>
                  </div>
              </div>
          </div>
          <div class="card-body">
              <div class="desc"><p>{{item.desc}}</p></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    item: {
      type: Object
    },
    active: {
      type: Boolean
    }
  }

}
</script>

<style scoped>
.card {
    background-color: #F6BC67;
    height: 350px;
}
</style>
