<template lang='html'>
  <div id="Index">
    <!-- 位置导航 begin  -->
    <b-breadcrumb>
      <b-breadcrumb-item :to="{name:'UserIndex'}">用户列表</b-breadcrumb-item>
    </b-breadcrumb>
    <!-- 表格 begin -->
    <div class="base-form">
      <div class="form-inline">
        <div class="base-form-title" style="width:100%;"><a class="base-margin-left-20">用户列表</a>
          <div class="button-table">
          </div>
        </div>
      </div>
      <div class="base-padding-20 base-bg-fff">
        <div class="base-align-right" style="margin-bottom: 20px;">
          <a class="btn btn-info base-margin-bottom" style="font-size:14px !important;padding: 6px 12px !important;" data-toggle="tooltip" title="" role="button" v-b-modal="'addAlert'">
            <i class="base-margin-right-5 fa fa-plus-square"></i>添加用户    
          </a>
        </div>
        <table class="table table-bordered table-striped ">
          <tbody>
            <tr>
              <th>姓名</th>
              <th>性别</th>
              <th>办公室电话</th>
              <th>个人电话</th>
              <th>家庭住址</th>
              <th>电子信箱</th>
              <th>部门</th>
              <th>职务</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in list" :key="index"><!--美化下input 可以看情况使用-->
              <td>{{item.user_name}}</td>
              <td>{{item.gender === 1?'男':'女'}}</td>
              <td>{{item.office_tell}}</td>
              <td>{{item.phone_no}}</td>
              <td>{{item.home_address}}</td>
              <td>{{item.emaill}}</td>
              <td>{{{data:deptList,searchItem:'dept_name',value:item.dept_id,label:'text'}|getName}}</td>
              <td>{{item.level}}</td>
              <td>
                <b-button variant="primary" style="color:white; margin-right:5px;" @click="openAlert('update',index)">修&nbsp;&nbsp;改</b-button>
                <b-button variant="danger" style="color:white;"  @click="openAlert('delete',item.id)">删&nbsp;&nbsp;除</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      <!--添加弹框-->
        <b-modal id="addAlert" title="添加用户" ref="addAlert" hide-footer> 
          <div class="d-block text-center">
            <div class="row">
              <div class="col-lg-6">
                  <b-form-input v-model="addForm.user_name" placeholder="姓名" class="marginBot"></b-form-input>
              </div>
              <div class="col-lg-6">
                  <b-form-input v-model="addForm.login_id" placeholder="登录账号" class="marginBot"></b-form-input>
              </div>
              <div class="col-lg-6">
                  <b-form-input v-model="addForm.password" placeholder="密码" class="marginBot"></b-form-input>
              </div>
              <div class="col-lg-6">
                  <b-form-select v-model="addForm.gender" :options="gender" class="marginBot" />
              </div>
              <div class="col-lg-6">
                  <b-form-input v-model="addForm.office_tell" placeholder="办公室电话" class="marginBot"></b-form-input>
              </div>
              <div class="col-lg-6">
                  <b-form-input v-model="addForm.phone_no" placeholder="个人电话" class="marginBot"></b-form-input>
              </div>
              <div class="col-lg-6">
                  <b-form-input v-model="addForm.emaill" placeholder="电子信箱" class="marginBot"></b-form-input>
              </div>
              <div class="col-lg-6">
                  <b-form-input v-model="addForm.birthday" placeholder="出生日期" type="text" class="form-control tyx-cursor marginBot" id="birthday" data-date-format="yyyy-mm-dd"></b-form-input>
              </div>
              <div class="col-lg-6">
                   <b-form-input v-model="addForm.id_number" placeholder="身份证号" class="marginBot"></b-form-input>
              </div>
              <div class="col-lg-6">
                  <b-form-input v-model="addForm.card_no" placeholder="卡号" class="marginBot"></b-form-input>
              </div>
              <div class="col-lg-6">
                    <b-form-select v-model="addForm.dept_id"  :options="deptList" class="marginBot" />
              </div>
              <div class="col-lg-6">
                 <b-form-input v-model="addForm.level" placeholder="职务" class="marginBot"></b-form-input>
              </div>
            </div>
            <b-form-input v-model="addForm.home_address" placeholder="家庭住址" class="marginBot"></b-form-input>
            <textarea v-model="addForm.remark" class="form-control" rows="3" style="height: 100px !important;" placeholder="备注"></textarea><br/>
          </div>
          <b-button variant="secondary" @click="form={gender: -1}" class="resetButton" style="font-size:14px !important; padding:4px 8px !important;">重&nbsp;&nbsp;置</b-button>
          <b-button variant="primary" @click="toAdd()" class="resetButton" style="font-size:14px !important; padding:4px 8px !important;" >保&nbsp;&nbsp;存</b-button>
        </b-modal>
      <!--修改弹框-->
        <b-modal id="updateAlert" title="修改信息" ref="updateAlert" hide-footer> 
          <div class="d-block">
            <div class="row">
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">姓名</p>
                  <b-form-input v-model="updateForm.user_name"></b-form-input>
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">性别</p>
                  <b-form-select v-model="updateForm.gender" :options="gender" />
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">办公室电话</p>
                  <b-form-input v-model="updateForm.office_tell"></b-form-input>
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">个人电话</p>
                  <b-form-input v-model="updateForm.phone_no"></b-form-input>
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">电子信箱</p>
                  <b-form-input v-model="updateForm.emaill"></b-form-input>
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">出生日期</p>
                  <input v-model="updateForm.birthday" type="text" class="form-control tyx-cursor" id="updateBirthday" data-date-format="yyyy-mm-dd"/>
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">身份证号</p>
                  <b-form-input v-model="updateForm.id_number"></b-form-input>
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">卡号</p>
                  <b-form-input v-model="updateForm.card_no"></b-form-input>
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">部门</p>
                  <b-form-select v-model="updateForm.dept_id"  :options="deptList" />
              </div>
              <div class="col-lg-6 marginBot4">
                  <p class="marginBot4">职务</p>
                  <b-form-input v-model="updateForm.level"></b-form-input>
              </div>
              <div class="col-lg-12 marginBot4">
                  <p class="marginBot4">家庭住址</p>
                  <b-form-input v-model="updateForm.home_address"></b-form-input>
              </div>
              <div class="col-lg-12 marginBot">
                  <p class="marginBot4">备注</p>
                  <textarea v-model="updateForm.remark" class="form-control"  style="height: 100px !important;"  rows="4"></textarea>
              </div>
            </div>
            <!-- 登录账号:<b-form-input v-model="form.login_id" ></b-form-input>
            密码:<b-form-input v-model="form.password"></b-form-input> -->
          </div>
          <b-button variant="secondary" @click="closeAlert('update')" class="resetButton" style="font-size:14px !important; padding:4px 8px !important;" >返&nbsp;&nbsp;回</b-button>
          <b-button variant="primary" @click="toUpdate()" class="resetButton"  style="font-size:14px !important; padding:4px 8px !important;">保&nbsp;&nbsp;存</b-button>
         </b-modal>
      <!--删除弹框-->
        <b-modal id="deleteAlert" title="确认删除" ref="deleteAlert" hide-footer> 
          <div class="d-block text-center">
            <b-alert variant="danger" show>删除部门可能会影响您的管理,确认删除吗?</b-alert>
          </div>
          <b-button variant="danger"  style="font-size:14px !important; color:#fff; padding:4px 8px !important;" @click="toDelete()">删&nbsp;&nbsp;除</b-button>
          <b-button variant="primary"  style="font-size:14px !important; color:#fff; padding:4px 8px !important;" class="resetButton"  @click="closeAlert('delete'),$refs.deleteAlert.hide(),deleteItem=''">返&nbsp;&nbsp;回</b-button>
          
          
        </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      list: [],
      addForm: {
        gender: -1,
        dept_id: 'default',
      },
      updateForm: {
        gender: -1,
        dept_id: 'default',
      },
      operateId: {},
      gender: [{ text: '性别', value: -1, disabled: true }, { text: '男', value: 1 }, { text: '女', value: 0 }],
      currentPage: 1,
      limit: 10,
      deptList: [],
    };
  },
  created() {
    this.search();
    this.getDeptList();
  },
  mounted() {
    $('#birthday').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      minView: 2,
      weekStart: 1,
      linked: true,
    });
    $('#updateBirthday').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      minView: 2,
      weekStart: 1,
      linked: true,
    });
  },
  computed: {},
  methods: {
    //查询
    async search() {
      let skip = (this.currentPage - 1) * this.limit;
      let result = await this.$axios.get(`user/user_list?skip=${skip}&limit=${this.limit}`);
      this.$set(this, 'list', result.data.userList);
    },
    //添加
    async toAdd() {
      this.addForm.birthday = document.getElementById('birthday').value;
      let result = await this.$axios.post('user/user_save', { data: this.addForm });
      this.currentPage = 1;
      this.$refs.addAlert.hide();
      this.addForm = {};
      this.search();
    },
    //修改
    async toUpdate() {
      this.updateForm.birthday = document.getElementById('updateBirthday').value;
      let result = await this.$axios.post('user/user_edit', { data: this.updateForm });
      this.closeAlert('update');
      this.updateForm = {};
      this.search();
    },
    //删除
    async toDelete() {
      let result = await this.$axios.post('user/user_delete', { data: { id: this.operateId } });
      this.closeAlert('delete');
      this.search();
    },
    //请求部门表
    async getDeptList() {
      let result = await this.$axios.get('dept/dept_list');
      this.deptList = result.data.deptList.map(item => {
        let newObject = { text: item.dept_name, value: item.id };
        return newObject;
      });
      let defalut = { text: '部门', value: 'default', disabled: true };
      this.deptList.unshift(defalut);
    },
    //打开与关闭修改和删除的弹框,现在关闭添加弹框自己点x
    openAlert(type, id) {
      if (type === 'update') {
        this.$refs.updateAlert.show();
        this.updateForm = this.list[id];
      } else if (type === 'delete') {
        this.$refs.deleteAlert.show();
        this.operateId = id;
      }
    },
    closeAlert(type) {
      if (type === 'update') {
        this.$refs.updateAlert.hide();
      } else if (type === 'delete') {
        this.$refs.deleteAlert.hide();
      }
      this.operateId = '';
      this.updateForm = {};
    },
  },
};
</script>

<style scoped>
.marginBot4 {
  margin-bottom: 4px;
}
.marginBot {
  margin-bottom: 15px;
}
.resetButton {
  color: #fff;
  margin-right: 20px;
}
.table th,
.table td {
  padding: 0.5rem;
}
.btn {
  margin-left: 0 !important;
  padding: 2px 5px !important;
  margin-bottom: 0 !important;
  margin-right: 10px !important;
  font-size: 12px !important;
  font-weight: normal !important;
  line-height: 1.42857143 !important;
  text-align: center !important;
  white-space: nowrap !important;
  vertical-align: middle !important;
  width: auto !important;
  border: 1px solid transparent !important;
  border-radius: 3px !important;
  height: auto !important;
}
.btn-primary {
  background-color: #5bc0de;
}
.breadcrumb {
  padding: 14px 18px;
  margin-bottom: 25px;
  list-style: none;
  background-color: #f5f5f5;
}
.breadcrumb > li {
  font-size: 16px;
  color: #999;
  display: inline-block;
}
.breadcrumb > li a {
  font-size: 16px;
  color: #999;
  display: inline-block;
}
.base-form-title {
  font-weight: bold;
  display: block;
  line-height: 50px;
  font-size: 18px;
  color: #46687f;
  letter-spacing: 1px;
  text-align: left;
  background-color: #5bc0de;
}
.base-margin-left-20 {
  margin-left: 20px;
}
.base-form-title a {
  color: #fff !important;
  text-decoration: none;
}
.base-padding-20 {
  padding: 20px;
}
.base-bg-fff {
  background-color: #fff;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.base-margin-right-40 {
  margin-right: 40px;
}
.form-group {
  margin-bottom: 15px;
}
.form-control {
  display: block;
  width: 100%;
  height: 44px;
  padding: 6px 15px;
  font-size: 16px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
input,
textarea,
select,
button {
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em;
  font: 400 13.3333px Arial;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.base-margin-2 {
  margin: 2px 0;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 3px 8px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 5px;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.base-margin-right-5 {
  margin-right: 5px;
}
.base-margin-bottom {
  margin-bottom: 20px;
}
.table-bordered {
  border: 1px solid #ddd;
}
.table {
  font-size: 14px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
table {
  background-color: transparent;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
.base-header {
  min-width: 1024px;
  height: 75px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.base-header-left {
  float: left;
  width: 240px;
  height: 75px;
  line-height: 75px;
  background-color: #1c2b36;
  border-bottom: 1px #161e25 solid;
  background-image: url(/img/logo.8640fb78.png);
  color: #a6a6a6;
  cursor: pointer;
  background-size: 100%;
}
ul,
li {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.modal.show .modal-dialog {
  -webkit-transform: none;
  transform: none;
  max-width: 700px !important;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 700px !important;
    margin: 1.75rem auto;
  }
}
</style>


<style scoped>
@import '../../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../../assets/style/layout/base-Layout-bootstrap.css';
@import '../../assets/style/base-style-bootstrap.css';
</style>
