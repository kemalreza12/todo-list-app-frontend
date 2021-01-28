<template>
  <div class="container-fluid">
      <div class="row p-2 header">
          <div class="col-10">
              <h3 class="float-left">TODOs List</h3>
          </div>
          <div class="col-2">
            <button class="btn btn-warning border-0" @click="handleLogout">
                <span>Sign Out</span>
            </button>
          </div>
      </div>
    <todo-list />
  </div>
</template>

<script>
import TodoList from '../../components/Todos/TodoList'

export default {
  name: 'todos',
  components: {
    TodoList
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
