<template>
  <div class="ERP-container">
    <div class="filter-container">
      <!-- 搜索条件栏目 -->
      <el-input v-model="getemplist.agentname" :placeholder="$t('Customer.agentname')" class="filter-item" clearable @keyup.enter.native="handleFilter"/>
      <el-input v-model="getemplist.phone" :placeholder="$t('Customer.phone')" class="filter-item" clearable @keyup.enter.native="handleFilter"/>
      <el-date-picker
        v-model="getemplist.createtime"
        type="date"
        class="filter-item"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"/>
      <el-select v-model="getemplist.type" :value="getemplist.type" :placeholder="$t('Customer.customertype')" class="filter-item" clearable>
        <el-option
          v-for="(item, index) in customertypes"
          :key="index"
          :value="item.id"
          :label="item.categoryName"/>
      </el-select>
      <el-select v-model="getemplist.level" :value="getemplist.level" :placeholder="$t('Customer.level')" class="filter-item" clearable>
        <el-option
          v-for="(item, index) in levels"
          :key="index"
          :value="item.id"
          :label="item.categoryName"/>
      </el-select>
      <!-- 更多搜索条件下拉栏 -->
      <el-popover
        placement="bottom"
        width="500"
        trigger="click">
        <el-select v-model="getemplist.source" :value="getemplist.source" :placeholder="$t('Customer.source')" class="filter-item" clearable style="width: 40%;float: left">
          <el-option
            v-for="(item, index) in sources"
            :key="index"
            :value="item.id"
            :label="item.categoryName"/>
        </el-select>
        <el-input v-model="getemplist.contactname" :placeholder="$t('Customer.contactname')" class="filter-item" style="width: 40%;float: left" clearable />
        <el-input v-model="getemplist.pinyin" :placeholder="$t('Customer.pinyin')" class="filter-item" style="width: 40%;float: left;margin-top: 20px" clearable />
        <div class="seachbutton" style="width: 100%;float: right;margin-top: 20px">
          <el-button v-waves class="filter-item" type="primary" style="float: right" @click="handleFilter">{{ $t('public.search') }}</el-button>
        </div>
        <el-button v-waves slot="reference" type="primary" class="filter-item" style="width: 130px">{{ $t('public.filter') }}<svg-icon icon-class="shaixuan" style="margin-left: 4px"/></el-button>
      </el-popover>
      <!-- 搜索按钮 -->
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" style="width: 86px" @click="handleFilter">{{ $t('public.search') }}</el-button>
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
      <el-button v-waves class="filter-item" icon="el-icon-plus" type="success" style="width: 86px;float: right" @click="handleAdd">{{ $t('public.add') }}</el-button>
    </div>
    <div class="app-container">
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
        <el-table-column :label="$t('Customer.id')" :resizable="false" prop="id" align="center" width="60">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Customer.agentname')" :resizable="false" prop="agentName" align="center" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.agentName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Customer.customertype')" :resizable="false" prop="agentType" align="center" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.agentType }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Customer.level')" :resizable="false" prop="agentLevel" align="center" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.agentLevel }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Customer.traderid')" :resizable="false" prop="traderName" align="center" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.traderName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Customer.contactname')" :resizable="false" prop="contactName" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.contactName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Customer.phone')" :resizable="false" prop="phone" align="center" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Customer.createName')" :resizable="false" prop="createName" align="center" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.createName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Customer.createTime')" :resizable="false" prop="createTime" align="center" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
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
      <my-dialog :control.sync="editVisible" :editdata.sync="customerForm" @rest="refreshlist"/>
      <!--修改结束=================================================-->
    </div>
  </div>
</template>

<script>
import { searchCusCategory, agentlist, deleteagent } from '@/api/Customer'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import MyDialog from './components/MyDialog'

export default {
  name: 'AgentList',
  directives: { waves },
  components: { Pagination, MyDialog },
  data() {
    return {
      // 批量操作
      moreaction: [],
      // 控制修改数据
      editVisible: false,
      // 所有客户类型数据
      // 发送参数
      customertypes: [],
      customertyp: 1,
      // 优质级别类型所有数据
      // 发送参数
      levels: [],
      levelstype: 2,
      // 客户来源所有数据
      // 发送参数
      sources: [],
      sourcestype: 3,
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
      // 客户列表查询加展示参数
      getemplist: {
        agentname: '',
        phone: '',
        type: '',
        pinyin: '',
        level: '',
        pagenum: 1,
        pagesize: 10,
        contactname: '',
        source: '',
        createtime: ''
      },
      // 客户信息数据
      customerForm: {
        agentname: '',
        phone: '',
        type: '',
        pinyin: '',
        level: '',
        source: '',
        discount: '',
        countryid: '',
        provinceid: '',
        cityid: '',
        introduce: '',
        address: '',
        contactname: '',
        traderid: '',
        transmode: '',
        deliverymode: '',
        createid: '',
        newold: ''
      }
    }
  },
  mounted() {
    this.getlist()
    this.getCategory()
  },
  methods: {
    // 获取类型
    getCategory() {
      // 获取客户类型
      searchCusCategory(this.customertyp).then(res => {
        if (res.data.ret === 200) {
          this.customertypes = res.data.data.content.list
        } else {
          this.$notify.error({
            title: '错误',
            message: '出错了',
            offset: 100
          })
        }
      })
      // 获取客户优质级别
      searchCusCategory(this.levelstype).then(res => {
        if (res.data.ret === 200) {
          this.levels = res.data.data.content.list
        } else {
          this.$notify.error({
            title: '错误',
            message: '出错了',
            offset: 100
          })
        }
      })
      // 获取客户来源
      searchCusCategory(this.sourcestype).then(res => {
        if (res.data.ret === 200) {
          this.sources = res.data.data.content.list
        } else {
          this.$notify.error({
            title: '错误',
            message: '出错了',
            offset: 100
          })
        }
      })
    },
    getlist() {
      // 员工列表数据
      this.listLoading = true
      agentlist(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
        } else {
          this.$notify.error({
            title: '错误',
            message: '出错了',
            offset: 100
          })
        }
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 100)
      })
    },
    // 搜索
    handleFilter() {
      this.getemplist.pagenum = 1
      agentlist(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
        } else {
          this.$notify.error({
            title: '错误',
            message: '出错了',
            offset: 100
          })
        }
      })
    },
    // 新增数据
    handleAdd() {
      this.$router.push('/Customer/NewAgent')
    },
    // 生成合同
    handleContract() {
      console.log(123)
    },
    // 导出
    handleExport() {
      this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['编号', '工号', '员工登陆账号', '姓名', '性别', '生日', '邮箱', '职位', '所属部门', '所属区域', '所属门店', '入职时间', '离职时间', '状态']
          const filterVal = ['id', 'jobNumber', 'account', 'firstName', 'gender', 'birthday', 'email', 'postName', 'deptName', 'regionName', 'repositoryName', 'createTime', 'dimissionTime', 'stat']
          const data = this.formatJson(filterVal, this.list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: '员工资料表'
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
    },
    // 批量操作
    handleSelectionChange(val) {
      this.moreaction = val
    },
    // 批量删除
    handleCommand(command) {
      const ids = this.moreaction.map(item => item.id).join()
      if (command === 'delete') {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteagent(ids).then(res => {
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
        deleteagent(row.id).then(res => {
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
    // 修改操作
    handleEdit(row) {
      console.log(row)
      this.editVisible = true
      this.customerForm = Object.assign({}, row)
      this.customerForm.newOrOld = String(row.newOrOld)
      this.customerForm.transMode = String(row.transMode)
      this.customerForm.deliveryMode = String(row.deliveryMode)
    },
    // 修改组件修改成功后返回
    refreshlist(val) {
      if (val === true) {
        this.getlist()
      }
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
