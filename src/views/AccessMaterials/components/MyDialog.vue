<template>
  <el-dialog :visible.sync="editVisible" :editcontrol="editcontrol" :editdata="editdata" :close-on-press-escape="false" :title="personalForm.accessNumber +'    修改'" width="1010px" class="edit" top="-10px" @close="$emit('update:editcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card" style="margin-top: 63px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">基本信息</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('AccessMaterials.title')" style="width: 100%;">
                <el-input v-model="personalForm.title" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('AccessMaterials.sourceType')" prop="sourceType" style="width: 100%;">
                <el-select v-model="personalForm.sourceType" style="margin-left: 18px;width: 200px" @change="chooseType">
                  <el-option value="1" label="生产任务单" />
                  <el-option value="2" label="无来源" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('AccessMaterials.produceTaskNumber')" style="width: 100%;">
                <el-input v-model="personalForm.produceTaskNumber" :disabled="addsouce" style="margin-left: 18px;width: 200px" clearable @focus="handleAddSouce"/>
              </el-form-item>
              <produce-task :procontrol.sync="producecontrol" @moredata="moredata"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('AccessMaterials.deptId')" prop="produceDeptId" style="width: 100%;">
                <el-select v-model="personalForm.produceDeptId" clearable style="margin-left: 18px;width: 200px" @change="choosedept">
                  <el-option
                    v-for="(item, index) in depts"
                    :key="index"
                    :value="item.id"
                    :label="item.deptName"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('AccessMaterials.processType')" prop="processType" style="width: 100%;">
                <el-select v-model="personalForm.processType" style="margin-left: 18px;width: 200px">
                  <el-option value="1" label="加工1" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('AccessMaterials.accessPersonId')" prop="handlePersonId" style="width: 100%;">
                <el-input v-model="accessPersonId" style="margin-left: 18px;width: 200px" clearable @focus="handlechooseStock"/>
                <my-delivery :deliverycontrol.sync="stockControl" @deliveryName="stockName"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('AccessMaterials.accessDate')" prop="accessDate" style="width: 100%;">
                <el-date-picker
                  v-model="personalForm.accessDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  style="margin-left: 18px;width: 200px"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('AccessMaterials.accessRepositoryId')" prop="produceRepositoryId" style="width: 100%;">
                <el-input v-model="accessRepositoryId" style="margin-left: 18px;width: 200px" clearable @focus="handlechooseRep"/>
              </el-form-item>
              <my-repository :repositorycontrol.sync="repositorycontrol" @repositoryname="repositoryname"/>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <!--子件信息-->
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">生成任务单明细</h2>
      <div class="buttons" style="margin-top: 35px;margin-bottom: 10px;">
        <el-button :disabled="addpro" @click="handleAddproduct">添加商品</el-button>
        <my-detail2 :control.sync="control" @product="productdetail"/>
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
          <el-editable-column :edit-render="{type: 'default'}" prop="locationCode" align="center" label="货位" width="200px">
            <template slot-scope="scope">
              <el-select v-model="scope.row.locationCode" :value="scope.row.locationCode" placeholder="请选择货位" filterable clearable style="width: 100%;" @visible-change="updatebatch($event,scope)">
                <el-option
                  v-for="(item, index) in locationlist"
                  :key="index"
                  :value="item.locationCode"
                  :label="item.locationCode"/>
              </el-select>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{type: 'default'}" prop="batch" align="center" label="批次" width="200px">
            <template slot-scope="scope">
              <el-select v-model="scope.row.batch" :value="scope.row.batch" placeholder="请选择批次" filterable clearable style="width: 100%;" @visible-change="updatebatch2($event,scope)">
                <el-option
                  v-for="(item, index) in batchlist"
                  :key="index"
                  :value="item"
                  :label="item"/>
              </el-select>
            </template>
          </el-editable-column>
          <el-editable-column prop="productCode" align="center" label="物品编号" min-width="150px"/>
          <el-editable-column prop="productName" align="center" label="物品名称" min-width="150px"/>
          <el-editable-column prop="productType" align="center" label="规格" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getTypeName(scope.row) }}</p>
            </template>
          </el-editable-column>
          <el-editable-column prop="unit" align="center" label="单位" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElSelect', options: workCenterIds, type: 'visible'}" prop="workCenterId" align="center" label="工作中心" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="requireQuantity" align="center" label="需求数量" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="accessQuantity" align="center" label="领料数量" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', attrs: {min: 0}, type: 'visible'}" prop="retreatQuantity" align="center" label="已退料数量" min-width="150px"/>
          <el-editable-column prop="price" align="center" label="单价" min-width="150px"/>
          <el-editable-column prop="totalMoney" align="center" label="金额" min-width="150px">
            <template slot-scope="scope">
              <p>{{ getSize(scope.row.accessQuantity, scope.row.price, scope.row) }}</p>
            </template>
          </el-editable-column>
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
import { getDetailByTaskNumber, updateaccess } from '@/api/AccessMaterials'
import { materialslist, searchprocessFile, searchworkCenter, batchlist, getlocation } from '@/api/public'
import { searchEmpCategory2 } from '@/api/Product'
import { getdeptlist } from '@/api/BasicSettings'
import MyDetail from './MyDetail'
import MyRepository from './MyRepository'
import ProduceTask from './ProduceTask'
import MyDetail2 from './MyDetail2'
import MyDelivery from './MyDelivery'
export default {
  components: { MyDelivery, MyDetail2, ProduceTask, MyRepository, MyDetail },
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
      // 货位发送参数
      locationlistparms: {
        pageNum: 1,
        pageSize: 1999,
        repositoryId: ''
      },
      // 货位数据
      locationlist: [],
      loc: [],
      // 批次列表
      batchlist: [],
      // 领料仓库回显
      accessRepositoryId: '',
      // 控制领料仓库
      repositorycontrol: false,
      // 需求列表过来数据
      needsdata: [],
      // 控制添加商品按钮
      addpro: true,
      // 控制从源单中选择按钮
      addsouce: true,
      // 生产任务单回显
      producePlanNumber: '',
      // 领料人回显
      accessPersonId: '',
      // 部门数据
      depts: [],
      // 领料人控制
      stockControl: false,
      // 生产任务单控制
      producecontrol: false,
      // 控制工作中心
      centercontrol: false,
      // 控制无来源商品列表窗口
      control: false,
      // 生产任务规则数据
      personalrules: {
        produceDeptId: [
          { required: true, message: '请选择部门', trigger: 'change' }
        ],
        sourceType: [
          { required: true, message: '请选择源单类型', trigger: 'change' }
        ],
        processType: [
          { required: true, message: '请选择加工类型', trigger: 'change' }
        ],
        handlePersonId: [
          { required: true, validator: validatePass, trigger: 'focus' }
        ]
      },
      // 生产任务明细数据
      list2: [],
      // bom编码数据
      bomNumbers: [],
      // 工艺路线
      processes: [],
      // 工作中心数据
      workCenterIds: [],
      // 生产任务明细列表规则
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
      this.accessPersonId = this.personalForm.accessPersonName
      this.accessRepositoryId = this.personalForm.accessRepositoryName
      this.list2 = this.personalForm.accessMaterialsDetailVos
      this.addsouce = false
      this.choosedept()
    }
  },
  created() {
    this.getList()
    this.chooseType()
  },
  methods: {
    // 总金额计算
    getSize(quan, pric, row) {
      row.totalMoney = quan * pric
      return row.totalMoney
    },
    // 获取货位和批次
    updatebatch(event, scope) {
      if (event === true) {
        console.log(this.personalForm.accessRepositoryId)
        if (this.personalForm.accessRepositoryId === undefined || this.personalForm.accessRepositoryId === '') {
          this.$notify.error({
            title: '错误',
            message: '请先选择仓库',
            offset: 100
          })
          return false
        }
        getlocation(this.personalForm.accessRepositoryId, scope.row).then(res => {
          if (res.data.ret === 200) {
            if (res.data.data.content.length !== 0) {
              this.locationlist = res.data.data.content
              scope.row.locationId = res.data.data.content[0].id
              this.updatebatch3(scope)
            } else if (res.data.data.content.length === 0) {
              this.$notify.error({
                title: '错误',
                message: '该仓库没有该商品',
                offset: 100
              })
              this.locationlist = []
              return false
            }
          }
        })
      }
    },
    updatebatch3(scope) {
      const parms3 = scope.row.productCode
      batchlist(this.personalForm.accessRepositoryId, parms3).then(res => {
        this.batchlist = res.data.data.content
      })
    },
    updatebatch2(event, scope) {
      if (event === true) {
        const parms3 = scope.row.productCode
        batchlist(this.personalForm.accessRepositoryId, parms3).then(res => {
          this.batchlist = res.data.data.content
        })
      }
    },
    // 获取规格
    getTypeName(row) {
      searchEmpCategory2(row.typeId).then(res => {
        if (res.data.ret === 200) {
          row.productType = res.data.data.content.list[0].categoryName
        }
      })
      return row.productType
    },
    // 生产任务单选择focus控制
    handleAddSouce() {
      if (this.personalForm.accessRepositoryId === '' || this.personalForm.accessRepositoryId === null || this.personalForm.accessRepositoryId === undefined) {
        this.$notify.error({
          title: '错误',
          message: '请先选择仓库',
          offset: 100
        })
        return false
      }
      if (this.personalForm.produceDeptId === '' || this.personalForm.produceDeptId === null || this.personalForm.produceDeptId === undefined) {
        this.$notify.error({
          title: '错误',
          message: '请先选择部门',
          offset: 100
        })
        return false
      }
      this.producecontrol = true
    },
    moredata(val) {
      console.log(val)
      this.personalForm.produceTaskNumber = val.taskNumber
      getDetailByTaskNumber(this.personalForm.produceTaskNumber, this.personalForm.accessRepositoryId).then(res => {
        console.log(res)
        if (res.data.ret === 200) {
          const nowlistdata = this.$refs.editable.getRecords()
          const detaildata = res.data.data.content
          for (let i = 0; i < detaildata.length; i++) {
            for (let j = 0; j < nowlistdata.length; j++) {
              if (detaildata[i].productCode === nowlistdata[j].productCode) {
                this.$notify.error({
                  title: '错误',
                  message: '物品已添加',
                  offset: 100
                })
                return false
              }
            }
            detaildata[i].totalMoney = 0
            detaildata[i].price = 0
            this.$refs.editable.insert(detaildata[i])
          }
        }
      })
    },
    // 加载bom编码数据和工艺路线
    getList() {
      materialslist().then(res => {
        if (res.data.ret === 200) {
          this.bomNumbers = res.data.data.content.list.map(function(item) {
            return {
              label: item.bomNumber,
              value: item.bomNumber
            }
          })
        }
      })
      // 工艺路线数据
      searchprocessFile().then(res => {
        if (res.data.ret === 200) {
          this.processes = res.data.data.content.list.map(function(item) {
            return {
              label: item.processName,
              value: item.processName
            }
          })
        }
      })
      // 部门列表数据
      getdeptlist().then(res => {
        if (res.data.ret === 200) {
          this.depts = res.data.data.content
        }
      })
    },
    // 仓库列表focus事件触发
    handlechooseRep() {
      this.repositorycontrol = true
    },
    // 仓库回显
    repositoryname(val) {
      console.log(val)
      this.accessRepositoryId = val.repositoryName
      this.personalForm.accessRepositoryId = val.id
    },
    // 选择部门focus事件
    choosedept() {
      console.log(this.personalForm.produceDeptId)
      if (this.personalForm.produceDeptId !== '' && this.personalForm.produceDeptId !== null && this.personalForm.produceDeptId !== undefined) {
        // 工作中心数据
        searchworkCenter(this.personalForm.produceDeptId).then(res => {
          if (res.data.ret === 200) {
            this.workCenterIds = res.data.data.content.list.map(function(item) {
              return {
                label: item.workCenterName,
                value: item.id
              }
            })
          }
        })
      }
    },
    // 选择源单类型事件
    chooseType() {
      console.log(this.personalForm.sourceType)
      if (this.personalForm.sourceType === '1') {
        this.addsouce = false
        this.addpro = true
        this.$refs.editable.clear()
      } else if (this.personalForm.sourceType === '2') {
        this.addpro = false
        this.addsouce = true
        this.personalForm.produceTaskNumber = ''
        this.produceTaskNumber = ''
        this.$refs.editable.clear()
      }
    },
    // 无来源添加商品
    handleAddproduct() {
      if (this.personalForm.produceDeptId === '' || this.personalForm.produceDeptId === null || this.personalForm.produceDeptId === undefined) {
        this.$notify.error({
          title: '错误',
          message: '请先选择部门',
          offset: 100
        })
        return false
      }
      this.control = true
    },
    // 无来源数据添加
    productdetail(val) {
      this.$refs.editable.clear()
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
    // 领料人focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 领料人回显
    stockName(val) {
      this.accessPersonId = val.personName
      this.personalForm.accessPersonId = val.id
    },
    // 清空记录
    restAllForm() {
      this.personalForm = {
        createPersonId: 3,
        countryId: 1,
        repositoryId: 438,
        regionId: 2,
        sourceType: '1'
      }
      this.produceTaskNumber = null
      this.accessPersonId = null
      this.accessRepositoryId = null
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
        if (elem.batch === null || elem.batch === '' || elem.batch === undefined) {
          delete elem.batch
        }
        if (elem.locationId === null || elem.locationId === '' || elem.locationId === undefined) {
          delete elem.locationId
        }
        if (elem.bomNumber === null || elem.bomNumber === '' || elem.bomNumber === undefined) {
          delete elem.bomNumber
        }
        if (elem.requireQuantity === null || elem.requireQuantity === '' || elem.requireQuantity === undefined) {
          delete elem.requireQuantity
        }
        if (elem.accessQuantity === null || elem.accessQuantity === '' || elem.accessQuantity === undefined) {
          delete elem.accessQuantity
        }
        if (elem.price === null || elem.price === '' || elem.price === undefined) {
          delete elem.price
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
      updateaccess(parms, parms2).then(res => {
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
