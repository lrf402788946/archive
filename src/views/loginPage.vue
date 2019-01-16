<template>
    <div>
        <body :style="'overflow-y: auto;background-image: url('+img+'); background-repeat:no-repeat; background-size:auto;'">
            <div class="page-container">
   			<div>
            <h1 style="letter-spacing:4px; padding-bottom:20px; font-weight:bold; color:#FFF;">干部廉政档案系统</h1> 
            </div>
       		<div class="form-container">
                <form style="margin:20px auto; width:300px;" action="index-tables.html">
                    <div style="text-align:left;" class="form-group">
                        <label for="exampleInputuser1">用户名：</label>
                        <input type="text" class="form-control" id="exampleInputuser1" placeholder="">
                    </div>
                    <div style="text-align:left;" class="form-group">
                        <label for="exampleInputPassword1">密&nbsp;&nbsp;码：</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
                    </div>
                    <div class="form-group">
                    	<div class="row">
                            <div class="col-lg-6">
                            	<button type="submit" style=" margin-top:10px;" class="btn btn-info btn-lg btn-block" >登&nbsp;&nbsp;录</button>
                            </div>
                            <div class="col-lg-6">
                            	<button type="submit" style=" margin-top:10px;" class="btn btn-info btn-lg btn-block" >重&nbsp;&nbsp;置</button>
                            </div>
                        </div>
                    </div>
                </form>
        	</div>
    </div>
        </body>
    </div>
</template>

<script>
export default {
    data(){
        return {
            img:require('@/img/blurred.jpg')
        }
    }
}
</script>



<style>

body {
padding: 0;
margin: 0;
font-family: "微软雅黑";
font-size: 14px;
overflow: hidden;
height: 100vh;
}
h1, .h1 {
    font-size: 36px !important;
}
.form-group {
    margin-bottom:15px !important;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px !important;
    font-weight: bold;
    font-size: 14px;
}
.btn{
    margin-left: 0 !important;
    height: 46px !important;
}
.btn-info {
    background-color: #5bc0de !important;
    border-color: #46b8da !important;
}

.btn-lg, .btn-group-lg > .btn {
    padding: 10px 16px !important;
    font-size: 18px !important;
    line-height: 1.3333333 !important;
    border-radius: 6px !important;
}
.form-control {
    height: 34px !important;
    padding: 6px 12px !important;
    font-size: 14px !important;
    line-height: 1.42857143 !important;
    color: #555 !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
}
.form-container{
    height:auto !important;
    padding-bottom: 30px;
}

</style>

<style scoped>
@import "../icon/Font-Awesome-master/css/font-awesome.css";
@import "../layout/base-Layout-bootstrap.css";
@import "../style/base-style-bootstrap.css";
</style>