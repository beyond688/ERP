<template>
  <div class="ERP-container">
    <!-- 搜索条件栏目 -->
    <el-card class="box-card" style="margin-top: 15px;height: 60px">
      <el-row>
        <el-form ref="getemplist" :model="getemplist" label-width="80px" style="margin-top: -9px">
          <el-col :span="4">
            <el-form-item label="仓库">
              <el-input v-model="repositoryId" :placeholder="$t('WarehouseAdjust.enterRepositoryId')" class="filter-item" clearable @keyup.enter.native="handleFilter" @focus="handlechooseRep"/>
              <my-repository :repositorycontrol.sync="repositorycontrol" @repositoryname="repositoryname"/>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="货位编号">
              <el-input v-model="getemplist.locationCode" :placeholder="$t('WarehouseAdjust.locationCode')" class="filter-item" clearable @keyup.enter.native="handleFilter"/>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="货位名称">
              <el-input v-model="getemplist.locationName" :placeholder="$t('WarehouseAdjust.locationName')" class="filter-item" clearable @keyup.enter.native="handleFilter"/>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="margin-left: 154px;">
            <!-- 搜索按钮 -->
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" style="width: 86px" @click="handleFilter">{{ $t('public.search') }}</el-button>
          </el-col>
        </el-form>
      </el-row>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px">
      <!-- 批量操作 -->
      <el-dropdown @command="handleCommand">
        <el-button v-waves class="filter-item" type="primary">
          {{ $t('public.batchoperation') }} <i class="el-icon-arrow-down el-icon--right"/>
        </el-button>
        <el-dropdown-menu slot="dropdown" style="width: 140px">
          <el-dropdown-item style="text-align: left" command="delete"><svg-icon icon-class="shanchu" style="width: 40px"/>{{ $t('public.delete') }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 表格导出操作 -->
      <el-button v-waves :loading="downloadLoading" class="filter-item" style="width: 86px" @click="handleExport"> <svg-icon icon-class="daochu"/>{{ $t('public.export') }}</el-button>
      <!-- 打印操作 -->
      <el-button v-waves class="filter-item" icon="el-icon-printer" style="width: 86px" @click="handlePrint">{{ $t('public.print') }}</el-button>
      <!-- 新建操作 -->
      <el-button v-waves class="filter-item" icon="el-icon-plus" type="success" style="width: 86px" @click="handleAdd">{{ $t('public.add') }}</el-button>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px">
      <!-- 列表开始 -->
      <el-table
        v-loading="listLoading"
        :key="tableKey"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55"
          align="center"/>
        <el-table-column :label="$t('WarehouseAdjust.id')" :resizable="false" prop="id" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.locationCode')" :resizable="false" prop="locationCode" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.locationCode }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.locationName')" :resizable="false" prop="locationName" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.locationName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.volume')" :resizable="false" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.volume }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.length')" :resizable="false" prop="length" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.length }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.width')" :resizable="false" prop="width" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.width }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.height')" :resizable="false" prop="height" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.height }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.enterRepositoryId')" :resizable="false" prop="repositoryName" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.repositoryName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('public.actions')" :resizable="false" align="center" min-width="230">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.row)">{{ $t('public.edit') }}</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">{{ $t('public.delete') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 列表结束 -->
      <pagination v-show="total>0" :total="total" :page.sync="getemplist.pagenum" :limit.sync="getemplist.pagesize" @pagination="getlist" />
      <!--修改开始=================================================-->
      <my-location :editcontrol.sync="editVisible" :editdata.sync="personalForm" @rest="refreshlist"/>
      <!--修改结束=================================================-->
    </el-card>
  </div>
</template>

<script>
import { locationlist, deletelocation } from '@/api/WarehouseAdjust'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import MyLocation from './components/MyLocation'
import MyRepository from '../Inventorydamaged/components/MyRepository'

export default {
  name: 'Locationlist',
  directives: { waves },
  components: { MyRepository, Pagination, MyLocation },
  filters: {
    genderFilter(status) {
      const statusMap = {
        1: '男',
        2: '女'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      // 仓库回显
      repositoryId: '',
      // 仓库控制
      repositorycontrol: false,
      // 批量操作
      moreaction: '',
      // 加载操作控制
      downloadLoading: false,
      // 表格数据
      list: [],
      // 表格数据条数
      total: 0,
      // 表格识别
      tableKey: 0,
      // 加载表格
      listLoading: true,
      // 货位单列表查询加展示参数
      getemplist: {
        pageNum: 1,
        pageSize: 10
      },
      // 传给组件的数据
      personalForm: {},
      // 控制组件数据
      editVisible: false,
      // 开始时间到结束时间
      date: []
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    getlist() {
      // 货位单列表数据
      this.listLoading = true
      locationlist(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
        }
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 100)
      })
      this.listLoading = false
    },
    // 清空搜索条件
    restFilter() {
      this.repositoryId = ''
      this.getemplist.repositoryId = ''
    },
    // 搜索
    handleFilter() {
      this.getemplist.pageNum = 1
      locationlist(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
          this.restFilter()
        } else {
          this.$notify.error({
            title: '错误',
            message: '出错了',
            offset: 100
          })
          this.restFilter()
        }
      })
    },
    // 修改操作
    handleEdit(row) {
      console.log(row)
      this.editVisible = true
      this.personalForm = Object.assign({}, row)
      this.personalForm.isHot = String(row.isHot)
      this.personalForm.isEffective = String(row.isEffective)
      this.personalForm.moneyId = String(row.moneyId)
      this.personalForm.companyTypeId = String(row.companyTypeId)
    },
    // 修改组件修改成功后返回
    refreshlist(val) {
      if (val === true) {
        this.getlist()
      }
    },
    // 批量操作
    handleSelectionChange(val) {
      this.moreaction = val
    },
    // 仓库列表focus事件触发
    handlechooseRep() {
      this.repositorycontrol = true
    },
    repositoryname(val) {
      console.log(val)
      this.repositoryId = val.repositoryName
      this.getemplist.repositoryId = val.id
    },
    // 多条删除
    // 批量删除
    handleCommand(command) {
      const ids = this.moreaction.map(item => item.id).join()
      if (command === 'delete') {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deletelocation(ids).then(res => {
            if (res.data.ret === 200) {
              this.$notify({
                title: '删除成功',
                type: 'success',
                offset: 100
              })
              this.getlist()
            } else {
              this.$notify.error({
                title: '错误',
                message: '出错了',
                offset: 100
              })
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    // 单条删除
    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deletelocation(row.id).then(res => {
          if (res.data.ret === 200) {
            this.$notify({
              title: '删除成功',
              type: 'success',
              offset: 100
            })
            this.getlist()
          } else {
            this.$notify.error({
              title: '错误',
              message: '出错了',
              offset: 100
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 新增数据
    handleAdd() {
      this.$router.push('/WarehouseAdjust/AddLocation')
    },
    // 导出
    handleExport() {
      this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['供应商编号', '供应商名称', '供应商简称', '供应商类别', '所在区域', '采购员', '供应商优质级别', '建档人', '建档日期']
          const filterVal = ['id', 'WarehouseAdjustName', 'WarehouseAdjustShortName', 'typeName', 'regionName', 'buyerName', 'levelName', 'createName', 'createTime']
          const data = this.formatJson(filterVal, this.list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: '经销商资料表'
          })
          this.downloadLoading = false
        })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    },
    // 打印
    handlePrint() {
      console.log(456)
    }
  }
}
</script>

<style rel="stylesheet/css" scoped>
  .app-container >>> .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 24px;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  .filter-container >>> .el-form-item__label{
    padding: 0;
  }
  .ERP-container {
    margin: 0px 30px;
  }
  .filter-container{
    padding: 20px;
    padding-left: 0px;
  }
  .filter-item{
    width: 140px;
    margin-left: 20px;
  }
</style>
