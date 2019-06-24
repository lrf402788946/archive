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
            <Personal v-show="tabIndex === 0"  ></Personal>
          </b-tab>
          <b-tab title="个人档案" :title-link-class="linkClass(1)">
            <PersonDocument v-show="tabIndex === 1"  ></PersonDocument>
          </b-tab>
          <b-tab title="例行谈话" :title-link-class="linkClass(2)">
            <RoutineConversation v-show="tabIndex === 2"  ></RoutineConversation>
          </b-tab>
          <b-tab title="述责述廉" :title-link-class="linkClass(3)">
            <SpeakWithHonesty v-show="tabIndex === 3"  ></SpeakWithHonesty>
          </b-tab>
          <b-tab title="重大事项" :title-link-class="linkClass(4)">
            <MajorIssues v-show="tabIndex === 4"  ></MajorIssues>
          </b-tab>
          <b-tab title="问题线索" :title-link-class="linkClass(5)">
            <ProblemClue v-show="tabIndex === 5"  ></ProblemClue>
          </b-tab>
          <b-tab title="处置问责" :title-link-class="linkClass(6)">
            <AccountabilityForDisposal v-show="tabIndex === 6"  ></AccountabilityForDisposal>
          </b-tab>
          <b-tab title="立案处理" :title-link-class="linkClass(7)">
            <CaseFiling v-show="tabIndex === 7"  ></CaseFiling>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PersonDocument from '@/views/jbqkDetail/PersonDocument.vue';
import RoutineConversation from '@/views/jbqkDetail/RoutineConversation.vue';
import ProblemClue from '@/views/jbqkDetail/ProblemClue.vue';
import Personal from '@/views/jbqkDetail/Personal.vue';
import SpeakWithHonesty from '@/views/jbqkDetail/SpeakWithHonesty.vue';
import AccountabilityForDisposal from '@/views/jbqkDetail/AccountabilityForDisposal.vue';
import MajorIssues from '@/views/jbqkDetail/MajorIssues.vue';
import CaseFiling from '@/views/jbqkDetail/CaseFiling.vue';
export default {
  name: 'Archive',
  components: {
    Personal,
    PersonDocument,
    RoutineConversation,
    ProblemClue,
    SpeakWithHonesty,
    AccountabilityForDisposal,
    MajorIssues,
    CaseFiling,
  },
  data() {
    return {
      avatar: require('@/assets/img/8082.jpg'),
      tabIndex: 0,
    };
  },
  computed: {},
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
