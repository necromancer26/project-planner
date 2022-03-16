import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import "./assets/global.css";
createApp(App)
  .use(router as any)
  .mount("#app");
