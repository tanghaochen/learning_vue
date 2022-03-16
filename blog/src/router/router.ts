import { RouteRecordRaw } from "vue-router";
import showIndex from "@/views/show/showIndex.vue";
// import showHome from "@/views/show/showHome.vue";
import Blog from "@/views/show/SBlog.vue";
import Book from "@/views/show/SBook.vue";
import project from "@/views/show/SProject.vue";
import file from "@/views/show/SFile.vue";
import list from "@/views/show/SList.vue";

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
        redirect: "/show/blog/1",
      },
      {
        path: "blog/:pageNum",
        name: "blog",
        component: Blog,
      },
      {
        path: "book/:pageNum",
        name: "book",
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
