import {
  createWebHashHistory,
  createRouter,
  Router,
  RouterHistory,
  RouteRecordRaw,
} from "vue-router";
import EditProject from "../views/EditProject.vue";
import Home from "../views/Home.vue";
import AddProject from "../views/AddProject.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: Home },
  { path: "/add", name: "AddProject", component: AddProject },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: EditProject,
    props: true,
  },
];
export const router: Router = createRouter({
  history: createWebHashHistory() as RouterHistory,
  routes,
});
