<template>
  <el-dialog :visible.sync="editVisible" :editcontrol="editcontrol" :editdata="editdata" :close-on-press-escape="false" :title="personalForm.planNumber +'    修改'" width="1010px" class="edit" top="-10px" @close="$emit('update:editcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card" style="margin-top: 63px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">基本信息</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('RequirePlan.title')" style="width: 100%;color: #909399">
                <el-input v-model="personalForm.title" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('RequirePlan.handlePersonId')" prop="handlePersonId" style="width: 100%;">
                <el-input v-model="handlePersonId" style="margin-left: 18px;width: 200px" clearable @focus="handlechooseStock"/>
              </el-form-item>
              <my-emp :control.sync="stockControl" @stockName="stockName"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('RequirePlan.deptId')" style="width: 100%;">
                <el-input v-model="workCenterId" style="margin-left: 18px;width: 200px" clearable @focus="workcenterchoose"/>
              </el-form-item>
            </el-col>
            <my-center :control.sync="centercontrol" @center="center"/>
            <el-col :span="12">
              <el-form-item :label="$t('RequirePlan.producePlanNumber')" prop="producePlanNumber" style="width: 100%;">
                <el-input v-model="producePlanNumber" :value="producePlanNumber" style="margin-left: 18px;width: 200px" clearable @focus="producechoose"/>
              </el-form-item>
              <produce-plan :procontrol.sync="producecontrol" @produce="produce" @allinfo="allinfo"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('RequirePlan.planSupplyDate')" prop="planSupplyDate" style="width: 100%;">
                <el-date-picker
                  v-model="personalForm.planSupplyDate"
                  type="date"
                  placeholder="计划供料日期"
                  value-format="yyyy-MM-dd"
                  style="margin-left: 18px;width: 200px"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('RequirePlan.produceRepositoryId')" prop="produceRepositoryId" style="width: 100%;">
                <el-input v-model="produceRepositoryId" style="margin-left: 18px;width: 200px" clearable @focus="handlechooseRep"/>
              </el-form-item>
              <my-repository :repositorycontrol.sync="repositorycontrol" @repositoryname="repositoryname"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('RequirePlan.summary')" style="width: 100%;">
                <el-input v-model="personalForm.summary" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <!--子件信息-->
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">主生产计划明细</h2>
      <div class="buttons" style="margin-top: 35px;margin-bottom: 10px;">
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
          <el-editable-column prop="productType" align="center" label="规格" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getTypeName(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column prop="unit" align="center" label="单位" min-width="150px"/>
          <el-editable-column prop="requireQuantity" align="center" label="毛需求数量" min-width="150px"/>
          <el-editable-column prop="planQuantity" align="center" label="应计划数量" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElSelect', options: materialsSource, type: 'visible'}" prop="materialsSource" align="center" label="物料来源" min-width="150px"/>
        </el-editable>
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
import { updateproduceplan, getBomByPlanNumber } from '@/api/RequirePlan'
import { searchEmpCategory2 } from '@/api/Product'
import MyCenter from './MyCenter'
import MyEmp from './MyEmp'
import MyDetail from './MyDetail'
import MyRepository from './MyRepository'
import ProducePlan from './ProducePlan'
export default {
  components: { MyCenter, MyEmp, MyDetail, MyRepository, ProducePlan },
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
      console.log(value)
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      // 弹窗组件的控制
      editVisible: this.editcontrol,
      // 修改信息数据
      personalForm: this.editdata,
      // 物料来源
      materialsSource: [{ value: 1, label: '库存' }, { value: 2, label: '生产' }, { value: 3, label: '采购' }],
      // 主生产计划回显
      producePlanNumber: '',
      // 仓库回显
      produceRepositoryId: '',
      // 负责人回显
      handlePersonId: '',
      // 工作中心回显
      workCenterId: '',
      // 仓库控制
      repositorycontrol: false,
      // 负责人控制
      stockControl: false,
      // 主生产计划控制
      producecontrol: false,
      // 控制工作中心
      centercontrol: false,
      // 控制商品列表窗口
      control: false,
      // 主生产任务规则数据
      personalrules: {
        handlePersonId: [
          { required: true, message: '请选择负责人', trigger: 'focus' }
        ],
        producePlanNumber: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ],
        planSupplyDate: [
          { required: true, message: '请选择计划供料日期', trigger: 'change' }
        ],
        produceRepositoryId: [
          { required: true, message: '请选择仓库', trigger: 'focus' }
        ]
      },
      // 主生产任务明细数据
      list2: [],
      // 主生产任务明细列表规则
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
      this.handlePersonId = this.personalForm.handlePersonName
      this.workCenterId = this.personalForm.workCenter
      this.producePlanNumber = this.personalForm.producePlanNumber
      this.produceRepositoryId = this.personalForm.produceRepositoryName
      this.list2 = this.personalForm.materialsRequirePlanDetailVos
    }
  },
  methods: {
    // 获取规格
    getTypeName(row) {
      searchEmpCategory2(row.typeId).then(res => {
        if (res.data.ret === 200) {
          row.productType = res.data.data.content.list[0].categoryName
        }
      })
      return row.productType
    },
    // 主生产计划focus事件
    producechoose() {
      if (this.personalForm.produceRepositoryId === '' || this.personalForm.produceRepositoryId === null || this.personalForm.produceRepositoryId === undefined) {
        this.$notify.error({
          title: '错误',
          message: '请先选择仓库',
          offset: 100
        })
        return false
      } else {
        this.producecontrol = true
      }
    },
    // produce(val) {
    //   this.$refs.editable.clear()
    //   const nowlistdata = this.$refs.editable.getRecords()
    //   for (let i = 0; i < val.length; i++) {
    //     for (let j = 0; j < nowlistdata.length; j++) {
    //       if (val[i].productCode === nowlistdata[j].productCode) {
    //         this.$notify.error({
    //           title: '错误',
    //           message: '物品已添加',
    //           offset: 100
    //         })
    //         return false
    //       }
    //     }
    //     this.$refs.editable.insert(val[i])
    //   }
    // },
    // 回显主生产计划
    allinfo(val) {
      this.$refs.editable.clear()
      this.producePlanNumber = val.title
      this.personalForm.producePlanNumber = val.planNumber
      getBomByPlanNumber(this.personalForm.producePlanNumber, this.personalForm.produceRepositoryId).then(res => {
        console.log(res)
        if (res.data.ret === 200) {
          const xuqiu = res.data.data.content
          for (const key in xuqiu) {
            if (xuqiu[key].materialsSource === '' || xuqiu[key].materialsSource === undefined || xuqiu[key].materialsSource === null) {
              delete xuqiu[key]
            }
          }
          var r = xuqiu.filter(function(s) {
            return (s !== undefined || s)
          })
          const xuqiu2 = r.map(function(item) {
            return {
              id: item.id,
              productCode: item.productCode,
              productName: item.productName,
              typeId: item.typeId,
              unit: item.unit,
              requireQuantity: item.requireQuantity,
              planQuantity: item.planQuantity,
              materialsSource: item.materialsSource
            }
          })
          for (let i = 0; i < xuqiu2.length; i++) {
            this.$refs.editable.insert(xuqiu2[i])
          }
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
    // 负责人focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 负责人回显
    stockName(val) {
      this.handlePersonId = val.personName
      this.personalForm.handlePersonId = val.id
    },
    // 仓库列表focus事件触发
    handlechooseRep() {
      this.repositorycontrol = true
    },
    // 仓库回显
    repositoryname(val) {
      console.log(val)
      this.produceRepositoryId = val.repositoryName
      this.personalForm.produceRepositoryId = val.id
    },
    // 清空记录
    restAllForm() {
      this.personalForm = {
        createPersonId: 3,
        countryId: 1,
        repositoryId: 438,
        regionId: 2
      }
      this.produceRepositoryId = null
      this.handlePersonId = null
      this.workCenterId = null
      this.producePlanNumber = null
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
        if (elem.requireQuantity === null || elem.requireQuantity === '' || elem.requireQuantity === undefined) {
          delete elem.requireQuantity
        }
        if (elem.planQuantity === null || elem.planQuantity === '' || elem.planQuantity === undefined) {
          delete elem.planQuantity
        }
        if (elem.issueQuantity === null || elem.issueQuantity === '' || elem.issueQuantity === undefined) {
          delete elem.issueQuantity
        }
        if (elem.productType === null || elem.productType === '' || elem.productType === undefined) {
          delete elem.productType
        }
        return elem
      })
      const Data = this.personalForm
      for (const key in Data) {
        if (Data[key] === '' || Data[key] === undefined || Data[key] === null) {
          delete Data[key]
        }
      }
      const parms = JSON.stringify(Data)
      const parms2 = JSON.stringify(EnterDetail)
      updateproduceplan(parms, parms2).then(res => {
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
