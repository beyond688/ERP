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
                <el-form-item :label="$t('CheckReport.title')" style="width: 100%;">
                  <el-input v-model="personalForm.title" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.sourceType')" prop="sourceType" style="width: 100%;">
                  <el-select v-model="personalForm.sourceType" style="margin-left: 18px;width: 218px">
                    <el-option value="1" label="质检申请单" />
                    <el-option value="2" label="采购到货单" />
                    <el-option value="3" label="生产任务单" />
                    <el-option value="4" label="无来源" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.sourceNumber')" prop="sourceNumber" style="width: 100%;">
                  <el-input v-model="personalForm.sourceNumber" style="margin-left: 18px" clearable @focus="chooseNumber"/>
                  <my-quality :qualitycontrol.sync="qualitycontrol" @allqualityinfo="allqualityinfo"/>
                  <my-arrival :arrivalcontrol.sync="arrivalcontrol" @allarrivalinfo="allarrivalinfo"/>
                  <produce-task :procontrol.sync="producecontrol" @produce="produce"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.supplierId')" style="width: 100%;">
                  <el-input v-model="supplierId" style="margin-left: 18px" clearable @focus="handlechoose"/>
                  <my-supplier :control.sync="empcontrol" @supplierName="supplierName"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.inspectionPersonId')" prop="inspectionPersonId" style="width: 100%;">
                  <el-input v-model="inspectionPersonId" style="margin-left: 18px" clearable @focus="handlechooseStock"/>
                  <my-emp :control.sync="stockControl" @stockName="stockName"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.inspectionDeptId')" prop="reportDeptId" style="width: 100%;">
                  <el-select v-model="personalForm.inspectionDeptId" clearable style="margin-left: 18px;width: 218px" @change="change()">
                    <el-option
                      v-for="(item, index) in depts"
                      :key="index"
                      :value="item.id"
                      :label="item.deptName"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.checkType')" prop="checkType" style="width: 100%;">
                  <el-select v-model="personalForm.checkType" value="personalForm.checkType" style="margin-left: 18px;width: 218px" @change="change()">
                    <el-option value="1" label="来料质检"/>
                    <el-option value="2" label="送样质检"/>
                    <el-option value="3" label="生产质检"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.checkMode')" prop="checkMode" style="width: 100%;">
                  <el-select v-model="personalForm.checkMode" value="personalForm.checkMode" style="margin-left: 18px;width: 218px" @change="change()">
                    <el-option value="1" label="抽样"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.produceManagerId')" style="width: 100%;">
                  <el-input v-model="produceManagerId" style="margin-left: 18px" clearable @focus="handlechooseDelivery"/>
                </el-form-item>
                <my-delivery :deliverycontrol.sync="deliverycontrol" @deliveryName="deliveryName"/>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.workCenterId')" style="width: 100%;">
                  <el-input v-model="workCenterId" style="margin-left: 18px" clearable @focus="workcenterchoose"/>
                  <my-center :control.sync="centercontrol" @center="center"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.checkPersonId')" style="width: 100%;">
                  <el-input v-model="checkPersonId" style="margin-left: 18px" clearable @focus="handlechooseAccept"/>
                  <my-accept :accetpcontrol.sync="accetpcontrol" @acceptName="acceptName"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.checkDeptId')" prop="reportDeptId" style="width: 100%;">
                  <el-select v-model="personalForm.checkDeptId" clearable style="margin-left: 18px;width: 218px">
                    <el-option
                      v-for="(item, index) in depts"
                      :key="index"
                      :value="item.id"
                      :label="item.deptName"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.checkDate')" prop="checkDate" style="width: 100%;">
                  <el-date-picker
                    v-model="personalForm.checkDate"
                    type="date"
                    value-format="yyyy-MM-dd"
                    style="margin-left: 18px"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>

      <el-card class="box-card" shadow="never" style="margin-top: 10px">
        <h2 ref="geren" class="form-name">物品信息</h2>
        <div class="container" style="margin-top: 37px">
          <el-form ref="personalForm2" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
            <el-row>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.productCode')" prop="productCode" style="width: 100%;">
                  <el-input v-model="personalForm.productCode" style="margin-left: 18px" @focus="handlemater"/>
                  <my-mater :matercontrol.sync="matercontrol" @mater="mater"/>
                  <detail-report :reportcontrol.sync="reportcontrol" :reportdata.sync="reportdata" @report="report"/>
                  <detail-report2 :reportcontrol2.sync="reportcontrol2" :reportdata2.sync="reportdata2" @report2="report2"/>
                  <detail-report3 :reportcontrol3.sync="reportcontrol3" :reportdata3.sync="reportdata3" @report3="report3"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.productName')" style="width: 100%;">
                  <el-input v-model="personalForm.productName" style="margin-left: 18px" disabled/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.unit')" style="width: 100%;">
                  <el-input v-model="personalForm.unit" style="margin-left: 18px" disabled/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.typeId')" style="width: 100%;">
                  <el-input v-model="typeId" style="margin-left: 18px" disabled/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <el-card class="box-card" shadow="never" style="margin-top: 10px">
        <h2 ref="geren" class="form-name">检验信息</h2>
        <div class="container" style="margin-top: 37px">
          <el-form ref="personalForm3" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
            <el-row>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.checkQuantity')" prop="checkQuantity" style="width: 100%;">
                  <el-input v-model="personalForm.checkQuantity" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.sampleQuantity')" prop="sampleQuantity" style="width: 100%;">
                  <el-input v-model="personalForm.sampleQuantity" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.passQuantity')" style="width: 100%;">
                  <el-input v-model="personalForm.passQuantity" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.failedQuantity')" style="width: 100%;">
                  <el-input v-model="personalForm.failedQuantity" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.passRate')" style="width: 100%;">
                  <el-input v-model="personalForm.passRate" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.checkResult')" style="width: 100%;">
                  <el-input v-model="personalForm.checkResult" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('CheckReport.isRecheck')" style="width: 100%;">
                  <el-radio-group v-model="personalForm.isRecheck" style="margin-left: 18px">
                    <el-radio :label="1" style="width: 120px">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <!--子件信息-->
      <el-card class="box-card" style="margin-top: 15px" shadow="never">
        <h2 ref="fuzhu" class="form-name" >质检报告单明细</h2>
        <div class="buttons" style="margin-top: 35px;margin-bottom: 10px;">
          <el-button @click="$refs.editable.insert(-1)">添加</el-button>
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
            <el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" prop="checkItem" align="center" label="检验项目" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="checkTarget" align="center" label="检验指标" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="checkValue" align="center" label="检验值" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" prop="chectResult" align="center" label="检验结果" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="checkQuantity" align="center" label="检验数量" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="passQuantity" align="center" label="合格数量" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="failedQuantity" align="center" label="不合格数量" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" prop="checkPersonname" align="center" label="检验人员" min-width="150px">
              <template slot="edit" slot-scope="scope">
                <el-input v-model="scope.row.checkPersonname" @focus="handlechoosestaff"/>
                <my-emp2 :staffcontrol.sync="staffcontrol" @chuli="chuli(scope, $event)"/>
              </template>
            </el-editable-column>
            <el-editable-column :edit-render="{name: 'ElSelect', options: depts2, type: 'visible'}" prop="checkDeptId" align="center" label="检验部门" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="targetUp" align="center" label="指标上限" min-width="150px"/>
            <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="targetDown" align="center" label="指标下限" min-width="150px"/>
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
import { addqualitycheck } from '@/api/CheckReport'
import { productlist } from '@/api/public'
import { getdeptlist } from '@/api/BasicSettings'
import MyEmp from './components/MyEmp'
import MyDetail from './components/MyDetail'
import MySupplier from './components/MySupplier'
import MyDelivery from './components/MyDelivery'
import MyCenter from './components/MyCenter'
import MyArrival from './components/MyArrival'
import ProduceTask from './components/ProduceTask'
import MyAccept from './components/MyAccept'
import MyQuality from './components/MyQuality'
import MyMater from './components/MyMater'
import MyEmp2 from './components/MyEmp2'
import DetailReport from './components/DetailReport'
import DetailReport2 from './components/DetailReport2'
import DetailReport3 from './components/DetailReport3'
export default {
  name: 'AddCheckReport',
  components: { DetailReport3, DetailReport2, DetailReport, MyEmp2, MyMater, MyQuality, MyAccept, ProduceTask, MyArrival, MyCenter, MyDelivery, MySupplier, MyDetail, MyEmp },
  data() {
    const validatePass = (rule, value, callback) => {
      console.log(value)
      if (value === '') {
        callback(new Error('请选择'))
      } else {
        callback()
      }
    }
    return {
      // 生产任务单传给物品信息数据
      reportdata3: [],
      // 生产任务单控制物品明细
      reportcontrol3: false,
      // 采购到货单传给物品信息数据
      reportdata2: [],
      // 采购到货单控制物品明细
      reportcontrol2: false,
      // 传给物品信息数据
      reportdata: [],
      // 控制物品明细
      reportcontrol: false,
      // 控制检验人员
      staffcontrol: false,
      // 检验人员回显
      checkPersonname: '',
      // 物品单位回显
      unit: '',
      // 物品规格回显
      typeId: '',
      // 控制物品信息
      matercontrol: false,
      // 控制质检申请
      qualitycontrol: false,
      // 检验人员回显
      checkPersonId: '',
      // 控制检验人员
      accetpcontrol: false,
      // 工作中心回显
      workCenterId: '',
      // 控制工作中心
      centercontrol: false,
      // 生产负责人回显
      produceManagerId: '',
      // 控制生产负责人
      deliverycontrol: false,
      // 供应商回显
      supplierId: '',
      // 控制供应商
      empcontrol: false,
      // 选择的数据
      choosedata: [],
      // 部门数据
      depts: [],
      // 检验部门数据
      depts2: [],
      // 报检人员回显
      inspectionPersonId: '',
      // 控制报检人员
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
      // 控制源单为采购到货单时
      arrivalcontrol: false,
      // 控制源单为生产任务单时
      producecontrol: false,
      // 采购申请单信息数据
      personalForm: {
        createPersonId: 3,
        countryId: 1,
        repositoryId: 438,
        regionId: 2,
        isVat: 1
      },
      // 采购申请单规则数据
      personalrules: {
        sourceNumber: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ],
        inspectionPersonId: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ],
        checkPersonId: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ],
        productCode: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ],
        checkDate: [
          { required: true, message: '请选择检验日期', trigger: 'change' }
        ],
        inspectionDeptId: [
          { required: true, message: '请选择报检部门', trigger: 'change' }
        ],
        checkDetpId: [
          { required: true, message: '请选择检验部门', trigger: 'change' }
        ],
        sourceType: [
          { required: true, message: '请选择源单类型', trigger: 'change' }
        ],
        checkType: [
          { required: true, message: '请选择质检类别', trigger: 'none' }
        ],
        checkMode: [
          { required: true, message: '请选择检验方式', trigger: 'none' }
        ],
        checkQuantity: [
          { required: true, message: '请输入报检数量', trigger: 'blur' }
        ],
        sampleQuantity: [
          { required: true, message: '请输入抽样数量', trigger: 'blur' }
        ]
      },
      // 采购申请单明细数据
      list2: [],
      // 采购申请单明细列表规则
      validRules: {
      }
    }
  },
  created() {
    this.getTypes()
  },
  methods: {
    // 检验人员focus事件触发
    handlechoosestaff() {
      this.staffcontrol = true
    },
    chuli(scope, val) {
      scope.row.checkPersonname = val.personName
      scope.row.checkPersonId = val.id
    },
    // 物品信息focus事件
    handlemater() {
      if (this.personalForm.sourceType === '1') {
        this.reportcontrol = true
      } else if (this.personalForm.sourceType === '2') {
        this.reportcontrol2 = true
      } else if (this.personalForm.sourceType === '3') {
        this.reportcontrol3 = true
      } else if (this.personalForm.sourceType === '4') {
        this.matercontrol = true
      }
    },
    // 源单为质检申请单时返回数据
    report(val) {
      console.log(val)
      this.personalForm.productCode = val.productCode
      this.personalForm.productName = val.productName
      this.personalForm.unit = val.unit
      productlist(val.productCode).then(res => {
        if (res.data.ret === 200) {
          this.personalForm.typeId = res.data.data.content.list[0].typeId
          this.typeId = res.data.data.content.list[0].productType
        }
      })
    },
    // 源单为采购到货单时返回数据
    report2(val) {
      console.log(val)
      this.personalForm.productCode = val.productCode
      this.personalForm.productName = val.productName
      this.personalForm.unit = val.unit
      this.personalForm.typeId = val.type
      this.typeId = val.typeName
    },
    // 源单为采购到货单时返回数据
    report3(val) {
      console.log(val)
      this.personalForm.productCode = val.productCode
      this.personalForm.productName = val.productName
      this.personalForm.unit = val.unit
      this.personalForm.typeId = val.typeId
      this.typeId = val.productType
    },
    mater(val) {
      this.personalForm.productCode = val.code
      this.personalForm.productName = val.productName
      this.personalForm.unit = val.produceMeasurement
      this.personalForm.typeId = val.typeId
      this.typeId = val.productType
    },
    // 重置一下下拉
    change() {
      this.$forceUpdate()
    },
    getTypes() {
      // 部门列表数据
      getdeptlist().then(res => {
        if (res.data.ret === 200) {
          this.depts = res.data.data.content
          this.depts2 = res.data.data.content.map(function(item) {
            return {
              'value': item.id,
              'label': item.deptName
            }
          })
        }
      })
    },
    // 工作中心focus事件
    workcenterchoose() {
      this.centercontrol = true
    },
    center(val) {
      console.log(val)
      this.workCenterId = val.workCenterName
      this.personalForm.workCenterId = val.id
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
    },
    // 报检人员focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 报检人员回显
    stockName(val) {
      this.inspectionPersonId = val.personName
      this.personalForm.inspectionPersonId = val.id
    },
    // 生产负责人foucs事件触发
    handlechooseDelivery() {
      this.deliverycontrol = true
    },
    deliveryName(val) {
      this.produceManagerId = val.personName
      this.personalForm.produceManagerId = val.id
    },
    // 检验人员focus事件触发
    handlechooseAccept() {
      this.accetpcontrol = true
    },
    acceptName(val) {
      this.checkPersonId = val.personName
      this.personalForm.checkPersonId = val.id
    },
    // 选择源单focus事件触发
    chooseNumber() {
      if (this.personalForm.sourceType === '1') {
        this.qualitycontrol = true
      } else if (this.personalForm.sourceType === '2') {
        this.arrivalcontrol = true
      } else if (this.personalForm.sourceType === '3') {
        this.producecontrol = true
      }
    },
    allqualityinfo(val) {
      this.$refs.personalForm.resetFields()
      this.reportdata = val.qualityCheckDetails
      this.personalForm.sourceNumber = val.checkNumber
      this.personalForm.supplierId = val.supplierId
      this.supplierId = val.supplierName
      this.personalForm.inspectionPersonId = val.reportPersonId
      this.inspectionPersonId = val.reportPersonName
      this.personalForm.inspectionDeptId = val.reportDeptId
      this.personalForm.checkType = String(val.checkType)
      this.personalForm.checkMode = String(val.checkMode)
      this.personalForm.produceManagerId = val.produceManagerId
      this.produceManagerId = val.produceManagerName
      this.personalForm.workCenterId = val.workCenterId
      this.workCenterId = val.workCenter
    },
    // 源单类型为采购到货单
    allarrivalinfo(val) {
      this.reportdata2 = val.stockArrivalDetailVos
      this.personalForm.sourceNumber = val.number
      this.personalForm.supplierId = val.supplierId
      this.supplierId = val.supplierName
    },
    // 源单类型为生产任务单
    produce(val) {
      this.reportdata3 = val.produceTaskDetailVos
      this.personalForm.sourceNumber = val.taskNumber
      this.personalForm.produceManagerId = val.handlePersonId
      this.produceManagerId = val.handlePersonName
    },
    // 质检申请单明细来源为无来源时
    handleAddproduct() {
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
      this.inspectionPersonId = null
      this.supplierId = null
      this.workCenterId = null
      this.produceManagerId = null
      this.checkPersonId = null
    },
    // 保存操作
    handlesave() {
      const EnterDetail = this.$refs.editable.getRecords()
      EnterDetail.map(function(elem) {
        return elem
      }).forEach(function(elem) {
        if (elem.checkItem === null || elem.checkItem === '' || elem.checkItem === undefined) {
          delete elem.checkItem
        }
        if (elem.checkTarget === null || elem.checkTarget === '' || elem.checkTarget === undefined) {
          delete elem.checkTarget
        }
        if (elem.checkValue === null || elem.checkValue === '' || elem.checkValue === undefined) {
          delete elem.checkValue
        }
        if (elem.chectResult === null || elem.chectResult === '' || elem.chectResult === undefined) {
          delete elem.chectResult
        }
        if (elem.checkQuantity === null || elem.checkQuantity === '' || elem.checkQuantity === undefined) {
          delete elem.checkQuantity
        }
        if (elem.passQuantity === null || elem.passQuantity === '' || elem.passQuantity === undefined) {
          delete elem.passQuantity
        }
        if (elem.failedQuantity === null || elem.failedQuantity === '' || elem.failedQuantity === undefined) {
          delete elem.failedQuantity
        }
        if (elem.checkDeptId === null || elem.checkDeptId === '' || elem.checkDeptId === undefined) {
          delete elem.checkDeptId
        }
        if (elem.checkPersonId === null || elem.checkPersonId === '' || elem.checkPersonId === undefined) {
          delete elem.checkPersonId
        }
        if (elem.targetUp === null || elem.targetUp === '' || elem.targetUp === undefined) {
          delete elem.targetUp
        }
        if (elem.targetDown === null || elem.targetDown === '' || elem.targetDown === undefined) {
          delete elem.targetDown
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
          addqualitycheck(parms, parms2, this.personalForm).then(res => {
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
              this.$refs.personalForm3.clearValidate()
              this.$refs.personalForm3.resetFields()
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
      const view = { path: '/CheckReport/AddCheckReport', name: 'AddCheckReport', fullPath: '/CheckReport/AddCheckReport', title: 'AddCheckReport' }
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
