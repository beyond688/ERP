<template>
  <el-dialog :visible.sync="editVisible" :editcontrol="editcontrol" :editdata="editdata" :close-on-press-escape="false" :title="personalForm.number +'    修改'" width="1010px" class="edit" top="-10px" @close="$emit('update:editcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card" style="margin-top: 63px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">基本信息</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.title')" style="width: 100%;">
                <el-input v-model="personalForm.title" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.customerType')" prop="customerType" style="width: 100%;">
                <el-select v-model="personalForm.customerType" style="margin-left: 18px;width: 200px" @change="clearCustomer">
                  <el-option value="1" label="经销商"/>
                  <el-option value="2" label="零售"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.customerName')" prop="customerId" style="width: 100%;">
                <el-input v-model="customerId" style="margin-left: 18px;width: 200px" @focus="chooseCustomer"/>
                <my-customer :customercontrol.sync="customercontrol" @customerdata="customerdata"/>
                <my-agent :agentcontrol.sync="agentcontrol" @agentdata="agentdata"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.customerPhone')" style="width: 100%;">
                <el-input v-model="personalForm.customerPhone" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.invoiceType')" style="width: 100%;">
                <el-select v-model="personalForm.invoiceType" style="margin-left: 18px;width: 200px">
                  <el-option
                    v-for="(item, index) in invoiceTypes"
                    :value="item.id"
                    :key="index"
                    :label="item.categoryName"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.payMode')" style="width: 100%;">
                <el-select v-model="personalForm.payMode" style="margin-left: 18px;width: 200px">
                  <el-option value="1" label="货到付款"/>
                  <el-option value="2" label="当场支付"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.transDate')" prop="transDate" style="width: 100%;">
                <el-date-picker
                  v-model="personalForm.transDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  style="margin-left: 18px;width: 200px"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.salePersonId')" prop="salePersonId" style="width: 100%;">
                <el-input v-model="salePersonId" style="margin-left: 18px;width: 200px" clearable @focus="handlechooseStock"/>
                <my-emp :control.sync="stockControl" @stockName="stockName"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.saleRepositoryId')" style="width: 100%;">
                <el-input v-model="personalForm.saleRepositoryName" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.roleId')" style="width: 100%;">
                <el-input v-model="personalForm.roleName" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.saleType')" style="width: 100%;">
                <el-select v-model="personalForm.saleType" style="margin-left: 18px;width: 200px">
                  <el-option value="1" label="类别1"/>
                  <el-option value="2" label="类别2"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.payType')" style="width: 100%;">
                <el-select v-model="personalForm.payType" style="margin-left: 18px;width: 200px">
                  <el-option value="1" label="方式1"/>
                  <el-option value="2" label="方式2"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.currency')" style="width: 100%;">
                <el-select v-model="personalForm.currency" style="margin-left: 18px;width: 200px">
                  <el-option value="1" label="RMB"/>
                  <el-option value="2" label="USD"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.transAddress')" style="width: 100%;">
                <el-input v-model="personalForm.transAddress" style="margin-left: 18px;width: 200px"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.receiveMoney')" style="width: 100%;">
                <el-input v-model="personalForm.receiveMoney" style="margin-left: 18px;width: 200px"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.colseType')" style="width: 100%;">
                <el-select v-model="personalForm.colseType" style="margin-left: 18px;width: 200px">
                  <el-option
                    v-for="(item, index) in colseTypes"
                    :value="item.id"
                    :key="index"
                    :label="item.categoryName"/>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <!--子件信息-->
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="fuzhu" class="form-name" >订单明细</h2>
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
          :summary-method="getSummaries"
          class="click-table1"
          show-summary
          stripe
          border
          size="medium"
          style="width: 100%">
          <el-editable-column type="selection" min-width="55" align="center"/>
          <el-editable-column label="序号" min-width="55" align="center" type="index"/>
          <el-editable-column prop="productCode" align="center" label="物品编号" min-width="150px"/>
          <el-editable-column prop="productName" align="center" label="物品名称" min-width="150px"/>
          <el-editable-column prop="Categoryid" align="center" label="物品分类" min-width="150px"/>
          <el-editable-column prop="unit" align="center" label="基本单位" min-width="150px"/>
          <el-editable-column prop="typeId" align="center" label="规格型号" min-width="150px"/>
          <el-editable-column prop="color" align="center" label="颜色" min-width="150px"/>
          <el-editable-column prop="performanceScore" align="center" label="绩效分" min-width="150px"/>
          <el-editable-column prop="productScore" align="center" label="商品积分" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 1, precision: 2}, type: 'visible'}" prop="quantity" align="center" label="订单数量" min-width="150px"/>
          <el-editable-column prop="salePrice" align="center" label="零售价" min-width="150px"/>
          <el-editable-column prop="costPrice" align="center" label="成本价" min-width="150px"/>
          <el-editable-column prop="taxprice" align="center" label="含税价" min-width="150px">
            <template slot-scope="scope">
              <span>{{ gettaxprice(scope.row) }}</span>
            </template>
          </el-editable-column>
          <el-editable-column prop="costMoney" align="center" label="成本金额" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getcostMoney(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column prop="includeTaxMoney" align="center" label="含税金额" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getincludeTaxMoney(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="taxRate" align="center" label="税率(%)" min-width="170px">
            <template slot="edit" slot-scope="scope">
              <el-input-number
                :precision="2"
                :controls="false"
                v-model="scope.row.taxRate"
                @change="gettaxRate(scope.row)"/>
            </template>
          </el-editable-column>
          <el-editable-column prop="taxMoney" align="center" label="税额" min-width="170px">
            <template slot-scope="scope">
              <p>{{ getTaxMoney2(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column prop="money" align="center" label="金额" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getMoney(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column prop="includeTaxCostMoney" align="center" label="含税成本金额" min-width="170px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="discount" align="center" label="折扣率(%)" min-width="170px">
            <template slot="edit" slot-scope="scope">
              <el-input-number
                :precision="2"
                :controls="false"
                v-model="scope.row.discount"
                @input="getdiscountRate(scope.row)"/>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="discountMoney" align="center" label="折扣额" min-width="170px">
            <template slot="edit" slot-scope="scope">
              <el-input-number
                :precision="2"
                :controls="false"
                v-model="scope.row.discountMoney"
                @input="getdiscountMoney(scope.row)"/>
            </template>
          </el-editable-column>
          <el-editable-column prop="alreadyApplicationQuantity" align="center" label="已下达采购数量" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElDatePicker', attrs: {type: 'date', format: 'yyyy-MM-dd'}, type: 'visible'}" prop="deliveryDate" align="center" label="需求日期" min-width="180px">
            <template slot="edit" slot-scope="scope">
              <el-date-picker
                v-model="scope.row.deliveryDate"
                :picker-options="pickerOptions2"
                type="date"
                value-format="yyyy-MM-dd"/>
            </template>
          </el-editable-column>
          <el-editable-column prop="alreadyProduceQuantity" align="center" label="已下达生产数量" min-width="150px"/>
        </el-editable>
      </div>
    </el-card>
    <!--<el-card class="box-card" style="margin-top: 15px" shadow="never">-->
    <!--<h2 ref="fuzhu" class="form-name" >销售费用明细</h2>-->
    <!--<div class="buttons" style="margin-top: 35px;margin-bottom: 10px;">-->
    <!--<el-button @click="$refs.editable2.insert(-1)">添加</el-button>-->
    <!--<el-button type="danger" @click="$refs.editable2.removeSelecteds()">删除</el-button>-->
    <!--</div>-->
    <!--<div class="container">-->
    <!--<el-editable-->
    <!--ref="editable2"-->
    <!--:data.sync="list3"-->
    <!--:edit-config="{ showIcon: true, showStatus: true}"-->
    <!--:edit-rules="validRules"-->
    <!--class="click-table1"-->
    <!--stripe-->
    <!--border-->
    <!--size="medium"-->
    <!--style="width: 100%">-->
    <!--<el-editable-column type="selection" min-width="55" align="center"/>-->
    <!--<el-editable-column label="序号" width="60" align="center" type="index"/>-->
    <!--<el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" prop="costName" align="center" label="费用名称" min-width="150px"/>-->
    <!--<el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="money" align="center" label="金额" min-width="150px"/>-->
    <!--<el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" prop="remark" align="center" label="备注" min-width="150px"/>-->
    <!--</el-editable>-->
    <!--</div>-->
    <!--</el-card>-->
    <el-card class="box-card" shadow="never" style="margin-top: 10px">
      <h2 ref="geren" class="form-name">合计信息</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm2" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji1')" style="width: 100%;">
                <el-input v-model="personalForm.allQuantity" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji2')" style="width: 100%;">
                <el-input v-model="personalForm.allMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji3')" style="width: 100%;">
                <el-input v-model="personalForm.allIncludeTaxMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji4')" style="width: 100%;">
                <el-input v-model="personalForm.allTaxMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji5')" style="width: 100%;">
                <el-input v-model="personalForm.allDiscountMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji6')" style="width: 100%;">
                <el-input v-model="personalForm.allIncludeTaxDiscountMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji7')" style="width: 100%;">
                <el-input v-model="personalForm.allIncludeTaxCostMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji8')" style="width: 100%;">
                <el-input v-model="personalForm.allCostMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.heji9')" style="width: 100%;">
                <el-input v-model="personalForm.otherMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" shadow="never" style="margin-top: 10px">
      <h2 ref="geren" class="form-name">相关单据状态</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm3" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.backType')" prop="backType" style="width: 100%;">
                <el-select v-model="personalForm.backType" style="margin-left: 18px;width: 200px" disabled>
                  <el-option value="1" label="已回款"/>
                  <el-option value="2" label="未回款"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.backMoney')" style="width: 100%;">
                <el-input v-model="personalForm.backMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('SaleOrder.sendType')" style="width: 100%;">
                <el-select v-model="personalForm.sendType" style="margin-left: 18px;width: 200px" disabled>
                  <el-option value="1" label="已发货"/>
                  <el-option value="2" label="未发货"/>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" style="position: fixed;width: 1010px;z-index: 100;height: 74px;bottom: 0;" shadow="never">
      <div class="buttons" style="float: right;padding-bottom: 10px">
        <el-button @click="handlecancel()">取消</el-button>
        <el-button type="primary" @click="handleEditok()">保存</el-button>
      </div>
    </el-card>
  </el-dialog>
</template>

<script>
import { updatesaleOrder } from '@/api/SaleOrder'
import { searchSaleCategory } from '@/api/SaleCategory'
import MyEmp from './MyEmp'
import MyDelivery from '../../DailyAdjust/components/MyDelivery'
import MyDetail from './MyDetail'
import MyApply from './MyApply'
import MySupplier from '../../Product/components/MySupplier'
import MyRequire from './MyRequire'
import MyCustomer from './MyCustomer'
import MyAgent from './MyAgent'
export default {
  components: { MyAgent, MyCustomer, MyRequire, MySupplier, MyApply, MyDetail, MyDelivery, MyEmp },
  props: {
    editcontrol: {
      type: Boolean,
      default: false
    },
    editdata: {
      type: Object,
      default: null
    }
  },
  data() {
    const validatePass = (rule, value, callback) => {
      console.log(this.supplierId)
      if (this.salePersonId === undefined || this.salePersonId === null || this.salePersonId === '') {
        callback(new Error('请选择销售人员'))
      } else {
        callback()
      }
    }
    return {
      // 选择的数据
      choosedata: [],
      // 弹窗组件的控制
      editVisible: this.editcontrol,
      // 修改信息数据
      personalForm: this.editdata,
      // 合计信息
      heji1: '',
      heji2: '',
      heji3: '',
      heji4: '',
      heji5: '',
      heji6: '',
      heji7: '',
      heji8: '',
      heji9: '',
      // 回显客户
      customerId: '',
      // 控制客户
      customercontrol: false,
      agentcontrol: false,
      // 销售人员回显
      salePersonId: '',
      // 控制销售人员
      stockControl: false,
      // 开票类别数据
      invoiceTypes: [],
      // 开票类别获取参数
      invoicetypeparms: {
        type: 4,
        pagenum: 1,
        pagesize: 99999
      },
      // 结算方式数据
      colseTypes: [],
      // 结算方式获取参数
      colseTypeparms: {
        type: 3,
        pagenum: 1,
        pagesize: 99999
      },
      // 控制商品列表窗口
      control: false,
      // 销售订单规则数据
      personalrules: {
        customerType: [
          { required: true, message: '请选择客户类别', trigger: 'change' }
        ],
        customerName: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ],
        transDate: [
          { required: true, message: '请选择送货日期', trigger: 'change' }
        ],
        salePersonId: [
          { required: true, validator: validatePass, trigger: 'change' }
        ],
        backType: [
          { required: true, message: '请选择回款状态', trigger: 'change' }
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
  watch: {
    editcontrol() {
      this.editVisible = this.editcontrol
    },
    editdata() {
      this.personalForm = this.editdata
      this.planPersonId = this.personalForm.planPersonName
      this.stockPersonId = this.personalForm.stockPersonName
      this.list2 = this.personalForm.saleOrderDetailVos
      this.list3 = this.personalForm.saleOrderCostDetails
      this.chooseType()
    }
  },
  created() {
    this.getTypes()
  },
  methods: {
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
              return (Number(prev) + Number(curr)).toFixed(2)
            } else {
              return (Number(prev)).toFixed(2)
            }
          }, 0)
          sums[index] += ''
        } else {
          sums[index] = ''
        }
      })
      sums[2] = ''
      sums[6] = ''
      sums[8] = ''
      sums[9] = ''
      this.heji1 = sums[10]
      this.heji2 = sums[18]
      this.heji3 = sums[15]
      this.heji4 = sums[17]
      this.heji5 = sums[21]
      this.heji6 = sums[15] - sums[21]
      this.heji7 = sums[19]
      this.heji8 = sums[14]
      return sums
    },
    // 计算成本金额
    getcostMoney(row) {
      row.costMoney = (row.costPrice * row.quantity).toFixed(2)
      return row.costMoney
    },
    // 计算含税金额
    getincludeTaxMoney(row) {
      row.includeTaxMoney = (row.taxprice * row.quantity).toFixed(2)
      return row.includeTaxMoney
    },
    // 通过税率计算含税价
    gettaxRate(row) {
      if (row.taxprice !== 0) {
        row.taxprice = (row.salePrice * (1 + row.taxRate / 100)).toFixed(2)
      }
    },
    // 计算税额
    getTaxMoney2(row) {
      row.taxMoney = (row.salePrice * row.taxRate / 100 * row.quantity).toFixed(2)
      return row.taxMoney
    },
    // 通过折扣率计算折扣额
    getdiscountRate(row) {
      if (row.discount === 0) {
        row.discountMoney = 0
      } else {
        row.discountMoney = (row.salePrice * row.quantity * (1 - row.discount / 100)).toFixed(2)
      }
    },
    // 通过折扣额计算折扣率
    getdiscountMoney(row) {
      console.log(row)
      if (row.salePrice !== 0 && row.quantity !== 0 && row.discountMoney !== 0) {
        row.discount = ((1 - row.discountMoney / row.salePrice / row.quantity) * 100).toFixed(2)
      }
    },
    // 计算金额
    getMoney(row) {
      row.money = (row.quantity * row.salePrice).toFixed(2)
      return row.money
    },
    // 含税价
    gettaxprice(row) {
      row.taxprice = (row.salePrice * (1 + row.taxRate / 100)).toFixed(2)
      return row.taxprice
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
    customerdata(val) {
      this.personalForm.customerId = val.id
      this.customerId = val.customerName
      this.personalForm.customerPhone = val.phoneNumber
    },
    agentdata(val) {
      this.personalForm.customerId = val.id
      this.customerId = val.agentName
      this.personalForm.customerPhone = val.phone
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
    deleteChange(val) {
      this.choosedata = val
    },
    // 更新类型
    updatecountry() {
      this.getTypes()
    },
    getTypes() {
      // 开票类型数据
      searchSaleCategory(this.invoicetypeparms).then(res => {
        if (res.data.ret === 200) {
          this.invoiceTypes = res.data.data.content.list
        }
      })
      // 结算方式数据
      searchSaleCategory(this.colseTypeparms).then(res => {
        if (res.data.ret === 200) {
          this.colseTypes = res.data.data.content.list
        }
      })
    },
    // 销售人员focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 销售员回显
    stockName(val) {
      this.salePersonId = val.personName
      this.personalForm.salePersonId = val.id
    },
    // 清空记录
    restAllForm() {
      this.personalForm = {
        createPersonId: 3,
        countryId: 1,
        repositoryId: 438,
        regionId: 2
      }
      this.customerId = null
      this.salePersonId = null
    },
    // 修改和取消按钮
    // 修改按钮
    handleEditok() {
      this.personalForm.repositoryId = 438
      this.personalForm.regionId = 2
      this.personalForm.createPersonId = 3
      this.personalForm.countryId = 1
      this.personalForm.modifyPersonId = 3
      const EnterDetail = this.$refs.editable.getRecords()
      const EnterDetail2 = this.$refs.editable2.getRecords()
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
        if (elem.typeId === null || elem.typeId === '' || elem.typeId === undefined) {
          delete elem.typeId
        }
        if (elem.unit === null || elem.unit === '' || elem.unit === undefined) {
          delete elem.unit
        }
        if (elem.color === null || elem.color === '' || elem.color === undefined) {
          delete elem.color
        }
        if (elem.performanceScore === null || elem.performanceScore === '' || elem.performanceScore === undefined) {
          delete elem.performanceScore
        }
        if (elem.productScore === null || elem.productScore === '' || elem.productScore === undefined) {
          delete elem.productScore
        }
        if (elem.quantity === null || elem.quantity === '' || elem.quantity === undefined) {
          delete elem.quantity
        }
        if (elem.salePrice === null || elem.salePrice === '' || elem.salePrice === undefined) {
          delete elem.salePrice
        }
        if (elem.costPrice === null || elem.costPrice === '' || elem.costPrice === undefined) {
          delete elem.costPrice
        }
        if (elem.costMoney === null || elem.costMoney === '' || elem.costMoney === undefined) {
          delete elem.costMoney
        }
        if (elem.includeTaxMoney === null || elem.includeTaxMoney === '' || elem.includeTaxMoney === undefined) {
          delete elem.includeTaxMoney
        }
        if (elem.taxRate === null || elem.taxRate === '' || elem.taxRate === undefined) {
          delete elem.taxRate
        }
        if (elem.taxRate !== null || elem.taxRate !== '' || elem.taxRate !== undefined) {
          elem.taxRate = elem.taxRate / 100
        }
        if (elem.taxMoney === null || elem.taxMoney === '' || elem.taxMoney === undefined) {
          delete elem.taxMoney
        }
        if (elem.money === null || elem.money === '' || elem.money === undefined) {
          delete elem.money
        }
        if (elem.includeTaxCostMoney === null || elem.includeTaxCostMoney === '' || elem.includeTaxCostMoney === undefined) {
          delete elem.includeTaxCostMoney
        }
        if (elem.discount === null || elem.discount === '' || elem.discount === undefined) {
          delete elem.discount
        }
        if (elem.discount !== null || elem.discount !== '' || elem.discount !== undefined) {
          elem.discount = elem.discount / 100
        }
        if (elem.discountMoney === null || elem.discountMoney === '' || elem.discountMoney === undefined) {
          delete elem.discountMoney
        }
        return elem
      })
      EnterDetail2.map(function(elem) {
        return elem
      }).forEach(function(elem) {
        if (elem.costName === null || elem.costName === '' || elem.costName === undefined) {
          delete elem.costName
        }
        if (elem.money === null || elem.money === '' || elem.money === undefined) {
          delete elem.money
        }
        if (elem.remark === null || elem.remark === '' || elem.remark === undefined) {
          delete elem.remark
        }
        return elem
      })
      const parms2 = JSON.stringify(EnterDetail)
      const parms3 = JSON.stringify(EnterDetail2)
      const Data = this.personalForm
      for (const key in Data) {
        if (Data[key] === '' || Data[key] === undefined || Data[key] === null) {
          delete Data[key]
        }
      }
      const parms = JSON.stringify(Data)
      updatesaleOrder(parms, parms2, parms3).then(res => {
        if (res.data.ret === 200) {
          this.$notify({
            title: '操作成功',
            message: '操作成功',
            type: 'success',
            duration: 1000,
            offset: 100
          })
          this.$emit('rest', true)
          this.$refs.editable.clear()
          this.$refs.editable2.clear()
          this.$refs.personalForm.clearValidate()
          this.$refs.personalForm.resetFields()
          this.editVisible = false
        } else {
          this.$notify.error({
            title: '错误',
            message: '出错了',
            offset: 100
          })
        }
      })
    },
    handlecancel() {
      this.$refs.editable.clear()
      this.$refs.editable2.clear()
      this.$refs.personalForm.clearValidate()
      this.$refs.personalForm.resetFields()
      this.editVisible = false
    }
    // 修改操作结束 -------------------------------------------------
  }
}
</script>

<style scoped>
  .container >>> .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
    margin-left: -10px;
  }
  .container >>> .el-form-item__label{
    text-align: left;
  }
  .container >>> .el-form-item__label{
    color: #60626696;
  }
  .edit >>> .el-dialog {
    background:#f1f1f1 ;
  }
  .el-col-12{
    width: 49%;
  }
</style>
