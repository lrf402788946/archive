import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import '@/plugins/meta';
import '@/plugins/filters';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.prototype.$axios = axios;
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
  // let isLogin = store.getters.isLogin;
  // console.log(isLogin)
  // if (!isLogin) {
  //   if (to.path !== '/loginPage') {
  //     return next({ path: '/loginPage' });
  //   } else {
  //     next();
  //   }
  // } else {
    // if (to.path === '/index') {
    //   return next({ path: '/index' });
    // }
    //next();
  // }
// });
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
