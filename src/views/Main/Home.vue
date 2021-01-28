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
      <div class="container">
          <div class="mt-5">
              <div class="row">
                  <div class="col-10">
                    <h2 class="float-left">Admin</h2>
                  </div>
                  <div class="col-2">
                    <button class="btn btn-outline-primary border-0" @click="toggleModal">
                        <span class="fa fa-plus"></span>
                    </button>
                     <Modal v-show="ModalActive" :data="dataModal" @close-modal="toggleModal" @send-event="handleModal"/>
                  </div>
                </div>
          </div>
      </div>
      <div class="row m-3">
          <div class="col-md-4" v-for="labels in labelstate" :key="labels.id">
              <Label
              :item="labels"
              :active="checkLabelActive(labels.id)"
              @event-update="setUpdate(labels)"
              @del-event="setDelete(labels.id)" />
          </div>
      </div>
      <!-- <div class="d-flex align-items-end footer">
          <div class="col">2021</div>
      </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Label from '../../components/Label'
import Modal from '../../components/Modal'

export default {
  name: 'Home',
  components: {
    Label,
    Modal
  },
  data: () => ({
    ModalActive: false,
    showModalCheckout: false,
    dataModal: {
      id: null,
      label: '',
      desc: ''
    }
  }),
  methods: {
    ...mapActions(['getLabel', 'insertLabel', 'editLabel', 'deleteLabel', 'logout']),
    toggleModal () {
      this.ModalActive = !this.ModalActive
      if (!this.ModalActive) {
        this.clearModal()
      }
    },
    setSort (e) {
      const url = `?sort=${e.target.value}`
      this.getLabel(url)
    },
    handlePagination (number) {
      const url = `?page=${number}`
      this.getProduct(url)
    },
    setDelete (id) {
      this.deleteLabel(id)
      alert('Label Deleted')
    },
    handleModal () {
      this.dataModal.id ? this.updateLabel() : this.addLabel()
    },
    updateLabel () {
      const data = new FormData()
      // data.append('id', this.dataModal.id)
      data.append('label', this.dataModal.label)
      data.append('desc', this.dataModal.desc)

      const contain = {
        id: this.dataModal.id,
        data: data
      }
      this.editProduct(contain)
        .then(res => {
          this.clearModal()
          this.getLabel()
          alert('update success')
        })
    },
    setUpdate (data) {
      this.ModalActive = true
      this.dataModal.id = data.id
      this.dataModal.label = data.label
      this.dataModal.desc = data.desc
    },
    clearModal () {
      this.dataModal.id = null
      this.dataModal.label = ''
      this.dataModal.desc = ''
      this.ModalActive = false
    },
    addLabel () {
      const data = new FormData()
      data.append('label', this.dataModal.label)
      data.append('desc', this.dataModal.desc)
      this.insertLabel(data)
        .then(res => {
          this.clearModal()
          this.getLabel()
          alert('Label Successfully Added')
        })
    },
    handleLogout () {
      this.$router.go(0)
      this.$router.push('/')
      this.logout()
    }
  },
  computed: {
    ...mapGetters({
      labelstate: 'getLabel'
    })
  },
  mounted () {
    this.getLabel()
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
