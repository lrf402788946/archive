<template lang='html'>
  <div id="UpdatePW">
    <b-breadcrumb>
      <b-breadcrumb-item :to="{name:'UpdatePW'}">修改密码</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="base-form">
      <div class="base-padding-20 base-bg-fff">
        <div class="d-block text-center">
            <b-form-input v-model="form.oldPass" placeholder="原密码"></b-form-input>
            <b-form-input v-model="form.newPass" placeholder="新密码"></b-form-input>
            <b-form-input v-model="comfirm" placeholder="确认密码"></b-form-input>
            <b-button variant="secondary"  @click="form={}" >重置</b-button>
            <b-button variant="primary" @click="toSave()" style="float:right;" >保存</b-button>
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
    };
  },
  computed: {},
  methods: {
    //修改
    toSave() {
      let result = this.$axios.post('/user/edit_pw', { data: this.form });
      console.log(result);
      if (result.data.msg === '成功') {
        console.log('添加成功');
      }
    },
  },
};
</script>

<style lang='css' scoped>

</style>
