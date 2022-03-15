import { RouteRecordRaw } from "vue-router";
import showIndex from "@/views/show/showIndex.vue";
import showHome from "@/views/show/showHome.vue";
import Blog from "@/views/show/Blog.vue";
import Book from "@/views/show/Book.vue";
import project from "@/views/show/project.vue";
import file from "@/views/show/file.vue";
import list from "@/views/show/list.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/show",
  },
  {
    path: "/show",
    name: "show",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: showIndex,
    children: [
      {
        path: "",
        name: "showHome",
        component: showHome,
      },
      {
        path: "Blog",
        name: "Blog",
        component: Blog,
      },
      {
        path: "Book",
        name: "Book",
        component: Book,
      },
      {
        path: "project",
        name: "project",
        component: project,
      },
      {
        path: "file",
        name: "file",
        component: file,
      },
      {
        path: "list",
        name: "list",
        component: list,
      },
    ],
  },
];
