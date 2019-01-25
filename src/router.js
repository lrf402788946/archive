import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import LoginPage from './views/LoginPage.vue';
import DeptIndex from './views/dept/Index.vue';
import UserIndex from './views/user/Index.vue';
import Details from './views/Details.vue';
import RoleIndex from './views/role/Index.vue';
import UserRoleIndex from './views/userRole/Index.vue';
import UpdatePW from './views/user/UpdatePW.vue';

Vue.use(Router);

const router = new Router({
  // base: '/archive/',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
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
    {
      path: '/RoleIndex',
      name: 'RoleIndex',
      component: RoleIndex,
    },
    {
      path: '/UserRoleIndex',
      name: 'UserRoleIndex',
      component: UserRoleIndex,
    },
    {
      path: '/UpdatePW',
      name: 'UpdatePW',
      component: UpdatePW,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const is_login = sessionStorage.getItem('userInfo');
  console.log(is_login);
  if (is_login) {
    next();
  } else {
    if (to.path.includes('Login')) next();
    else next('/LoginPage');
  }
});
export default router;
