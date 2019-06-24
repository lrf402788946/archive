 <template>
  <div>
    <!-- 位置导航 begin  -->
    <b-breadcrumb>
      <b-breadcrumb-item>系统管理</b-breadcrumb-item>
      <b-breadcrumb-item>功能管理</b-breadcrumb-item>
    </b-breadcrumb>
    <!-- 栅格 begin -->
    <div class="base-form">
      <div class="base-form-title"><a class="base-margin-left-20">查询条件</a></div>
      <div class="base-padding-20 base-bg-fff">
        <div class="row" style="margin-top:15px;">
          <div class="col-lg-3">
            <div class="base-margin-right-40 form-group">

              <input type="text" v-model="dagl_user.user_name" class="form-control" id="exampleInputName2" placeholder="请输入姓名">
            </div>
          </div>

          <div class="col-lg-3">
            <div class="base-margin-right-40 form-group">

              <input type="text" v-model="dagl_user.id_number" class="form-control" id="exampleInputName2" placeholder="请输入身份证号">
            </div>
          </div>
          <div class="col-lg-3">
            <div class="base-margin-right-40 form-group">

              <a class="btn btn-info" style="font-size:14px !important;padding: 6px 12px !important;"  @click="query()" data-toggle="tooltip" title="" role="button"><i class="base-margin-right-5 fa fa-search "></i>查&nbsp;&nbsp;&nbsp;询</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 栅格 end -->
    <!-- 表格 begin -->
    <div class="base-form">
      <div class="form-inline">
        <div class="base-form-title" style="width:100%;"><a class="base-margin-left-20">干部信息列表</a>
          <div class="button-table">
          </div>
        </div>
      </div>
      <div class="base-padding-20 base-bg-fff">
        <div class="base-align-right" style="margin-bottom:20px;">
          <a class="btn btn-info base-margin-bottom" style="font-size:14px !important;padding: 6px 12px !important;"  @click="$router.push({ name: 'Details', query: { type: 'add' } })"
             data-toggle="tooltip" title="" role="button"><i class="base-margin-right-5 fa fa-plus-square"></i>添加人员</a>
          <!--  <button type="submit" class="btn btn-info base-margin-bottom"><a href="#" data-toggle="tooltip" title="导出">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</a></button> -->
        </div>
        <table class="table table-bordered table-striped ">
          <tbody>
            <tr>
              <th>编号</th>
              <th>姓名</th>
              <th>职务</th>
              <th>身份证号</th>
              <th>个人电话</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in cadreInformation" :key="index">
              <td>{{index+1}}</td>
              <td>{{item.user_name}}</td>
              <td>{{item.post}}</td>
              <td>{{item.id_number}}</td>
              <td>{{item.phone_no}}</td>
              <td>
                <a class="btn btn-xs btn-info base-margin-2" @click="openDeleteAlert(item.id)" data-toggle="tooltip"
                   title="" role="button" style="background-color: #dc3545 !important; border:none !important; ">删&nbsp;&nbsp;除</a>
                <a class="btn btn-xs btn-info base-margin-2" @click="$router.push({ name: 'Details', query: { id: item.id } })"
                   data-toggle="tooltip" title=""  style=" border:none !important; " role="button">查&nbsp;&nbsp;看</a>
                   <a class="btn btn-xs btn-info base-margin-2" @click="$router.push({ name: 'Archive', query: { id: item.id } })"
                   data-toggle="tooltip" title=""  style=" border:none !important; " role="button">档案管理</a>
              </td>
            </tr>

          </tbody>
        </table>

        <!-- 分页 -->
        <div class="page-bar">
          <ul class="pagination pagination-sm">
            <li v-if="cur>1"><a v-on:click="cur--,query(cur)">上一页</a></li>
            <li v-if="cur==1"><a class="banclick">上一页</a></li>
            <li v-for="index in indexs" :key="index" v-bind:class="{ 'active': cur == index}">
              <a v-on:click="btnClick(index),query(cur)">{{ index }}</a>
            </li>
            <li v-if="cur!=pageNumber"><a v-on:click="cur++,query(cur)">下一页</a></li>
            <li v-if="cur == pageNumber"><a class="banclick">下一页</a></li>
            <li><a>共<i>{{pageNumber}}</i>页</a></li>
          </ul>
        </div>
        <!-- 分页 -->
      </div>
    </div>
    <b-modal id="deleteAlert" title="确认删除" ref="deleteAlert" hide-footer>
      <div class="d-block text-center">
        <b-alert variant="danger" show>删除之后可能会有严重影响,确认删除吗?</b-alert>
      </div>
      <b-button variant="danger" style="float:right;font-size:16px !important; color:white; margin-top:35px; padding:6px 80px !important;margin-bottom:30px !important; rgb(220, 53, 69) !important; margin-right:0 !important;" 
      @click="deleted(deleteItem)">删除</b-button>
      <b-button variant="primary" style="color:white;font-size:16px !important; margin-top:35px;  padding:6px 80px !important;margin-bottom:30px !important;margin-right:0 !important;" @click="$refs.deleteAlert.hide(),deleteItem=''">返回</b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 'gf',
      deleteItem: '',
      cadreInformation: [],
      dagl_user: {
        user_name: '',
        id_number: '',
      },
      skip: 0,
      limit: 5, //每页信息数量
      timeout: 500,
      closetimer: 0,
      totalRow: 0, //词条数量
      pageNumber: 1, //页码数量
      cur: 1, //当前页码
    };
  },
  created() {
    this.query();
  },
  methods: {
    openDeleteAlert(id) {
      this.$refs.deleteAlert.show();
      this.deleteItem = id;
    },
    async deleted(id) {
      let result = await this.$axios.get(`jbqk/jbqk_delete?id=${this.deleteItem}`);
      this.$refs.deleteAlert.hide();
      this.deleteItem = '';
      this.query();
    },
    async query(i) {
      if (i == null) {
        if (this.dagl_user.lengh == 0) {
          let result = await this.$axios.get(`jbqk/jbqk_list?skip=${this.skip}&limit=${this.limit}`);
          this.totalRow = result.data.totalRow;
          this.pageNumber = Math.ceil(this.totalRow / this.limit);
          this.$set(this, 'cadreInformation', result.data.jbqkList);
        } else {
          let result = await this.$axios.get(
            `jbqk/jbqk_list?skip=${this.skip}&limit=${this.limit}&user_name=${this.dagl_user.user_name}&id_number=${this.dagl_user.id_number}`
          );
          this.totalRow = result.data.totalRow;
          this.pageNumber = Math.ceil(this.totalRow / this.limit);
          this.$set(this, 'cadreInformation', result.data.jbqkList);
        }
      } else if (i != null) {
        let result = await this.$axios.get(
          `jbqk/jbqk_list?skip=${this.skip + this.limit * (i - 1)}&limit=${this.limit}&user_name=${this.dagl_user.user_name}
&id_number=${this.dagl_user.id_number}`
        );
        this.totalRow = result.data.totalRow;
        this.pageNumber = Math.ceil(this.totalRow / this.limit);
        this.$set(this, 'cadreInformation', result.data.jbqkList);
      }
    },
    showmenu(id) {
      var list = document.getElementById('list' + id);
      var menu = document.getElementById('menu' + id);
      if (list.style.display == 'none') {
        document.getElementById('list' + id).style.display = 'block';
        menu.className = 'first-menuname-open';
      } else {
        document.getElementById('list' + id).style.display = 'none';
        menu.className = 'first-menuname';
      }
    },
    btnClick: function(data) {
      if (data != this.cur) {
        this.cur = data;
      }
    },
  },
  computed: {
    indexs: function() {
      var left = 1;
      var right = this.pageNumber;
      var ar = [];
      if (this.pageNumber >= 5) {
        if (this.cur > 3 && this.cur < this.pageNumber - 2) {
          left = this.cur - 2;
          right = this.cur + 2;
        } else {
          if (this.cur <= 3) {
            left = 1;
            right = 5;
          } else {
            right = this.pageNumber;
            left = this.pageNumber - 4;
          }
        }
      }
      while (left <= right) {
        ar.push(left);
        left++;
      }
      return ar;
    },
  },
};
</script>

<style scoped>
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
  line-height: 40px;
  font-size: 16px;
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
.btn {
  width: auto !important;
  height: auto !important;
  margin-left: 0;
  display: inline-block;
  padding: 9px 12px;
  margin-bottom: 0;
  font-size: 12px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.base-margin-2 {
  margin: 2px 0;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 3px 8px;
  font-size: 12px;
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
  font-size: 14px;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 0 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination > li > a:hover {
  color: #666;
  background: #ddd;
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
  height: 60px;
  background-color: #1c2b36;
  border-bottom: 1px #161e25 solid;
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
.page-bar {
  margin-top: 40px;
  margin-right: 0;
  text-align: right;
}
ul,
li {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.page-bar li:first-child > a {
  margin-left: 0px;
}
.page-bar a {
  border: 1px solid #ddd;
  text-decoration: none;
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  cursor: pointer;
}
.page-bar a:hover {
  background-color: #eee;
  border-color: #eee;
  cursor: pointer;
}
.page-bar a.banclick {
  cursor: not-allowed;
}
.page-bar .active a {
  cursor: default;
  background-color: #5bc0de;
  border-color: #5bc0de;
  color: #fff !important;
}
.page-bar .active a:hover {
  background-color: #eee;
  border-color: #eee;
  cursor: pointer;
  color: #337ab7 !important;
}
.page-bar i {
  font-style: normal;
  color: #d44950;
  margin: 0px 4px;
  font-size: 12px;
}
</style>


<style scoped>
@import '../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../assets/style/layout/base-Layout-bootstrap.css';
@import '../assets/style/base-style-bootstrap.css';
</style>
