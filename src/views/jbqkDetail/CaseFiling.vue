<template lang='html'>
    <div id="index">
        <div class="base-padding-20 base-bg-fff">
            
            <div>
                <div class="row" v-if="changeShow()">
                    <div class="col-lg-12">
                        <div class="col-lg-3">
                            <div class=" form-group">
                                <label for="exampleInputName2">立案处理：</label>
                                <input class="form-control" v-model='detailsList.title'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-lg-12">
                        <div class="col-lg-3">
                            <div class=" form-group">
                                <label for="exampleInputName2">立案处理：</label>
                                <select class="form-control" v-model='detail.index'>
                                    <option v-for="(item,index) in detailsList" :key="index" v-bind:value="index">
                                        {{index+1}}、{{item.title}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-lg-12">
                <div class="form-group">
                    <label for="exampleInputName2">立案处理备注：</label>
                    <textarea class="form-control" rows="4" v-model='detail.memo' :disabled="is_readonly"></textarea>
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
            <div class="base-margin-top-10 base-align-right" v-if="changeShow()">
                <a class="btn btn-info" @click="goToBack()" data-toggle="tooltip" title="" role="button" style="padding: 4px 9px !important;"><i
                    class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                <a id="preservation" class="btn btn-info" data-toggle="tooltip" title="" role="button" @click='toAdd()' style="padding: 4px 9px !important;"><i
                    class="base-margin-right-5 fa fa-hand-o-left "></i>保&nbsp;&nbsp;存</a>
            </div>
            <div class="base-margin-top-10 base-align-right" v-else>
                <a class="btn btn-info" @click="$router.go(-1)" data-toggle="tooltip" title="" role="button" style="padding: 4px 9px !important;"><i
                    class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                <a class="btn btn-info" @click="goToAdd()" data-toggle="tooltip" title="" role="button" style="padding: 4px 9px !important;"><i
                    class="base-margin-right-5 fa fa-hand-o-left "></i>添&nbsp;&nbsp;加</a>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {
      is_readonly: true,
      detailsList: [],
      detailsList1: [],
      detail: {},
      ID: -1,
      someValue: '',
    };
  },
  watch: {
    'detail.index': {
      handler(nVal, oVal) {
        if (nVal !== undefined) {
          this.detail.title = this.detailsList[nVal].title;
          this.detail.memo = this.detailsList[nVal].memo;
        }
      },
    },
  },
  methods: {
    goToBack() {
      this.changeShow();
      this.$router.push({ name: 'Details', query: { id: this.ID } });
      this.query();
    },
    changeShow() {
      if (this.$route.query.type == 'add') {
        this.is_readonly = false;
        this.$emit('changeToAdd', 8);
        return true;
      } else {
        return false;
      }
    },
    goToAdd() {
      this.detail = {};
      this.detailsList1 = this.detailsList;
      this.detailsList = {};
      this.ID = this.$route.query.id;
      this.$router.push({ name: 'Details', query: { type: 'add' } });
    },
    async toAdd() {
      this.detailsList['memo'] = this.detail.memo;
      this.detailsList['jbqk_id'] = this.ID;
      this.detailsList['type'] = '8';
      console.log(this.detailsList);
      let result = await this.$axios.post('jbqk/jbqk_detail_save', { data: this.detailsList });
      this.detailsList = {};
      this.$router.push('/');
    },
    async query() {
      console.log(this.$route.query.id);
      let result = await this.$axios.get(`jbqk/jbqk_detail?id=${this.$route.query.id}&type=8`);
      console.log(result.data);
      this.$set(this, 'detailsList', result.data.data);
    },
  },
  created() {
    if (this.$route.query.id) {
      this.query();
    }
    this.changeShow();
  },
};
</script>

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
