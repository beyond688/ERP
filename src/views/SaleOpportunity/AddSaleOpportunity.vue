<template>
  <div class="ERP-container">
    <div class="app-container" style="padding-right: 0">
      <!--基本信息-->
      <el-card class="box-card" shadow="never">
        <h2 ref="geren" class="form-name">基本信息</h2>
        <div class="container" style="margin-top: 37px">
          <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
            <el-row>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.title')" prop="title" style="width: 100%;">
                  <el-input v-model="personalForm.title" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.opportunityType')" prop="opportunityType" style="width: 100%;">
                  <el-select v-model="personalForm.opportunityType" style="margin-left: 18px;width: 218px" @focus="getTypes">
                    <el-option
                      v-for="(item, index) in opportunityTypes"
                      :value="item.id"
                      :key="index"
                      :label="item.categoryName"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.customerType')" prop="customerType" style="width: 100%;">
                  <el-select v-model="personalForm.customerType" style="margin-left: 18px;width: 218px" @change="clearCustomer">
                    <el-option value="1" label="经销商"/>
                    <el-option value="2" label="零售"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.customerName')" prop="customerName" style="width: 100%;">
                  <el-input v-model="personalForm.customerName" style="margin-left: 18px;width: 218px"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.customerPhone')" style="width: 100%;">
                  <el-input v-model="personalForm.customerPhone" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.opportunitySource')" style="width: 100%;">
                  <el-select v-model="personalForm.opportunitySource" style="margin-left: 18px;width: 218px" @focus="getTypes">
                    <el-option
                      v-for="(item, index) in opportunitySources"
                      :value="item.id"
                      :key="index"
                      :label="item.categoryName"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.handlePersonId')" prop="handlePersonId" style="width: 100%;">
                  <el-input v-model="handlePersonId" style="margin-left: 18px" clearable @focus="handlechooseStock"/>
                  <my-emp :control.sync="stockControl" @stockName="stockName"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.deptId')" style="width: 100%;">
                  <el-input v-model="deptId" style="margin-left: 18px;width: 218px" disabled/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.handleRepositoryId')" style="width: 100%;">
                  <el-input v-model="handleRepositoryId" style="margin-left: 18px;width: 218px" disabled/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('SaleOpportunity.isSale')" prop="isSale" style="width: 100%;">
                  <el-select v-model="personalForm.isSale" style="margin-left: 18px;width: 218px">
                    <el-option value="1" label="跟进中"/>
                    <el-option value="2" label="销售成功"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <!--子件信息-->
      <el-card class="box-card" style="margin-top: 15px" shadow="never">
        <h2 ref="fuzhu" class="form-name" >意向商品</h2>
        <div class="buttons" style="margin-top: 35px;margin-bottom: 10px;">
          <el-button @click="handleAddproduct">添加商品</el-button>
          <my-detail :control.sync="control" @product="productdetail"/>
          <el-button type="danger" @click="$refs.editable.removeSelecteds()">删除</el-button>
        </div>
        <div class="container">
          <el-editable
            ref="editable"
            :data.sync="list2"
            :edit-config="{ showIcon: true, showStatus: true}"
            :edit-rules="validRules"
            class="click-table1"
            stripe
            border
            size="medium"
            style="width: 100%">
            <el-editable-column type="selection" min-width="55" align="center"/>
            <el-editable-column label="序号" min-width="55" align="center" type="index"/>
            <el-editable-column prop="productCode" align="center" label="物品编号" min-width="150px"/>
            <el-editable-column prop="productName" align="center" label="物品名称" min-width="150px"/>
            <el-editable-column prop="productCategory" align="center" label="物品分类" min-width="150px"/>
            <el-editable-column prop="unit" align="center" label="基本单位" min-width="150px"/>
            <el-editable-column prop="productType" align="center" label="规格型号" min-width="150px"/>
            <el-editable-column prop="color" align="center" label="颜色" min-width="150px"/>
            <el-editable-column prop="kpiGrade" align="center" label="绩效分" min-width="150px"/>
            <el-editable-column prop="point" align="center" label="商品积分" min-width="150px"/>
          </el-editable>
        </div>
      </el-card>
      <!--操作-->
      <div class="buttons" style="margin-top: 20px">
        <el-button type="primary" style="background:#3696fd;border-color:#3696fd;width: 98px" @click="handlesave()">保存</el-button>
        <el-button type="danger" @click="handlecancel()">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { addsaleopportunity } from '@/api/SaleOpportunity'
import { searchSaleCategory } from '@/api/SaleCategory'
import MyEmp from './components/MyEmp'
import MyDelivery from '../DailyAdjust/components/MyDelivery'
import MyDetail from './components/MyDetail'
import MyApply from './components/MyApply'
import MyRequire from './components/MyRequire'
import MyCustomer from './components/MyCustomer'
import MyAgent from './components/MyAgent'
export default {
  name: 'AddSaleOpportunity',
  components: { MyAgent, MyCustomer, MyRequire, MyApply, MyDetail, MyDelivery, MyEmp },
  data() {
    // const validatePass = (rule, value, callback) => {
    //   console.log(value)
    //   if (this.customerId === '' || this.customerId === undefined || this.customerId === null) {
    //     callback(new Error('请选择客户姓名'))
    //   } else {
    //     callback()
    //   }
    // }
    const validatePass2 = (rule, value, callback) => {
      console.log(value)
      if (this.handlePersonId === '' || this.handlePersonId === undefined || this.handlePersonId === null) {
        callback(new Error('请选择业务员'))
      } else {
        callback()
      }
    }
    return {
      // 机会来源数据
      opportunitySources: [],
      // 机会来源获取参数
      opportunitySourceparms: {
        type: 6,
        pagenum: 1,
        pagesize: 99999
      },
      // 机会类型数据
      opportunityTypes: [],
      // 机会类型获取参数
      opportunityTypeparms: {
        type: 5,
        pagenum: 1,
        pagesize: 99999
      },
      // 回显部门
      deptId: '',
      // 回显门店
      handleRepositoryId: '',
      // 控制源单编码是否可以选择
      IsNumber: true,
      // 控制添加商品按钮是否可以点击
      Isproduct: true,
      // 回显门店
      saleRepositoryId: '',
      // 回显客户
      customerId: '',
      // 控制客户
      customercontrol: false,
      agentcontrol: false,
      // 选择的数据
      choosedata: [],
      // 业务员回显
      handlePersonId: '',
      // 控制业务员
      stockControl: false,
      // 控制商品列表窗口
      control: false,
      // 销售订单信息数据
      personalForm: {
        createPersonId: 3,
        countryId: 1,
        repositoryId: 438,
        regionId: 2,
        customerType: '1',
        isSale: '1'
      },
      // 销售订单规则数据
      personalrules: {
        customerType: [
          { required: true, message: '请选择客户类别', trigger: 'change' }
        ],
        handlePersonId: [
          { required: true, validator: validatePass2, trigger: 'change' }
        ],
        customerName: [
          { required: true, message: '请输入客户姓名', trigger: 'blur' }
        ],
        isSale: [
          { required: true, message: '请选择当前状态', trigger: 'change' }
        ],
        title: [
          { required: true, message: '请输入机会主题', trigger: 'blur' }
        ]
      },
      // 订单明细数据
      list2: [],
      // 销售费用明细
      list3: [],
      // 明细列表规则
      validRules: {
      }
    }
  },
  created() {
    this.getTypes()
  },
  methods: {
    // 分类属性
    getTypes() {
      // 开票类型数据
      searchSaleCategory(this.opportunityTypeparms).then(res => {
        if (res.data.ret === 200) {
          this.opportunityTypes = res.data.data.content.list
        }
      })
      // 结算方式数据
      searchSaleCategory(this.opportunitySourceparms).then(res => {
        if (res.data.ret === 200) {
          this.opportunitySources = res.data.data.content.list
        }
      })
    },
    // 选择客户类型时清理客户名称
    clearCustomer() {
      this.personalForm.customerId = ''
      this.customerId = ''
    },
    // 选择客户focus
    chooseCustomer() {
      if (this.personalForm.customerType === '1') {
        this.agentcontrol = true
      } else if (this.personalForm.customerType === '2') {
        this.customercontrol = true
      }
    },
    // 无来源添加商品
    handleAddproduct() {
      this.control = true
    },
    productdetail(val) {
      const nowlistdata = this.$refs.editable.getRecords()
      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < nowlistdata.length; j++) {
          if (val[i].productCode === nowlistdata[j].productCode) {
            this.$notify.error({
              title: '错误',
              message: '物品已添加',
              offset: 100
            })
            return false
          }
        }
        this.$refs.editable.insert(val[i])
      }
    },
    // 业务员focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 业务员回显
    stockName(val) {
      console.log(val)
      this.handlePersonId = val.personName
      this.personalForm.handlePersonId = val.id
      this.handleRepositoryId = val.repositoryName
      this.personalForm.handleRepositoryId = val.repositoryId
      this.deptId = val.deptName
      this.personalForm.deptId = val.deptId
    },
    // 清空记录
    restAllForm() {
      this.personalForm = {
        createPersonId: 3,
        countryId: 1,
        repositoryId: 438,
        regionId: 2,
        customerType: '1',
        isSale: '1'
      }
      this.personalForm.customerId = null
      this.customerId = null
      this.personalForm.customerPhone = null
      this.customerId = null
      this.personalForm.deptId = null
      this.personalForm.handlePersonId = null
      this.handlePersonId = null
      this.deptId = null
      this.personalForm.deptId = null
      this.handleRepositoryId = null
      this.personalForm.handleRepositoryId = null
    },
    // 保存操作
    handlesave() {
      const EnterDetail = this.$refs.editable.getRecords()
      if (EnterDetail.length === 0) {
        this.$notify.error({
          title: '错误',
          message: '明细表不能为空',
          offset: 100
        })
        return false
      }
      EnterDetail.map(function(elem) {
        return elem
      }).forEach(function(elem) {
        if (elem.productCode === null || elem.productCode === '' || elem.productCode === undefined) {
          delete elem.productCode
        }
        if (elem.productName === null || elem.productName === '' || elem.productName === undefined) {
          delete elem.productName
        }
        if (elem.categoryId === null || elem.categoryId === '' || elem.categoryId === undefined) {
          delete elem.categoryId
        }
        if (elem.unit === null || elem.unit === '' || elem.unit === undefined) {
          delete elem.unit
        }
        if (elem.typeId === null || elem.typeId === '' || elem.typeId === undefined) {
          delete elem.typeId
        }
        if (elem.colorId === null || elem.colorId === '' || elem.colorId === undefined) {
          delete elem.colorId
        }
        if (elem.kpiGrade === null || elem.kpiGrade === '' || elem.kpiGrade === undefined) {
          delete elem.kpiGrade
        }
        if (elem.point === null || elem.point === '' || elem.point === undefined) {
          delete elem.point
        }
        return elem
      })
      const parms2 = JSON.stringify(EnterDetail)
      const Data = this.personalForm
      for (const key in Data) {
        if (Data[key] === '' || Data[key] === undefined || Data[key] === null) {
          delete Data[key]
        }
      }
      const parms = JSON.stringify(Data)
      this.$refs.personalForm.validate((valid) => {
        if (valid) {
          addsaleopportunity(parms, parms2).then(res => {
            console.log(res)
            if (res.data.ret === 200) {
              this.$notify({
                title: '成功',
                message: '保存成功',
                type: 'success',
                offset: 100
              })
              this.restAllForm()
              this.$refs.editable.clear()
              this.$refs.personalForm.clearValidate()
              this.$refs.personalForm.resetFields()
            } else {
              this.$notify.error({
                title: '错误',
                message: res.data.msg,
                offset: 100
              })
            }
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: '信息未填完整',
            offset: 100
          })
          return false
        }
      })
    },
    // 取消操作
    handlecancel() {
      this.$router.go(-1)
      const view = { path: '/SaleOpportunity/AddSaleOpportunity', name: 'AddSaleOpportunity', fullPath: '/SaleOpportunity/AddSaleOpportunity', title: 'AddSaleOpportunity' }
      this.$store.dispatch('delView', view).then(({ visitedViews }) => {
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ERP-container{
    margin-right: 0;
    .form-name{
      font-size: 18px;
      color: #373e4f;
      margin-bottom: -20px;
      margin-top: 20px;
    }
    .container{
      margin-top: 40px;
    }
    .el-button+.el-button{
      width: 98px;
    }
  }
</style>
