(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7ebd"],{"2dhC":function(e,t,a){"use strict";a.r(t);var l=a("gDS+"),r=a.n(l),n=a("uAk4"),o=a("moiu"),i=a("QGDC"),s=a("gGdf"),c=a("F2hH"),u=a("YK0C"),d={name:"AddProduceReport",components:{ProduceTask:a("DRYD").a,ProducePlan:u.a,MyCenter:i.a,MyDetail:c.a,MyEmp:s.a},data:function(){var e=function(e,t,a){console.log(t),""===t?a(new Error("请输入密码")):a()};return{empcontrol:!1,bumen:"",depts:[],produceTaskNumber:"",activeName2:"first",workCenterId:"",producecontrol:!1,centercontrol:!1,control:!1,personalForm:{createPersonId:3,countryId:1,repositoryId:438,regionId:2},personalrules:{produceTaskNumber:[{required:!0,validator:e,trigger:"focus"}],workCenterId:[{required:!0,validator:e,trigger:"focus"}],produceDate:[{required:!0,message:"请选择日期",trigger:"change"}],deptId:[{required:!0,message:"请选择部门",trigger:"change"}]},list:[],list2:[],list3:[],list4:[],validRules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;Object(o.m)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)})},addproduct:function(){this.control=!0},productdetail:function(e){for(var t=this.$refs.editable4.getRecords(),a=0;a<e.length;a++){for(var l=0;l<t.length;l++)if(e[a].productCode===t[l].productCode)return this.$notify.error({title:"错误",message:"物品已添加",offset:100}),!1;this.$refs.editable4.insert(e[a])}},handleAddEmp:function(){this.empcontrol=!0,this.bumen=this.personalForm},empDetail:function(e){for(var t=0;t<e.length;t++)this.$refs.editable2.insert(e[t])},chooseproduce:function(){""===this.personalForm.workCenterId||null===this.personalForm.workCenterId||void 0===this.personalForm.workCenterId?this.$notify.error({title:"错误",message:"请先选择工作中心",offset:100}):this.producecontrol=!0},produce:function(e){for(var t=0;t<e.length;t++)e[t].workCenterId===this.personalForm.workCenterId&&this.$refs.editable.insert(e[t])},moredata:function(e){this.personalForm.produceTaskNumber=e.taskNumber},finish:function(e){console.log(123),console.log(e),e.finishQuantity>e.produceQuantity-e.alreadyProduceQuantity&&this.$notify.error({title:"错误",message:"完成数已超出限制",offset:100})},workcenterchoose:function(){this.centercontrol=!0},center:function(e){console.log(e),this.workCenterId=e.workCenterName,this.personalForm.workCenterId=e.id},handlechooseStock:function(){this.stockControl=!0},stockName:function(e){this.handlePersonId=e.personName,this.personalForm.handlePersonId=e.id},restAllForm:function(){this.personalForm={createPersonId:3,countryId:1,repositoryId:438,regionId:2},this.workCenterId=null},handlesave:function(){var e=this,t=this.$refs.editable.getRecords(),a=this.$refs.editable2.getRecords(),l=this.$refs.editable3.getRecords(),o=this.$refs.editable4.getRecords();if(0===t.length||0===a.length||0===l.length||0===o.length)return this.$notify.error({title:"错误",message:"明细表不能为空",offset:100}),!1;t.map(function(e){return e}).forEach(function(e){return null!==e.productCode&&""!==e.productCode&&void 0!==e.productCode||delete e.productCode,null!==e.productName&&""!==e.productName&&void 0!==e.productName||delete e.productName,null!==e.workHours&&""!==e.workHours&&void 0!==e.workHours||delete e.workHours,null!==e.unit&&""!==e.unit&&void 0!==e.unit||delete e.unit,null!==e.finishQuantity&&""!==e.finishQuantity&&void 0!==e.finishQuantity||delete e.finishQuantity,null!==e.passQuantity&&""!==e.passQuantity&&void 0!==e.passQuantity||delete e.passQuantity,null!==e.passRate&&""!==e.passRate&&void 0!==e.passRate||delete e.passRate,e}),a.map(function(e){return e}).forEach(function(e){return null!==e.producePersonId&&""!==e.producePersonId&&void 0!==e.producePersonId||delete e.producePersonId,null!==e.workHours&&""!==e.workHours&&void 0!==e.workHours||delete e.workHours,null!==e.finishQuantity&&""!==e.finishQuantity&&void 0!==e.finishQuantity||delete e.finishQuantity,null!==e.passQuantity&&""!==e.passQuantity&&void 0!==e.passQuantity||delete e.passQuantity,null!==e.passRate&&""!==e.passRate&&void 0!==e.passRate||delete e.passRate,e}),l.map(function(e){return e}).forEach(function(e){return null!==e.equipmentNumber&&""!==e.equipmentNumber&&void 0!==e.equipmentNumber||delete e.equipmentNumber,null!==e.equipmentName&&""!==e.equipmentName&&void 0!==e.equipmentName||delete e.equipmentName,null!==e.runTime&&""!==e.runTime&&void 0!==e.runTime||delete e.runTime,null!==e.finishQuantity&&""!==e.finishQuantity&&void 0!==e.finishQuantity||delete e.finishQuantity,null!==e.passQuantity&&""!==e.passQuantity&&void 0!==e.passQuantity||delete e.passQuantity,null!==e.passRate&&""!==e.passRate&&void 0!==e.passRate||delete e.passRate,e}),o.map(function(e){return e}).forEach(function(e){return null!==e.productCode&&""!==e.productCode&&void 0!==e.productCode||delete e.productCode,null!==e.productName&&""!==e.productName&&void 0!==e.productName||delete e.productName,null!==e.unit&&""!==e.unit&&void 0!==e.unit||delete e.unit,null!==e.todayAccess&&""!==e.todayAccess&&void 0!==e.todayAccess||delete e.todayAccess,null!==e.yesterdayRemain&&""!==e.yesterdayRemain&&void 0!==e.yesterdayRemain||delete e.yesterdayRemain,null!==e.todayUseup&&""!==e.todayUseup&&void 0!==e.todayUseup||delete e.todayUseup,null!==e.todayDamaged&&""!==e.todayDamaged&&void 0!==e.todayDamaged||delete e.todayDamaged,null!==e.todayRemain&&""!==e.todayRemain&&void 0!==e.todayRemain||delete e.todayRemain,e});var i=r()(t),s=r()(a),c=r()(l),u=r()(o),d=this.personalForm;for(var p in d)""!==d[p]&&void 0!==d[p]&&null!==d[p]||delete d[p];var m=r()(d);this.$refs.personalForm.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;Object(n.a)(m,i,s,c,u,e.personalForm).then(function(t){console.log(t),200===t.data.ret?(e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.editable.clear(),e.$refs.editable2.clear(),e.$refs.editable3.clear(),e.$refs.editable4.clear(),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields()):e.$notify.error({title:"错误",message:t.data.msg,offset:100})})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/ProduceTask/AddProduceTask",name:"AddProduceTask",fullPath:"/ProduceTask/AddProduceTask",title:"AddProduceTask"}).then(function(e){e.visitedViews})}}},p=(a("PXkd"),a("KHd+")),m=Object(p.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ERP-container"},[a("div",{staticClass:"app-container",staticStyle:{"padding-right":"0"}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.title")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.title,callback:function(t){e.$set(e.personalForm,"title",t)},expression:"personalForm.title"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.deptId"),prop:"deptId"}},[a("el-select",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.deptId,callback:function(t){e.$set(e.personalForm,"deptId",t)},expression:"personalForm.deptId"}},e._l(e.depts,function(e,t){return a("el-option",{key:t,attrs:{value:e.id,label:e.deptName}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.workCenterId"),prop:"workCenterId"}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},on:{focus:e.workcenterchoose},model:{value:e.workCenterId,callback:function(t){e.workCenterId=t},expression:"workCenterId"}})],1),e._v(" "),a("my-center",{attrs:{control:e.centercontrol},on:{"update:control":function(t){e.centercontrol=t},center:e.center}})],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.produceTaskNumber"),prop:"produceTaskNumber"}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},on:{focus:e.chooseproduce},model:{value:e.personalForm.produceTaskNumber,callback:function(t){e.$set(e.personalForm,"produceTaskNumber",t)},expression:"personalForm.produceTaskNumber"}})],1),e._v(" "),a("produce-task",{attrs:{procontrol:e.producecontrol},on:{"update:procontrol":function(t){e.producecontrol=t},produce:e.produce,moredata:e.moredata}})],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.produceDate"),prop:"produceDate"}},[a("el-date-picker",{staticStyle:{"margin-left":"18px"},attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.personalForm.produceDate,callback:function(t){e.$set(e.personalForm,"produceDate",t)},expression:"personalForm.produceDate"}})],1)],1)],1)],1)],1)]),e._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"},attrs:{shadow:"never"}},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName2,callback:function(t){e.activeName2=t},expression:"activeName2"}},[a("el-tab-pane",{attrs:{label:"生产状况",name:"first"}},[a("el-form",{staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px","margin-top":"10px"},attrs:{model:e.personalForm,inline:!0,"status-icon":"","label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.countFinishQuantity")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.countFinishQuantity,callback:function(t){e.$set(e.personalForm,"countFinishQuantity",t)},expression:"personalForm.countFinishQuantity"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.countWorkHours")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.countWorkHours,callback:function(t){e.$set(e.personalForm,"countWorkHours",t)},expression:"personalForm.countWorkHours"}})],1)],1)],1)],1),e._v(" "),a("h2",{ref:"fuzhu",staticClass:"form-name",staticStyle:{"margin-top":"10px"}},[e._v("生产明细")]),e._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"58px"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable.removeSelecteds()}}},[e._v("删除")])],1),e._v(" "),a("div",{staticClass:"container"},[a("el-editable",{ref:"editable",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list=t}}},[a("el-editable-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),e._v(" "),a("el-editable-column",{attrs:{label:"序号","min-width":"55",align:"center",type:"index"}}),e._v(" "),a("el-editable-column",{attrs:{prop:"productCode",align:"center",label:"物品编号","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{prop:"productName",align:"center",label:"物品名称","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"workHours",align:"center",label:"工时","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{type:"default"},prop:"finishQuantity",align:"center",label:"完成数","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{value:t.row.finishQuantity},on:{focus:function(a){e.finish(t.row)}},model:{value:t.row.finishQuantity,callback:function(a){e.$set(t.row,"finishQuantity",a)},expression:"scope.row.finishQuantity"}})]}}])}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"passQuantity",align:"center",label:"合格数","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"passRate",align:"center",label:"合格率","min-width":"150px"}})],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"人员状况",name:"second"}},[a("el-form",{staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px","margin-top":"10px"},attrs:{model:e.personalForm,inline:!0,"status-icon":"","label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.shouldPeoples")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.shouldPeoples,callback:function(t){e.$set(e.personalForm,"shouldPeoples",t)},expression:"personalForm.shouldPeoples"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.actualPeoples")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.actualPeoples,callback:function(t){e.$set(e.personalForm,"actualPeoples",t)},expression:"personalForm.actualPeoples"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.shouldWorkHours")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.shouldWorkHours,callback:function(t){e.$set(e.personalForm,"shouldWorkHours",t)},expression:"personalForm.shouldWorkHours"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.overtimeHours")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.overtimeHours,callback:function(t){e.$set(e.personalForm,"overtimeHours",t)},expression:"personalForm.overtimeHours"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.stopHours")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.stopHours,callback:function(t){e.$set(e.personalForm,"stopHours",t)},expression:"personalForm.stopHours"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.effectiveHours")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.effectiveHours,callback:function(t){e.$set(e.personalForm,"effectiveHours",t)},expression:"personalForm.effectiveHours"}})],1)],1)],1)],1),e._v(" "),a("h2",{ref:"fuzhu",staticClass:"form-name",staticStyle:{"margin-top":"10px"}},[e._v("人员明细")]),e._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"58px"}},[a("el-button",{on:{click:e.handleAddEmp}},[e._v("添加人员")]),e._v(" "),a("my-emp",{attrs:{control:e.empcontrol,bumen:e.bumen},on:{"update:control":function(t){e.empcontrol=t},empDetail:e.empDetail}}),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable2.removeSelecteds()}}},[e._v("删除")])],1),e._v(" "),a("div",{staticClass:"container"},[a("el-editable",{ref:"editable2",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list2,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list2=t}}},[a("el-editable-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),e._v(" "),a("el-editable-column",{attrs:{label:"序号","min-width":"55",align:"center",type:"index"}}),e._v(" "),a("el-editable-column",{attrs:{prop:"personName",align:"center",label:"人员","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"workHours",align:"center",label:"工时","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"finishQuantity",align:"center",label:"完成数","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"passQuantity",align:"center",label:"合格数","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"passRate",align:"center",label:"合格率","min-width":"150px"}})],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"设备状况",name:"third"}},[a("el-form",{staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px","margin-top":"10px"},attrs:{model:e.personalForm,inline:!0,"status-icon":"","label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.equipmentQuantity")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.equipmentQuantity,callback:function(t){e.$set(e.personalForm,"equipmentQuantity",t)},expression:"personalForm.equipmentQuantity"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.actualEquipQuantity")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.actualEquipQuantity,callback:function(t){e.$set(e.personalForm,"actualEquipQuantity",t)},expression:"personalForm.actualEquipQuantity"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.allRunTime")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.allRunTime,callback:function(t){e.$set(e.personalForm,"allRunTime",t)},expression:"personalForm.allRunTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.runRate")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.runRate,callback:function(t){e.$set(e.personalForm,"runRate",t)},expression:"personalForm.runRate"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.loadRate")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.loadRate,callback:function(t){e.$set(e.personalForm,"loadRate",t)},expression:"personalForm.loadRate"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.useRate")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.useRate,callback:function(t){e.$set(e.personalForm,"useRate",t)},expression:"personalForm.useRate"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.stopQuantity")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.stopQuantity,callback:function(t){e.$set(e.personalForm,"stopQuantity",t)},expression:"personalForm.stopQuantity"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.stopTime")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.stopTime,callback:function(t){e.$set(e.personalForm,"stopTime",t)},expression:"personalForm.stopTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.stopReason")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.stopReason,callback:function(t){e.$set(e.personalForm,"stopReason",t)},expression:"personalForm.stopReason"}})],1)],1)],1)],1),e._v(" "),a("h2",{ref:"fuzhu",staticClass:"form-name",staticStyle:{"margin-top":"10px"}},[e._v("设备明细")]),e._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"58px"}},[a("el-button",{on:{click:function(t){e.$refs.editable3.insert()}}},[e._v("添加设备")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable3.removeSelecteds()}}},[e._v("删除")])],1),e._v(" "),a("div",{staticClass:"container"},[a("el-editable",{ref:"editable3",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list3,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list3=t}}},[a("el-editable-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),e._v(" "),a("el-editable-column",{attrs:{label:"序号","min-width":"55",align:"center",type:"index"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"equipmentNumber",align:"center",label:"设备编号","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInput",attrs:{min:0},type:"visible"},prop:"equipmentName",align:"center",label:"设备名称","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"runTime",align:"center",label:"开机时长","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"finishQuantity",align:"center",label:"完成数","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"passQuantity",align:"center",label:"合格数","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"passRate",align:"center",label:"合格率","min-width":"150px"}})],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"物料使用情况",name:"fourth"}},[a("el-form",{staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px","margin-top":"10px"},attrs:{model:e.personalForm,inline:!0,"status-icon":"","label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.countAccess")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.countAccess,callback:function(t){e.$set(e.personalForm,"countAccess",t)},expression:"personalForm.countAccess"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.countUseup")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.countUseup,callback:function(t){e.$set(e.personalForm,"countUseup",t)},expression:"personalForm.countUseup"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProduceTask.countRemain")}},[a("el-input",{staticStyle:{"margin-left":"18px"},attrs:{clearable:""},model:{value:e.personalForm.countRemain,callback:function(t){e.$set(e.personalForm,"countRemain",t)},expression:"personalForm.countRemain"}})],1)],1)],1)],1),e._v(" "),a("h2",{ref:"fuzhu",staticClass:"form-name",staticStyle:{"margin-top":"10px"}},[e._v("物料明细")]),e._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"58px"}},[a("el-button",{on:{click:e.addproduct}},[e._v("添加物料")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable4.removeSelecteds()}}},[e._v("删除")]),e._v(" "),a("my-detail",{attrs:{control:e.control},on:{"update:control":function(t){e.control=t},product:e.productdetail}})],1),e._v(" "),a("div",{staticClass:"container"},[a("el-editable",{ref:"editable4",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list4,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list4=t}}},[a("el-editable-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),e._v(" "),a("el-editable-column",{attrs:{label:"序号","min-width":"55",align:"center",type:"index"}}),e._v(" "),a("el-editable-column",{attrs:{prop:"productCode",align:"center",label:"物品编号","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{prop:"productName",align:"center",label:"物品名称","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"todayAccess",align:"center",label:"本日领入","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"yesterdayRemain",align:"center",label:"昨日结存","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"todayUseup",align:"center",label:"本日耗用","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"todayDamaged",align:"center",label:"本日损坏","min-width":"150px"}}),e._v(" "),a("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",attrs:{min:0},type:"visible"},prop:"todayRemain",align:"center",label:"本日结存","min-width":"150px"}})],1)],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[a("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd",width:"98px"},attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)])},[],!1,null,"4b42da5a",null);m.options.__file="AddProduceReport.vue";t.default=m.exports},"5T43":function(e,t,a){"use strict";var l=a("9ZXQ");a.n(l).a},"8Mt+":function(e,t,a){},"9ZXQ":function(e,t,a){},DRYD:function(e,t,a){"use strict";var l=a("uAk4"),r=a("moiu"),n=a("ZySA"),o=a("Mz3J"),i=a("QGDC"),s=a("gGdf"),c={directives:{waves:n.a},components:{Pagination:o.a,MyCenter:i.a,MyEmp:s.a},filters:{judgeStatFilter:function(e){return{0:"未审核",1:"审核中",2:"审核通过",3:"审核不通过"}[e]},receiptStatFilter:function(e){return{1:"制单",2:"执行",3:"结单"}[e]},sourceTypeFilter:function(e){return{1:"主生产计划",2:"无来源"}[e]},processTypeFilter:function(e){return{1:"加工1"}[e]}},props:{procontrol:{type:Boolean,default:!1}},data:function(){return{employeeVisible:this.procontrol,depts:[],reviewParms:{id:"",judgePersonId:"",judgeStat:""},detailvisible:!1,visible2:!1,workCenterId:"",centercontrol:!1,handlePersonId:"",stockControl:!1,moreaction:"",downloadLoading:!1,list:[],total:0,tableKey:0,listLoading:!0,getemplist:{pageNum:1,pageSize:10,repositoryId:438,regionIds:2,createPersonId:3},personalForm:{},editVisible:!1,date:[]}},watch:{procontrol:function(){this.employeeVisible=this.procontrol}},mounted:function(){this.getlist()},methods:{getlist:function(){var e=this;this.listLoading=!0,Object(l.f)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount),setTimeout(function(){e.listLoading=!1},50)}),Object(r.m)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)})},restFilter:function(){this.handlePersonId="",this.getemplist.handlePersonId="",this.workCenterId="",this.getemplist.workCenterId="",this.producePlanNumber="",this.getemplist.producePlanNumber=""},handleFilter:function(){var e=this;this.getemplist.pagenum=1,Object(l.f)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount,e.restFilter()):e.restFilter()})},workcenterchoose:function(){this.centercontrol=!0},center:function(e){console.log(e),this.workCenterId=e.workCenterName,this.getemplist.workCenterId=e.id},handlechooseStock:function(){this.stockControl=!0},stockName:function(e){this.handlePersonId=e.personName,this.getemplist.handlePersonId=e.id},handleAdd:function(){this.$router.push("/ProduceTask/AddProduceTask")},handleCurrentChange:function(e){this.choosedata=e},handleConfirm:function(){this.employeeVisible=!1;var e=this.choosedata.produceTaskDetailVos;console.log(this.choosedata);var t=this.choosedata,a=e.map(function(e){return{productCode:e.productCode,productName:e.productName,alreadyProduceQuantity:e.alreadyProduceQuantity,produceQuantity:e.produceQuantity,workHours:0,finishQuantity:0,passQuantity:0,passRate:0,workCenterId:e.workCenterId}});this.$emit("produce",a),this.$emit("moredata",t)}}},u=(a("5T43"),a("KHd+")),d=Object(u.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.employeeVisible,procontrol:e.procontrol,"close-on-press-escape":!1,top:"10px",title:"选择生产任务","append-to-body":"",width:"1000px"},on:{"update:visible":function(t){e.employeeVisible=t},close:function(t){e.$emit("update:procontrol",!1)}}},[a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px",height:"60px"},attrs:{shadow:"never"}},[a("el-row",[a("el-form",{ref:"getemplist",staticStyle:{"margin-top":"-9px"},attrs:{model:e.getemplist,"label-width":"100px"}},[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"生产主题","label-width":"100px"}},[a("el-input",{attrs:{placeholder:e.$t("ProduceTask.title"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.title,callback:function(t){e.$set(e.getemplist,"title",t)},expression:"getemplist.title"}})],1)],1),e._v(" "),a("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:5}},[a("el-form-item",{attrs:{label:"单据编号"}},[a("el-input",{attrs:{placeholder:"单据编号",clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.taskNumber,callback:function(t){e.$set(e.getemplist,"taskNumber",t)},expression:"getemplist.taskNumber"}})],1)],1),e._v(" "),a("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:5}},[a("el-form-item",{attrs:{label:"负责人"}},[a("el-input",{attrs:{placeholder:e.$t("ProduceTask.handlePersonId"),clearable:""},on:{focus:e.handlechooseStock},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.handlePersonId,callback:function(t){e.handlePersonId=t},expression:"handlePersonId"}})],1),e._v(" "),a("my-emp",{attrs:{control:e.stockControl},on:{"update:control":function(t){e.stockControl=t},stockName:e.stockName}})],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-popover",{attrs:{placement:"bottom",width:"500",trigger:"manual"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[a("el-input",{staticStyle:{width:"40%",float:"left","margin-left":"20px"},attrs:{placeholder:"工作中心",clearable:""},on:{focus:e.workcenterchoose},model:{value:e.workCenterId,callback:function(t){e.workCenterId=t},expression:"workCenterId"}}),e._v(" "),a("my-center",{attrs:{control:e.centercontrol},on:{"update:control":function(t){e.centercontrol=t},center:e.center}}),e._v(" "),a("el-select",{staticStyle:{width:"40%",float:"right","margin-right":"20px"},attrs:{value:e.getemplist.judgeStat,placeholder:"审批状态",clearable:""},model:{value:e.getemplist.judgeStat,callback:function(t){e.$set(e.getemplist,"judgeStat",t)},expression:"getemplist.judgeStat"}},[a("el-option",{attrs:{value:"0",label:"未审核"}}),e._v(" "),a("el-option",{attrs:{value:"1",label:"审核中"}}),e._v(" "),a("el-option",{attrs:{value:"2",label:"审核通过"}}),e._v(" "),a("el-option",{attrs:{value:"3",label:"审核不通过"}})],1),e._v(" "),a("el-select",{staticStyle:{width:"40%",float:"left","margin-left":"20px","margin-top":"20px"},attrs:{value:e.getemplist.receiptStat,placeholder:"单据状态",clearable:""},model:{value:e.getemplist.receiptStat,callback:function(t){e.$set(e.getemplist,"receiptStat",t)},expression:"getemplist.receiptStat"}},[a("el-option",{attrs:{value:"1",label:"制单"}}),e._v(" "),a("el-option",{attrs:{value:"2",label:"执行"}}),e._v(" "),a("el-option",{attrs:{value:"3",label:"结单"}})],1),e._v(" "),a("el-select",{staticStyle:{width:"40%",float:"right","margin-right":"20px","margin-top":"20px"},attrs:{placeholder:"生产部门",clearable:""},model:{value:e.getemplist.produceDeptId,callback:function(t){e.$set(e.getemplist,"produceDeptId",t)},expression:"getemplist.produceDeptId"}},e._l(e.depts,function(e,t){return a("el-option",{key:t,attrs:{value:e.id,label:e.deptName}})})),e._v(" "),a("el-select",{staticStyle:{width:"40%",float:"left","margin-left":"20px","margin-top":"20px"},attrs:{placeholder:"加工类型"},model:{value:e.getemplist.processType,callback:function(t){e.$set(e.getemplist,"processType",t)},expression:"getemplist.processType"}},[a("el-option",{attrs:{value:"1",label:"加工1"}})],1),e._v(" "),a("el-date-picker",{staticStyle:{"margin-top":"20px","margin-left":"20px"},attrs:{type:"daterange","range-separator":"-","unlink-panels":"","start-placeholder":"Start","end-placeholder":"End","value-format":"yyyy-MM-dd"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),a("div",{staticClass:"seachbutton",staticStyle:{width:"100%",float:"right","margin-top":"20px"}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary",round:""},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{slot:"reference",type:"primary"},on:{click:function(t){e.visible2=!e.visible2}},slot:"reference"},[e._v(e._s(e.$t("public.filter"))),a("svg-icon",{staticStyle:{"margin-left":"4px"},attrs:{"icon-class":"shaixuan"}})],1)],1)],1),e._v(" "),a("el-col",{staticStyle:{"margin-left":"17px"},attrs:{span:3}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search",round:""},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))])],1)],1)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{label:e.$t("ProduceTask.taskNumber"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.taskNumber))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("ProduceTask.title"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("ProduceTask.sourceType"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("sourceTypeFilter")(t.row.sourceType)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("ProduceTask.handlePersonId"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.handlePersonName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("ProduceTask.processType"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("processTypeFilter")(t.row.processType)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("public.judgeStat"),resizable:!1,prop:"judgeStat",align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("judgeStatFilter")(t.row.judgeStat)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("public.receiptStat"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("receiptStatFilter")(t.row.receiptStat)))])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pagenum,limit:e.getemplist.pagesize},on:{"update:page":function(t){e.$set(e.getemplist,"pagenum",t)},"update:limit":function(t){e.$set(e.getemplist,"pagesize",t)},pagination:e.getlist}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"100px",float:"left","margin-bottom":"10px"},attrs:{type:"success"},on:{click:e.handleConfirm}},[e._v("确认添加")])],1)],1)},[],!1,null,"11421594",null);d.options.__file="ProduceTask.vue";t.a=d.exports},PXkd:function(e,t,a){"use strict";var l=a("8Mt+");a.n(l).a}}]);