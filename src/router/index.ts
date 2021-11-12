import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    meta: {},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    redirect: "/dashboard",
    meta: {},
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: {
          title: "dashboard",
          affix: true,
        },
        component: () => import("@/views/dashboard/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
