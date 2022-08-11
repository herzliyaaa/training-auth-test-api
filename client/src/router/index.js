import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../views/dashboard.view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardPage,
    },
    {
      path: "/customers",
      name: "Customers",
      component: () => import("../views/customer.view.vue"),
    },
    {
      path: "/cars",
      name: "Cars",
      component: () => import("../views/car/car.view.vue"),
    },
    {
      path: "/salesperson",
      name: "Salesperson",
      component: () => import("../views/salesperson.view.vue"),
    },
  ],
});

export default router;
