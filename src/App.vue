<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />  -->
  <div class="flex-container">
    <h1>first header</h1>
    <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Givaway!</h1>
        <p>Grab your ninja swag for half price!</p>
      </Modal>
    </div>
    <div v-if="showModalTwo">
      <Modal
        @close="toggleModalTwo"
        title="This Is The Modal Title"
        msg="This Is The Modal Message"
      >
        <h1>Sign up to the Newsletter</h1>
        <p>For updates and promo codes!</p>
      </Modal>
    </div>

    <button @click.alt="toggleModal">open modal (alt click)</button>
    <button @click="toggleModalTwo">open modal 2</button>
    <p>this text should be italic</p>
  </div>
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import Zelda from "./components/Zelda.vue";
import Modal from "./components/Modal.vue";
export default {
  name: "app",
  components: { Zelda, Modal },
  data() {
    return {
      title: "My First Vue App Using Vite",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
h1 {
  color: cyan;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
button {
  background: #bbb;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px;
  font-size: 16px;
  color: #333;
}
</style>
