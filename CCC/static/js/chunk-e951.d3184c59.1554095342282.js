(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e951"],{"BJo+":function(t,e,a){},WN0C:function(t,e,a){"use strict";a.r(e);var r=a("gDS+"),l=a.n(r),o=a("lvXW"),n=a("6HaC"),s={name:"AddOutFactory",components:{MyDelivery:a("nvZe").a},data:function(){return{props:{value:"id",label:"regionName",children:"regionListVos"},regionId:[],regions:[],cities:[],provinces:[],nations:[],receiverId:"",stockControl:!1,personalForm:{createId:3},personalrules:{factoryName:[{required:!0,message:"请输入工厂名称",trigger:"blur"}]}}},created:function(){this.getnationlist()},methods:{getnationlist:function(){var t=this;Object(n.e)().then(function(e){200===e.data.ret?t.nations=e.data.data.content:console.log("国家列表出错")}),Object(n.j)().then(function(e){200===e.data.ret?t.regions=t.tranKTree(e.data.data.content):console.log("区域列表出错")})},tranKTree:function(t){var e=this;if(t&&t.length)return t.map(function(t){return{id:t.id,regionName:t.regionName,regionListVos:e.tranKTree(t.regionListVos)}})},updatecountry:function(){this.getnationlist()},handlechange:function(t){var e=this;Object(n.g)(t).then(function(t){200===t.data.ret?e.provinces=t.data.data.content:console.log("国家选择省出错")})},handlechange2:function(t){var e=this;Object(n.d)(t).then(function(t){console.log(t),200===t.data.ret?e.cities=t.data.data.content:console.log("省选择市出错")})},handlechooseStock:function(){this.stockControl=!0},stockName:function(t){this.receiverId=t.personName,this.personalForm.receiverId=t.id},restAllForm:function(){this.personalForm={createId:3},this.receiverId=null,this.handlePersonId=null,this.workCenterId=null,this.producePlanNumber=null},handlesave:function(){var t=this;this.personalForm.regionId=this.regionId[this.regionId.length-1];var e=this.personalForm;for(var a in e)""!==e[a]&&void 0!==e[a]&&null!==e[a]||delete e[a];var r=l()(e);this.$refs.personalForm.validate(function(e){if(!e)return t.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;Object(o.a)(r).then(function(e){200===e.data.ret?(t.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),Object(n.l)(t.regionId,t.personalForm.regionId).then(function(t){console.log(t)}),t.restAllForm(),t.$refs.personalForm.clearValidate(),t.$refs.personalForm.resetFields(),t.$refs.personalForm2.clearValidate(),t.$refs.personalForm2.resetFields()):t.$notify.error({title:"错误",message:e.data.msg,offset:100})})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/OutFactory/AddOutFactory",name:"AddOutFactory",fullPath:"/OutFactory/AddOutFactory",title:"AddOutFactory"}).then(function(t){t.visitedViews})}}},i=(a("WrBS"),a("KHd+")),c=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ERP-container"},[a("div",{staticClass:"app-container",staticStyle:{"padding-right":"0"}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("h2",{ref:"geren",staticClass:"form-name"},[t._v("基本信息")]),t._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:t.personalForm,rules:t.personalrules,inline:!0,"status-icon":"","label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.factoryName"),prop:"factoryName"}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.factoryName,callback:function(e){t.$set(t.personalForm,"factoryName",e)},expression:"personalForm.factoryName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.factoryNumber")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.factoryNumber,callback:function(e){t.$set(t.personalForm,"factoryNumber",e)},expression:"personalForm.factoryNumber"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.factoryFax")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.factoryFax,callback:function(e){t.$set(t.personalForm,"factoryFax",e)},expression:"personalForm.factoryFax"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.factoryContactName")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.factoryContactName,callback:function(e){t.$set(t.personalForm,"factoryContactName",e)},expression:"personalForm.factoryContactName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.factoryContactPhone")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.factoryContactPhone,callback:function(e){t.$set(t.personalForm,"factoryContactPhone",e)},expression:"personalForm.factoryContactPhone"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.taxNumber")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.taxNumber,callback:function(e){t.$set(t.personalForm,"taxNumber",e)},expression:"personalForm.taxNumber"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.accountName")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.accountName,callback:function(e){t.$set(t.personalForm,"accountName",e)},expression:"personalForm.accountName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.bankName")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.bankName,callback:function(e){t.$set(t.personalForm,"bankName",e)},expression:"personalForm.bankName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.account")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.account,callback:function(e){t.$set(t.personalForm,"account",e)},expression:"personalForm.account"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.businessRegisterNumber")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.businessRegisterNumber,callback:function(e){t.$set(t.personalForm,"businessRegisterNumber",e)},expression:"personalForm.businessRegisterNumber"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.productionLicense")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.productionLicense,callback:function(e){t.$set(t.personalForm,"productionLicense",e)},expression:"personalForm.productionLicense"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.unitAddress")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.unitAddress,callback:function(e){t.$set(t.personalForm,"unitAddress",e)},expression:"personalForm.unitAddress"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.unitEmail")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.unitEmail,callback:function(e){t.$set(t.personalForm,"unitEmail",e)},expression:"personalForm.unitEmail"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.stat")}},[a("el-radio-group",{staticStyle:{width:"277px","margin-left":"18px"},model:{value:t.personalForm.stat,callback:function(e){t.$set(t.personalForm,"stat",e)},expression:"personalForm.stat"}},[a("el-radio",{staticStyle:{width:"120px"},attrs:{label:1}},[t._v("启用")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("停用")])],1)],1)],1)],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"},attrs:{shadow:"never"}},[a("h2",{ref:"geren",staticClass:"form-name"},[t._v("基本信息")]),t._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"personalForm2",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:t.personalForm,rules:t.personalrules,inline:!0,"status-icon":"","label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.receiverId")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},on:{focus:t.handlechooseStock},model:{value:t.receiverId,callback:function(e){t.receiverId=e},expression:"receiverId"}}),t._v(" "),a("my-delivery",{attrs:{deliverycontrol:t.stockControl},on:{"update:deliverycontrol":function(e){t.stockControl=e},deliveryName:t.stockName}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.receivePlaceCode")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.receivePlaceCode,callback:function(e){t.$set(t.personalForm,"receivePlaceCode",e)},expression:"personalForm.receivePlaceCode"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.countryId")}},[a("el-select",{staticStyle:{"margin-left":"18px",width:"218px"},on:{change:t.handlechange,focus:t.updatecountry},model:{value:t.personalForm.countryId,callback:function(e){t.$set(t.personalForm,"countryId",e)},expression:"personalForm.countryId"}},t._l(t.nations,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.provinceId")}},[a("el-select",{staticStyle:{"margin-left":"18px",width:"218px"},on:{change:t.handlechange2},model:{value:t.personalForm.provinceId,callback:function(e){t.$set(t.personalForm,"provinceId",e)},expression:"personalForm.provinceId"}},t._l(t.provinces,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.cityId")}},[a("el-select",{staticStyle:{"margin-left":"18px",width:"218px"},model:{value:t.personalForm.cityId,callback:function(e){t.$set(t.personalForm,"cityId",e)},expression:"personalForm.cityId"}},t._l(t.cities,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.regionId")}},[a("el-cascader",{staticStyle:{"margin-left":"18px",width:"218px"},attrs:{options:t.regions,props:t.props,"show-all-levels":!1,"change-on-select":"",filterable:"",clearable:""},model:{value:t.regionId,callback:function(e){t.regionId=e},expression:"regionId"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.receiverPhone")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.receiverPhone,callback:function(e){t.$set(t.personalForm,"receiverPhone",e)},expression:"personalForm.receiverPhone"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:t.$t("OutFactory.receiverAddress")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:t.personalForm.receiverAddress,callback:function(e){t.$set(t.personalForm,"receiverAddress",e)},expression:"personalForm.receiverAddress"}})],1)],1)],1)],1)],1)]),t._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[a("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd",width:"98px"},attrs:{type:"primary"},on:{click:function(e){t.handlesave()}}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.handlecancel()}}},[t._v("取消")])],1)],1)])},[],!1,null,"26bb2925",null);c.options.__file="AddOutFactory.vue";e.default=c.exports},WrBS:function(t,e,a){"use strict";var r=a("BJo+");a.n(r).a}}]);