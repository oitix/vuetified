const Dashboard = () => import("Pages/Account/Dashboard.vue");
const Settings = () => import("Pages/Account/Settings.vue");

export default [
  /* Start Authenticated Routes */
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    meta: {
      requiresAuth: true,
      permission: "guest",
      fail: "/404.html"
    }
  },
  {
    path: "/settings",
    component: Settings,
    name: "settings",
    meta: {
      requiresAuth: true,
      permission: "guest",
      fail: "/404.html"
    }
  }
  /* End Authenticated Routes */
];
