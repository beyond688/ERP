<template>
  <div class="ERP-container">
    <el-card class="box-card" style="margin-top: 10px;height: 60px" shadow="never">
      <el-row>
        <el-form ref="getemplist" :model="getemplist" label-width="100px" style="margin-top: -9px">
          <el-col :span="5">
            <el-form-item label="物料分类" label-width="100px">
              <el-input v-model="categoryId" :placeholder="$t('StockRequire.categoryId')" clearable @keyup.enter.native="handleFilter" @focus="treechoose"/>
              <my-tree :treecontrol.sync="treecontrol" @tree="tree"/>
            </el-form-item>
          </el-col>
          <el-col :span="5" style="margin-left: 10px">
            <el-form-item label="物料名称">
              <el-input v-model="getemplist.productName" placeholder="物料名称" clearable @keyup.enter.native="handleFilter" @focus="handleAddproduct"/>
              <my-detail :control.sync="control" @productdata="productdata"/>
            </el-form-item>
          </el-col>
          <el-col :span="5" style="margin-left: 10px">
            <el-form-item label="是否已生成采购计划" label-width="150px">
              <el-select v-model="getemplist.isPlan" :value="getemplist.isPlan" placeholder="是否已生成采购计划" clearable>
                <el-option value="1" label="是"/>
                <el-option value="2" label="否"/>
              </el-select>
            </el-form-item>
          </el-col>
          <!--更多搜索条件-->
          <el-col :span="3">
            <el-popover
              v-model="visible2"
              placement="bottom"
              width="500"
              trigger="manual">
              <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="-"
                unlink-panels
                start-placeholder="需求日期开始"
                end-placeholder="需求日期结束"
                value-format="yyyy-MM-dd"
                style="margin-top: 20px;margin-left: 20px"/>
              <div class="seachbutton" style="width: 100%;float: right;margin-top: 20px">
                <el-button v-waves class="filter-item" type="primary" style="float: right" round @click="handleFilter">{{ $t('public.search') }}</el-button>
              </div>
              <el-button v-waves slot="reference" type="primary" class="filter-item" style="width: 130px" @click="visible2 = !visible2">{{ $t('public.filter') }}<svg-icon icon-class="shaixuan" style="margin-left: 4px"/></el-button>
            </el-popover>
          </el-col>
          <el-col :span="3" style="margin-left: 20px">
            <!-- 搜索按钮 -->
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" style="width: 86px" round @click="handleFilter">{{ $t('public.search') }}</el-button>
          </el-col>
        </el-form>
      </el-row>
    </el-card>
    <el-card class="box-card" style="margin-top: 10px" shadow="never">
      <!-- 表格导出操作 -->
      <el-button v-waves :loading="downloadLoading" class="filter-item" style="width: 86px" @click="handleExport"> <svg-icon icon-class="daochu"/>{{ $t('public.export') }}</el-button>
      <!-- 打印操作 -->
      <el-button v-waves class="filter-item" icon="el-icon-printer" style="width: 86px" @click="handlePrint">{{ $t('public.print') }}</el-button>
    </el-card>

    <el-card class="box-card" style="margin-top: 10px" shadow="never">
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
        <el-table-column :label="$t('public.id')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span class="link-type" @click="handleDetail(scope.row)">{{ scope.row.materialsRequireNumber }}</span>
          </template>
          <detail-list :detailcontrol.sync="detailvisible" :detaildata.sync="personalForm"/>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.productName')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.productName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.productCode')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.productCode }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.categoryId')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.productCategory }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.productType')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.productType }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.color')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.color }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.unit')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.unit }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.requireQuantity')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.requireQuantity }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.inventoryQuantity')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.inventoryQuantity }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.shouldStockQuantity')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.shouldStockQuantity }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.stockAdvanceday')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.stockAdvanceday }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.requireDate')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.requireDate }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockRequire.isPlan')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.isPlaned | isPlanedFilter }}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- 列表结束 -->
      <pagination v-show="total>0" :total="total" :page.sync="getemplist.pageNum" :limit.sync="getemplist.pageSize" @pagination="getlist" />
    </el-card>
  </div>
</template>

<script>
import { stockrequirelist } from '@/api/StockRequire'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination'
import MyTree from '../Product/components/MyTree'
import MyDetail from './components/MyDetail'
import DetailList from './components/DetailList' // Secondary package based on el-pagination

export default {
  name: 'Index',
  directives: { waves },
  components: { DetailList, MyDetail, MyTree, Pagination },
  filters: {
    isPlanedFilter(status) {
      const statusMap = {
        1: '否',
        2: '是'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      // 物料名称控制
      control: false,
      // 物品分类回显
      categoryId: '',
      // 控制物品分类
      treecontrol: false,
      // 详情组件数据
      detailvisible: false,
      // 更多搜索条件问题
      visible2: false,
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
      // 采购申请列表查询加展示参数
      getemplist: {
        pageNum: 1,
        pageSize: 10,
        repositoryId: 438,
        regionIds: 2,
        createPersonId: 3
      },
      // 传给组件的数据
      personalForm: {},
      // 修改控制组件数据
      editVisible: false,
      // 开始时间到结束时间
      date: []
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    // 物料名称focus
    handleAddproduct() {
      this.control = true
    },
    // 物品名称数据
    productdata(val) {
      this.getemplist.productName = val.productName
    },
    // 物品分类focus
    treechoose() {
      this.treecontrol = true
    },
    // 物品分类数据
    tree(val) {
      this.categoryId = val.categoryName
      this.getemplist.categoryId = val.id
    },
    getlist() {
      // 物料需求计划列表数据
      this.listLoading = true
      stockrequirelist(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
        }
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 100)
      })
    },
    // 清空搜索条件
    restFilter() {
      this.handlePersonId = ''
      this.getemplist.handlePersonId = ''
      this.workCenterId = ''
      this.getemplist.workCenterId = ''
      this.producePlanNumber = ''
      this.getemplist.producePlanNumber = ''
    },
    // 搜索
    handleFilter() {
      this.getemplist.pageNum = 1
      if (this.date === null || this.date === '') {
        this.getemplist.beginTime = null
        this.getemplist.endTime = null
      } else {
        this.getemplist.beginTime = this.date[0]
        this.getemplist.endTime = this.date[1]
      }
      stockrequirelist(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
          this.restFilter()
        } else {
          this.restFilter()
        }
      })
    },
    // 详情操作
    handleDetail(row) {
      console.log(row)
      this.detailvisible = true
      this.personalForm = Object.assign({}, row)
      this.personalForm.sourceType = String(row.sourceType)
    },
    // 批量操作
    handleSelectionChange(val) {
      this.moreaction = val
    },
    // 导出
    handleExport() {
      this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['供应商编号', '供应商名称', '供应商简称', '供应商类别', '所在区域', '采购员', '供应商优质级别', '建档人', '建档日期']
          const filterVal = ['id', 'StockRequireName', 'StockRequireShortName', 'typeName', 'regionName', 'buyerName', 'levelName', 'createName', 'createTime']
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
  .ERP-container >>>  .el-form-item__label{
    color: #909399;
    text-align: left;
  }
  .app-container >>> .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 24px;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  .ERP-container {
    margin: 0px 10px;
  }
  .filter-container{
    padding: 20px;
    padding-left: 0px;
  }
  .filter-item{
    width: 140px;
    margin-left: 30px;
  }
</style>
