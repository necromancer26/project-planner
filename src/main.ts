import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/global.css";
import VueRouter from "vue-router";

createApp(App).use(router).mount("#app");
