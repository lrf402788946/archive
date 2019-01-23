<template lang='html'><!--需要获取到填报人id:login_id-->
  <div id="index">
      <div class="base-padding-20 base-bg-fff">
        <div class="row">
          <div class="col-lg-10">
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">姓名：</label>
                <input v-model="details.user_name" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputEmail2">性别：</label>
                <select class="form-control" v-model="details.gender" :disabled="is_readonly">
                  <option selected="selected">--请选择--</option>
                  <option>男</option>
                  <option>女</option>
                </select>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">民族：</label>
                <input v-model="details.mz" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">婚姻状况：</label>
                <input v-model="details.hyzk" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">文化程度：</label>
                <input v-model="details.whcd" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">政治面貌：</label>
                <input v-model="details.zzmm" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">办公室电话：</label>
                <input v-model="details.office_tell" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">个人电话：</label>
                <input v-model="details.phone_no" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <!--需要关联出部门表然后进行查询以显示部门名称-->
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">单位：</label>
                <input v-model="details.dept_name" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">单位性质：</label>
                <input v-model="details.dept_type" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">职务：</label>
                <input v-model="details.post" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">级别：</label>
                <input v-model="details.level" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">职称：</label>
                <input v-model="details.title" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">分管工作：</label>
                <input v-model="details.work_name" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">家庭住址：</label>
                <input v-model="details.home_address" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">电子信箱：</label>
                <input v-model="details.emaill" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">身份证号：</label>
                <input v-model="details.id_number" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">卡号：</label>
                <input v-model="details.card_no" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            
            <!-- <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">填报人：</label>
                <input v-model="details.login_id" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div> -->
            
            <div class="col-lg-3">
              <div class="tyx-margin-right-40 form-group">
                <label for="exampleInputName2">出生日期：</label>
                <input v-model="details.birthday" type="text" class="form-control tyx-cursor" id="enddate" data-date-format="yyyy-mm-dd"
                      :disabled="is_readonly" />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tyx-margin-right-40 form-group">
                <label for="exampleInputName2">入党时间：</label>
                <input v-model="details.rdsj" type="text" class="form-control tyx-cursor" id="enddate" data-date-format="yyyy-mm-dd"
                      :disabled="is_readonly" />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tyx-margin-right-40 form-group">
                <label for="exampleInputName2">任职时间：</label>
                <input v-model="details.rzsj" type="text" class="form-control tyx-cursor" id="enddate" data-date-format="yyyy-mm-dd"
                      :disabled="is_readonly" />
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tyx-margin-right-40 form-group">
                <label for="exampleInputName2">参加工作时间：</label>
                <input v-model="details.cgsj" type="text" class="form-control tyx-cursor" id="enddate" data-date-format="yyyy-mm-dd"
                      :disabled="is_readonly" />
              </div>
            </div>
          </div>

          <div class="col-lg-2">
            <div class="base-margin-right-40 form-group">
              <div class="form-group">
                <label for="exampleInputEmail1">照片：</label>
                <div class="rz-picter">
                  <img :src="avatar" class="img-rounded">
                </div>
              </div>
              <div class="form-group" v-if="!is_readonly">
                <label for="exampleInputFile">File input</label>
                <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png"
                      @change="changeImage($event)" ref="avatarInput" class="uppic">
                <p class="help-block">提示语.</p>
              </div>
              <button type="submit" class="btn btn-default" v-if="!is_readonly">上传</button>
            </div>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="form-group">
            <label for="exampleInputName2">备注：</label>
            <textarea v-model="details.remark" class="form-control" rows="4" :readonly="is_readonly"></textarea>
          </div>
        </div>
        <div class="col-lg-6">
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="col-lg-6">
              <div class="base-margin-right-40 form-group">
                <div class="form-group">
                  <label for="exampleInputEmail1">干部基本状况表：</label>
                </div>
                <button type="submit" class="btn btn-default" v-if="!is_readonly">扫描文件</button>
                <div style="margin-top:10px;">
                  <p class="help-block" v-if="!is_readonly">请扫面文件并上传.</p>
                  <img src="../../assets/img/8082.jpg" alt="..." class="img-rounded">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="base-padding-20 base-bg-fff" style="clear:both;">
        <div class="base-margin-top-10 base-align-right">
          <a class="btn btn-info" @click="$router.go(-1)" data-toggle="tooltip" title="" role="button"><i
              class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
          <a class="btn btn-info" data-toggle="tooltip" title="" role="button" v-if="!is_readonly"><i
              class="base-margin-right-5 fa fa-hand-o-left "></i>保&nbsp;&nbsp;存</a>
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
      avatar: require('@/assets/img/8082.jpg'),
      is_readonly: true,
      details: {},
    };
  },
  mounted() {
    $('#begindate').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      minView: 2,
      weekStart: 1,
      linked: true,
    });
    $('#theTimeBegin').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      minView: 2,
      weekStart: 1,
      linked: true,
    });
    $('#theTimeEnd').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      minView: 2,
      weekStart: 1,
      linked: true,
    });
    $('#creationTime').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      minView: 2,
      weekStart: 1,
      linked: true,
    });
    $('#partyTime').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      minView: 2,
      weekStart: 1,
      linked: true,
    });
    $('#begindateT').datetimepicker({
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      minView: 2,
      weekStart: 1,
      linked: true,
    });
    $('#enddate').datetimepicker({
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
    changeImage(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        that.avatar = this.result;
      };
    },
  },
};
</script>

<style lang='css' scoped>
.row {
  display: block !important;
}
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  float: left;
}
.form-group {
  margin-bottom: 15px !important;
}
.form-control {
  padding: 6px 12px !important;
  font-size: 14px !important;
  line-height: 1.42857143 !important;
  border: 1px solid #ccc !important;
  border-radius: 4px !important;
}
.form-control:disabled,
.form-control[readonly] {
  background-color: #fff !important;
  opacity: 1;
}
</style>
