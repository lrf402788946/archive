<template lang="html">
  <div id="scan">
    <button type="button" class="btn btn-default" v-if="is_open" @click="toOpen()">开启高拍仪</button>
    <button type="button" class="btn btn-default" v-else @click="toClose()">关闭高拍仪</button>
    <button type="button" class="btn btn-default" v-if="!is_open" @click="toScan()">扫描</button>
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
    };
  },
  computed: {},
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
