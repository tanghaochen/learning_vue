import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Table from "../components/table.vue";
import { useRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // children: [
    //   {
    //     path: "",
    //     name: "table",
    //     component: Table,
    //   },
    // ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
