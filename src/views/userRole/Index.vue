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
          </div>
          <table class="table table-bordered table-striped ">
            <tbody>
              <tr>
                <th>用户名</th>
                <th>权限</th>
              </tr>
              <tr v-for="(item,index) in userList" :key="index"><!--美化下input 可以看情况使用-->
                <td>{{item.user_name}}</td>
                <td>
                  <b-button variant="primary" style="color:white;" @click="openUpdateAlert(item.id)">修&nbsp;&nbsp;改</b-button>
                  <!-- <a class="btn btn-xs btn-info base-margin-2" data-toggle="tooltip" @click="toUpdate(index)"
                    title="" role="button">保&nbsp;&nbsp;存</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  <a class="btn btn-xs btn-info base-margin-2" data-toggle="tooltip" @click="toDelete(index)"
                    title="" role="button">删&nbsp;&nbsp;除</a> -->
                </td>
              </tr>
            </tbody>
          </table>
          <b-modal id="updateAlert" title="修改权限" ref="updateAlert" hide-footer>
            <label>请选择权限</label> 
            <el-checkbox-group v-model="form.id">
              <el-checkbox v-for="(item,index) in roleList" :key="index" :label="item.value">{{item.text}}</el-checkbox>
            </el-checkbox-group>
              <!-- <b-form-group label="请选择权限">
                <b-form-checkbox-group id="checkboxes1" name="role" v-model="form.id" :options="roleList">
                </b-form-checkbox-group>
              </b-form-group> -->
              <b-button variant="secondary"  style="font-size:14px !important; color:#fff; padding:4px 8px !important;" @click="$refs.updateAlert.hide();" >返&nbsp;&nbsp;回</b-button>
              <b-button variant="primary"  style="font-size:14px !important; color:#fff; padding:4px 8px !important;" @click="toSave()" >保&nbsp;&nbsp;存</b-button>
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
      form: {
        id: [1001, 2],
      },
      userList: [],
      roleList: [],
      operateId: '',
    };
  },
  computed: {},
  created() {
    this.search();
  },
  methods: {
    async search() {
      //查询方法
      let result = await this.$axios.get('role/role_list');
      let result2 = await this.$axios.get('user/user_list');
      this.userList = result2.data.userList;
      let newList = result.data.roleList.map(item => {
        let newObject = { text: item.role_name, value: item.id };
        return newObject;
      });
      this.$set(this, 'roleList', newList);
      this.$set(this, 'userList', result2.data.userList);
    },
    //打开修改框
    async openUpdateAlert(id) {
      this.$refs.updateAlert.show();
      this.operateId = id;
      let result = await this.$axios.get(`userRole/userRole_detail?id=${id}`);
      console.log(result);
    },
    //修改
    async toSave() {
      console.log(this.form);
      let result = await this.$axios.post('userRole/userRole_save', { data: this.form });
      this.form = {};
      this.search();
      this.$refs.updateAlert.hide();
    },
  },
};
</script>

<style lang='css' scoped>

</style>
