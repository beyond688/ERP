<template>
  <el-dialog :visible.sync="editVisible" :detailcontrol="detailcontrol" :detaildata="detaildata" :close-on-press-escape="false" append-to-body class="edit" top="10px" title="修改采购调价单" @close="$emit('update:detailcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card">
      <h2 ref="geren" class="form-name">基本信息</h2>
      <div class="container">
        <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="100px" style="margin-left: 30px;">
          <el-row>
            <el-col :span="6">
              <el-form-item :label="$t('AdjustPrice.title')" style="width: 100%;">
                <el-input v-model="personalForm.title" placeholder="请输入调价单主题" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="批次" style="width: 100%;">
                <el-input v-model="personalForm.batch" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="国家" style="width: 100%;">
                <el-input v-model="personalForm.countryName" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="制单人" style="width: 100%;">
                <el-input v-model="personalForm.createPersonName" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('AdjustPrice.handlePersonId')" prop="handlePersonId" style="width: 100%;">
                <el-input v-model="handlePersonId" placeholder="请选择经办人" style="margin-left: 18px;width: 150px" disabled @focus="handlechoose"/>
              </el-form-item>
              <my-create :createcontrol.sync="createcontrol" @createname="createname"/>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('AdjustPrice.adjustDeptId')" style="width: 100%;">
                <el-select v-model="personalForm.adjustDeptId" placeholder="请选择调价部门" style="margin-left: 18px;;width: 150px" disabled >
                  <el-option
                    v-for="(item, index) in depts"
                    :key="index"
                    :value="item.id"
                    :label="item.deptName"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('AdjustPrice.adjustRepositoryId')" prop="overflowRepositoryId" style="width: 100%;">
                <el-input v-model="adjustRepositoryId" placeholder="请选择调价仓库" style="margin-left: 18px;width: 150px" disabled @focus="handlechooseRep"/>
              </el-form-item>
              <my-repository :repositorycontrol.sync="repositorycontrol" @repositoryname="repositoryname"/>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('AdjustPrice.adjustDate')" prop="adjustDate" style="width: 100%;">
                <el-date-picker
                  v-model="personalForm.adjustDate"
                  type="date"
                  placeholder="选择调价日期"
                  value-format="yyyy-MM-dd"
                  disabled
                  style="margin-left: 18px;width: 150px"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('AdjustPrice.effectiveDate')" prop="effectiveDate" style="width: 100%;">
                <el-date-picker
                  v-model="personalForm.effectiveDate"
                  type="date"
                  placeholder="选择生效日期"
                  value-format="yyyy-MM-dd"
                  disabled
                  style="margin-left: 18px;width: 150px"/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('AdjustPrice.summary')" prop="summary" style="width: 100%;">
                <el-input v-model="personalForm.summary" placeholder="请输入摘要" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <!--调价单明细-->
    <el-card class="box-card" style="margin-top: 15px">
      <h2 ref="fuzhu" class="form-name">调价单明细</h2>
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
          <el-editable-column type="selection" width="55" align="center"/>
          <el-editable-column label="编号" width="55" align="center" type="index"/>
          <el-editable-column prop="locationCode" align="center" label="货位" width="150px"/>
          <el-editable-column prop="productCode" align="center" label="物品编号" width="150px"/>
          <el-editable-column prop="productName" align="center" label="物品名称" width="150px"/>
          <el-editable-column prop="color" align="center" label="颜色" width="150px"/>
          <el-editable-column prop="productType" align="center" label="规格" width="150px"/>
          <el-editable-column prop="unit" align="center" label="单位" width="150px"/>
          <el-editable-column prop="salePrice" align="center" label="零售原价" width="150px"/>
          <el-editable-column prop="newSalePrice" align="center" label="零售调整价" width="150px"/>
          <el-editable-column prop="tradePrice" align="center" label="批发原价" width="150px"/>
          <el-editable-column prop="newTradePrice" align="center" label="批发调整价" width="150px"/>
          <el-editable-column prop="memberPrice" align="center" label="会员原价" width="150px"/>
          <el-editable-column prop="newMemberPrice" align="center" label="会员调整价" width="150px"/>
          <el-editable-column prop="remarks" align="center" label="备注" width="150px"/>
        </el-editable>
      </div>
    </el-card>
    <!--审核状态-->
    <el-card class="box-card" style="margin-top: 15px">
      <h2 ref="fuzhu" class="form-name">审核状态</h2>
      <el-steps :active="reviewList.length" direction="vertical">
        <el-step
          v-for="(item, index) in reviewList"
          :key="index"
          :title="'审核步骤' + item.step"
          style="height: 100px">
          <template slot="description" >
            <span style="font-size: 16px;color: red">{{ item.stat | statfilter }}</span><br>
            <span style="font-size: 14px">审核人: {{ item.stepHandlerName }}</span><br>
            <span style="font-size: 14px">审核时间: {{ item.createTime }}</span>
          </template>
        </el-step>
      </el-steps>
    </el-card>
    <div class="buttons" style="margin-top: 20px;margin-left: 30px">
      <el-button type="danger" @click="handlecancel()">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { locationlist } from '@/api/WarehouseAdjust'
import { updatrepoadjustprice } from '@/api/AdjustPrice'
import { getdeptlist } from '@/api/BasicSettings'
import MyRepository from './MyRepository'
import MyAccept from './MyAccept'
import MyDetail from './MyDetail'
import MyCreate from './MyCreate'
export default {
  components: { MyRepository, MyCreate, MyAccept, MyDetail },
  filters: {
    statfilter(status) {
      const statusMap = {
        1: '审核中',
        2: '审核通过',
        3: '审核不通过'
      }
      return statusMap[status]
    }
  },
  props: {
    detailcontrol: {
      type: Boolean,
      default: false
    },
    detaildata: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      // 审核步骤数据
      reviewList: [],
      // 弹窗组件的控制
      editVisible: this.detailcontrol,
      // 修改row数据
      personalForm: this.detaildata,
      // 部门数据
      depts: [],
      // 经办人回显
      handlePersonId: '',
      // 生产调价仓库回显
      adjustRepositoryId: '',
      // 控制仓库选择窗口
      repositorycontrol: false,
      // 控制生产负责人选择窗口
      createcontrol: false,
      // 控制商品列表窗口
      control: false,
      // 生产调价单规则数据
      personalrules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        sourceType: [
          { required: true, message: '请选择源单类型', trigger: 'change' }
        ],
        sourceNumber: [
          { required: true, message: '请输入源单编号', trigger: 'blur' }
        ],
        enterPersonId: [
          { required: true, message: '请选择调价人', trigger: 'focus' }
        ],
        enterRepositoryId: [
          { required: true, message: '请选择调价仓库', trigger: 'focus' }
        ]
      },
      // 生产调价单明细数据
      list2: [],
      // 生产调价明细中货位发送参数
      locationlistparms: {
        pageNum: 1,
        pageSize: 1999,
        repositoryId: ''
      },
      // 生产调价明细中货位数据
      locationlist: [],
      // 生产调价单明细列表规则
      validRules: {}
    }
  },
  watch: {
    detailcontrol() {
      this.editVisible = this.detailcontrol
    },
    detaildata() {
      this.personalForm = this.detaildata
      this.produceManagerId = this.personalForm.produceManagerName
      this.handlePersonId = this.personalForm.handlePersonName
      this.adjustRepositoryId = this.personalForm.adjustRepositoryId
      this.list2 = this.personalForm.repoAdjustPriceDetailVos
      this.reviewList = this.personalForm.approvalUseVos
      this.getlocation()
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    // 部门列表数据
    getlist() {
      getdeptlist().then(res => {
        if (res.data.ret === 200) {
          this.depts = res.data.data.content
        }
      })
    },
    getlocation() {
      // 货位根据仓库id展现
      locationlist(this.personalForm.adjustRepositoryId).then(res => {
        if (res.data.ret === 200) {
          this.locationlist = res.data.data.content.list.map(function(item) {
            return {
              'value': item.id,
              'label': item.locationName
            }
          })
        }
      })
    },
    // 经办人输入框focus事件触发
    handlechoose() {
      this.createcontrol = true
    },
    // 经办人返回数据
    createname(val) {
      console.log(val)
      this.handlePersonId = val.personName
      this.personalForm.handlePersonId = val.id
    },
    // 仓库列表focus事件触发
    handlechooseRep() {
      this.repositorycontrol = true
    },
    repositoryname(val) {
      console.log(val)
      this.adjustRepositoryId = val.repositoryName
      this.personalForm.adjustRepositoryId = val.id
      this.locationlistparms.repositoryId = val.id
      locationlist(this.locationlistparms).then(res => {
        if (res.data.ret === 200) {
          this.locationlist = res.data.data.content.list.map(function(item) {
            return {
              'value': item.id,
              'label': item.locationName
            }
          })
        }
      })
    },
    // 调价单事件
    // 新增调价单明细
    handleAddproduct() {
      this.control = true
    },
    productdetail(val) {
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
    // 调价金额计算
    getSize(quan, pric) {
      return quan * pric
    },
    // 修改和取消按钮
    // 修改按钮
    handleEditok() {
      this.personalForm.repositoryId = 438
      this.personalForm.regionId = 2
      this.personalForm.createPersonId = 3
      this.personalForm.countryId = 1
      this.personalForm.modifyPersonId = 3
      console.log(this.personalForm)
      const rest = this.$refs.editable.getRecords()
      if (rest.length === 0) {
        this.$notify.error({
          title: '错误',
          message: '明细表不能为空',
          offset: 100
        })
        return false
      }
      rest.map(function(elem) {
        return elem
      }).forEach(function(elem) {
        if (elem.locationId === null || elem.locationId === '' || elem.locationId === undefined) {
          delete elem.locationId
        }
        if (elem.productCode === null || elem.productCode === '' || elem.productCode === undefined) {
          delete elem.productCode
        }
        if (elem.productName === null || elem.productName === '' || elem.productName === undefined) {
          delete elem.productName
        }
        if (elem.color === null || elem.color === '' || elem.color === undefined) {
          delete elem.color
        }
        if (elem.typeId === null || elem.typeId === '' || elem.typeId === undefined) {
          delete elem.typeId
        }
        if (elem.unit === null || elem.unit === '' || elem.unit === undefined) {
          delete elem.unit
        }
        if (elem.salePrice === null || elem.salePrice === '' || elem.salePrice === undefined) {
          delete elem.salePrice
        }
        if (elem.newSalePrice === null || elem.newSalePrice === '' || elem.newSalePrice === undefined) {
          delete elem.newSalePrice
        }
        if (elem.tradePrice === null || elem.tradePrice === '' || elem.tradePrice === undefined) {
          delete elem.tradePrice
        }
        if (elem.newTradePrice === null || elem.newTradePrice === '' || elem.newTradePrice === undefined) {
          delete elem.newTradePrice
        }
        if (elem.memberPrice === null || elem.memberPrice === '' || elem.memberPrice === undefined) {
          delete elem.memberPrice
        }
        if (elem.newMemberPrice === null || elem.newMemberPrice === '' || elem.newMemberPrice === undefined) {
          delete elem.newMemberPrice
        }
        if (elem.remarks === null || elem.remarks === '' || elem.remarks === undefined) {
          delete elem.remarks
        }
        return elem
      })
      const parms2 = JSON.stringify(rest)
      const parm = JSON.stringify(this.personalForm)
      updatrepoadjustprice(parm, parms2).then(res => {
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
  .edit >>> .el-dialog {
    background:#f1f1f1 ;
  }
</style>
