<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>Hi im {{ name }} my age is {{ age }}</p>
    <button @click="changeName">click me! to change name</button>
    <button @click="changeAge">click to change age</button>
    <p>{{ msg }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
// defineProps<{ msg: string }>();

export default defineComponent({
  name: "Zelda",
  props: {
    msg: String,
    title: String,
  },
  methods: {
    changeName() {
      this.name = "Link Zelda";
    },
    changeAge() {
      this.age = 26;
    },
  },
  setup(props) {
    const state = reactive({
      name: "?" as string,
      age: "?" as number | string,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style scoped lang="scss">
h1 {
  color: cornflowerblue;
}
.container {
  background-color: #e58;
  color: #1d3557;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 5px 0;
    height: 50px;
    width: 15%;
    background: #1d3557;
    color: #bfe;
    border: 2px solid #bfe;
    border-radius: 5px;
    &:hover {
      background: rgba(#1d3557, 0.8);
    }
  }
}
</style>
