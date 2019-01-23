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
                <jbqk v-if="tabIndex === 0" :type="type"></jbqk>
              </b-tab>

              <b-tab title="个人事项" :title-link-class="linkClass(1)">
                <Personal v-if="tabIndex === 1"></Personal>
              </b-tab>
              
              <b-tab title="个人档案" :title-link-class="linkClass(2)">
                <PersonDocument v-if="tabIndex === 2"></PersonDocument>
              </b-tab>
              <b-tab title="例行谈话" :title-link-class="linkClass(3)">
                <RoutineConversation v-if="tabIndex === 3"></RoutineConversation>
              </b-tab>
              <b-tab title="问题线索" :title-link-class="linkClass(4)">
                <ProblemClue v-if="tabIndex === 4"></ProblemClue>
              </b-tab>
              <b-tab title="述责述廉" :title-link-class="linkClass(5)">
                <SpeakWithHonesty v-if="tabIndex === 5"></SpeakWithHonesty>
              </b-tab>
              <b-tab title="处置问责" :title-link-class="linkClass(6)">
                <AccountabilityForDisposal v-if="tabIndex === 6"></AccountabilityForDisposal>
              </b-tab>
              <b-tab title="重大事项" :title-link-class="linkClass(7)">
                <MajorIssues v-if="tabIndex === 7"></MajorIssues>
              </b-tab>
              <b-tab title="立案处理" :title-link-class="linkClass(8)">
                <CaseFiling v-if="tabIndex === 8"></CaseFiling>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </body>

  </div>
</template>



<script>
import jbqk from './jbqk/index.vue';
import Personal from './jbqkDetail/Personal.vue';
import PersonDocument from './jbqkDetail/PersonDocument.vue';
import RoutineConversation from './jbqkDetail/RoutineConversation.vue';
import ProblemClue from './jbqkDetail/ProblemClue.vue';
import SpeakWithHonesty from './jbqkDetail/SpeakWithHonesty.vue';
import AccountabilityForDisposal from './jbqkDetail/AccountabilityForDisposal.vue';
import MajorIssues from './jbqkDetail/MajorIssues.vue';
import CaseFiling from './jbqkDetail/CaseFiling.vue';
export default {
  components: {
    jbqk,
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
      form: {},
      type: this.$route.query.type,
    };
  },
  created() {
    console.log(this.type);
  },
  methods: {
    async aaa() {
      var result = await this.$axios.post('/jszx/jbqk/jbqk_save', { data: this.form });
    },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bgPrimary', 'textLight'];
      } else {
        return ['bgLight', 'textLight'];
      }
    },
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
/* .form-group {
  margin-bottom: 15px !important;
} */
/* .col-1,
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
} */
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
/* .row {
  display: block !important;
} */
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
.tab-content {
  padding-bottom: 50px;
}
</style>

<style scoped>
@import '../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../assets/style/layout/base-Layout-bootstrap.css';
@import '../assets/style/base-style-bootstrap.css';
@import '../assets/style/bootstrap-datetimepicker/bootstrap-datetimepicker.css';
</style>
