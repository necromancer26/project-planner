import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddProject from "../views/AddProject.vue";

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/add", component: AddProject },
  ],
});
/*
[
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProject,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
*/

export default router;
