(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fb99"],{"9bmr":function(e,t,a){"use strict";var n=a("fZE4");a.n(n).a},DhTb:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"h",function(){return o}),a.d(t,"k",function(){return i}),a.d(t,"e",function(){return d}),a.d(t,"a",function(){return p}),a.d(t,"g",function(){return s}),a.d(t,"i",function(){return l}),a.d(t,"b",function(){return c}),a.d(t,"f",function(){return u}),a.d(t,"d",function(){return f}),a.d(t,"j",function(){return m});var n=a("t3Un");function r(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("Json",e),Object(n.a)({url:"/erp/workCenter/create",method:"post",data:t})}function o(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("id",e.id),""!==e.code&&null!==e.code&&void 0!==e.code&&t.append("code",e.code),""!==e.workCenterName&&null!==e.workCenterName&&void 0!==e.workCenterName&&t.append("workCenterName",e.workCenterName),""!==e.isKey&&null!==e.isKey&&void 0!==e.isKey&&t.append("isKey",e.isKey),""!==e.deptId&&null!==e.deptId&&void 0!==e.deptId&&t.append("deptId",e.deptId),""!==e.stat&&null!==e.stat&&void 0!==e.stat&&t.append("stat",e.stat),t.append("pageNum",e.pageNum),t.append("pageSize",e.pageSize),Object(n.a)({url:"/erp/workCenter/search",method:"post",data:t})}function i(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("Json",e),Object(n.a)({url:"/erp/workCenter/update",method:"post",data:t})}function d(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("modelids",e),Object(n.a)({url:"/erp/workCenter/delete",method:"post",data:t})}function p(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("Json",e),Object(n.a)({url:"/erp/processFile/create",method:"post",data:t})}function s(e){var t=new URLSearchParams;return""!==e.code&&null!==e.code&&void 0!==e.code&&t.append("code",e.code),""!==e.processName&&null!==e.processName&&void 0!==e.processName&&t.append("processName",e.processName),""!==e.shortName&&null!==e.shortName&&void 0!==e.shortName&&t.append("shortName",e.shortName),""!==e.description&&null!==e.description&&void 0!==e.description&&t.append("description",e.description),""!==e.stat&&null!==e.stat&&void 0!==e.stat&&t.append("stat",e.stat),""!==e.pageNum&&null!==e.pageNum&&void 0!==e.pageNum&&t.append("pageNum",e.pageNum),""!==e.pageSize&&null!==e.pageSize&&void 0!==e.pageSize&&t.append("pageSize",e.pageSize),Object(n.a)({url:"/erp/processFile/search",method:"post",data:t})}function l(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("Json",e),Object(n.a)({url:"/erp/processFile/update",method:"post",data:t})}function c(e,t){var a=new URLSearchParams;return a.append("Json",e),a.append("detailJson",t),Object(n.a)({url:"/erp/standardProcess/create",method:"post",data:a})}function u(e){var t=new URLSearchParams;return""!==e.code&&null!==e.code&&void 0!==e.code&&t.append("code",e.code),""!==e.shortName&&null!==e.shortName&&void 0!==e.shortName&&t.append("shortName",e.shortName),""!==e.workCenterId&&null!==e.workCenterId&&void 0!==e.workCenterId&&t.append("workCenterId",e.workCenterId),""!==e.testMethod&&null!==e.testMethod&&void 0!==e.testMethod&&t.append("testMethod",e.testMethod),""!==e.isCost&&null!==e.isCost&&void 0!==e.isCost&&t.append("isCost",e.isCost),""!==e.isHelp&&null!==e.isHelp&&void 0!==e.isHelp&&t.append("isHelp",e.isHelp),""!==e.stat&&null!==e.stat&&void 0!==e.stat&&t.append("stat",e.stat),t.append("pageNum",e.pageNum),t.append("pageSize",e.pageSize),Object(n.a)({url:"/erp/standardProcess/search",method:"post",data:t})}function f(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("modelids",e),Object(n.a)({url:"/erp/standardProcess/delete",method:"post",data:t})}function m(e,t){var a=new URLSearchParams;return a.append("Json",e),a.append("detailJson",t),Object(n.a)({url:"/erp/standardProcess/update",method:"post",data:a})}},dAzB:function(e,t,a){"use strict";a.r(t);var n=a("gDS+"),r=a.n(n),o=a("DhTb"),i=a("moiu"),d={name:"AddWorkCenter",data:function(){return{depts:[],personalForm:{createId:3,countryId:1,repositoryId:438,regionId:2},personalrules:{code:[{required:!0,message:"请输入工作中心编号",trigger:"blur"}],workCenterName:[{required:!0,message:"请输入工作中心名称",trigger:"blur"}],isKey:[{required:!0,message:"请选择是否关键工作中心",trigger:"change"}],deptId:[{required:!0,message:"请选择所属部门",trigger:"change"}],stat:[{required:!0,message:"请选择启用状态",trigger:"change"}]}}},mounted:function(){this.getlist()},methods:{getlist:function(){var e=this;Object(i.m)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)})},restAllForm:function(){this.personalForm={createId:3,countryId:1,repositoryId:438,regionId:2}},handlesave:function(){var e=this,t=this.personalForm;for(var a in t)""!==t[a]&&void 0!==t[a]&&null!==t[a]||delete t[a];var n=r()(t);this.$refs.personalForm.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;t&&Object(o.c)(n).then(function(t){console.log(t),200===t.data.ret?(e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields()):e.$notify.error({title:"错误",message:t.data.msg,offset:100})})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/ProcessFile/AddWorkCenter",name:"AddWorkCenter",fullPath:"/ProcessFile/AddWorkCenter",title:"AddWorkCenter"}).then(function(e){e.visitedViews})}}},p=(a("9bmr"),a("KHd+")),s=Object(p.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ERP-container"},[a("div",{staticClass:"app-container",staticStyle:{"padding-right":"0"}},[a("el-card",{staticClass:"box-card"},[a("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-width":"135px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.code"),prop:"code"}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.code,callback:function(t){e.$set(e.personalForm,"code",t)},expression:"personalForm.code"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.workCenterName"),prop:"workCenterName"}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.workCenterName,callback:function(t){e.$set(e.personalForm,"workCenterName",t)},expression:"personalForm.workCenterName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.stat"),prop:"stat","label-width":"100px"}},[a("el-radio-group",{staticStyle:{width:"277px","margin-left":"19px"},model:{value:e.personalForm.stat,callback:function(t){e.$set(e.personalForm,"stat",t)},expression:"personalForm.stat"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("未启用")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.deptId"),prop:"deptId","label-width":"100px"}},[a("el-select",{staticStyle:{"margin-left":"18px",width:"218px"},attrs:{clearable:""},model:{value:e.personalForm.deptId,callback:function(t){e.$set(e.personalForm,"deptId",t)},expression:"personalForm.deptId"}},e._l(e.depts,function(e,t){return a("el-option",{key:t,attrs:{value:e.id,label:e.deptName}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.isKey"),prop:"isKey"}},[a("el-radio-group",{staticStyle:{"margin-left":"19px"},model:{value:e.personalForm.isKey,callback:function(t){e.$set(e.personalForm,"isKey",t)},expression:"personalForm.isKey"}},[a("el-radio",{staticStyle:{width:"120px"},attrs:{label:1}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1)],1)],1)],1)],1)]),e._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[a("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd",width:"98px"},attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)])},[],!1,null,"2d95777b",null);s.options.__file="AddWorkCenter.vue";t.default=s.exports},fZE4:function(e,t,a){},"gDS+":function(e,t,a){e.exports={default:a("oh+g"),__esModule:!0}},moiu:function(e,t,a){"use strict";a.d(t,"t",function(){return r}),a.d(t,"p",function(){return o}),a.d(t,"h",function(){return i}),a.d(t,"c",function(){return d}),a.d(t,"u",function(){return p}),a.d(t,"n",function(){return s}),a.d(t,"b",function(){return l}),a.d(t,"y",function(){return c}),a.d(t,"k",function(){return u}),a.d(t,"r",function(){return f}),a.d(t,"f",function(){return m}),a.d(t,"x",function(){return v}),a.d(t,"j",function(){return h}),a.d(t,"o",function(){return g}),a.d(t,"l",function(){return y}),a.d(t,"e",function(){return N}),a.d(t,"d",function(){return b}),a.d(t,"q",function(){return _}),a.d(t,"s",function(){return w}),a.d(t,"g",function(){return S}),a.d(t,"w",function(){return P}),a.d(t,"m",function(){return O}),a.d(t,"a",function(){return j}),a.d(t,"v",function(){return k}),a.d(t,"i",function(){return R});var n=a("t3Un");function r(){return Object(n.a)({url:"/erp/NumberingRules/searchcategory",method:"post"})}function o(e){var t=new URLSearchParams;return""!==e.ruleName&&null!==e.ruleName&&void 0!==e.ruleName&&t.append("ruleName",e.ruleName),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(n.a)({url:"/erp/NumberingRules/search",method:"post",data:t})}function i(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("ids",e),Object(n.a)({url:"/erp/NumberingRules/delete",method:"post",data:t})}function d(e){var t=new URLSearchParams;return""!==e.ruleName&&null!==e.ruleName&&void 0!==e.ruleName&&t.append("ruleName",e.ruleName),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.prefix&&null!==e.prefix&&void 0!==e.prefix&&t.append("prefix",e.prefix),""!==e.dateType&&null!==e.dateType&&void 0!==e.dateType&&t.append("dateType",e.dateType),""!==e.length&&null!==e.length&&void 0!==e.length&&t.append("length",e.length),Object(n.a)({url:"/erp/NumberingRules/create",method:"post",data:t})}function p(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("id",e.id),""!==e.ruleName&&null!==e.ruleName&&void 0!==e.ruleName&&t.append("ruleName",e.ruleName),""!==e.isEffective&&null!==e.isEffective&&void 0!==e.isEffective&&t.append("iseffective",e.isEffective),""!==e.prefix&&null!==e.prefix&&void 0!==e.prefix&&t.append("prefix",e.prefix),""!==e.dateType&&null!==e.dateType&&void 0!==e.dateType&&t.append("dateType",e.dateType),""!==e.length&&null!==e.length&&void 0!==e.length&&t.append("length",e.length),Object(n.a)({url:"/erp/NumberingRules/update",method:"post",data:t})}function s(e){var t=new URLSearchParams;return""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.modelname&&null!==e.modelname&&void 0!==e.modelname&&t.append("modelname",e.modelname),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(n.a)({url:"/erp/messageModel/modellist",method:"post",data:t})}function l(e){var t=new URLSearchParams;return""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.modelname&&null!==e.modelname&&void 0!==e.modelname&&t.append("modelname",e.modelname),""!==e.content&&null!==e.content&&void 0!==e.content&&t.append("content",e.content),Object(n.a)({url:"/erp/messageModel/addmodel",method:"post",data:t})}function c(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("modelid",e.id),""!==e.isEffective&&null!==e.isEffective&&void 0!==e.isEffective&&t.append("iseffective",e.isEffective),""!==e.modelName&&null!==e.modelName&&void 0!==e.modelName&&t.append("modelname",e.modelName),""!==e.content&&null!==e.content&&void 0!==e.content&&t.append("content",e.content),Object(n.a)({url:"/erp/messageModel/updatemodel",method:"post",data:t})}function u(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("modelids",e),Object(n.a)({url:"/erp/messageModel/deletemodel",method:"post",data:t})}function f(e){var t=new URLSearchParams;return""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.categoryname&&null!==e.categoryname&&void 0!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(n.a)({url:"/erp/measurement/search",method:"post",data:t})}function m(e){var t=new URLSearchParams;return""!==e.category&&null!==e.category&&void 0!==e.category&&t.append("category",e.category),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.categoryname&&null!==e.categoryname&&void 0!==e.categoryname&&t.append("categoryname",e.categoryname),Object(n.a)({url:"/erp/measurement/create",method:"post",data:t})}function v(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("id",e.id),""!==e.isEffective&&null!==e.isEffective&&void 0!==e.isEffective&&t.append("iseffective",e.isEffective),""!==e.categoryName&&null!==e.categoryName&&void 0!==e.categoryName&&t.append("categoryname",e.categoryName),Object(n.a)({url:"/erp/measurement/update",method:"post",data:t})}function h(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("modelids",e),Object(n.a)({url:"/erp/measurement/delete",method:"post",data:t})}function g(){return Object(n.a)({url:"/erp/parameter/search",method:"post"})}function y(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("id",e.id),""!==e.isEffective&&null!==e.isEffective&&void 0!==e.isEffective&&t.append("isEffective",e.isEffective),Object(n.a)({url:"/erp/parameter/effective",method:"post",data:t})}function N(e,t){var a=new URLSearchParams;return""!==e.process_name&&null!==e.process_name&&void 0!==e.process_name&&a.append("process_name",e.process_name),""!==e.type&&null!==e.type&&void 0!==e.type&&a.append("type",e.type),""!==e.is_message&&null!==e.is_message&&void 0!==e.is_message&&a.append("is_message",e.is_message),""!==e.is_effective&&null!==e.is_effective&&void 0!==e.is_effective&&a.append("is_effective",e.is_effective),""!==e.effect_region&&null!==e.effect_region&&void 0!==e.effect_region&&a.append("effect_region",e.effect_region),""!==e.effect_repository&&null!==e.effect_repository&&void 0!==e.effect_repository&&a.append("effect_repository",e.effect_repository),""!==e.country_id&&null!==e.country_id&&void 0!==e.country_id&&a.append("country_id",e.country_id),""!==t&&null!==t&&void 0!==t&&a.append("detailJson",t),Object(n.a)({url:"/erp/approvalProcess/create",method:"post",data:a})}function b(e){var t=new URLSearchParams;return""!==e.ruleName&&null!==e.ruleName&&void 0!==e.ruleName&&t.append("ruleName",e.ruleName),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.prefix&&null!==e.prefix&&void 0!==e.prefix&&t.append("prefix",e.prefix),""!==e.dateType&&null!==e.dateType&&void 0!==e.dateType&&t.append("dateType",e.dateType),""!==e.length&&null!==e.length&&void 0!==e.length&&t.append("length",e.length),Object(n.a)({url:"/erp/NumberingRules/create",method:"post",data:t})}function _(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("id",e),Object(n.a)({url:"/erp/approvalProcess/searchDetail",method:"post",data:t})}function w(e){var t=new URLSearchParams;return""!==e.process_name&&null!==e.process_name&&void 0!==e.process_name&&t.append("process_name",e.process_name),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.is_effective&&null!==e.is_effective&&void 0!==e.is_effective&&t.append("is_effective",e.is_effective),t.append("pagesize",e.pagesize),t.append("pagenum",e.pagenum),Object(n.a)({url:"/erp/approvalProcess/search",method:"post",data:t})}function S(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("modelids",e),Object(n.a)({url:"/erp/approvalProcess/delete",method:"post",data:t})}function P(e,t){var a=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&a.append("id",e.id),""!==e.processName&&null!==e.processName&&void 0!==e.processName&&a.append("process_name",e.processName),""!==e.type&&null!==e.type&&void 0!==e.type&&a.append("type",e.type),""!==e.isMessage&&null!==e.isMessage&&void 0!==e.isMessage&&a.append("is_message",e.isMessage),""!==e.isEffective&&null!==e.isEffective&&void 0!==e.isEffective&&a.append("is_effective",e.isEffective),""!==e.effect_region&&null!==e.effect_region&&void 0!==e.effect_region&&a.append("effect_region",e.effect_region),""!==e.effect_repository&&null!==e.effect_repository&&void 0!==e.effect_repository&&a.append("effect_repository",e.effect_repository),""!==e.countryId&&null!==e.countryId&&void 0!==e.countryId&&a.append("country_id",e.countryId),""!==t&&null!==t&&void 0!==t&&a.append("detailJson",t),Object(n.a)({url:"/erp/approvalProcess/update",method:"post",data:a})}function O(){return Object(n.a)({url:"/erp/country/getdeptlist",method:"post"})}function j(e){var t=new URLSearchParams;return""!==e.deptno&&null!==e.deptno&&void 0!==e.deptno&&t.append("deptno",e.deptno),""!==e.deptname&&null!==e.deptname&&void 0!==e.deptname&&t.append("deptname",e.deptname),Object(n.a)({url:"/erp/country/adddept",method:"post",data:t})}function k(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("deptid",e.id),""!==e.deptNo&&null!==e.deptNo&&void 0!==e.deptNo&&t.append("deptno",e.deptNo),""!==e.deptName&&null!==e.deptName&&void 0!==e.deptName&&t.append("deptname",e.deptName),Object(n.a)({url:"/erp/country/updatedept",method:"post",data:t})}function R(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("ids",e),Object(n.a)({url:"/erp/country/deletedept",method:"post",data:t})}},"oh+g":function(e,t,a){var n=a("WEpk"),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}}]);