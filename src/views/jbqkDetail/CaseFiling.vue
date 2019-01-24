<template lang='html'>
    <div id="index">
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
                            <button type="submit" class="scanningBtn">扫描文件</button>
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
                <a class="btn btn-info" href="page-tables.html" data-toggle="tooltip" title="" role="button">
                    <i class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回
                </a>
            </div>
        </div>
    </div>
</template>

<style lang='css'>
.scanningBtn{
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
}
.scanningBtn:hover{
    background: #ccc;
}
</style>