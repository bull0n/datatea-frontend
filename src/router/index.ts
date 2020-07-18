import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ListTeas from '../components/ListTeas.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: ListTeas,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
