<template lang='html'>
    <div id="index">
        <div class="base-padding-20 base-bg-fff">
            
            <div>
                <div class="row" v-if="changeShow()">
                    <div class="col-lg-12">
                        <div class="col-lg-3">
                            <div class=" form-group">
                                <label for="exampleInputName2">处置问责：</label>
                                <input class="form-control" v-model='detailsList.title'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-lg-12">
                        <div class="col-lg-3">
                            <div class=" form-group">
                                <label for="exampleInputName2">处置问责：</label>
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
                    <label for="exampleInputName2">处置问责备注：</label>
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
                                <label for="exampleInputEmail1">处置问责状况表：</label>
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
            <div class="base-margin-top-10 base-align-right" v-if="changeShow()">
                <a class="btn btn-info" @click="goToBack()" data-toggle="tooltip" title="" role="button"><i
                    class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                <a id="preservation" class="btn btn-info" data-toggle="tooltip" title="" role="button" @click='toAdd()'><i
                    class="base-margin-right-5 fa fa-hand-o-left "></i>保&nbsp;&nbsp;存</a>
            </div>
            <div class="base-margin-top-10 base-align-right" v-else>
                <a class="btn btn-info" @click="$router.go(-1)" data-toggle="tooltip" title="" role="button"><i
                    class="base-margin-right-5 fa fa-hand-o-left "></i>返&nbsp;&nbsp;回</a>
                <a class="btn btn-info" @click="goToAdd()" data-toggle="tooltip" title="" role="button"><i
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
        this.$emit('changeToAdd', 7);
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
      this.detailsList['type'] = '7';
      console.log(this.detailsList);
      let result = await this.$axios.post('jszx/jbqk/jbqk_detail_save', { data: this.detailsList });
      this.detailsList = {};
      this.$router.push('/');
    },
    async query() {
      console.log(this.$route.query.id);
      let result = await this.$axios.get(`/jszx/jbqk/jbqk_detail?id=${this.$route.query.id}&type=7`);
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
