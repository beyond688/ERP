<template>
  <div class="ERP-container">
    <div class="app-container">
      <!--基本信息-->
      <el-card class="box-card" shadow="never">
        <h2 ref="geren" class="form-name">基本信息</h2>
        <div class="container" style="margin-top: 37px">
          <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="140px">
            <el-row>
              <el-col :span="6">
                <el-form-item :label="$t('Product.productname')" prop="productname" style="width: 100%;">
                  <el-input v-model="personalForm.productname" style="margin-left: 18px" placeholder="请输入产品名称" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.categoryid')" prop="categoryid" style="width: 100%;">
                  <el-input v-model="categoryid" style="margin-left: 18px;width: 218px" placeholder="请选择物品分类" @focus="treechoose"/>
                  <my-tree :treecontrol.sync="treecontrol" @tree="tree" @finder="finder"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.barcode')" style="width: 100%;">
                  <el-input v-model="personalForm.barcode" style="margin-left: 18px" placeholder="请输入条码" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.typeid')" :rules="personalForm.categoryid === 3 || personalForm.categoryid === '' ? personalrules.typeid:[{ required: true, message: '请选择车辆型号', trigger: 'change' }]" prop="typeid" style="width: 100%;">
                  <el-select v-model="typeid" :disabled="personalForm.categoryid === 3 || personalForm.categoryid === ''" value-key="id" style="margin-left: 18px;width: 218px" placeholder="请选择车辆型号" clearable @change="type($event)" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in types"
                      :key="index"
                      :label="item.categoryName"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.disposeId')" :rules="personalForm.categoryid === 3 || personalForm.categoryid === '' || personalForm.categoryid === 2 ? personalrules.disposeId:[{ required: true, message: '请选择配置', trigger: 'change' }]" prop="disposeId" style="width: 100%;">
                  <el-select v-model="disposeId" :disabled="personalForm.categoryid === 3 || personalForm.categoryid === '' || personalForm.categoryid === 2" value-key="id" placeholder="请选择配置" style="margin-left: 18px;width: 218px" @change="dispose($event)" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in disposes"
                      :key="index"
                      :label="item.categoryName"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.versionId')" :rules="personalForm.categoryid === 3 || personalForm.categoryid === '' ? personalrules.versionId:[{ required: true, message: '请选择版本', trigger: 'change' }]" prop="versionId" style="width: 100%;">
                  <el-select v-model="versionId" :disabled="personalForm.categoryid === 3 || personalForm.categoryid === ''" value-key="id" placeholder="请选择版本" style="margin-left: 18px;width: 218px" @change="version($event)" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in versions"
                      :key="index"
                      :label="item.categoryName"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.color')" :rules="personalForm.categoryid === 3 || personalForm.categoryid === '' ? personalrules.colorId:[{ required: true, message: '请选择颜色', trigger: 'change' }]" prop="colorId" style="width: 100%;">
                  <el-select v-model="colorId" :disabled="personalForm.categoryid === 3 || personalForm.categoryid === ''" value-key="id" placeholder="请选择颜色" style="margin-left: 18px;width: 218px" @change="color($event)" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in colors"
                      :key="index"
                      :label="item.categoryName"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.diameterId')" :rules="personalForm.categoryid === 1 || personalForm.categoryid === 2 || personalForm.categoryid === '' ? personalrules.diameterId:[{ required: true, message: '请选择直径规格', trigger: 'change' }]" prop="diameterId" style="width: 100%;">
                  <el-select v-model="diameterId" :disabled="personalForm.categoryid === 1 || personalForm.categoryid === 2 || personalForm.categoryid === ''" value-key="id" placeholder="请选择直径规格" style="margin-left: 18px;width: 218px" @change="diameter($event)" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in diameters"
                      :key="index"
                      :label="item.categoryName"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.brand')" style="width: 100%;">
                  <el-select v-model="personalForm.brand" placeholder="请选择品牌" style="margin-left: 18px;width: 218px" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in brands"
                      :key="index"
                      :label="item.categoryName"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.level')" style="width: 100%;">
                  <el-select v-model="personalForm.level" placeholder="请选择档次级别" style="margin-left: 18px;width: 218px" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in levels"
                      :key="index"
                      :label="item.categoryName"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.lengthLevelId')" :rules="personalForm.categoryid === 1 || personalForm.categoryid === 2 || personalForm.categoryid === '' ? personalrules.lengthLevelId:[{ required: true, message: '请选择长度等级', trigger: 'change' }]" prop="lengthLevelId" style="width: 100%;">
                  <el-select v-model="lengthLevelId" :disabled="personalForm.categoryid === 1 || personalForm.categoryid === 2 || personalForm.categoryid === ''" value-key="id" placeholder="请选择长度等级" style="margin-left: 18px;width: 218px" @change="length($event)" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in lengthLevels"
                      :key="index"
                      :label="item.categoryName"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.faceId')" :rules="personalForm.categoryid === 1 || personalForm.categoryid === 2 || personalForm.categoryid === '' ? personalrules.faceId:[{ required: true, message: '请选择表面处理', trigger: 'change' }]" prop="faceId" style="width: 100%;">
                  <el-select v-model="faceId" :disabled="personalForm.categoryid === 1 || personalForm.categoryid === 2 || personalForm.categoryid === ''" value-key="id" placeholder="请选择表面处理" style="margin-left: 18px;width: 218px" @change="face($event)" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in faces"
                      :key="index"
                      :label="item.categoryName"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.performanceLevelId')" :rules="personalForm.categoryid === 1 || personalForm.categoryid === 2 || personalForm.categoryid === '' ? personalrules.performanceLevelId:[{ required: true, message: '请选择性能等级', trigger: 'change' }]" prop="performanceLevelId" style="width: 100%;">
                  <el-select v-model="performanceLevelId" :disabled="personalForm.categoryid === 1 || personalForm.categoryid === 2 || personalForm.categoryid === ''" value-key="id" placeholder="请选择性能等级" style="margin-left: 18px;width: 218px" @change="performanceLevel($event)" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in performanceLevels"
                      :key="index"
                      :label="item.categoryName"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.purchasemeasurement')" prop="purchasemeasurement" style="width: 100%;">
                  <el-select v-model="personalForm.purchasemeasurement" placeholder="请选择基本计量单位" style="margin-left: 18px;width: 218px" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in measurements"
                      :key="index"
                      :label="item.categoryName"
                      :value="item.id"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.salemeasurement')" style="width: 100%;">
                  <el-select v-model="personalForm.salemeasurement" placeholder="请选择销售计量单位" style="margin-left: 18px;width: 218px" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in measurements"
                      :key="index"
                      :label="item.categoryName"
                      :value="item.id"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.stockmeasurement')" style="width: 100%;">
                  <el-select v-model="personalForm.stockmeasurement" placeholder="请选择库存计量单位" style="margin-left: 18px;width: 218px" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in measurements"
                      :key="index"
                      :label="item.categoryName"
                      :value="item.id"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.producemeasurement')" style="width: 100%;">
                  <el-select v-model="personalForm.producemeasurement" placeholder="请选择生产计量单位" style="margin-left: 18px;width: 218px" @focus="updatecate">
                    <el-option
                      v-for="(item, index) in measurements"
                      :key="index"
                      :label="item.categoryName"
                      :value="item.id"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.source')" style="width: 100%;">
                  <el-select v-model="personalForm.source" placeholder="请选择来源" style="margin-left: 18px;width: 218px" @change="choosesource">
                    <el-option value="2" label="生产"/>
                    <el-option value="3" label="采购"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.kpigrade')" prop="kpigrade" style="width: 100%;">
                  <el-input v-model="personalForm.kpigrade" placeholder="请输入绩效分" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.point')" style="width: 100%;">
                  <el-input v-model="personalForm.point" placeholder="请输入商品积分" style="margin-left: 18px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6" style="height: 58px;">
                <el-form-item :label="$t('Product.zhibaoqi')" style="width: 100%">
                  <el-input v-model="personalForm.zhibaoqi" placeholder="请输入质保期" style="margin-left: 18px;width: 218px" clearable>
                    <template slot="append">天</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" style="height: 58px;">
                <el-form-item :label="$t('Product.weight')" style="width: 100%">
                  <el-input v-model="personalForm.weight" placeholder="请输入重量" style="margin-left: 18px;width: 218px" clearable>
                    <template slot="append">KG</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" style="height: 58px;">
                <el-form-item :label="$t('Product.volume')" style="width: 100%">
                  <el-input v-model="personalForm.volume" placeholder="请输入体积" style="margin-left: 18px;width: 218px" clearable>
                    <template slot="append">m³</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.stockCircle')" style="width: 100%;">
                  <el-input v-model="personalForm.stockCircle" :disabled="IsCircle" placeholder="请输采购周期（天）" clearable style="margin-left: 18px"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.produceAbility')" style="width: 100%;">
                  <el-input v-model="personalForm.produceAbility" :disabled="IsAbility" placeholder="请输入生产能力" clearable style="margin-left: 18px"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.careCircle')" style="width: 100%;">
                  <el-input v-model="personalForm.careCircle" placeholder="请输入保养周期" clearable style="margin-left: 18px"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.workCenterId')" style="width: 100%;">
                  <el-input v-model="workCenterId" :disabled="Iscenter" placeholder="请选择工作中心" clearable style="margin-left: 18px" @focus="workcenterchoose"/>
                  <my-center :control.sync="centercontrol" @center="center"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.isBatch')" prop="isBatch" style="width: 100%;">
                  <el-radio-group v-model="personalForm.isBatch" style="margin-left: 18px;width: 218px" @change="chooseBatch">
                    <el-radio :label="1" style="width: 100px">使用</el-radio>
                    <el-radio :label="2">不使用</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.effectiveDay')" :rules="personalForm.isBatch === 2 ? personalrules.effectiveDay:[{ required: true, message: '请输入有效天数', trigger: 'blur' }]" prop="effectiveDay" style="width: 100%;">
                  <el-input v-model="personalForm.effectiveDay" :disabled="personalForm.isBatch === 2" placeholder="请输入有效天数" clearable style="margin-left: 18px"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('Product.isactive')" style="width: 100%;">
                  <el-radio-group v-model="personalForm.isactive" style="margin-left: 18px;width: 218px">
                    <el-radio :label="1" style="width: 100px">YES</el-radio>
                    <el-radio :label="2">NO</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <!--价格信息-->
      <el-card class="box-card" shadow="never" style="margin-top: 10px">
        <h2 ref="lianxi" class="form-name">价格信息</h2>
        <div class="container">
          <el-form ref="personalForm2" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="140px">
            <el-col :span="6">
              <el-form-item :label="$t('Product.valuation')" prop="valuation" style="width: 100%;">
                <el-select v-model="personalForm.valuation" placeholder="请选择" style="margin-left: 18px;width: 218px">
                  <el-option value="1" label="类1"/>
                  <el-option value="2" label="类2"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('Product.costprice')" prop="costprice" style="width: 100%;">
                <el-input v-model="personalForm.costprice" placeholder="请输入出厂价" style="margin-left: 18px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('Product.tradeprice')" style="width: 100%;">
                <el-input v-model="personalForm.tradeprice" placeholder="请输入批发价" style="margin-left: 18px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('Product.saleprice')" prop="saleprice" style="width: 100%;">
                <el-input v-model="personalForm.saleprice" placeholder="请输入零售价" style="margin-left: 18px" clearable/>
              </el-form-item>
            </el-col>
            <!--<el-form-item :label="$t('Product.purchaseprice')" prop="purchaseprice" style="width: 40%;margin-top:1%">-->
            <!--<el-input v-model="personalForm.purchaseprice" placeholder="请输入采购价" clearable/>-->
            <!--</el-form-item>-->
            <el-col :span="6">
              <el-form-item :label="$t('Product.lowerprice')" style="width: 100%;">
                <el-input v-model="personalForm.lowerprice" placeholder="请输入最低价" style="margin-left: 18px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item :label="$t('Product.memberprice')" style="width: 100%;">
                <el-input v-model="personalForm.memberprice" placeholder="请输入会员价" style="margin-left: 18px" clearable/>
              </el-form-item>
            </el-col>
          </el-form>
        </div>
      </el-card>
      <!--图片信息-->
      <el-card class="box-card" shadow="never" style="margin-top: 10px">
        <h2 class="form-name">图片信息</h2>
        <div class="container">
          <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
            <el-form-item :label="$t('Product.picids')" style="width: 100%;margin-top: 1%">
              <el-button style="margin-bottom: 10px" size="small" type="success" @click="submitUpload">{{ $t('public.uploadimage') }}</el-button>
              <el-upload
                ref="upload"
                :on-preview="handlepicPreview"
                :on-remove="handlepicRemove"
                :on-success="handlepicsuccess"
                :data="picidsData"
                :auto-upload="false"
                action="http://192.168.1.26:9090/erp/upload/uploadpic"
                list-type="picture-card">
                <i class="el-icon-plus"/>
              </el-upload>
              <el-dialog :visible.sync="picidsVisible">
                <img :src="picidsImageUrl" width="100%" alt="">
              </el-dialog>
            </el-form-item >
            <el-form-item :label="$t('Product.detailpicid')" style="width: 100%;margin-top: 1%">
              <el-button style="margin-bottom: 10px" size="small" type="success" @click="detailpicsubmitUpload">{{ $t('public.uploadimage') }}</el-button>
              <el-upload
                ref="detailpicupload"
                :on-preview="handledetailpicPreview"
                :on-remove="handledetailpicRemove"
                :on-success="handledetailpicsuccess"
                :data="detailpicData"
                :auto-upload="false"
                action="http://192.168.1.26:9090/erp/upload/uploadpic"
                list-type="picture-card">
                <i class="el-icon-plus"/>
              </el-upload>
              <el-dialog :visible.sync="detailpicVisible">
                <img :src="detailpicImageUrl" width="100%" alt="">
              </el-dialog>
            </el-form-item >
          </el-form>
        </div>
      </el-card>
      <!--操作-->
      <div class="buttons" style="margin-top: 20px">
        <el-button type="primary" @click="handlesave()">保存</el-button>
        <el-button type="success" @click="handleentry()">继续录入</el-button>
        <el-button type="danger" @click="handlecancel()">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createnewproduct, searchEmpCategory2, searchMea } from '@/api/Product'
import MyEmp from './components/MyEmp'
import MySupplier from './components/MySupplier'
import MyTree from './components/MyTree'
import MyCenter from './components/MyCenter'
export default {
  name: 'NewProduct',
  components: { MyCenter, MyTree, MySupplier, MyEmp },
  data() {
    const validatePass = (rule, value, callback) => {
      console.log(value)
      if (value === null) {
        callback(new Error('请选择'))
      } else {
        callback()
      }
    }
    return {
      // 控制生产能力是否可输入
      IsAbility: true,
      // 控制采购周期是否可输入
      IsCircle: true,
      // 控制工作中心是否可输入
      Iscenter: true,
      // 工作中心回显
      workCenterId: '',
      // 控制工作中心
      centercontrol: false,
      // 车辆型号回显
      typeid: '',
      // 配置回显
      disposeId: '',
      // 版本回显
      versionId: '',
      // 颜色回显
      colorId: '',
      // 直径回显
      diameterId: '',
      // 长度回显
      lengthLevelId: '',
      // 表面处理回显
      faceId: '',
      // 性能等级回显
      performanceLevelId: '',
      // 控制编码
      carOrOther: '',
      // 控制物品分类
      treecontrol: false,
      // 物品分类回显
      categoryid: '',
      // 计量单位数据
      measurements: [],
      // 供货商弹窗控制
      empcontrol: false,
      // 商品图片数据+++++++++++++++++++++++++开始
      // 商品图片控制器
      picidsVisible: false,
      // 商品图片地址
      picidsImageUrl: '',
      // 发送后端type
      picidsData: {
        type: 2
      },
      // 商品图片数据+++++++++++++++++++++++++结束
      // 详情图片数据++++++++++++++++++++++++++++++++开始
      detailpicVisible: false,
      // 详情图片地址
      detailpicImageUrl: '',
      // 发送后端type
      detailpicData: {
        type: 7
      },
      // 详情图片数据++++++++++++++++++++++++++++++++结束
      // 物品分类数据
      categorys: [],
      // 配置数据
      disposes: [],
      // 版本数据
      versions: [],
      // 颜色数据
      colors: [],
      // 品牌数据
      brands: [],
      // 直径规格数据
      diameters: [],
      // 长度等级数据
      lengthLevels: [],
      // 表面处理数据
      faces: [],
      // 性能等级数据
      performanceLevels: [],
      // 规格型号数据
      types: [],
      // 档次级别
      levels: [],
      // 供应商回显
      supplierid: '',
      // 物品信息数据
      personalForm: {
        code: '',
        barcode: '',
        productname: '',
        categoryid: '',
        color: '',
        brand: '',
        kpigrade: '',
        point: '',
        zhibaoqi: '',
        weight: '',
        volume: '',
        costprice: '',
        tradeprice: '',
        saleprice: '',
        purchaseprice: '',
        lowerprice: '',
        createid: '',
        level: '',
        purchasemeasurement: '',
        salemeasurement: '',
        stockmeasurement: '',
        producemeasurement: '',
        source: '',
        valuation: '',
        isactive: '',
        picids: [],
        detailpicid: [],
        memberprice: '',
        versionId: '',
        diameterId: '',
        lengthLevelId: '',
        faceId: '',
        performanceLevelId: '',
        disposeId: '',
        colorId: '',
        typeid: ''
      },
      // 物品信息规则数据
      personalrules: {
        productname: [
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        valuation: [
          { required: true, message: '请选择计价方式', trigger: 'change' }
        ],
        disposeId: [
        ],
        categoryid: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        versionId: [
          { message: '请选择版本', trigger: 'change' }
        ],
        colorId: [
        ],
        diameterId: [
        ],
        lengthLevelId: [
        ],
        faceId: [
        ],
        performanceLevelId: [
        ],
        typeid: [
        ],
        costprice: [
          { required: true, message: '请输入成本价', trigger: 'blur' }
        ],
        saleprice: [
          { required: true, message: '请输入零售价', trigger: 'blur' }
        ],
        isBatch: [
          { required: true, message: '请选择批次设置', trigger: 'change' }
        ],
        effectiveDay: [
        ],
        purchasemeasurement: [
          { required: true, message: '请选择批次设置', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this.getcategorys()
  },
  methods: {
    chooseBatch(val) {
      if (val === 2) {
        this.personalForm.effectiveDay = ''
      }
    },
    choosesource(val) {
      if (val === '3' || val === '') {
        this.Iscenter = true
        this.IsCircle = false
        this.IsAbility = true
        this.personalForm.produceAbility = null
      } else if (val === '2') {
        this.Iscenter = false
        this.IsCircle = true
        this.IsAbility = false
        this.personalForm.stockCircle = null
      }
    },
    // 工作中心focus事件
    workcenterchoose() {
      this.centercontrol = true
    },
    center(val) {
      this.workCenterId = val.workCenterName
      this.personalForm.workCenterId = val.id
    },
    'personalForm.disposeId'(val) {
      this.$nextTick(() => {
        console.log(val)
        if (val !== 34) {
          this.$refs.personalForm.validateField('versionId')
          this.personalForm.versionId = ''// 政府机构级别,
        }
      })
    },
    // 'personalForm.categoryid'(val) {
    //   this.$nextTick(() => {
    //     console.log(val)
    //     if (val !== 1) {
    //       this.$refs.personalForm.validateField('typeid')
    //       this.personalForm.typeid = ''// 政府机构级别,
    //     }
    //   })
    // },
    // 表面处理change事件
    performanceLevel(val) {
      this.personalForm.performanceLevelId = val.id
      this.personalForm.performanceLevelCode = val.code
    },
    // 表面处理change事件
    face(val) {
      this.personalForm.faceId = val.id
      this.personalForm.faceCode = val.code
    },
    // 颜色change事件
    color(val) {
      this.personalForm.colorId = val.id
      this.personalForm.colorCode = val.code
    },
    // 长度等级change事件
    length(val) {
      this.personalForm.lengthLevelId = val.id
      this.personalForm.lengthCode = val.code
    },
    // 直径规格change事件
    diameter(val) {
      this.personalForm.diameterId = val.id
      this.personalForm.diameterCode = val.code
    },
    // 版本change事件
    version(val) {
      this.personalForm.versionId = val.id
      this.personalForm.versionCode = val.code
    },
    // 车辆型号change事件
    type(val) {
      this.personalForm.typeid = val.id
      this.personalForm.typeCode = val.code
      console.log(this.$refs.personalForm)
    },
    // 配置下拉框change事件
    dispose(val) {
      console.log(val)
      this.disposeId = val.categoryName
      this.personalForm.disposeId = val.id
      this.personalForm.disposeCode = val.code
      console.log(this.personalForm.disposeId)
    },
    getcategorys() {
      // 物品品牌数据
      searchEmpCategory2(1).then(res => {
        console.log(res)
        if (res.data.ret === 200) {
          this.brands = res.data.data.content.list
        }
      })
      // 规格型号数据
      searchEmpCategory2(2).then(res => {
        if (res.data.ret === 200) {
          this.types = res.data.data.content.list
        }
      })
      // 档次级别
      searchEmpCategory2(3).then(res => {
        if (res.data.ret === 200) {
          this.levels = res.data.data.content.list
        }
      })
      // 物品颜色
      searchEmpCategory2(4).then(res => {
        if (res.data.ret === 200) {
          this.colors = res.data.data.content.list
        }
      })
      // 物品配置
      searchEmpCategory2(5).then(res => {
        if (res.data.ret === 200) {
          this.disposes = res.data.data.content.list
        }
      })
      // 物品版本
      searchEmpCategory2(6).then(res => {
        if (res.data.ret === 200) {
          this.versions = res.data.data.content.list
        }
      })
      // 直径规格
      searchEmpCategory2(7).then(res => {
        if (res.data.ret === 200) {
          this.diameters = res.data.data.content.list
        }
      })
      // 直径规格
      searchEmpCategory2(8).then(res => {
        if (res.data.ret === 200) {
          this.lengthLevels = res.data.data.content.list
        }
      })
      // 表面处理
      searchEmpCategory2(9).then(res => {
        if (res.data.ret === 200) {
          this.faces = res.data.data.content.list
        }
      })
      // 性能等级
      searchEmpCategory2(10).then(res => {
        if (res.data.ret === 200) {
          this.performanceLevels = res.data.data.content.list
        }
      })
      // 计量单位
      searchMea().then(res => {
        if (res.data.ret === 200) {
          this.measurements = res.data.data.content
        }
      })
    },
    // 商品图上传图片开始++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++开始
    submitUpload() {
      this.$refs.upload.submit()
    },
    handlepicRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlepicPreview(file) {
      this.picidsImageUrl = file.url
      this.picidsVisible = true
    },
    handlepicsuccess(response) {
      this.personalForm.picids.push(response.data.content.picId)
      console.log(response.data.content.picId)
    },
    // 商品图上传图片结束++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++结束
    // 详情图上传图片开始++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++开始
    detailpicsubmitUpload() {
      this.$refs.detailpicupload.submit()
    },
    handledetailpicRemove(file, fileList) {
      console.log(file, fileList)
    },
    handledetailpicPreview(file) {
      this.picidsImageUrl = file.url
      this.picidsVisible = true
    },
    handledetailpicsuccess(response) {
      this.personalForm.detailpicid.push(response.data.content.picId)
      console.log(response.data.content.picId)
    },
    // 详情图上传图片结束++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++结束
    // 保存操作
    handlesave() {
      this.$refs.personalForm.validate((valid) => {
        if (valid) {
          this.$refs.personalForm2.validate((valid) => {
            if (valid) {
              createnewproduct(this.personalForm).then(res => {
                console.log(res)
                if (res.data.ret === 200) {
                  this.$notify({
                    title: '成功',
                    message: '保存成功',
                    type: 'success',
                    offset: 100
                  })
                  this.restAllForm()
                  this.$refs.personalForm.clearValidate()
                  this.$refs.personalForm.resetFields()
                  this.$refs.personalForm2.clearValidate()
                  this.$refs.personalForm2.resetFields()
                  this.$refs.detailpicupload.clearFiles()
                  this.$refs.upload.clearFiles()
                  this.$router.go(-1)
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
    // 清空记录
    restAllForm() {
      this.workCenterId = ''
      this.personalForm = {
        code: '',
        barcode: '',
        productname: '',
        typeid: '',
        categoryid: '',
        color: '',
        brand: '',
        kpigrade: '',
        point: '',
        zhibaoqi: '',
        weight: '',
        volume: '',
        costprice: '',
        tradeprice: '',
        saleprice: '',
        purchaseprice: '',
        lowerprice: '',
        supplierid: '',
        createid: '',
        level: '',
        purchasemeasurement: '',
        salemeasurement: '',
        stockmeasurement: '',
        producemeasurement: '',
        source: '',
        valuation: '',
        isactive: '',
        picids: [],
        detailpicid: [],
        memberprice: '',
        versionId: '',
        diameterId: '',
        lengthLevelId: '',
        faceId: '',
        performanceLevelId: '',
        disposeId: '',
        colorId: '',
        workCenterId: ''
      }
      this.supplierid = ''
      // 车辆型号回显
      this.typeid = ''
      // 配置回显
      this.disposeId = ''
      // 版本回显
      this.versionId = ''
      // 颜色回显
      this.colorId = ''
      // 直径回显
      this.diameterId = ''
      // 长度回显
      this.lengthLevelId = ''
      // 表面处理回显
      this.faceId = ''
      // 性能等级回显
      this.performanceLevelId = ''
      this.categoryid = ''
    },
    // 继续录入
    handleentry() {
      console.log(this.personalForm)
      this.$refs.personalForm.validate((valid) => {
        if (valid) {
          this.$refs.personalForm2.validate((valid) => {
            if (valid) {
              createnewproduct(this.personalForm).then(res => {
                console.log(res)
                if (res.data.ret === 200) {
                  this.$notify({
                    title: '成功',
                    message: '保存成功',
                    type: 'success',
                    offset: 100
                  })
                  const anchor = this.$refs.geren.offsetTop
                  console.log(anchor)
                  document.documentElement.scrollTop = anchor - 100
                  this.restAllForm()
                  this.$refs.personalForm.clearValidate()
                  this.$refs.personalForm.resetFields()
                  this.$refs.personalForm2.clearValidate()
                  this.$refs.personalForm2.resetFields()
                  this.$refs.detailpicupload.clearFiles()
                  this.$refs.upload.clearFiles()
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
              const anchor2 = this.$refs.lianxi.offsetTop
              console.log(anchor2)
              document.documentElement.scrollTop = anchor2 - 100
              return false
            }
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: '信息未填完整',
            offset: 100
          })
          const anchor3 = this.$refs.lianxi.offsetTop
          console.log(anchor3)
          document.documentElement.scrollTop = anchor3 - 100
          return false
        }
      })
    },
    // 取消操作
    handlecancel() {
      this.$router.go(-1)
      const view = { path: '/Product/NewProduct', name: 'NewProduct', fullPath: '/Product/NewProduct', title: 'NewProduct' }
      this.$store.dispatch('delView', view).then(({ visitedViews }) => {
      })
    },
    // 供货商输入框focus事件触发
    handlechoose() {
      this.empcontrol = true
    },
    // 供货商列表返回数据
    personName(val) {
      console.log(val)
      this.supplierid = val.supplierName
      this.personalForm.supplierid = val.id
    },
    // focus更新
    updatecate() {
      this.getcategorys()
    },
    // 物品分类focus
    treechoose() {
      this.treecontrol = true
    },
    // 物品分类数据
    tree(val) {
      this.categoryid = val.categoryName
      this.personalForm.categoryCode = val.code
    },
    finder(val) {
      const Id = this.recursion(val)
      console.log(val)
      if (Id.code === '01') {
        this.personalForm.categoryCode = '01' + val.data.code
      } else if (Id.code === '02') {
        if (val.level === 2) {
          this.personalForm.categoryCode = '02' + val.data.code + '00' + '00'
        } else if (val.level === 3) {
          console.log(val)
          this.personalForm.categoryCode = '02' + val.parent.data.code + val.data.code + '00'
        } else if (val.level === 4) {
          this.personalForm.categoryCode = '02' + val.parent.parent.data.code + val.parent.data.code + val.data.code
        }
      } else if (Id.code === '03') {
        if (val.level === 3) {
          this.personalForm.categoryCode = '03' + val.parent.data.code + val.data.code
        }
      }
      console.log(this.personalForm.categoryCode)
      this.personalForm.categoryid = Id.id
    },
    // 递归函数
    recursion(val) {
      if (val.level === 1) {
        return val.data
      } else {
        return this.recursion(val.parent)
      }
    }
  }
}
</script>

<style rel="stylesheet/css" scoped>
  .container>>>.el-col-6 {
    height: 94.64px;
  }
  .ERP-container {
    margin-right: 0;
  }
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

</style>
