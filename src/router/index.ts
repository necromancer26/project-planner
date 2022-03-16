import {
  createWebHashHistory,
  createRouter,
  Router,
  RouterHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";
import AddProject from "../views/AddProject.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/add", component: AddProject },
];
export const router: Router = createRouter({
  history: createWebHashHistory() as RouterHistory,
  routes,
});
