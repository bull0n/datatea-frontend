import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import NavListTeas from '@/components/navigation/NavListTeas.vue';
import TeaDetail from '@/components/tea/TeaDetail.vue';
import TeaAdd from '@/components/tea/TeaAdd.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: NavListTeas,
  }, {
    path: '/tea/add',
    name: 'teaAdd',
    component: TeaAdd,
  }, {
    path: '/tea/:teaId',
    name: 'tea',
    component: TeaDetail,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
