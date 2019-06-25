<template lang="html">
  <div id="Archive">
    <b-breadcrumb>
      <b-breadcrumb-item :to="{name:'Index'}">干部信息</b-breadcrumb-item>
      <b-breadcrumb-item>档案详情</b-breadcrumb-item>
    </b-breadcrumb>

    <div class="base-form">
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <b-tab title="个人事项" :title-link-class="linkClass(0)">
            <archiveContext :type="1"></archiveContext>
          </b-tab>
           <b-tab title="信息档案" :title-link-class="linkClass(1)">
            <archiveContext :type="2"></archiveContext>
          </b-tab>
          <b-tab title="例行谈话" :title-link-class="linkClass(2)">
            <archiveContext :type="3"></archiveContext>
          </b-tab>
          <b-tab title="述责述廉" :title-link-class="linkClass(3)">
            <archiveContext :type="4"></archiveContext>
          </b-tab>
          <b-tab title="重大事项" :title-link-class="linkClass(4)">
            <archiveContext :type="5"></archiveContext>
          </b-tab>
          <b-tab title="问题线索" :title-link-class="linkClass(5)">
            <archiveContext :type="6"></archiveContext>
          </b-tab>
          <b-tab title="处置问责" :title-link-class="linkClass(6)">
            <archiveContext :type="7"></archiveContext>
          </b-tab>
          <b-tab title="立案处理" :title-link-class="linkClass(7)">
            <archiveContext :type="8"></archiveContext>
          </b-tab> 
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import archiveContext from '@/components/archiveContext.vue';
// import Personal from '@/views/jbqkDetail/Personal.vue';
export default {
  name: 'Archive',
  components: {
    // Personal,
    archiveContext,
  },
  data() {
    return {
      avatar: require('@/assets/img/8082.jpg'),
      tabIndex: 0,
    };
  },
  computed: {},
  created() {},
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bgPrimary', 'textLight'];
      } else {
        return ['bgLight', 'textLight'];
      }
    },
  },
};
</script>

<style lang="css" scoped>

</style>
