<template>
  <el-dialog :visible.sync="editVisible" :detailcontrol="detailcontrol" :editdata="detaildata" :close-on-press-escape="false" append-to-body class="edit" top="10px" title="货位调整单详情" @close="$emit('update:detailcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card">
      <h2 ref="geren" class="form-name">基本信息</h2>
      <div class="container">
        <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="120px" style="margin-left: 30px;">
          <el-row>
            <el-col :span="6">
              <el-form-item :label="$t('WarehouseAdjust.title2')" style="width: 100%;">
                <el-input v-model="personalForm.title" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('public.modifyPersonName')" style="width: 100%;">
                <el-input v-model="personalForm.modifyPersonName" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('public.endPersonName')" style="width: 100%;">
                <el-input v-model="personalForm.endPersonName" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('public.createPersonName')" style="width: 100%;">
                <el-input v-model="personalForm.createPersonName" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('public.createDate')" style="width: 100%;">
                <el-input v-model="personalForm.createDate" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('public.countyrId')" style="width: 100%;">
                <el-input v-model="personalForm.countryName" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('WarehouseAdjust.handlePersonId')" prop="handlePersonId" style="width: 100%;">
                <el-input v-model="personalForm.handlePersonName" style="margin-left: 18px;width: 150px" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('WarehouseAdjust.adjustDeptId')" style="width: 100%;">
                <el-select v-model="personalForm.adjustDeptId" style="margin-left: 18px;width: 150px" disabled >
                  <el-option
                    v-for="(item, index) in depts"
                    :key="index"
                    :value="item.id"
                    :label="item.deptName"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('WarehouseAdjust.adjustRepositoryId')" prop="adjustRepositoryId" style="width: 100%;">
                <el-input v-model="personalForm.adjustRepositoryName" style="margin-left: 18px;width: 150px" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('WarehouseAdjust.adjustReason')" style="width: 100%;">
                <el-input v-model="personalForm.adjustReason" style="margin-left: 18px;width: 150px" disabled/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('WarehouseAdjust.adjustDate')" prop="adjustDate" style="width: 100%;">
                <el-date-picker
                  v-model="personalForm.adjustDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  disabled
                  style="margin-left: 18px;width: 150px"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <!--日常调整单明细-->
    <el-card class="box-card" style="margin-top: 15px">
      <h2 ref="fuzhu" class="form-name">日常调整单明细</h2>
      <div class="container">
        <el-editable
          ref="editable"
          :data.sync="list2"
          :edit-config="{ showIcon: true, showStatus: true}"
          class="click-table1"
          stripe
          border
          size="medium"
          style="width: 100%">
          <el-editable-column type="selection" width="55" align="center"/>
          <el-editable-column label="编号" width="55" align="center" type="index"/>
          <el-editable-column prop="productCode" align="center" label="物品编号" width="150px"/>
          <el-editable-column prop="productName" align="center" label="物品名称" width="150px"/>
          <el-editable-column prop="productType" align="center" label="规格" width="150px"/>
          <el-editable-column prop="unit" align="center" label="单位" width="150px"/>
          <el-editable-column prop="outLocationCode" align="center" label="调出库位" width="150px"/>
          <el-editable-column prop="batch" align="center" label="批次" width="200px"/>
          <el-editable-column prop="enterLocationCode" align="center" label="调入库位" width="150px"/>
          <el-editable-column prop="inventoryQuantity" align="center" label="库存数量" width="150px"/>
          <el-editable-column prop="quantity" align="center" label="调动数量" width="150px"/>
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
import { getdeptlist } from '@/api/BasicSettings'
export default {
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
      // 明细表数据
      list2: [],
      // 部门数据
      depts: [],
      // 审核步骤数据
      reviewList: [],
      // 弹窗组件的控制
      editVisible: this.detailcontrol,
      // 供应商信息数据
      personalForm: this.detaildata
    }
  },
  watch: {
    detailcontrol() {
      this.editVisible = this.detailcontrol
    },
    detaildata() {
      this.personalForm = this.detaildata
      this.list2 = this.personalForm.locationAdjustDetailVos
      this.reviewList = this.personalForm.approvalUseVos
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    getlist() {
      // 部门列表数据
      getdeptlist().then(res => {
        if (res.data.ret === 200) {
          this.depts = res.data.data.content
        }
      })
    },
    handlecancel() {
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
