<template>
  <div>

    <body style="overflow-y: scroll;">
      <div class="base-main-right">
        <b-breadcrumb>
          <b-breadcrumb-item>线路维护</b-breadcrumb-item>
          <b-breadcrumb-item>线路管理</b-breadcrumb-item>
          <b-breadcrumb-item>添加路线</b-breadcrumb-item>
        </b-breadcrumb>

        <div class="base-form">
          <b-card no-body>
            <b-tabs card v-model="tabIndex">
              <b-tab title="基本情况" :title-link-class="linkClass(0)">
                <div class="base-padding-20 base-bg-fff">
                  <div class="row">
                    <div class="col-lg-10">
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">姓名：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputEmail2">性别：</label>
                          <select class="form-control">
                            <option selected="selected">--请选择--</option>
                            <option>男</option>
                            <option>女</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">民族：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">婚姻状况：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">文化程度：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">政治面貌：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">身份证号：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">办公室电话：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">个人电话：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">单位：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">单位性质：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">职务：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">级别：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">职称：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">家庭住址：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">电子信箱：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">填报人：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="tyx-margin-right-40 form-group">
                          <label for="exampleInputName2">参加工作时间：</label>
                          <input type="text" class="form-control tyx-cursor" id="enddate" data-date-format="yyyy-mm-dd"
                                 readonly />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="tyx-margin-right-40 form-group">
                          <label for="exampleInputName2">任职时间：</label>
                          <div class="input-group input-daterange" data-provide="datepicker">
                            <!-- <input name="event-start-date" type="text" class="form-control" value="2012-04-05"> -->
                            <input type="text" class="form-control tyx-cursor" value="2012-04-05" id="theTimeBegin"
                                   data-date-format="yyyy-mm-dd" readonly />
                            <span class="input-group-addon">至</span>
                            <!-- <input name="event-end-date" type="text" class="form-control" value="2012-04-19"> -->
                            <input type="text" class="form-control tyx-cursor" value="2012-04-05" id="theTimeEnd"
                                   data-date-format="yyyy-mm-dd" readonly />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="tyx-margin-right-40 form-group">
                          <label for="exampleInputName2">入党时间：</label>
                          <input type="text" class="form-control tyx-cursor" id="partyTime" data-date-format="yyyy-mm-dd"
                                 readonly />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="tyx-margin-right-40 form-group">
                          <label for="exampleInputName2">出生日期：</label>
                          <input type="text" class="form-control tyx-cursor" id="begindateT" data-date-format="yyyy-mm-dd"
                                 readonly />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="tyx-margin-right-40 form-group">
                          <label for="exampleInputName2">创建时间：</label>
                          <input type="text" class="form-control tyx-cursor" id="creationTime" data-date-format="yyyy-mm-dd"
                                 readonly />
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
                        <div class="form-group">
                          <label for="exampleInputFile">File input</label>
                          <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png"
                                 @change="changeImage($event)" ref="avatarInput" class="uppic">
                          <p class="help-block">提示语.</p>
                        </div>
                        <button type="submit" class="btn btn-default">上传</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <div class="form-group">
                      <label for="exampleInputName2">备注：</label>
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
                            <label for="exampleInputEmail1">干部基本状况表：</label>
                          </div>
                          <button type="submit" class="btn btn-default">扫描文件</button>
                          <div style="margin-top:10px;">
                            <p class="help-block">请扫面文件并上传.</p>
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>

              </b-tab>

              <b-tab title="个人事项" :title-link-class="linkClass(1)">
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
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>

              </b-tab>
              <b-tab title="个人档案" :title-link-class="linkClass(2)">
                <div class="base-padding-20 base-bg-fff">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">个人档案：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputEmail2">个人档案1：</label>
                          <select class="form-control">
                            <option selected="selected">--请选择--</option>
                            <option>男</option>
                            <option>女</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">个人档案2：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">个人档案3：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">个人档案4：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">个人档案5：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">个人档案6：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">个人档案7：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="exampleInputName2">个人档案备注：</label>
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
                            <label for="exampleInputEmail1">个人档案状况表：</label>
                          </div>
                          <button type="submit" class="btn btn-default">扫描文件</button>
                          <div style="margin-top:10px;">
                            <p class="help-block">请扫面文件并上传.</p>
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>
              </b-tab>
              <b-tab title="例行谈话" :title-link-class="linkClass(3)">
                <div class="base-padding-20 base-bg-fff">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">例行谈话：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputEmail2">例行谈话1：</label>
                          <select class="form-control">
                            <option selected="selected">--请选择--</option>
                            <option>男</option>
                            <option>女</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">例行谈话2：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">例行谈话3：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">例行谈话4：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">例行谈话5：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">例行谈话6：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">例行谈话7：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="exampleInputName2">例行谈话备注：</label>
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
                            <label for="exampleInputEmail1">个例行谈话状况表：</label>
                          </div>
                          <button type="submit" class="btn btn-default">扫描文件</button>
                          <div style="margin-top:10px;">
                            <p class="help-block">请扫面文件并上传.</p>
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>
              </b-tab>
              <b-tab title="问题线索" :title-link-class="linkClass(4)">
                <div class="base-padding-20 base-bg-fff">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">问题线索：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputEmail2">问题线索1：</label>
                          <select class="form-control">
                            <option selected="selected">--请选择--</option>
                            <option>男</option>
                            <option>女</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">问题线索2：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">问题线索3：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">问题线索4：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">问题线索5：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">问题线索6：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">问题线索7：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="exampleInputName2">问题线索备注：</label>
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
                            <label for="exampleInputEmail1">问题线索状况表：</label>
                          </div>
                          <button type="submit" class="btn btn-default">扫描文件</button>
                          <div style="margin-top:10px;">
                            <p class="help-block">请扫面文件并上传.</p>
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>
              </b-tab>
              <b-tab title="述责述廉" :title-link-class="linkClass(5)">
                <div class="base-padding-20 base-bg-fff">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">述责述廉：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputEmail2">述责述廉1：</label>
                          <select class="form-control">
                            <option selected="selected">--请选择--</option>
                            <option>男</option>
                            <option>女</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">述责述廉2：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">述责述廉3：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">述责述廉4：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">述责述廉5：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">述责述廉6：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">述责述廉7：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="exampleInputName2">述责述廉备注：</label>
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
                            <label for="exampleInputEmail1">述责述廉状况表：</label>
                          </div>
                          <button type="submit" class="btn btn-default">扫描文件</button>
                          <div style="margin-top:10px;">
                            <p class="help-block">请扫面文件并上传.</p>
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>
              </b-tab>
              <b-tab title="处置问责" :title-link-class="linkClass(6)">
                <div class="base-padding-20 base-bg-fff">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">处置问责：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputEmail2">处置问责1：</label>
                          <select class="form-control">
                            <option selected="selected">--请选择--</option>
                            <option>男</option>
                            <option>女</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">处置问责2：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">处置问责3：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">处置问责4：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">处置问责5：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">处置问责6：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">处置问责7：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="exampleInputName2">处置问责备注：</label>
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
                            <label for="exampleInputEmail1">处置问责状况表：</label>
                          </div>
                          <button type="submit" class="btn btn-default">扫描文件</button>
                          <div style="margin-top:10px;">
                            <p class="help-block">请扫面文件并上传.</p>
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>
              </b-tab>
              <b-tab title="重大事项" :title-link-class="linkClass(7)">
                <div class="base-padding-20 base-bg-fff">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">重大事项：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputEmail2">重大事项1：</label>
                          <select class="form-control">
                            <option selected="selected">--请选择--</option>
                            <option>男</option>
                            <option>女</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">重大事项2：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">重大事项3：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">重大事项4：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">重大事项5：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">重大事项6：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">重大事项7：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="exampleInputName2">重大事项备注：</label>
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
                            <label for="exampleInputEmail1">重大事项状况表：</label>
                          </div>
                          <button type="submit" class="btn btn-default">扫描文件</button>
                          <div style="margin-top:10px;">
                            <p class="help-block">请扫面文件并上传.</p>
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>
              </b-tab>
              <b-tab title="立案处理" :title-link-class="linkClass(8)">
                <div class="base-padding-20 base-bg-fff">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">立案处理：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputEmail2">立案处理1：</label>
                          <select class="form-control">
                            <option selected="selected">--请选择--</option>
                            <option>男</option>
                            <option>女</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">立案处理2：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">立案处理3：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">立案处理4：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class=" form-group">
                          <label for="exampleInputName2">立案处理5：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">立案处理6：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputName2">立案处理7：</label>
                          <input type="text" class="form-control" id="exampleInputName2" placeholder="">
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="exampleInputName2">立案处理备注：</label>
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
                            <label for="exampleInputEmail1">立案处理状况表：</label>
                          </div>
                          <button type="submit" class="btn btn-default">扫描文件</button>
                          <div style="margin-top:10px;">
                            <p class="help-block">请扫面文件并上传.</p>
                            <img src="../img/8082.jpg" alt="..." class="img-rounded">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="base-padding-20 base-bg-fff" style="clear:both;">
                  <div class="base-margin-top-10 base-align-right">
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                    <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button"><i
                         class="base-margin-right-5 fa fa-hand-o-right "></i>保&nbsp;&nbsp;存</a>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </body>

  </div>
</template>



<script>
$(document).ready(function() {
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
});
export default {
  data() {
    return {
      avatar: require('../img/8082.jpg'),
      tabIndex: 0,
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bgPrimary', 'textLight'];
      } else {
        return ['bgLight', 'textLight'];
      }
    },

    drawLine: function() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    // drawLine: function结束

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



<style>
body {
  padding: 0;
  margin: 0;
  font-family: '微软雅黑';
  font-size: 14px;
  overflow: hidden;
  height: 100vh;
}
.textLight {
  color: #fff !important;
}
a.textLight:hover,
a.textLight:focus {
  color: #fff !important;
}
.bgPrimary {
  background-color: #007395 !important;
}
.bgLight {
  background-color: #5bc0de !important;
}
a.bgLight:hover {
  background-color: #007395 !important;
}
.breadcrumb {
  padding: 8px 15px !important;
  margin-bottom: 20px !important;
  list-style: none !important;
  background-color: #f5f5f5 !important;
}
.breadcrumb > li {
  font-size: 12px !important;
  color: #999 !important;
  display: inline-block !important;
}
.breadcrumb > li a {
  font-size: 12px !important;
  color: #999 !important;
  display: inline-block !important;
}

.base-form-title {
  font-weight: bold !important;
  display: block !important;
  line-height: 50px !important;
  font-size: 18px !important;
  color: #46687f !important;
  letter-spacing: 1px !important;
  text-align: left !important;
  background-color: #5bc0de !important;
}
.card {
  border: none !important;
}

.card-header-tabs {
  margin-right: 0px !important;
  margin-bottom: 0px !important;
  margin-left: 0px !important;
  border-bottom: 0px !important;
}
.nav-tabs .nav-item {
  width: 11.11% !important;
}
.nav-tabs .nav-link {
  border: 0px solid transparent !important;
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
}
.nav-link {
  display: block;
  padding: 0px !important;
  height: 45px !important;
  line-height: 45px !important;
  font-size: 14px !important;
  text-align: center;
}
.card-header {
  height: 45px !important;
  background-color: #5bc0de !important;
  padding: 0 !important;
  border-bottom: 0px solid rgba(0, 0, 0, 0.125) !important;
}
.card-body {
  padding: 0 !important;
}
label {
  max-width: 100% !important;
  margin-bottom: 5px !important;
  font-weight: bold !important;
  font-size: 14px;
}
.form-group {
  margin-bottom: 15px !important;
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
.form-control {
  padding: 6px 12px !important;
  font-size: 14px !important;
  line-height: 1.42857143 !important;
  border: 1px solid #ccc !important;
  border-radius: 4px !important;
}
.btn {
  margin-left: 0 !important;
  padding: 6px 12px !important;
  margin-bottom: 0 !important;
  font-size: 14px !important;
  font-weight: normal !important;
  line-height: 1.42857143 !important;
  text-align: center !important;
  white-space: nowrap !important;
  vertical-align: middle !important;
  width: auto !important;
  border: 1px solid #ccc !important;
  border-radius: 4px !important;
  height: auto !important;
}
.btn-default:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.row {
  display: block !important;
}
.base-main-right {
  height: auto !important;
}
.btn-info {
  color: #fff !important;
  background-color: #5bc0de !important;
  border-color: #6bd5f5 !important;
  margin-right: 5px;
}
.form-control:disabled,
.form-control[readonly] {
  background-color: #fff !important;
  opacity: 1;
}

.rz-picter img {
  width: 180px;
  height: 180px;
}
</style>

<style scoped>
@import '../icon/Font-Awesome-master/css/font-awesome.css';
@import '../layout/base-Layout-bootstrap.css';
@import '../style/base-style-bootstrap.css';
@import '../style/bootstrap-datetimepicker/bootstrap-datetimepicker.css';
</style>
