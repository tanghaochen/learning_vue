export const childrenRoute = [
  {
    path: "",
    name: "Default",
    component: () => import("../views/childrenView/default.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/childrenView/about.vue"),
  },
  {
    path: "/Resume", // 忘写了加下去
    name: "Resume",
    component: () => import("../views/childrenView/resume.vue"),
  },
  {
    path: "/Portfolio", // 忘写了加下去
    name: "portfolio",
    component: () => import("../views/childrenView/portfolio.vue"),
  },
];
