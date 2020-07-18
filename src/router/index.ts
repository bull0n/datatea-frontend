import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ListTeas from '@/components/ListTeas.vue';
import TeaDetail from '@/components/TeaDetail.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: ListTeas,
  }, {
    path: '/:id',
    name: 'tea',
    component: TeaDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
