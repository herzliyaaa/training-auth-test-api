import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../views/dashboard.view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "LoginPage",
      component: () => import("../views/login.vue"),
      meta: { guest: true },
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardPage,
      meta: {
        requiresAuth: true,
      },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isLoggedIn) {
      next("/dashboard");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
