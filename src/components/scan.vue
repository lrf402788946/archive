<template lang="html">
  <div id="scan" style="margin-bottom:2%;">
    <el-row>
      <el-col :span="24" v-if="is_open" style="margin-bottom:2%;">
        <el-button  type="primary" style="border: 1px solid;"  @click="toOpen()">开启高拍仪</el-button>
      </el-col>
      <el-col :span="24" v-if="!is_open" style="margin-bottom:1%;">
        <el-button type="warning" @click="toClose()">关闭高拍仪</el-button>
      </el-col>
      <el-col :span="24" v-if="!is_open" style="margin-bottom:1%;">
        <el-button  type="success" @click="toScan()">扫描</el-button>
      </el-col>
      <el-col :span="24">
        <img @click="dialog = true" :src="file_path ? file_path : avatar" style="width:150px;height:150px;" class="img-rounded">
      </el-col>
    </el-row>
    <el-dialog title="查看图片" width="40%" :center="true" :visible.sync="dialog" append-to-body>
      <img :src="file_path ? file_path : avatar" :style="bigImg" class="img-rounded">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'scan',
  components: {},
  props: {
    type: { type: String, default: 'undefinded' },
  },
  data() {
    return {
      is_open: true,
      dialog: false,
      avatar: require('@/assets/img/8082.jpg'),
      file_path: '',
    };
  },
  computed: {
    bigImg() {
      let style = {};
      let width = document.body.clientWidth;
      let height = document.body.clientHeight;
      style['width'] = `${width * 1 * 0.36}px`;
      style['height'] = `${height * 1}px`;
      return style;
    },
  },
  created() {
    this.toLoad();
  },
  destroyed() {
    this.$Unload();
    document.getElementById('eloam').style.left = `100%`;
  },
  methods: {
    toOpen() {
      document.getElementById('eloam').style.left = 0;
      this.is_open = false;
      this.OpenVideo();
    },
    toClose() {
      document.getElementById('eloam').style.left = `100%`;
      this.is_open = true;
      this.CloseVideo();
    },
    toScan() {
      let name = this.$Scan(this.type);
      this.toClose();
      this.$set(this, `file_path`, name);
      this.$emit('getPic', name);
    },
    toLoad() {
      this.$Unload();
      this.$Load();
    },
  },
};
</script>

<style lang="css" scoped>

</style>
