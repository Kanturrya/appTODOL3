import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/home.vue';
import Login from '../views/login.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'HomeBase',
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
  }
];

export const router = new createRouter({
  routes,
  history: createWebHistory(),
  
});