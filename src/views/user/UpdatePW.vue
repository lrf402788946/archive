<template lang='html'>
  <div id="UpdatePW">
    <b-breadcrumb>
      <b-breadcrumb-item :to="{name:'UpdatePW'}">修改密码</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="base-form">
      <div class="form-inline">
        <div class="base-form-title" style="width:100%;"><a class="base-margin-left-20">修改密码</a>
          <div class="button-table">
          </div>
        </div>
      </div>
      <div class="base-padding-20 base-bg-fff" style="padding-top: 50px;">
        <div class="d-block text-center">
          <div class="row">
              <div class="col-lg-4" style="text-align: end; line-height: 35px;">原密码</div>
              <div class="col-lg-3" style="margin-bottom:30px;">
                <b-form-input type="password" v-model="form.password" placeholder="请输入原密码"></b-form-input>
              </div>
              <div class="col-lg-5"></div>
              <div class="col-lg-4" style="text-align: end; line-height: 35px;">新密码</div>
              <div class="col-lg-3" style="margin-bottom:30px;">
                <b-form-input type="password" v-model="form.passwordNew" placeholder="请输入新密码"></b-form-input>
              </div>
              <div class="col-lg-5"></div>
              <div class="col-lg-4" style="text-align: end; line-height: 35px;">确认密码</div>
              <div class="col-lg-3" style="margin-bottom:30px;">
                <b-form-input type="password" v-model="comfirm" placeholder="请确认密码"></b-form-input>
              </div>
              <div class="col-lg-5"></div>
              <div class="col-lg-4"></div>
              <div class="col-lg-3" style="margin-bottom:50px;">
                  <button variant="secondary"  @click="form={}" class="chongBtn" style="float:left;" >重&nbsp;&nbsp;置</button>
                  <button variant="primary" @click="toSave()"  class="chongBtn" style="float:right;" >保&nbsp;&nbsp;存</button>
              </div>
              <div class="col-lg-5"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdatePW',
  components: {},
  data() {
    return {
      form: {},
      comfirm: '',
    };
  },
  computed: {},
  methods: {
    //修改
    toSave() {
      if (this.comfirm === this.form.passwordNew) {
        this.form['login_id'] = sessionStorage.getItem('userInfo');
        let result = this.$axios.post('user/pwd_edit', { data: this.form });
        console.log(result);
        if (result.data.rescode === '0') {
          console.log('添加成功');
          this.$router.push({ path: '/' });
        }
      } else {
        alert('输入密码不一致');
        console.log('两次密码不一致');
      }
    },
  },
};
</script>

<style lang='css' scoped>
.chongBtn{
   background: #5bc0de;
    border: none;
    color: #fff;
    /* padding: 5px 40px;
    border-radius: 5px; */
    padding: 8px 25px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
    margin-bottom: 8px;
}
.chongBtn:hover{
cursor: pointer;
}
</style>
