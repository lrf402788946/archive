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
            <el-table-column prop="title" align="center" label="个人事项" width="180"></el-table-column>
            <el-table-column prop="memo" label="备注" align="center" width="180"></el-table-column>
            <el-table-column align="center" label="信息图片">
              <template slot-scope="scope">
                <img :src="scope.row.file_path ? scope.row.file_path : avatar" style="width:150px;height:150px;" class="img-rounded">
              </template>
            </el-table-column>
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
                <label for="exampleInputName2">个人事项：</label>
              </el-col>
              <el-col :span="10">
                <el-input></el-input>
              </el-col>
              <el-col :span="24">
                <label for="exampleInputName2">备注：</label>
              </el-col>
              <el-col :span="24">
                <el-input type="textarea" row="4"></el-input>
              </el-col>
              <el-col :span="24">
                <label for="exampleInputName2">个人事项信息表：</label>
                <scan @getPic="getFile" type="personal"></scan>
              </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" v-if="!form.id" @click="toOperation()">保存</el-button>
              <el-button type="primary" v-else @click="dialog = false">修改</el-button>
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
  data() {
    return {
      list: [{ title: '个人事项1', memo: '备注1' }],
      form: {},
      dialog: false,
      dialogTitle: '',
      operationId: '',
      avatar: require('@/assets/img/8082.jpg'),
    };
  },
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
      let result = await this.$axios.get(`jbqk/jbqk_detail?id=${this.$route.query.id}&type=1`);
      console.log(result.data);
      this.$set(this, 'list', result.data.data);
    },
    async openDialog(type, item) {
      this.$set(this, `dialogTitle`, `个人事项${type === 'delete' ? '删除' : type === 'add' ? '添加' : '修改'}`);
      if (type === 'edit') {
        this.$set(this, `form`, item);
      } else if (type === 'delete') {
        this.operationId = item.id;
        await this.$confirm('确认要删除该数据吗?', `删除提示`, {
          type: 'warning',
        })
          .then(async () => {
            //确认删除
            console.log(`delete${this.operationId}`);
            await this.productOperation({ data: { id: this.operationId }, type: 'productDelete' });
            this.closeAlert();
            this.toSearch();
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
      if (has_id > 0) {
        newData = { data: this.form };
      } else {
        newData = { data: { ...this.form, jbqk_id: this.$route.query.id, type: 1 } };
      }
      let result = await this.$axios.post(`jbqk/jbqk_detail_${type}`, newData);
      console.log(result);
      if (result.rescode === '0' || result.rescode === 0) {
        this.$message.success('操作成功');
        this.search();
        this.closeAlert();
      }
    },
  },
};
</script>
