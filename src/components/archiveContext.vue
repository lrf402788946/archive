<template lang='html'>
    <div id="index">
        <div class="base-padding-20 base-bg-fff">
          <el-row style="margin:3% 0;">
            <el-col :span="18">&nbsp;</el-col>
            <el-col :span="4">
              <el-button type="primary" @click="openDialog('add')" icon="el-icon-document">添加</el-button>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
          </el-row>
          <el-table :data="list" stripe border style="width: 100%">
            <el-table-column prop="title" align="center" :label="getInfo(type)" width="350"></el-table-column>
            <el-table-column prop="memo" label="备注" align="center" width="350"></el-table-column>
            <!-- <el-table-column align="center" label="信息图片">
              <template slot-scope="scope">
                <img :src="scope.row.file_path ? scope.row.file_path : avatar" style="width:150px;height:150px;" class="img-rounded">
              </template>
            </el-table-column> -->
            <el-table-column align="center"  label="操作">
              <template slot-scope="scope">
                <el-row>
                  <el-col :span='6'>
                    <el-button type="primary" @click="openDialog('edit', scope.row)" icon="el-icon-edit-outline">修改</el-button>
                  </el-col>
                  <el-col :span='2'>&nbsp;</el-col>
                  <el-col :span='6'>
                    <el-button type="danger" @click="openDialog('delete', scope.row)" icon="el-icon-delete">删除</el-button>
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
          <el-dialog :title="dialogTitle" center :visible.sync="dialog" :close-on-click-modal="false" :before-close="closeAlert">
            <el-row>
              <el-col :span="24">
                <label for="exampleInputName2">{{ getInfo(type) }}：</label>
              </el-col>
              <el-col :span="10">
                <el-input v-model="form.title"></el-input>
              </el-col>
              <el-col :span="24">
                <label for="exampleInputName2">备注：</label>
              </el-col>
              <el-col :span="24">
                <el-input type="textarea" v-model="form.memo" row="4"></el-input>
              </el-col>
              <el-col :span="24">
                <label for="exampleInputName2">{{ getInfo(type) }}信息表：</label>
                <scan @getPic="getFile" type="personal" :file_path="form.file_path"></scan>
              </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" v-if="!form.id" @click="toOperation()">保存</el-button>
              <el-button type="primary" v-else @click="toOperation('edit')">修改</el-button>
              <el-button @click="closeAlert()">取 消</el-button>
            </span>
          </el-dialog>
        </div>

    </div>
</template>
<script>
import _ from 'lodash';
import scan from '@/components/scan.vue';
export default {
  components: {
    scan,
  },
  props: {
    type: { type: Number, defalut: 0 }, //类型1,个人事项;2,信息档案;3,例行谈话;4,述责述廉;5,重大事项;6,问题线索;7,处置问责;8,立案处理
  },
  data: () => ({
    list: [{ title: '个人事项1', memo: '备注1' }],
    form: {},
    dialog: false,
    dialogTitle: '',
    operationId: '',
    avatar: require('@/assets/img/8082.jpg'),
  }),
  created() {
    if (this.$route.query.id) {
      this.search();
    }
  },
  methods: {
    getFile(name) {
      this.$set(this.form, `file_path`, `${name}`);
    },
    async search() {
      let result = await this.$axios.get(`jbqk/jbqk_detail?id=${this.$route.query.id}&type=${this.type}`);
      this.$set(this, 'list', result.data.data ? result.data.data : []);
    },
    async openDialog(type, item) {
      this.$set(this, `dialogTitle`, `${this.getInfo(this.type)}${type === 'delete' ? '删除' : type === 'add' ? '添加' : '修改'}`);
      console.log(type);
      if (type === 'edit') {
        let result = await this.$axios.post(`jbqk/jbqk_file`, { data: { id: item.id } });
        if (result.data.rescode === '0' || result.data.rescode === 0) {
          this.$set(this, `form`, result.data.jbqkDetail);
          console.log(result.data.jbqkFile.length);
          if (result.data.jbqkFile.length > 0) {
            this.$set(this.form, `file_path`, result.data.jbqkFile[0].file_path);
          }
        } else {
          this.$set(this, `form`, {});
        }
      } else if (type === 'delete') {
        this.operationId = item.id;
        await this.$confirm('确认要删除该数据吗?', `删除提示`, {
          type: 'warning',
        })
          .then(async () => {
            //确认删除
            console.log(`delete${this.operationId}`);
            // await this.productOperation({ data: { id: this.operationId }, type: 'productDelete' });
            this.closeAlert();
            this.search();
          })
          .catch(() => {
            //不删除
            console.log(`cancel`);
          });
        this.closeAlert();
        return;
      }
      this.dialog = true;
    },
    closeAlert() {
      this.operationId = '';
      this.form = {};
      this.dialog = false;
    },
    toOperation() {
      this.operation();
    },
    async operation() {
      let has_id = Object.keys(this.form).filter(item => item === 'id').length;
      let type;
      let newData;
      has_id > 0 ? (type = 'edit') : (type = 'save');
      let origin = JSON.parse(JSON.stringify(this.form));
      let subForm = [{ file_path: origin.file_path }];
      delete origin.file_path;
      if (has_id > 0) {
        newData = { data: { ...origin, subForm: subForm } };
      } else {
        newData = { data: { ...origin, subForm: subForm, jbqk_id: `${this.$route.query.id}`, file_type: `${this.type}` } };
      }
      let result = await this.$axios.post(`jbqk/jbqk_detail_${type}`, newData);
      console.log(result); //edit没有返回data;save插不进去
      if (result.data.rescode === '0' || result.data.rescode === 0) {
        console.log('in function:');
        this.$message.success('操作成功');
        this.search();
        this.closeAlert();
      } else {
        this.$message.error(result.data.msg);
      }
    },
    getInfo(type) {
      let info;
      switch (type) {
        case 1:
          info = '个人事项';
          break;
        case 2:
          info = '信息档案';
          break;
        case 3:
          info = '例行谈话';
          break;
        case 4:
          info = '述责述廉';
          break;
        case 5:
          info = '重大事项';
          break;
        case 6:
          info = '问题线索';
          break;
        case 7:
          info = '处置问责';
          break;
        case 8:
          info = '立案处理';
          break;
        default:
          info = '无此项';
          break;
      }
      return info;
    },
  },
};
</script>
