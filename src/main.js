// import Vue from 'vue'

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";


// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
import Shared from "@/views/admin/Shared";
import Recent from "@/views/admin/Recent";
import Starred from "@/views/admin/Starred";
import Deleted from "@/views/admin/Deleted";
import AddFile from "@/views/admin/AddFile";
import SharePage from "@/views/admin/SharePage";
import ChangePassword from "@/views/auth/ChangePassword";


// routes

const routes = [
  {
    path: "/files",
    redirect: "/files/my-files",
    component: Admin,
    children: [
      {
        path: "/files/my-files",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/files/shared",
        name: "Shared",
        component: Shared,
      },
      {
        path: "/files/recent",
        component: Recent,
      },
      {
        path: "/files/starred",
        component: Starred,
      },
      {
        path: "/files/trashed",
        name: "Trashed",
        component: Deleted,
      },
      {
        path: "/files/add",
        component: AddFile,
      },
      {
        path: "/files/share/:id/:name",
        name: "SharePage",
        component: SharePage,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
      {
        path: "/auth/change_password",
        component: ChangePassword,
      },
    ],
  },
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/index",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
