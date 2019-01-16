 <template>
    <div>
      <body>
        <div class="base-wrapper">
          <div class="base-header">
            <div class="base-header-left" id="menuHead"></div>
            <div class="base-nav" id="base-nav">
              <ul class="top-nav-ul">
                <li><a href="#">首 &nbsp;&nbsp; 页</a></li>
              </ul>
              <div id="base-user">
                <a href="#" class="user-name" @mouseover="mopen('m1')" @mouseout="mclose()">Admin<span class="button-down fa fa-caret-down"></span></a>
                <div id="m1" style="z-index:999;" @mouseover="mopen('m1')" @mouseout="mclose()">
                  <a href="#"><i class="fa fa-lock base-margin-right-5"></i>修改密码</a>
                  <a href="#"><i class="fa fa-sign-out base-margin-right-5"></i>安全退出</a>
                </div>
              </div>
            </div>
          </div>
          <div class="base-main" id="base-main">
            <div class="base-main-left" id="menuBox">
              <div class="base-sidebar-menu">
                <span class="title">操作面板</span>
                <ul class="mainmenu">
                  <li>
                    <span><i class="fa-stack fa fa-user"></i>档案管理</span>
                  </li>
                  <ul class="submenu">
                    <div class="expand-triangle"></div>
                    <li><span>干部信息</span></li>

                  </ul>
                  <li>
                    <span><i class="fa-stack fa fa-area-chart"></i>预警与统计分析</span>
                  </li>
                  <ul class="submenu">
                    <div class="expand-triangle"></div>
                    <li><span>监测预警</span></li>
                    <li><span>统计分析</span></li>

                  </ul>
                  <li>
                    <span><i class="fa-stack fa fa-cogs"></i>系统管理</span>
                  </li>
                  <ul class="submenu">
                    <div class="expand-triangle"></div>
                    <li><span>功能管理</span></li>
                    <li><span>数据管理</span></li>

                  </ul>

                </ul>
              </div>
              <div class="base-footer"> 干部廉政档案系统 <br /> Co pyright © 2019-2020 <br /> 当前版本：1.0 </div>
            </div>
            <div id="base-main-right" class="base-main-right" style="overflow-y: scroll;">

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

                        <input type="text" class="form-control" id="exampleInputName2" placeholder="请输入姓名">
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="base-margin-right-40 form-group">

                        <input type="text" class="form-control" id="exampleInputName2" placeholder="请输入身份证号">
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="base-margin-right-40 form-group">

                        <a class="btn btn-info" href="#" data-toggle="tooltip" title="" role="button"><i class="base-margin-right-5 fa fa-search "></i>查&nbsp;&nbsp;&nbsp;询</a>
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
                  <div class="base-align-right">
                    <a class="btn btn-info base-margin-bottom" href="page-tables-add.html" data-toggle="tooltip" title=""
                      role="button"><i class="base-margin-right-5 fa fa-plus-square"></i>添加人员</a>
                    <!--  <button type="submit" class="btn btn-info base-margin-bottom"><a href="#" data-toggle="tooltip" title="导出">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</a></button> -->
                  </div>
                  <table class="table table-bordered table-striped ">
                    <tbody>
                      <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>职务</th>
                        <th>身份证号</th>
                        <th>入档时间</th>
                        <th>操作</th>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>令狐冲</td>
                        <td>科员</td>
                        <td>22010219700501567</td>
                        <td>2019-01-12</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>

                      <tr>
                        <td>02</td>
                        <td>李嘉诚</td>
                        <td>科员</td>
                        <td>22010219710501421</td>
                        <td>2019-02-11</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>
                      <tr>
                        <td>03</td>
                        <td>郭靖</td>
                        <td>科员</td>
                        <td>22010219690801332</td>
                        <td>2019-01-29</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>
                      <tr>
                        <td>04</td>
                        <td>陈家洛</td>
                        <td>科员</td>
                        <td>22010219581121103X</td>
                        <td>2019-03-12</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>
                      <tr>
                        <td>05</td>
                        <td>丘处机</td>
                        <td>科员</td>
                        <td>22010219730717389</td>
                        <td>2019-07-05</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>
                      <tr>
                        <td>06</td>
                        <td>杨过</td>
                        <td>科员</td>
                        <td>22010219720901588</td>
                        <td>2019-04-12</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>
                      <tr>
                        <td>07</td>
                        <td>乔峰</td>
                        <td>科员</td>
                        <td>22010219761000053</td>
                        <td>2019-12-01</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>
                      <tr>
                        <td>08</td>
                        <td>段誉</td>
                        <td>科员</td>
                        <td>22010219700501567</td>
                        <td>2019-09-02</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>
                      <tr>
                        <td>09</td>
                        <td>魏璎珞</td>
                        <td>科员</td>
                        <td>22010219700501567</td>
                        <td>2019-06-22</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>王刚</td>
                        <td>科员</td>
                        <td>22010219700501567</td>
                        <td>2019-10-06</td>
                        <td>
                          <a class="btn btn-xs btn-info base-margin-2" href="page-tables-details.html" data-toggle="tooltip"
                            title="" role="button">查&nbsp;&nbsp;看</a>
                        </td>
                      </tr>

                    </tbody>
                  </table>

                  <!-- 分页 begin -->
                  <nav class="base-align-right">
                    <ul class="pagination pagination-sm">
                      <li>
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <!-- 分页 end -->
                </div>
              </div>

            </div>
          </div>
        </div>
      </body>
    </div>
</template>
<script>
$(function() {
  $('#base-main').height($(window).height() - 75);
  $(window).resize(function() {
    $('#base-main').height($(window).height() - 75);
  });
  $('#base-nav').width($(window).width() - 300);
  $(window).resize(function() {
    $('#base-nav').width($(window).width() - 300);
  });
  $('#base-main-right').width($(window).width() - 300);
  $(window).resize(function() {
    $('#base-main-right').width($(window).width() - 300);
  });
});
$(document).ready(function() {
  var $submenu = $('.submenu');
  var $mainmenu = $('.mainmenu');
  $submenu.hide();
  $submenu
    .first()
    .delay(400)
    .slideDown(700);
  $submenu.on('click', 'li', function() {
    $submenu
      .siblings()
      .find('li')
      .removeClass('chosen');
    $(this).addClass('chosen');
  });
  $mainmenu.on('click', 'li', function() {
    $(this)
      .next('.submenu')
      .slideToggle()
      .siblings('.submenu')
      .slideUp();
  });
  $mainmenu.children('li:last-child').on('click', function() {
    $mainmenu
      .fadeOut()
      .delay(500)
      .fadeIn();
  });
});

export default {
  data() {
    return {
      timeout: 500,
      closetimer: 0,
      ddmenuitem: 0,
    };
  },
  created() {},
  methods: {
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
    mopen(id) {
      // this.mcancelclosetime();
      if (this.ddmenuitem) this.ddmenuitem.style.visibility = 'hidden';
      this.ddmenuitem = document.getElementById(id);
      this.ddmenuitem.style.visibility = 'visible';
    },
    mclose() {
      if (this.ddmenuitem) this.ddmenuitem.style.visibility = 'hidden';
    },
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: '微软雅黑';
  font-size: 16px;
  overflow: hidden;
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
.btn {
  width: auto !important;
  height: auto !important;
  margin-left: 0;
  display: inline-block;
  padding: 9px 12px;
  margin-bottom: 0;
  font-size: 16px;
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
  font-size: 18px;
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
  font-size: 16px;
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
  font-size: 16px;
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
  width: 300px;
  height: 75px;
  line-height: 75px;
  background-color: #1c2b36;
  border-bottom: 1px #161e25 solid;
  background-image: url(/img/logo.8640fb78.png);
  color: #a6a6a6;
  cursor: pointer;
  background-size: 100%;
}
.base-main-left {
  float: left;
  height: 100%;
  width: 300px;
  background-color: #1c2b36;
}
.base-footer {
  font-size: 14px;
  padding: 30px 0;
  color: #46687f;
  background-color: #1c2b36;
  width: 300px;
  height: 100px;
  line-height: 16px;
  text-align: center;
  position: fixed;
  bottom: 0;
  letter-spacing: 1px;
  z-index: 999;
}
</style>


<style scoped>
@import '../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../assets/style/layout/base-Layout-bootstrap.css';
@import '../assets/style/base-style-bootstrap.css';
</style>
