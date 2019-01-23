<template lang='html'>
  <div id="index">
     <!-- 位置导航 begin  -->
      <b-breadcrumb>
        <b-breadcrumb-item :to="{name:'UserRoleIndex'}">权限分配</b-breadcrumb-item>
      </b-breadcrumb>
      <!-- 表格 begin -->
      <div class="base-form">
        <div class="form-inline">
          <div class="base-form-title" style="width:100%;"><a class="base-margin-left-20">列表</a>
            <div class="button-table">
            </div>
          </div>
        </div>
        <div class="base-padding-20 base-bg-fff">
          <div class="base-align-right">
            <a class="btn btn-info base-margin-bottom" data-toggle="tooltip" title="" role="button" v-b-modal="'toAdd'">
              <i class="base-margin-right-5 fa fa-plus-square"></i>权限分配    
            </a>
          </div>
          <table class="table table-bordered table-striped ">
            <tbody>
              <tr>
                <th>用户名</th>
                <th>权限</th>
              </tr>
              <tr v-for="(item,index) in list" :key="index"><!--美化下input 可以看情况使用-->
                <td><b-form-input v-model="item.login_id" ></b-form-input></td>
                <td><b-form-input v-model="item.id" ></b-form-input></td>
                <td>
                  <b-button variant="primary" style="color:white;" @click="toUpdate(index)">修改</b-button>
                  <!-- <a class="btn btn-xs btn-info base-margin-2" data-toggle="tooltip" @click="toUpdate(index)"
                    title="" role="button">保&nbsp;&nbsp;存</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  <a class="btn btn-xs btn-info base-margin-2" data-toggle="tooltip" @click="toDelete(index)"
                    title="" role="button">删&nbsp;&nbsp;除</a> -->
                </td>
              </tr>
            </tbody>
          </table>
          <b-modal id="toAdd" title="添加" ref="toAdd" hide-footer> 
            <div style="float:left;height:100%;width:50%;">
              <b-form-group label="用户">
                <b-form-radio-group id="radios1" v-model="form.login_id" :options="userList" name="plainInline" stacked>
                </b-form-radio-group>
              </b-form-group>
            </div>
            <div style="float:right;height:100%;width:50%;">
              <b-form-group label="权限">
                <b-form-radio-group id="radios2" v-model="form.role_id" :options="roleList" name="radiosStacked" stacked>
                </b-form-radio-group>
              </b-form-group>
              <b-button variant="secondary" @click="form={}" >重置</b-button><b-button variant="primary" @click="toAdd()" >保存</b-button>
            </div>
            <!-- <b-button variant="secondary" @click="form={}" >重置</b-button><b-button variant="primary" @click="toAdd()" >保存</b-button> -->
          </b-modal>

        </div>
      </div>
  </div> 
</template>


<script>
export default {
  name: 'index',
  components: {},
  data() {
    return {
      list: [],
      form: {},
      userList: [],
      roleList: [],
    };
  },
  computed: {},
  created() {
    this.search();
  },
  methods: {
    async search() {
      //查询方法
      let result = await this.$axios.get('/jszx/role/role_list');
      let result2 = await this.$axios.get('/jszx/user/user_list');
      this.userList = result2.data.userList.map(item => {
        let newObject = { text: item.user_name, value: item.id };
        return newObject;
      });
      this.roleList = result.data.roleList.map(item => {
        let newObject = { text: item.role_name, value: item.id };
        return newObject;
      });
      console.log(this.roleList);
      // this.$set(this, 'roleList', result.data.roleList);
      // this.$set(this, 'userList', result2.data.userList);
    },
    //添加
    async toAdd() {
      let result = await this.$axios.post('/jszx/userRole/userRole_save', { data: this.form });
      this.form = {};
      this.search();
      this.$refs.toAdd.hide();
    },
  },
};
</script>

<style lang='css' scoped>

</style>
