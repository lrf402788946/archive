<template lang='html'>
  <div id="personal">
    <div class="base-padding-20 base-bg-fff">
      <div class="row">
        <div class="col-lg-12">
          <div class="col-lg-3">
            <div class=" form-group">
              <label for="exampleInputName2">个人事项：</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="">
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleInputEmail2">个人事项1：</label>
              <select class="form-control">
                <option selected="selected">--请选择--</option>
                <option>男</option>
                <option>女</option>
              </select>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleInputName2">个人事项2：</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="">
            </div>
          </div>
          <div class="col-lg-3">
            <div class=" form-group">
              <label for="exampleInputName2">个人事项3：</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="">
            </div>
          </div>

          <div class="col-lg-3">
            <div class=" form-group">
              <label for="exampleInputName2">个人事项4：</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="">
            </div>
          </div>

          <div class="col-lg-3">
            <div class=" form-group">
              <label for="exampleInputName2">个人事项5：</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="">
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleInputName2">个人事项6：</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="">
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleInputName2">个人事项7：</label>
              <input type="text" class="form-control" id="exampleInputName2" placeholder="">
            </div>
          </div>

        </div>

      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <label for="exampleInputName2">个人事项备注：</label>
          <textarea class="form-control" rows="4"></textarea>
        </div>
      </div>
      <div class="col-lg-6">
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="col-lg-6">
            <div class="base-margin-right-40 form-group">
              <div class="form-group">
                <label for="exampleInputEmail1">个人事项状况表：</label>
              </div>
              <button type="submit" class="btn btn-default">扫描文件</button>
              <div style="margin-top:10px;">
                <p class="help-block">请扫面文件并上传.</p>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
