<template>
  <el-dialog :visible.sync="editVisible" :editcontrol="editcontrol" :editdata="editdata" :close-on-press-escape="false" :title="personalForm.orderNumber +'    修改'" width="1010px" class="edit" top="-10px" @close="$emit('update:editcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card" style="margin-top: 63px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">基本信息</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.title')" style="width: 100%;">
                <el-input v-model="personalForm.title" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.sourceType')" prop="sourceType" style="width: 100%;">
                <el-select v-model="personalForm.sourceType" style="margin-left: 18px;width: 200px" @change="chooseType">
                  <el-option value="1" label="采购申请" />
                  <el-option value="2" label="采购计划" />
                  <el-option value="3" label="采购询价单" />
                  <el-option value="4" label="采购合同" />
                  <el-option value="5" label="无来源" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.supplierId')" prop="supplierId" style="width: 100%;">
                <el-input v-model="supplierId" style="margin-left: 18px;width: 200px" clearable @focus="handlechoose"/>
                <my-supplier :control.sync="empcontrol" @supplierName="supplierName"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.stockPersonId')" prop="stockPersonId" style="width: 100%;">
                <el-input v-model="stockPersonId" :disabled="IsStockPersonId" style="margin-left: 18px;width: 200px" clearable @focus="handlechooseStock"/>
                <my-emp :control.sync="stockControl" @stockName="stockName"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.stockType')" prop="stockType" style="width: 100%;">
                <el-select v-model="personalForm.stockTypeId" :disabled="IsStockTypeId" style="margin-left: 18px;width: 200px" @focus="updatecountry">
                  <el-option
                    v-for="(item, index) in types"
                    :key="index"
                    :label="item.categoryName"
                    :value="item.id"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.deptId')" prop="deptId" style="width: 100%;">
                <el-select v-model="personalForm.deptId" :disabled="IsDeptId" clearable style="margin-left: 18px;width: 200px">
                  <el-option
                    v-for="(item, index) in depts"
                    :key="index"
                    :value="item.id"
                    :label="item.deptName"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.payMode')" style="width: 100%;">
                <el-select v-model="personalForm.payMode" :disabled="IsPayMode" clearable style="margin-left: 18px;width: 200px">
                  <el-option value="1" label="现金"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.orderDate')" prop="signDate" style="width: 100%;">
                <el-date-picker
                  v-model="personalForm.orderDate"
                  :picker-options="pickerOptions1"
                  type="date"
                  value-format="yyyy-MM-dd"
                  style="margin-left: 18px;width: 200px"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.signPersonId')" style="width: 100%;">
                <el-input v-model="signPersonId" :disabled="IsSignPersonId" style="margin-left: 18px;width: 200px" clearable @focus="handlechooseDelivery"/>
              </el-form-item>
              <my-delivery :deliverycontrol.sync="deliverycontrol" @deliveryName="deliveryName"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.deliveryMode')" style="width: 100%;">
                <el-select v-model="personalForm.deliveryMode" :disabled="IsDeliveryMode" clearable style="margin-left: 18px;width: 200px">
                  <el-option
                    v-for="(item, index) in giveIds"
                    :key="index"
                    :label="item.categoryName"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.settleMode')" style="width: 100%;">
                <el-select v-model="personalForm.settleMode" :disabled="IsSettleMode" clearable style="margin-left: 18px;width: 200px">
                  <el-option
                    v-for="(item, index) in paymentIds"
                    :key="index"
                    :label="item.categoryName"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.isVat')" style="width: 100%;">
                <el-radio-group v-model="personalForm.isVat" style="margin-left: 18px;width: 200px">
                  <el-radio :label="1" style="width: 120px">是</el-radio>
                  <el-radio :label="2">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.currency')" prop="currency" style="width: 100%;">
                <el-select v-model="personalForm.currency" :disabled="IsCurrency" clearable style="margin-left: 18px;width: 200px">
                  <el-option value="1" label="RMB"/>
                  <el-option value="2" label="USD"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('StockOrder.supplierNumber')" style="width: 100%;">
                <el-input v-model="personalForm.supplierNumber" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <!--子件信息-->
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">采购询价单明细</h2>
      <div class="buttons" style="margin-top: 35px;margin-bottom: 10px;">
        <el-button :disabled="addpro" @click="handleAddproduct">添加商品</el-button>
        <my-detail :control.sync="control" :supp.sync="supp" @product="productdetail"/>
        <el-button :disabled="addsouce" style="width: 130px" @click="handleAddSouce">从源单中选择</el-button>
        <my-apply :applycontrol.sync="applycontrol" @apply="apply" @allapplyinfo="allapplyinfo"/>
        <my-plan :plancontrol.sync="plancontrol" :supp.sync="supp" @plan="plan" @allPlaninfo="allPlaninfo"/>
        <my-lnquiry :inquirycontrol.sync="inquirycontrol" :supp.sync="supp" @lnquiry="lnquiry" @allLnquirinfo="allLnquirinfo"/>
        <my-contract :contractcontrol.sync="contractcontrol" :supp.sync="supp" @contract="contract" @allcontractinfo="allcontractinfo"/>
        <el-button type="danger" @click="$refs.editable.removeSelecteds()">删除</el-button>
      </div>
      <div class="container">
        <el-editable
          ref="editable"
          :data.sync="list2"
          :edit-config="{ showIcon: true, showStatus: true}"
          :edit-rules="validRules"
          :summary-method="getSummaries"
          show-summary
          class="click-table1"
          stripe
          border
          size="medium"
          style="width: 100%">
          <el-editable-column type="selection" min-width="55" align="center"/>
          <el-editable-column label="序号" min-width="55" align="center" type="index"/>
          <el-editable-column prop="productCode" align="center" label="物品编号" min-width="150px"/>
          <el-editable-column prop="productName" align="center" label="物品名称" min-width="150px"/>
          <el-editable-column prop="productType" align="center" label="规格" min-width="150px"/>
          <el-editable-column prop="unit" align="center" label="单位" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 1, precision: 2}, type: 'visible'}" prop="stockQuantity" align="center" label="采购数量" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="price" align="center" label="单价" min-width="170px">
            <template slot="edit" slot-scope="scope">
              <el-input-number
                :precision="2"
                v-model="scope.row.price"
                @input="getprice(scope.row)"/>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="includeTaxPrice" align="center" label="含税价" min-width="170px">
            <template slot="edit" slot-scope="scope">
              <el-input-number
                :precision="2"
                v-model="scope.row.includeTaxPrice"
                @input="getincludeTaxPrice(scope.row)"/>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="taxRate" align="center" label="税率(%)" min-width="170px">
            <template slot="edit" slot-scope="scope">
              <el-input-number
                :precision="2"
                v-model="scope.row.taxRate"
                @input="gettaxRate(scope.row)"/>
            </template>
          </el-editable-column>
          <el-editable-column prop="money" align="center" label="金额" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getMoney(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column prop="includeTaxMoney" align="center" label="含税金额" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getTaxMoney(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column prop="tax" align="center" label="税额" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getTaxMoney2(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElDatePicker', attrs: {type: 'date', format: 'yyyy-MM-dd'}, type: 'visible'}" prop="deliveryDate" align="center" label="交货日期" min-width="170px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="discountRate" align="center" label="折扣率(%)" min-width="170px">
            <template slot="edit" slot-scope="scope">
              <el-input-number
                :precision="2"
                v-model="scope.row.discountRate"
                @input="getdiscountRate(scope.row)"/>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="discountMoney" align="center" label="折扣额" min-width="170px">
            <template slot="edit" slot-scope="scope">
              <el-input-number
                :precision="2"
                v-model="scope.row.discountMoney"
                @input="getdiscountMoney(scope.row)"/>
            </template>
          </el-editable-column>
          <el-editable-column prop="remark" align="center" label="备注" min-width="150px"/>
          <el-editable-column prop="sourceNumber" align="center" label="源单编号" min-width="150px"/>
          <el-editable-column prop="sourceSerialNumber" align="center" label="源单序号" min-width="150px"/>
          <el-editable-column prop="arrivalQuantity" align="center" label="已到货数量" min-width="150px"/>
        </el-editable>
      </div>
    </el-card>
    <el-card class="box-card" shadow="never" style="margin-top: 10px">
      <h2 ref="geren" class="form-name">合计信息</h2>
      <div class="container" style="margin-top: 37px">
        <el-form :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="采购数量合计" style="width: 100%;">
                <el-input v-model="personalForm.allQuantity" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="金额合计" style="width: 100%;">
                <el-input v-model="personalForm.allMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="税额合计" style="width: 100%;">
                <el-input v-model="personalForm.allTaxMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="含税金额合计" style="width: 100%;">
                <el-input v-model="personalForm.allIncludeTaxMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="整单折扣金额合计" style="width: 100%;">
                <el-input v-model="personalForm.allDiscountMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="折后含税金额合计" style="width: 100%;">
                <el-input v-model="personalForm.allIncludeTaxDiscountMoney" style="margin-left: 18px;width: 200px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="其他费用支出合计" style="width: 100%;">
                <el-input v-model="personalForm.otherMoney" style="margin-left: 18px;width: 200px"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" style="position: fixed;width: 1010px;z-index: 100;height: 70px;bottom: 0;" shadow="never">
      <div class="buttons" style="float: right;padding-bottom: 10px">
        <el-button @click="handlecancel()">取消</el-button>
        <el-button type="primary" @click="handleEditok()">保存</el-button>
      </div>
    </el-card>
  </el-dialog>
</template>

<script>
import { updatestockorder } from '@/api/StockOrder'
import { getdeptlist } from '@/api/BasicSettings'
import { searchStockCategory } from '@/api/StockCategory'
import { searchCategory } from '@/api/Supplier'
import { searchsupplier } from '@/api/public'
import MyEmp from './MyEmp'
import MyDetail from './MyDetail'
import MySupplier from './MySupplier'
import MyApply from './MyApply'
import MyPlan from './MyPlan'
import MyDelivery from './MyDelivery'
import MyLnquiry from './MyLnquiry'
import MyContract from './MyContract'
export default {
  components: { MyContract, MyLnquiry, MyDelivery, MyPlan, MyApply, MySupplier, MyDetail, MyEmp },
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
      if (this.supplierId === undefined || this.supplierId === null || this.supplierId === '') {
        callback(new Error('请选择供应商'))
      } else {
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      console.log(this.signPersonId)
      if (this.signPersonId === undefined || this.signPersonId === null || this.signPersonId === '') {
        callback(new Error('请选择签约人'))
      } else {
        callback()
      }
    }
    const validatePass3 = (rule, value, callback) => {
      console.log(this.stockPersonId)
      if (this.stockPersonId === undefined || this.stockPersonId === null || this.stockPersonId === '') {
        callback(new Error('请选择采购员'))
      } else {
        callback()
      }
    }
    const validatePass4 = (rule, value, callback) => {
      console.log(this.personalForm.deptId)
      if (this.personalForm.deptId === undefined || this.personalForm.deptId === null || this.personalForm.deptId === '') {
        callback(new Error('请选择部门'))
      } else {
        callback()
      }
    }
    return {
      pickerOptions1: {
        disabledDate: (time) => {
          return time.getTime() < new Date().getTime() - 8.64e7
        }
      },
      // 带入的供应商
      supp: null,
      // 控制币种是否可以编辑
      IsCurrency: false,
      // 控制我方签约人是否可以编辑
      IsSignPersonId: false,
      // 控制支付方式是否可以编辑
      IsPayMode: false,
      // 控制结算方式是否可以编辑
      IsSettleMode: false,
      // 控制交货方式是否可以编辑
      IsDeliveryMode: false,
      // 控制供应商是否可以编辑
      IsSupplierId: false,
      // 控制采购员是否可以编辑
      IsStockPersonId: false,
      // 控制采购类别是否可以编辑
      IsStockTypeId: false,
      // 控制部门是否可以编辑
      IsDeptId: false,
      // 选择的数据
      choosedata: [],
      // 弹窗组件的控制
      editVisible: this.editcontrol,
      // 修改信息数据
      personalForm: this.editdata,
      // 合计数据
      allNumber: '',
      allMoney: '',
      allTaxMoney: '',
      allIncludeTaxMoney: '',
      allDiscountMoney: '',
      allMoneyMoveDiscount: '',
      allOhterMoney: '',
      // 交货方式
      giveIds: [],
      // 运送方式
      transportIds: [],
      // 结算方式
      paymentIds: [],
      // 我方签约人回显
      signPersonId: '',
      // 控制我方签约人
      deliverycontrol: false,
      // 控制源单为询价单时
      inquirycontrol: false,
      // 控制源单为采购合同时
      contractcontrol: false,
      // 控制源单为采购计划时
      plancontrol: false,
      // 控制源单为采购申请时
      applycontrol: false,
      // 控制添加商品按钮
      addpro: true,
      // 控制从源单中选择按钮
      addsouce: true,
      // 供应商回显
      supplierId: '',
      // 控制供应商
      empcontrol: false,
      // 部门数据
      depts: [],
      // 采购员回显
      stockPersonId: '',
      // 控制采购员
      stockControl: false,
      // 类别数据
      types: [],
      // 类别获取参数
      typeparms: {
        pagenum: 1,
        pagesize: 99999
      },
      // 控制商品列表窗口
      control: false,
      // 采购申请单规则数据
      personalrules: {
        signPersonId: [
          { required: true, validator: validatePass2, trigger: 'change' }
        ],
        stockPersonId: [
          { required: true, validator: validatePass3, trigger: 'change' }
        ],
        supplierId: [
          { required: true, validator: validatePass, trigger: 'change' }
        ],
        orderDate: [
          { required: true, message: '请选择询价日期', trigger: 'change' }
        ],
        deptId: [
          { required: true, validator: validatePass4, trigger: 'change' }
        ],
        sourceType: [
          { required: true, message: '请选择源单类型', trigger: 'change' }
        ],
        stockTypeId: [
          { required: true, message: '请选择采购类别', trigger: 'change' }
        ]
      },
      // 采购申请单明细数据
      list2: [],
      // 采购申请单明细列表规则
      validRules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'change' }
        ]
      }
    }
  },
  watch: {
    editcontrol() {
      this.editVisible = this.editcontrol
    },
    editdata() {
      this.personalForm = this.editdata
      this.applyPersonId = this.personalForm.applyPersonName
      this.supplierId = this.personalForm.supplierName
      this.stockPersonId = this.personalForm.stockPersonName
      this.signPersonId = this.personalForm.signPersonName
      this.list2 = this.personalForm.stockOrderDetailVos
    }
  },
  created() {
    this.getTypes()
    this.getways()
  },
  methods: {
    // 重置一下下拉
    change() {
      this.$forceUpdate()
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
      sums[3] = ''
      sums[4] = ''
      sums[5] = ''
      sums[7] = ''
      sums[8] = ''
      sums[9] = ''
      sums[13] = ''
      sums[14] = ''
      sums[16] = ''
      sums[17] = ''
      sums[18] = ''
      sums[19] = ''
      this.allNumber = sums[6]
      this.allMoney = sums[10]
      this.allTaxMoney = sums[12]
      this.allIncludeTaxMoney = sums[11]
      this.allDiscountMoney = sums[15]
      this.allMoneyMoveDiscount = sums[11] - sums[15]
      return sums
    },
    getways() {
      // 交货方式
      searchCategory(2).then(res => {
        if (res.data.ret === 200) {
          this.giveIds = res.data.data.content.list
        }
      })
      // 运送方式
      searchCategory(3).then(res => {
        if (res.data.ret === 200) {
          this.transportIds = res.data.data.content.list
        }
      })
      // 结算方式
      searchCategory(5).then(res => {
        if (res.data.ret === 200) {
          this.paymentIds = res.data.data.content.list
        }
      })
    },
    // 通过折扣额计算折扣率
    getdiscountMoney(row) {
      console.log(row)
      if (row.price !== 0 && row.stockQuantity !== 0 && row.discountMoney !== 0) {
        row.discountRate = ((1 - row.discountMoney / row.price / row.stockQuantity) * 100).toFixed(2)
      }
    },
    // 通过折扣率计算折扣额
    getdiscountRate(row) {
      if (row.discountRate === 0) {
        row.discountMoney = 0
      } else {
        row.discountMoney = (row.price * row.stockQuantity * (1 - row.discountRate / 100)).toFixed(2)
      }
    },
    // 通过税率计算含税价
    gettaxRate(row) {
      if (row.includeTaxPrice !== 0) {
        row.includeTaxPrice = (row.price * (1 + row.taxRate / 100)).toFixed(2)
      }
    },
    // 通过含税价计算税率
    getincludeTaxPrice(row) {
      if (row.price !== 0) {
        row.taxRate = ((row.includeTaxPrice / row.price - 1) * 100).toFixed(2)
        console.log(row.taxRate)
      }
    },
    // 计算单价
    getprice(row) {
      row.includeTaxPrice = (row.price * (1 + row.taxRate / 100)).toFixed(2)
    },
    // 计算税额
    getTaxMoney2(row) {
      row.tax = (row.price * row.taxRate / 100 * row.stockQuantity).toFixed(2)
      return row.tax
    },
    // 计算含税金额
    getTaxMoney(row) {
      row.includeTaxMoney = (row.stockQuantity * row.includeTaxPrice).toFixed(2)
      return row.includeTaxMoney
    },
    // 计算金额
    getMoney(row) {
      row.money = (row.stockQuantity * row.price).toFixed(2)
      return row.money
    },
    // 选择源单类型事件
    chooseType() {
      console.log(this.personalForm.sourceType)
      if (this.personalForm.sourceType === '1') {
        this.addsouce = false
        this.addpro = false
        this.IsStockTypeId = true
        this.IsDeptId = true
        this.IsSupplierId = false
        this.IsStockPersonId = false
        this.IsPayMode = false
        this.IsSignPersonId = false
        this.IsDeliveryMode = false
        this.IsSettleMode = false
        this.IsCurrency = false
        if (this.$refs.editable.getRecords().length !== 0) {
          this.$refs.editable.clear()
        }
      } else if (this.personalForm.sourceType === '2') {
        this.addsouce = false
        this.addpro = false
        this.IsStockTypeId = true
        this.IsDeptId = true
        this.IsStockPersonId = true
        this.IsSupplierId = false
        this.IsPayMode = false
        this.IsSignPersonId = false
        this.IsDeliveryMode = false
        this.IsSettleMode = false
        this.IsCurrency = false
        if (this.$refs.editable.getRecords().length !== 0) {
          this.$refs.editable.clear()
        }
      } else if (this.personalForm.sourceType === '3') {
        this.addsouce = false
        this.addpro = false
        this.IsSupplierId = true
        this.IsStockTypeId = true
        this.IsDeptId = true
        this.IsDeliveryMode = true
        this.IsSettleMode = true
        this.IsStockPersonId = false
        this.IsPayMode = false
        this.IsSignPersonId = false
        this.IsCurrency = false
        if (this.$refs.editable.getRecords().length !== 0) {
          this.$refs.editable.clear()
        }
      } else if (this.personalForm.sourceType === '4') {
        this.addsouce = false
        this.addpro = false
        this.IsStockPersonId = true
        this.IsStockTypeId = true
        this.IsDeptId = true
        this.IsDeliveryMode = true
        this.IsSettleMode = true
        this.IsPayMode = true
        this.IsSignPersonId = true
        this.currency = true
        this.IsSupplierId = false
        if (this.$refs.editable.getRecords().length !== 0) {
          this.$refs.editable.clear()
        }
      } else if (this.personalForm.sourceType === '5') {
        this.addpro = false
        this.addsouce = true
        this.IsStockPersonId = false
        this.IsStockTypeId = false
        this.IsDeptId = false
        this.IsDeliveryMode = false
        this.IsSettleMode = false
        this.IsPayMode = false
        this.IsSignPersonId = false
        this.currency = false
        this.IsSupplierId = false
      }
    },
    // 从源单中添加商品
    handleAddSouce() {
      console.log(this.personalForm.supplierId)
      if (this.personalForm.sourceType === '1') {
        this.applycontrol = true
      } else if (this.personalForm.sourceType === '2') {
        if (this.personalForm.supplierId === null || this.personalForm.supplierId === undefined || this.personalForm.supplierId === '') {
          this.$notify.error({
            title: '错误',
            message: '请先选择供应商',
            duration: 0
          })
          return false
        }
        this.plancontrol = true
      } else if (this.personalForm.sourceType === '3') {
        if (this.personalForm.supplierId === null || this.personalForm.supplierId === undefined || this.personalForm.supplierId === '') {
          this.$notify.error({
            title: '错误',
            message: '请先选择供应商',
            duration: 0
          })
          return false
        }
        this.inquirycontrol = true
      } else if (this.personalForm.sourceType === '4') {
        if (this.personalForm.supplierId === null || this.personalForm.supplierId === undefined || this.personalForm.supplierId === '') {
          this.$notify.error({
            title: '错误',
            message: '请先选择供应商',
            duration: 0
          })
          return false
        }
        this.contractcontrol = true
      }
      if (this.$refs.editable.getRecords().length !== 0) {
        this.$refs.editable.clear()
      }
    },
    // 采购合同加载过来数据
    contract(val) {
      console.log(val)
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
    allcontractinfo(val) {
      this.personalForm.supplierId = val.supplierId
      this.supplierId = val.supplierName
      this.stockPersonId = val.stockPersonName
      this.personalForm.stockPersonId = val.stockPersonId
      this.personalForm.stockType = val.stockType
      this.personalForm.deptId = val.deptId
      this.personalForm.isVat = val.isVat
      this.personalForm.payMode = String(val.payId)
      this.signPersonId = val.ourContractorName
      this.personalForm.signPersonId = val.ourContractorId
      this.personalForm.deliveryMode = val.deliveryMode
      this.personalForm.settleMode = val.settleId
      this.personalForm.currency = String(val.currency)
    },
    // 采购询价单加载过来数据
    lnquiry(val) {
      console.log(val)
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
    allLnquirinfo(val) {
      console.log(val)
      this.personalForm.stockTypeId = val.stockTypeId
      this.personalForm.deptId = val.deptId
      searchsupplier(val.supplierName).then(res => {
        if (res.data.ret === 200) {
          console.log(res)
          this.personalForm.deliveryMode = res.data.data.content.list[0].giveId
          this.personalForm.transferId = res.data.data.content.list[0].transportId
          this.personalForm.settleMode = res.data.data.content.list[0].paymentId
        }
        this.getways()
      })
      this.getways()
    },
    // 采购申请加载过来数据
    apply(val) {
      console.log(val)
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
    allapplyinfo(val) {
      console.log(val)
      this.personalForm.stockTypeId = val.stockType
      this.personalForm.deptId = val.applyDeptId
    },
    // 采购计划加载过来数据
    plan(val) {
      console.log(val)
      const nowlistdata = this.$refs.editable.getRecords()
      const quchonggong = this.personalForm.supplierId
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
        if (val[i].supplierId !== quchonggong) {
          console.log(1234)
          continue
        }
        this.$refs.editable.insert(val[i])
      }
    },
    allPlaninfo(val) {
      console.log(val)
      this.personalForm.stockTypeId = val.stockType
      this.personalForm.stockType = val.stockType
      this.personalForm.deptId = val.stockDeptId
      this.personalForm.isVat = val.isVat
      this.stockPersonId = val.stockPersonName
      this.personalForm.stockPersonId = val.stockPersonId
    },
    // 更新类型
    updatecountry() {
      this.getTypes()
    },
    getTypes() {
      // 采购类别数据
      searchStockCategory(this.typeparms).then(res => {
        if (res.data.ret === 200) {
          this.types = res.data.data.content.list
        }
      })
      // 部门列表数据
      getdeptlist().then(res => {
        if (res.data.ret === 200) {
          this.depts = res.data.data.content
        }
      })
    },
    // 供应商输入框focus事件触发
    handlechoose() {
      this.empcontrol = true
    },
    // 供应商列表返回数据
    supplierName(val) {
      console.log(val)
      this.supplierId = val.supplierName
      this.personalForm.supplierId = val.id
      this.supp = val.id
      this.$refs.editable.clear()
    },
    // 采购员focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 采购员回显
    stockName(val) {
      this.stockPersonId = val.personName
      this.personalForm.stockPersonId = val.id
    },
    // 我方签约人foucs事件触发
    handlechooseDelivery() {
      this.deliverycontrol = true
    },
    deliveryName(val) {
      this.signPersonId = val.personName
      this.personalForm.signPersonId = val.id
    },
    // 采购申请明细来源
    handleAddproduct() {
      if (this.personalForm.supplierId === null || this.personalForm.supplierId === undefined || this.personalForm.supplierId === '') {
        this.$notify.error({
          title: '错误',
          message: '请先选择供应商',
          duration: 0
        })
        return false
      }
      this.control = true
    },
    productdetail(val) {
      console.log(val)
      const nowlistdata = this.$refs.editable.getRecords()
      for (let i = 0; i < val.length; i++) {
        console.log(val[i].price)
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
        regionId: 2,
        isVat: 1
      }
      this.supplierId = null
      this.inquiryPersonId = null
      this.stockPersonId = null
      this.signPersonId = null
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
        if (elem.price === null || elem.price === '' || elem.price === undefined) {
          delete elem.price
        }
        if (elem.stockQuantity === null || elem.stockQuantity === '' || elem.stockQuantity === undefined) {
          delete elem.stockQuantity
        }
        if (elem.deliveryDate === null || elem.deliveryDate === '' || elem.deliveryDate === undefined) {
          delete elem.deliveryDate
        }
        if (elem.remarks === null || elem.remarks === '' || elem.remarks === undefined) {
          delete elem.remarks
        }
        if (elem.sourceNumber === null || elem.sourceNumber === '' || elem.sourceNumber === undefined) {
          delete elem.sourceNumber
        }
        if (elem.sourceSerialNumber === null || elem.sourceSerialNumber === '' || elem.sourceSerialNumber === undefined) {
          delete elem.sourceSerialNumber
        }
        if (elem.includeTaxPrice === null || elem.includeTaxPrice === '' || elem.includeTaxPrice === undefined) {
          delete elem.includeTaxPrice
        }
        if (elem.taxRate === null || elem.taxRate === '' || elem.taxRate === undefined) {
          delete elem.taxRate
        }
        if (elem.taxRate !== null || elem.taxRate !== '' || elem.taxRate !== undefined) {
          elem.taxRate = elem.taxRate / 100
        }
        if (elem.discountRate === null || elem.discountRate === '' || elem.discountRate === undefined) {
          delete elem.discountRate
        }
        if (elem.discountRate !== null || elem.discountRate !== '' || elem.discountRate !== undefined) {
          elem.discountRate = elem.discountRate / 100
        }
        if (elem.money === null || elem.money === '' || elem.money === undefined) {
          delete elem.money
        }
        if (elem.includeTaxMoney === null || elem.includeTaxMoney === '' || elem.includeTaxMoney === undefined) {
          delete elem.includeTaxMoney
        }
        if (elem.tax === null || elem.tax === '' || elem.tax === undefined) {
          delete elem.tax
        }
        if (elem.discountRate === null || elem.discountRate === '' || elem.discountRate === undefined) {
          delete elem.discountRate
        }
        if (elem.discountMoney === null || elem.discountMoney === '' || elem.discountMoney === undefined) {
          delete elem.discountMoney
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
          this.$refs.editable.validate().then(valid => {
            updatestockorder(parms, parms2).then(res => {
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
          }).catch(valid => {
            console.log('error submit!!')
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
    handlecancel() {
      this.$refs.editable.clear()
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
