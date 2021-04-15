import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TeaDetail from '@/components/tea/TeaDetail.vue';
import TeaAdd from '@/components/tea/TeaAdd.vue';
import TeaList from '@/components/tea/TeaList.vue';
import LoginForm from '@/components/users/LoginForm.vue';
import store from '@/store/index';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: TeaList,
  }, {
    path: '/teas',
    name: 'listAllTeas',
    component: TeaList,
    props: true,
  }, {
    path: '/teas/:status',
    name: 'listTeas',
    component: TeaList,
    props: true,
    meta: {
      reload: true,
    },
  }, {
    path: '/tea/add',
    name: 'teaAdd',
    component: TeaAdd,
    props: true,
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

/* router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['users/isUserLoggedIn'];
  console.log(isAuthenticated);
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
}); */

export default router;
