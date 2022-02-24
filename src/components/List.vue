<template>
  <div class="list-container">
      <div
        class="add-btn-div"
      >
        <button
          class="button add-btn"
          @click="toggleModal"          
        >
          Add Data
        </button>
      </div>
      <div
        v-if="openAddModal"
      >
        <div
          class="modal-overlay"
          @click="toggleModal"
        />
        <div
          class="modal"
        >
          <div
            class="modal_container"
          >
          Hello
          </div>
        </div>
      </div>
      <div class="add-btn-div">
        <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>  
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>  
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>  
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      openAddModal: false
    }
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    toggleModal () {
      this.openAddModal = !this.openAddModal
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */

.add-btn {
  margin-left: auto;
  // float: right;
}

.add-btn-div {
  display: block;
  width: 100vw;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

.list-container {
  text-align: right;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    background: rgba(0, 0, 0, 0.6);

    // mobile {
    //     background: #5C5C5C;
    // }
}


.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    overflow: visible;

    &_container {
            max-width: 40vw;
            max-height: 80vh;
            border-radius: 8px;
            background: white;

            // mobile {
            //     max-width: 100vw;
            //     max-height: 80vh;
            //     border-radius: 0px;
            // }
    }
}

.grid-container {
  // float: right;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
