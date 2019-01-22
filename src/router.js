import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import LoginPage from './views/loginPage.vue';
import profession from './views/profession/index.vue';
import add from './views/add.vue';
import DeptList from './views/dept/DeptList.vue';
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
      path: '/DeptList',
      name: 'DeptList',
      component: DeptList,
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/add',
      name: 'add',
      component: add,
    },
  ],
});
