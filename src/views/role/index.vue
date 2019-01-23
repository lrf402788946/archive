<template lang='html'>
  <div id="index">
     <!-- 位置导航 begin  -->
      <b-breadcrumb>
        <b-breadcrumb-item :to="{name:'RoleIndex'}">角色管理</b-breadcrumb-item>
      </b-breadcrumb>
      <!-- 表格 begin -->
      <div class="base-form">
        <div class="form-inline">
          <div class="base-form-title" style="width:100%;"><a class="base-margin-left-20">角色列表</a>
            <div class="button-table">
            </div>
          </div>
        </div>
        <div class="base-padding-20 base-bg-fff">
          <div class="base-align-right">
            <a class="btn btn-info base-margin-bottom" data-toggle="tooltip" title="" role="button" v-b-modal="'toAdd'">
              <i class="base-margin-right-5 fa fa-plus-square"></i>添加角色    
            </a>
          </div>
          <table class="table table-bordered table-striped ">
            <tbody>
              <tr>
                <th>父类</th>
                <th>角色code</th>
                <th>角色名称</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item,index) in list" :key="index"><!--美化下input 可以看情况使用-->
                <td><b-form-input v-model="item.p_id" ></b-form-input></td>
                <td><b-form-input v-model="item.role_code" ></b-form-input></td>
                <td><b-form-input v-model="item.role_name" ></b-form-input></td>
                <td>
                  <!-- <b-button variant="primary" style="color:white;" @click="Edit(index)">修改</b-button> -->
                  <b-button variant="primary" style="color:white;" @click="openUpdateAlert(index)">修改</b-button>
                  <b-button variant="danger" @click="openDeleteAlert(item.id)">删除</b-button>
                  <!-- <a class="btn btn-xs btn-info base-margin-2" data-toggle="tooltip" @click="toUpdate(index)"
                    title="" role="button">保&nbsp;&nbsp;存</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  <a class="btn btn-xs btn-info base-margin-2" data-toggle="tooltip" @click="toDelete(index)"
                    title="" role="button">删&nbsp;&nbsp;除</a> -->
                </td>
              </tr>
            </tbody>
          </table>
          <b-modal id="toAdd" title="添加角色" ref="toAdd" hide-footer> 
            父类:<b-form-input v-model="form.p_id"></b-form-input>
            角色code:<b-form-input v-model="form.role_code"></b-form-input>
            角色名称:<b-form-input v-model="form.role_name"></b-form-input>
            <b-button variant="secondary" @click="form={}" >重置</b-button><b-button variant="primary" @click="toAdd()" >保存</b-button>
          </b-modal>

          <b-modal id="Edit" title="修改角色" ref="Edit" hide-footer> 
            父类:<b-form-input v-model="form.p_id"></b-form-input>
            角色code:<b-form-input v-model="form.role_code"></b-form-input>
            角色名称:<b-form-input v-model="form.role_name"></b-form-input>
            <b-button variant="secondary" @click="form={}" >重置</b-button><b-button variant="primary" @click="toUpdate()" >修改</b-button>
          </b-modal>

          <b-modal id="deleteAlert" title="确认删除" ref="deleteAlert" hide-footer> 
            <div class="d-block text-center">
              <b-alert variant="danger" show>确定删除该角色?</b-alert>
            </div>
           <b-button variant="outline-danger"  style="float:right;" @click="toDelete()">删除</b-button>
           <b-button variant="primary" style="color:white;" @click="$refs.deleteAlert.hide(),deleteItem=''">返回</b-button>
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
      deleteItem: '',
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
      this.$set(this, 'list', result.data.roleList);
    },
    //添加
    async toAdd() {
      let result = await this.$axios.post('/jszx/role/role_save', { data: this.form });
      this.form = {};
      this.search();
      this.$refs.toAdd.hide();
    },
    //打开删除提示框
    openDeleteAlert(id) {
      this.$refs.deleteAlert.show();
      this.deleteItem = id;
    },
    //删除
    async toDelete() {
      let result = await this.$axios.post('/jszx/role/role_delete', { data: { id: this.deleteItem } });
      this.search();
      this.deleteItem = '';
      this.$refs.deleteAlert.hide();
    },
    //打开修改提示框
    openUpdateAlert(index) {
      console.log('1');
      this.$refs.Edit.show();
      this.form = this.list[index];
    },
    //修改
    async toUpdate(index) {
      let data = this.list[index];
      let result = await this.$axios.post('/jszx/role/role_edit', { data: data });
    },
  },
};
</script>

<style lang='css' scoped>

</style>
