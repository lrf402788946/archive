import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import LoginPage from './views/loginPage.vue';
import DeptIndex from './views/dept/Index.vue';
import UserIndex from './views/user/Index.vue';
import Details from './views/Details.vue';

Vue.use(Router);

export default new Router({
  base: process.env.PUBLIC_PATH,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: LoginPage,
    },
    {
      path: '/DeptIndex',
      name: 'DeptIndex',
      component: DeptIndex,
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/UserIndex',
      name: 'UserIndex',
      component: UserIndex,
    },
  ],
});
