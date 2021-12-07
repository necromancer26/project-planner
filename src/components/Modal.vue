<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
      <slot>default content (if no slot passed in)</slot>
      <div class="actions">
        <!-- <slot name="links"></slot> -->
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { toRefs, reactive, defineEmits, defineProps, withDefaults } from "vue";
interface Props { title: string, msg: string, theme: string }
const props = withDefaults(defineProps<Props>(), { title: "title", msg: "message", theme: "sale" })
const closeModal = (): void => { emit("close") }
const emit = defineEmits(["close"])
const state = reactive({ firstName: "Zelda" as string, })
// export default {
//   props: ["title", "msg", "theme"],
//   methods: {
//     closeModal() {
       // this.$emit("close");
//       emit("close");
//       console.log("closed");

//     },
//   },
//   setup(props: any) {
//     const emit = defineEmits(["close"])
//     const state = reactive({ firstName: "Zelda" as string });
//     console.log({ ...props });

//     return { ...toRefs(state) }; // anything returned here will be available for the rest of the component
//   },
// };
</script>

<style lang="scss">
.modal {
  width: 400px;
  padding: 20px;
  margin: 200px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  // position: absolute;
  // top: 0;
  // position: fixed;
  // background: rgba(0, 0, 0, 0.5);
  // width: 100%;
  // height: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
/* sale styles */
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions {
  color: white;
}
.modal.sale .actions a {
  color: white;
}
</style>
