import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Student/Home.vue";

const routes = [
  { path: "/students/", name: "Home", component: Home },
  {
    path: "/student/login",
    name: "Login",
    component: () => import("../components/Student/Login.vue"),
  },
  {
    path: "/student/register",
    name: "Register",
    component: () => import("../components/Student/Register.vue"),
  },
  {
    path: "/student/forgot-password",
    name: "ForgotPassword",
    component: () => import("../components/Student/ForgotPassword.vue"),
  },
  {
    path: "/student/password-reset/:token",
    name: "ResetPassword",
    component: () => import("../components/Student/ResetPassword.vue"),
  },


  // Admin

  { path: "/Admins/", name: "AdminHome", component:() => import("../components/Admin/Home.vue")},
//   {
//     path: "/Admin/login",
//     name: "Login",
//     component: () => import("../components/Student/Login.vue"),
//   },
//   {
//     path: "/Admin/Studentregister",
//     name: "Register",
//     component: () => import("../components/Student/Register.vue"),
//   },
//   {
//     path: "/Admin/forgot-password",
//     name: "ForgotPassword",
//     component: () => import("../components/Student/ForgotPassword.vue"),
//   },
//   {
//     path: "/Admin/password-reset/:token",
//     name: "ResetPassword",
//     component: () => import("../components/Student/ResetPassword.vue"),
//   },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
