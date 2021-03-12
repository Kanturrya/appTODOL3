import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/home.vue';
import Login from '../views/login.vue';
import SignUp from '../views/SignUp.vue';

let routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    redirect: '/home/0'
  },
  {
    path: '/home/:idList',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  }
];

export const router = new createRouter({
  history: createWebHistory(),
  routes,
});