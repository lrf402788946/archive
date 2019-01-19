import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import LoginPage from './views/loginPage.vue';
import profession from './views/profession/index.vue';
import details from './views/details.vue';

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
      path: '/profession',
      name: 'profession',
      component: profession,
    },
    {
      path: '/details',
      name: 'details',
      component: details,
    },
  ],
});
