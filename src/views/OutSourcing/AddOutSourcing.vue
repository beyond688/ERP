<template>
  <div class="ERP-container">
    <div class="app-container" style="padding-right: 0">
      <!--基本信息-->
      <el-card class="box-card" shadow="never">
        <h2 ref="geren" class="form-name">基本信息</h2>
        <div class="container">
          <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="110px" style="margin-left: 30px;">
            <el-row>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.title')" style="width: 100%;">
                  <el-input v-model="personalForm.title" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.personId')" prop="personId" style="width: 100%;">
                  <el-input v-model="personId" style="margin-left: 18px" clearable @focus="handlechooseStock"/>
                </el-form-item>
                <my-delivery :deliverycontrol.sync="stockControl" @deliveryName="stockName"/>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.taxRate')" style="width: 100%;">
                  <el-input v-model="personalForm.taxRate" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.outFactoryId')" prop="outFactoryId" style="width: 100%;">
                  <el-input v-model="outFactoryId" style="margin-left: 18px" clearable @focus="chooseFactory"/>
                </el-form-item>
                <my-factory :factorycontrol.sync="factorycontrol" @factoryName="factoryName"/>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.paymentAgreementId')" style="width: 100%;">
                  <el-select v-model="personalForm.paymentAgreementId" style="margin-left: 18px;width: 218px">
                    <el-option value="1" label="付款1"/>
                    <el-option value="2" label="付款2"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.deadline')" style="width: 100%;">
                  <el-date-picker
                    v-model="personalForm.deadline"
                    type="date"
                    placeholder="期限"
                    value-format="yyyy-MM-dd"
                    style="margin-left: 18px"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.productionDate')" prop="productionDate" style="width: 100%;">
                  <el-date-picker
                    v-model="personalForm.productionDate"
                    type="date"
                    placeholder="生产日期"
                    value-format="yyyy-MM-dd"
                    style="margin-left: 18px"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.completeDate')" prop="completeDate" style="width: 100%;">
                  <el-date-picker
                    v-model="personalForm.completeDate"
                    type="date"
                    placeholder="完成日期"
                    value-format="yyyy-MM-dd"
                    style="margin-left: 18px"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.billingTypeId')" style="width: 100%;">
                  <el-select v-model="personalForm.billingTypeId" style="margin-left: 18px;width: 218px">
                    <el-option value="1" label="普通发票"/>
                    <el-option value="2" label="付款2"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.giveAddress')" style="width: 100%;">
                  <el-input v-model="personalForm.giveAddress" style="margin-left: 18px" disabled/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <el-card class="box-card" style="margin-top: 15px" shadow="never">
        <h2 ref="geren" class="form-name">费用信息</h2>
        <div class="container">
          <el-form ref="personalForm2" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="110px" style="margin-left: 30px;">
            <el-row>
              <el-col :span="6">
                <el-form-item :label="$t('OutSourcing.heji')" style="width: 100%;">
                  <el-input v-model="heji" style="margin-left: 18px" disabled/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <!--子件信息-->
      <el-card class="box-card" style="margin-top: 15px" shadow="never">
        <h2 ref="fuzhu" class="form-name">外包单明细</h2>
        <div class="buttons" style="margin-top: 58px">
          <el-button @click="handleAddproduct">添加商品</el-button>
          <my-detail :control.sync="control" @product="productdetail"/>
          <el-button type="danger" @click="$refs.editable.removeSelecteds()">删除</el-button>
        </div>
        <div class="container">
          <el-editable
            ref="editable"
            :data.sync="list2"
            :edit-config="{ showIcon: true, showStatus: true}"
            :summary-method="getSummaries"
            :edit-rules="validRules"
            show-summary
            class="click-table1"
            stripe
            border
            size="medium"
            style="width: 100%">
            <el-editable-column type="selection" width="85" align="center"/>
            <el-editable-column label="序号" min-width="55" align="center" type="index"/>
            <el-editable-column prop="productCode" align="center" label="物品编号" min-width="150px"/>
            <el-editable-column prop="productName" align="center" label="物品名称" min-width="150px"/>
            <el-editable-column prop="productType" align="center" label="规格" min-width="150px"/>
            <el-editable-column prop="unit" align="center" label="单位" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="quantity" align="center" label="数量" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="money" align="center" label="加工费" min-width="150px"/>
            <el-editable-column prop="totalMoney" align="center" label="金额" min-width="150px">
              <template slot-scope="scope">
                <p>{{ gettotalMoney(scope.row.quantity, scope.row.money, scope.row) }}</p>
              </template>
            </el-editable-column>
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
import { createoutFactory } from '@/api/OutSourcing'
import MyDelivery from './components/MyDelivery'
import MyFactory from './components/MyFactory'
import MyDetail from './components/MyDetail'
export default {
  name: 'AddOutSourcing',
  components: { MyDetail, MyFactory, MyDelivery },
  data() {
    const validatePass = (rule, value, callback) => {
      console.log(value)
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      // 合计
      heji: 0,
      // 外包工厂回显
      outFactoryId: '',
      // 控制外包工厂
      factorycontrol: false,
      // 经办人回显
      personId: '',
      // 控制经办人
      stockControl: false,
      // 控制商品列表窗口
      control: false,
      // 主生产任务信息数据
      personalForm: {
        createPersonId: 3,
        countryId: 1,
        repositoryId: 438,
        regionId: 2
      },
      // 主生产任务规则数据
      personalrules: {
        personId: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ],
        outFactoryId: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ],
        productionDate: [
          { required: true, message: '请选择生产日期', trigger: 'change' }
        ],
        completeDate: [
          { required: true, message: '请选择完成日期', trigger: 'change' }
        ]
      },
      // 主生产任务明细数据
      list2: [],
      // 主生产任务明细列表规则
      validRules: {
      }
    }
  },
  methods: {
    // 外包工厂focus事件
    chooseFactory() {
      this.factorycontrol = true
    },
    // 外包工厂回显
    factoryName(val) {
      this.outFactoryId = val.factoryName
      this.personalForm.outFactoryId = val.id
      this.personalForm.giveAddress = val.receiverAddress
    },
    // 经办人focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 经办人回显
    stockName(val) {
      this.personId = val.personName
      this.personalForm.personId = val.id
    },
    // 明细表金额
    gettotalMoney(quantity, money, row) {
      row.totalMoney = quantity * money
      return row.totalMoney
    },
    // 总计
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总计'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ''
        } else {
          sums[index] = ''
        }
      })
      this.heji = sums[8]
      sums[2] = ''
      sums[4] = ''
      sums[6] = ''
      sums[7] = ''
      return sums
    },
    // 新增外包单明细
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
    // 清空记录
    restAllForm() {
      this.personalForm = {
        createPersonId: 3,
        countryId: 1,
        repositoryId: 438,
        regionId: 2
      }
      this.personId = null
      this.outFactoryId = null
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
        if (elem.type === null || elem.type === '' || elem.type === undefined) {
          delete elem.type
        }
        if (elem.unit === null || elem.unit === '' || elem.unit === undefined) {
          delete elem.unit
        }
        if (elem.quantity === null || elem.quantity === '' || elem.quantity === undefined) {
          delete elem.quantity
        }
        if (elem.money === null || elem.money === '' || elem.money === undefined) {
          delete elem.money
        }
        if (elem.totalMoney === null || elem.totalMoney === '' || elem.totalMoney === undefined) {
          delete elem.totalMoney
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
          createoutFactory(parms, parms2, this.personalForm).then(res => {
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
              this.$refs.personalForm2.clearValidate()
              this.$refs.personalForm2.resetFields()
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
      const view = { path: '/OutSourcing/AddOutSourcing', name: 'AddOutSourcing', fullPath: '/OutSourcing/AddOutSourcing', title: 'AddOutSourcing' }
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
