<template lang='html'><!--需要获取到填报人id:login_id-->
  <div id="index">
      <div class="base-padding-20 base-bg-fff">
        <div class="row">
          <div class="col-lg-10">
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">姓名：</label>
                <input v-model="cadreInformation.user_name" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputEmail2">性别：</label>
                <select class="form-control" v-model='cadreInformation.gender' :disabled="is_readonly"><!--返回0和1，0是女，1是男-->
                  <option value="" disabled>请选择：</option>
                  <option v-for="(a,index) in genders" :key="index" v-bind:value="a.text">
                    {{ a.value }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">民族：</label>
                <input v-model="cadreInformation.mz" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">婚姻状况：</label>
                <input v-model="cadreInformation.hyzk" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">文化程度：</label>
                <input v-model="cadreInformation.whcd" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">政治面貌：</label>
                <input v-model="cadreInformation.zzmm" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">办公室电话：</label>
                <input v-model="cadreInformation.office_tell" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">个人电话：</label>
                <input v-model="cadreInformation.phone_no" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <!--需要关联出部门表然后进行查询以显示部门名称-->
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">单位：</label>
                <input v-model="cadreInformation.dept_name" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">单位性质：</label>
                <input v-model="cadreInformation.dept_type" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">职务：</label>
                <input v-model="cadreInformation.post" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">级别：</label>
                <input v-model="cadreInformation.level" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">职称：</label>
                <input v-model="cadreInformation.title" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <label for="exampleInputName2">分管工作：</label>
                <input v-model="cadreInformation.work_name" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">家庭住址：</label>
                <input v-model="cadreInformation.home_address" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">电子信箱：</label>
                <input v-model="cadreInformation.emaill" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>
            <div class="col-lg-3">
              <div class=" form-group">
                <label for="exampleInputName2">身份证号：</label>
                <input v-model="cadreInformation.id_number" type="text" class="form-control" id="exampleInputName2" placeholder="" :readonly="is_readonly">
              </div>
            </div>          
            <div class="col-lg-3">
              <div class="tyx-margin-right-40 form-group">
                <label for="exampleInputName2">出生日期：</label>
                <!-- <input v-model="cadreInformation.birthday" type="text" class="form-control tyx-cursor" id="birthdaydate" data-date-format="yyyy-mm-dd"
                      :disabled="is_readonly" /> -->
                <el-date-picker v-model="cadreInformation.birthday" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" :disabled="is_readonly"></el-date-picker>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tyx-margin-right-40 form-group">
                <label for="exampleInputName2">入党时间：</label>
                <!-- <input v-model="cadreInformation.rdsj" type="text" class="form-control tyx-cursor" id="rdsjdate" data-date-format="yyyy-mm-dd"
                      :disabled="is_readonly" /> -->
                <el-date-picker v-model="cadreInformation.rdsj" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" :disabled="is_readonly"></el-date-picker>&nbsp;
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tyx-margin-right-40 form-group">
                <label for="exampleInputName2">任职时间：</label>
                <!-- <input v-model="cadreInformation.rzsj" type="text" class="form-control tyx-cursor" :disabled="is_readonly" /> -->
                <el-date-picker v-model="cadreInformation.rzsj" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" :disabled="is_readonly"></el-date-picker>&nbsp;
              </div>
            </div>
            <div class="col-lg-3">
              <div class="tyx-margin-right-40 form-group">
                <label for="exampleInputName2">参加工作时间：</label>
                <!-- <input v-model="cadreInformation.cgsj" type="text" class="form-control tyx-cursor" id="cgsjdate" data-date-format="yyyy-mm-dd"
                      :disabled="is_readonly" /> -->
                <el-date-picker v-model="cadreInformation.cgsj" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" :disabled="is_readonly"></el-date-picker>&nbsp;
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
              <button type="submit" class="btn btn-default" @click="uploadPhotos($event)" v-if="!is_readonly" >上传</button>
            </div>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="form-group">
            <label for="exampleInputName2">备注：</label>
            <textarea v-model="cadreInformation.remark" class="form-control" rows="4" :disabled="is_readonly"></textarea>
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
        <div class="base-margin-top-10 base-align-right" v-if="startAdd()">
          <a class="btn btn-info" @click="$router.go(-1)" data-toggle="tooltip" title="" role="button"><i
              class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
          <a id="preservation" class="btn btn-info" data-toggle="tooltip" title="" role="button" @click='toAdd()'><i
              class="base-margin-right-5 fa fa-hand-o-left "></i>保&nbsp;&nbsp;存</a>
        </div>
        <div class="base-margin-top-10 base-align-right" v-if="startUpdate()">
          <a class="btn btn-info" @click="returnQuery()" data-toggle="tooltip" title="" role="button"><i
              class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
          <a class="btn btn-info" @click="update()" data-toggle="tooltip" title="" role="button"><i
              class="base-margin-right-5 fa fa-hand-o-left "></i>保&nbsp;&nbsp;存</a>
        </div>
        <div class="base-margin-top-10 base-align-right" v-if="startBrowse()">
          <a class="btn btn-info" @click="$router.push('/')" data-toggle="tooltip" title="" role="button"><i
              class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
          <a class="btn btn-info" @click="toupdate()" data-toggle="tooltip" title="" role="button"><i
              class="base-margin-right-5 fa fa-hand-o-left "></i>修&nbsp;&nbsp;改</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: Number, default: 0 },
  },
  data() {
    return {
      avatar: require('@/assets/img/8082.jpg'),
      is_readonly: true,
      cadreInformation: {
        gender: '',
      },
      id: -1,
      genders: [{ text: '1', value: '男' }, { text: '0', value: '女' }],
    };
  },
  created() {
    if (this.$route.query.id) {
      this.query();
    }
  },
  methods: {
    startAdd() {
      if (this.$route.query.type == 'add') {
        this.is_readonly = false;
        this.$emit('changeToAdd', 0);
        return true;
      } else {
        return false;
      }
    },
    startUpdate() {
      if (this.$route.query.type == 'update') {
        this.is_readonly = false;
        return true;
      } else {
        return false;
      }
    },
    startBrowse() {
      if (this.$route.query.id) {
        this.is_readonly = true;
        return true;
      } else {
        return false;
      }
    },
    toupdate() {
      this.id = this.$route.query.id;
      this.$router.push({ name: 'Details', query: { type: 'update' } });
    },
    changeImage(e) {
      var file = e.target.files[0];
      if (file.size > 2 * 1000000) {
        alert('上传相片过大');
        return;
      }
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        that.avatar = this.result;
      };
    },
    async uploadPhotos($event) {
      // let result = await this.$axios.post('jbqk/？？？？？', { data: this.cadreInformation });
    },
    async toAdd() {
      let result = await this.$axios.post('jbqk/jbqk_save', { data: this.cadreInformation });
      this.cadreInformation = {};
      this.$router.push('/');
    },
    async returnQuery() {
      this.$router.push({ name: 'Details', query: { id: this.id } });
      let result = await this.$axios.get(`jbqk/jbqk_info?id=${this.id}`);
      this.$set(this, 'cadreInformation', result.data.data);
      this.id = -1;
    },
    //查看
    async query() {
      let result = await this.$axios.get(`jbqk/jbqk_info?id=${this.$route.query.id}`);
      this.$set(this, 'cadreInformation', result.data.data);
    },
    //修改
    async update(index) {
      console.log(this.cadreInformation);
      let result = await this.$axios.post('jbqk/jbqk_edit', { data: this.cadreInformation });
      this.$router.push('/');
    },
  },
};
</script>

<style lang='css' scoped>
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 180px;
}
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
