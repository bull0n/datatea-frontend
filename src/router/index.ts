import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import NavListTeas from '@/components/navigation/NavListTeas.vue';
import TeaDetail from '@/components/tea/TeaDetail.vue';
import TeaAdd from '@/components/tea/TeaAdd.vue';
import LoginForm from '@/components/users/LoginForm.vue';
import store from '@/store/index';

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
  }, {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['users/isUserLoggedIn'];
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
