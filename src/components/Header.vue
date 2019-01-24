<template lang='html'>
  <div id="Header">
      <div class="base-header">
        <div class="base-header-left" id="menuHead"></div>
        <div class="base-nav" id="base-nav">
          <ul class="top-nav-ul">
            <li><a @click="$router.push('/')">首 &nbsp;&nbsp; 页</a></li>
          </ul>
          <div id="base-user">
            <a href="#" class="user-name" @mouseover="mopen('m1')" @mouseout="mclose()">Admin<span class="button-down fa fa-caret-down"></span></a>
            <div id="m1" style="z-index:999;" @mouseover="mopen('m1')" @mouseout="mclose()">
              <a @click="$router.push({name:'UpdatePW'})"><i class="fa fa-lock base-margin-right-5"></i>修改密码</a>
              <a @click="logout()"><i class="fa fa-sign-out base-margin-right-5"></i>安全退出</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    $('#base-nav').width($(window).width() - 241);
    $(window).resize(function() {
      $('#base-nav').width($(window).width() - 241);
    });
  },
  methods: {
    mopen(id) {
      // this.mcancelclosetime();
      if (this.ddmenuitem) this.ddmenuitem.style.visibility = 'hidden';
      this.ddmenuitem = document.getElementById(id);
      this.ddmenuitem.style.visibility = 'visible';
    },
    mclose() {
      if (this.ddmenuitem) this.ddmenuitem.style.visibility = 'hidden';
    },
    logout() {
      sessionStorage.removeItem('userInfo');
      this.$router.push({ path: '/LoginPage' });
    },
  },
};
</script>

<style lang='css' scoped>

</style>
