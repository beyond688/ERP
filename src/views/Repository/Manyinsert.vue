<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>下载模板  </span>
      </div>
      <a href="/static/file/仓库数据表.xlsx"><el-button type="primary">下载模板</el-button></a>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>上传Excel表格</span>
      </div>
      <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload"/>
    </el-card>
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>表格数据</span>
        <el-button style="float: right; padding: 3px 0" type="primary" @click="uploads">导入数据</el-button>
      </div>
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of tableHeader" :prop="item" :label="item" :key="item"/>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
import { manyinsert } from '@/api/Repository'

export default {
  name: 'Manyinsert',
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      dizhi: '/static/file/ceshi.xlsx',
      uploadHead: []
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = ['门店名称', '地址', '经度', '纬度', '管理员id', '开业时间', '状态', '描述', '所属区域', '种类id', '小区经理id', '属性id', '国家id']
      this.uploadHead = results.map(function(item) {
        return {
          repositoryName: item.门店名称,
          address: item.地址,
          longitude: item.经度,
          latitude: item.纬度,
          managerPeopleId: item.管理员id,
          createTime: item.开业时间,
          stat: item.状态,
          description: item.描述,
          regionId: item.所属区域,
          type: item.种类id,
          regionManagerId: item.小区经理id,
          attributes: item.属性id,
          countryId: item.国家id
        }
      })
      console.log(header)
    },
    uploads() {
      manyinsert(JSON.stringify(this.uploadHead)).then(res => {
        if (res.data.ret === 200) {
          this.$notify({
            title: '成功',
            message: '修改成功',
            type: 'success',
            offset: 100
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: res.data.msg,
            offset: 100
          })
        }
      })
    }
  }
}
</script>
<style scoped>
  .app-container {
    margin-top: 20px;
  }
</style>
