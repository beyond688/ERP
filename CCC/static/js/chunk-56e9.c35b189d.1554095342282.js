(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-56e9"],{"4INp":function(e,t,o){},"66m2":function(e,t,o){"use strict";o.r(t);var l=o("gDS+"),a=o.n(l),r=o("P2sY"),i=o.n(r),n=o("moiu"),s=o("bZtO"),c=o("ZySA"),d=o("Mz3J"),p=o("6HaC"),u=o("BZUM"),m=o("4D4C"),f=o("n99W"),h=o("NSnE"),v={components:{MyRepository:u.a,MyCreate:h.a,MyAccept:m.a,MyDetail:f.a},props:{editcontrol:{type:Boolean,default:!1},editdata:{type:Object,default:null}},data:function(){return{editVisible:this.editcontrol,personalForm:this.editdata,batchlist:[],depts:[],handlePersonId:"",overflowRepositoryId:"",repositorycontrol:!1,createcontrol:!1,control:!1,personalrules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],sourceType:[{required:!0,message:"请选择源单类型",trigger:"change"}],sourceNumber:[{required:!0,message:"请输入源单编号",trigger:"blur"}],enterPersonId:[{required:!0,message:"请选择报溢人",trigger:"focus"}],enterRepositoryId:[{required:!0,message:"请选择报溢仓库",trigger:"focus"}]},list2:[],locationlistparms:{pageNum:1,pageSize:1999,repositoryId:""},locationlist:[],validRules:{}}},watch:{editcontrol:function(){this.editVisible=this.editcontrol},editdata:function(){this.personalForm=this.editdata,this.produceManagerId=this.personalForm.produceManagerName,this.handlePersonId=this.personalForm.handlePersonName,this.overflowRepositoryId=this.personalForm.overflowRepositoryName,this.list2=this.personalForm.inventoryOverflowDetailVos,this.getlocation()}},mounted:function(){this.getlist()},methods:{getlist:function(){var e=this;Object(n.m)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)})},getlocation:function(){var e=this;Object(p.h)(this.personalForm.overflowRepositoryId).then(function(t){200===t.data.ret&&(e.locationlist=t.data.data.content.list)})},handlechoose:function(){this.createcontrol=!0},createname:function(e){console.log(e),this.handlePersonId=e.personName,this.personalForm.handlePersonId=e.id},handlechooseRep:function(){this.repositorycontrol=!0},repositoryname:function(e){console.log(e),this.overflowRepositoryId=e.repositoryName,this.personalForm.overflowRepositoryId=e.id},updatebatch:function(e,t){var o=this;if(!0===e){if(console.log(this.personalForm.overflowRepositoryId),void 0===this.personalForm.overflowRepositoryId||""===this.personalForm.overflowRepositoryId)return this.$notify.error({title:"错误",message:"请先选择仓库",offset:100}),!1;Object(p.f)(this.personalForm.overflowRepositoryId,t.row).then(function(e){if(200===e.data.ret)if(0!==e.data.data.content.length)o.locationlist=e.data.data.content,o.updatebatch3(t);else if(0===e.data.data.content.length)return o.$notify.error({title:"错误",message:"该仓库没有该商品",offset:100}),o.locationlist=[],!1})}},updatebatch3:function(e){var t=this,o=e.row.productCode;Object(p.a)(this.personalForm.overflowRepositoryId,o).then(function(e){t.batchlist=e.data.data.content})},updatebatch2:function(e,t){var o=this;if(!0===e){var l=t.row.productCode;Object(p.a)(this.personalForm.overflowRepositoryId,l).then(function(e){o.batchlist=e.data.data.content})}},handleAddproduct:function(){this.control=!0},productdetail:function(e){console.log(e);for(var t=this.$refs.editable.getRecords(),o=0;o<e.length;o++){for(var l=0;l<t.length;l++)if(e[o].productCode===t[l].productCode)return this.$notify.error({title:"错误",message:"物品已添加",offset:100}),!1;this.$refs.editable.insert(e[o])}},getSize:function(e,t){return e*t},handleEditok:function(){var e=this;this.personalForm.repositoryId=438,this.personalForm.regionId=2,this.personalForm.createPersonId=3,this.personalForm.countryId=1,this.personalForm.modifyPersonId=3,console.log(this.personalForm);var t=this.$refs.editable.getRecords();if(0===t.length)return this.$notify.error({title:"错误",message:"明细表不能为空",offset:100}),!1;t.map(function(e){return e}).forEach(function(e){return null!==e.locationId&&""!==e.locationId&&void 0!==e.locationId||delete e.locationId,null!==e.productCode&&""!==e.productCode&&void 0!==e.productCode||delete e.productCode,null!==e.productName&&""!==e.productName&&void 0!==e.productName||delete e.productName,null!==e.color&&""!==e.color&&void 0!==e.color||delete e.color,null!==e.typeId&&""!==e.typeId&&void 0!==e.typeId||delete e.typeId,null!==e.unit&&""!==e.unit&&void 0!==e.unit||delete e.unit,null!==e.overflowQuantity&&""!==e.overflowQuantity&&void 0!==e.overflowQuantity||delete e.overflowQuantity,null!==e.price&&""!==e.price&&void 0!==e.price||delete e.price,null!==e.totalMoney&&""!==e.totalMoney&&void 0!==e.totalMoney||delete e.totalMoney,null!==e.remarks&&""!==e.remarks&&void 0!==e.remarks||delete e.remarks,e});var o=a()(t),l=a()(this.personalForm);Object(s.d)(l,o).then(function(t){200===t.data.ret?(e.$notify({title:"操作成功",message:"操作成功",type:"success",duration:1e3,offset:100}),e.$emit("rest",!0),e.$refs.editable.clear(),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields(),e.editVisible=!1):e.$notify.error({title:"错误",message:"出错了",offset:100})})},handlecancel:function(){this.$refs.editable.clear(),this.$refs.personalForm.clearValidate(),this.$refs.personalForm.resetFields(),this.editVisible=!1}}},y=(o("Fa9U"),o("KHd+")),b=Object(y.a)(v,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"edit",attrs:{visible:e.editVisible,editcontrol:e.editcontrol,editdata:e.editdata,"close-on-press-escape":!1,top:"10px",title:"修改采购报溢单"},on:{"update:visible":function(t){e.editVisible=t},close:function(t){e.$emit("update:editcontrol",!1)}}},[o("el-card",{staticClass:"box-card"},[o("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),o("div",{staticClass:"container"},[o("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-width":"100px"}},[o("el-row",[o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.title")}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请输入报溢单主题",clearable:""},model:{value:e.personalForm.title,callback:function(t){e.$set(e.personalForm,"title",t)},expression:"personalForm.title"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.handlePersonId"),prop:"handlePersonId"}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请选择经办人",clearable:""},on:{focus:e.handlechoose},model:{value:e.handlePersonId,callback:function(t){e.handlePersonId=t},expression:"handlePersonId"}})],1),e._v(" "),o("my-create",{attrs:{createcontrol:e.createcontrol},on:{"update:createcontrol":function(t){e.createcontrol=t},createname:e.createname}})],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.overflowDeptId")}},[o("el-select",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请选择报溢部门",clearable:""},model:{value:e.personalForm.overflowDeptId,callback:function(t){e.$set(e.personalForm,"overflowDeptId",t)},expression:"personalForm.overflowDeptId"}},e._l(e.depts,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.deptName}})}))],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.overflowRepositoryId"),prop:"overflowRepositoryId"}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请选择报溢仓库",clearable:""},on:{focus:e.handlechooseRep},model:{value:e.overflowRepositoryId,callback:function(t){e.overflowRepositoryId=t},expression:"overflowRepositoryId"}})],1),e._v(" "),o("my-repository",{attrs:{repositorycontrol:e.repositorycontrol},on:{"update:repositorycontrol":function(t){e.repositorycontrol=t},repositoryname:e.repositoryname}})],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.summary"),prop:"summary"}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请输入摘要",clearable:""},model:{value:e.personalForm.summary,callback:function(t){e.$set(e.personalForm,"summary",t)},expression:"personalForm.summary"}})],1)],1)],1)],1)],1)]),e._v(" "),o("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[o("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v("报溢单明细")]),e._v(" "),o("div",{staticClass:"buttons",staticStyle:{"margin-top":"28px","margin-bottom":"20px"}},[o("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd"},attrs:{type:"success"},on:{click:e.handleAddproduct}},[e._v("添加商品")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable.removeSelecteds()}}},[e._v("删除")])],1),e._v(" "),o("my-detail",{attrs:{control:e.control},on:{"update:control":function(t){e.control=t},product:e.productdetail}}),e._v(" "),o("div",{staticClass:"container"},[o("el-editable",{ref:"editable",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list2,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list2=t}}},[o("el-editable-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),o("el-editable-column",{attrs:{label:"编号",width:"55",align:"center",type:"index"}}),e._v(" "),o("el-editable-column",{attrs:{"edit-render":{type:"default"},prop:"locationId",align:"center",label:"货位",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{staticStyle:{width:"100%"},attrs:{value:t.row.locationId,placeholder:"请选择货位",filterable:"",clearable:""},on:{"visible-change":function(o){e.updatebatch(o,t)}},model:{value:t.row.locationId,callback:function(o){e.$set(t.row,"locationId",o)},expression:"scope.row.locationId"}},e._l(e.locationlist,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.locationCode}})}))]}}])}),e._v(" "),o("el-editable-column",{attrs:{"edit-render":{type:"default"},prop:"batch",align:"center",label:"批次",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{staticStyle:{width:"100%"},attrs:{value:t.row.batch,placeholder:"请选择批次",filterable:"",clearable:""},on:{"visible-change":function(o){e.updatebatch2(o,t)}},model:{value:t.row.batch,callback:function(o){e.$set(t.row,"batch",o)},expression:"scope.row.batch"}},e._l(e.batchlist,function(e,t){return o("el-option",{key:t,attrs:{value:e,label:e}})}))]}}])}),e._v(" "),o("el-editable-column",{attrs:{prop:"productCode",align:"center",label:"物品编号",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"productName",align:"center",label:"物品名称",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"color",align:"center",label:"颜色",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"productType",align:"center",label:"规格",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"unit",align:"center",label:"单位",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber",type:"visible"},prop:"overflowQuantity",align:"center",label:"报溢数量",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"price",align:"center",label:"单价",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"totalMoney",align:"center",label:"报溢金额",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v(e._s(e.getSize(t.row.overflowQuantity,t.row.price)))])]}}])}),e._v(" "),o("el-editable-column",{attrs:{"edit-render":{name:"ElInput",type:"visible"},prop:"remarks",align:"center",label:"备注",width:"150px"}})],1)],1)],1),e._v(" "),o("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px","margin-left":"30px"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleEditok()}}},[e._v("修改")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)},[],!1,null,"16b55923",null);b.options.__file="MyEdit.vue";var g=b.exports,w=o("LVwP"),_={components:{MyRepository:u.a,MyCreate:h.a,MyAccept:m.a,MyDetail:f.a},filters:{statfilter:function(e){return{1:"审核中",2:"审核通过",3:"审核不通过"}[e]}},props:{detailcontrol:{type:Boolean,default:!1},detaildata:{type:Object,default:null}},data:function(){return{reviewList:[],editVisible:this.detailcontrol,personalForm:this.detaildata,depts:[],handlePersonId:"",overflowRepositoryId:"",repositorycontrol:!1,createcontrol:!1,control:!1,personalrules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],sourceType:[{required:!0,message:"请选择源单类型",trigger:"change"}],sourceNumber:[{required:!0,message:"请输入源单编号",trigger:"blur"}],enterPersonId:[{required:!0,message:"请选择报溢人",trigger:"focus"}],enterRepositoryId:[{required:!0,message:"请选择报溢仓库",trigger:"focus"}]},list2:[],locationlistparms:{pageNum:1,pageSize:1999,repositoryId:""},locationlist:[],validRules:{}}},watch:{detailcontrol:function(){this.editVisible=this.detailcontrol},detaildata:function(){this.personalForm=this.detaildata,this.produceManagerId=this.personalForm.produceManagerName,this.handlePersonId=this.personalForm.handlePersonName,this.overflowRepositoryId=this.personalForm.overflowRepositoryName,this.list2=this.personalForm.inventoryOverflowDetailVos,this.reviewList=this.personalForm.approvalUseVos,this.getlocation()}},mounted:function(){this.getlist()},methods:{getlist:function(){var e=this;Object(n.m)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)})},getlocation:function(){var e=this;Object(w.j)(this.personalForm.overflowRepositoryId).then(function(t){200===t.data.ret&&(e.locationlist=t.data.data.content.list.map(function(e){return{value:e.id,label:e.locationName}}))})},handlechoose:function(){this.createcontrol=!0},createname:function(e){console.log(e),this.handlePersonId=e.personName,this.personalForm.handlePersonId=e.id},handlechooseRep:function(){this.repositorycontrol=!0},repositoryname:function(e){var t=this;console.log(e),this.overflowRepositoryId=e.repositoryName,this.personalForm.overflowRepositoryId=e.id,this.locationlistparms.repositoryId=e.id,Object(w.j)(this.locationlistparms).then(function(e){200===e.data.ret&&(t.locationlist=e.data.data.content.list.map(function(e){return{value:e.id,label:e.locationName}}))})},handleAddproduct:function(){this.control=!0},productdetail:function(e){console.log(e);for(var t=this.$refs.editable.getRecords(),o=0;o<e.length;o++){for(var l=0;l<t.length;l++)if(e[o].productCode===t[l].productCode)return this.$notify.error({title:"错误",message:"物品已添加",offset:100}),!1;this.$refs.editable.insert(e[o])}},getSize:function(e,t){return e*t},handleEditok:function(){var e=this;this.personalForm.repositoryId=438,this.personalForm.regionId=2,this.personalForm.createPersonId=3,this.personalForm.countryId=1,this.personalForm.modifyPersonId=3,console.log(this.personalForm);var t=this.$refs.editable.getRecords();if(0===t.length)return this.$notify.error({title:"错误",message:"明细表不能为空",offset:100}),!1;t.map(function(e){return e}).forEach(function(e){return null!==e.locationId&&""!==e.locationId&&void 0!==e.locationId||delete e.locationId,null!==e.productCode&&""!==e.productCode&&void 0!==e.productCode||delete e.productCode,null!==e.productName&&""!==e.productName&&void 0!==e.productName||delete e.productName,null!==e.color&&""!==e.color&&void 0!==e.color||delete e.color,null!==e.typeId&&""!==e.typeId&&void 0!==e.typeId||delete e.typeId,null!==e.unit&&""!==e.unit&&void 0!==e.unit||delete e.unit,null!==e.overflowQuantity&&""!==e.overflowQuantity&&void 0!==e.overflowQuantity||delete e.overflowQuantity,null!==e.price&&""!==e.price&&void 0!==e.price||delete e.price,null!==e.totalMoney&&""!==e.totalMoney&&void 0!==e.totalMoney||delete e.totalMoney,null!==e.remarks&&""!==e.remarks&&void 0!==e.remarks||delete e.remarks,e});var o=a()(t),l=a()(this.personalForm);Object(s.d)(l,o).then(function(t){200===t.data.ret?(e.$notify({title:"操作成功",message:"操作成功",type:"success",duration:1e3,offset:100}),e.$emit("rest",!0),e.$refs.editable.clear(),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields(),e.editVisible=!1):e.$notify.error({title:"错误",message:"出错了",offset:100})})},handlecancel:function(){this.editVisible=!1}}},I=(o("LiRw"),Object(y.a)(_,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"edit",attrs:{visible:e.editVisible,detailcontrol:e.detailcontrol,detaildata:e.detaildata,"close-on-press-escape":!1,"append-to-body":"",top:"10px",title:"修改采购报溢单"},on:{"update:visible":function(t){e.editVisible=t},close:function(t){e.$emit("update:detailcontrol",!1)}}},[o("el-card",{staticClass:"box-card"},[o("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),o("div",{staticClass:"container"},[o("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-width":"100px"}},[o("el-row",[o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.title")}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请输入报溢单主题",disabled:""},model:{value:e.personalForm.title,callback:function(t){e.$set(e.personalForm,"title",t)},expression:"personalForm.title"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.handlePersonId"),prop:"handlePersonId"}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请选择经办人",disabled:""},on:{focus:e.handlechoose},model:{value:e.handlePersonId,callback:function(t){e.handlePersonId=t},expression:"handlePersonId"}})],1),e._v(" "),o("my-create",{attrs:{createcontrol:e.createcontrol},on:{"update:createcontrol":function(t){e.createcontrol=t},createname:e.createname}})],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"国家"}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.countryName,callback:function(t){e.$set(e.personalForm,"countryName",t)},expression:"personalForm.countryName"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"制单人"}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.createPersonName,callback:function(t){e.$set(e.personalForm,"createPersonName",t)},expression:"personalForm.createPersonName"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.overflowDeptId")}},[o("el-select",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请选择报溢部门",disabled:""},model:{value:e.personalForm.overflowDeptId,callback:function(t){e.$set(e.personalForm,"overflowDeptId",t)},expression:"personalForm.overflowDeptId"}},e._l(e.depts,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.deptName}})}))],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.overflowRepositoryId"),prop:"overflowRepositoryId"}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请选择报溢仓库",disabled:""},on:{focus:e.handlechooseRep},model:{value:e.overflowRepositoryId,callback:function(t){e.overflowRepositoryId=t},expression:"overflowRepositoryId"}})],1),e._v(" "),o("my-repository",{attrs:{repositorycontrol:e.repositorycontrol},on:{"update:repositorycontrol":function(t){e.repositorycontrol=t},repositoryname:e.repositoryname}})],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("InventoryOverflow.summary"),prop:"summary"}},[o("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{placeholder:"请输入摘要",disabled:""},model:{value:e.personalForm.summary,callback:function(t){e.$set(e.personalForm,"summary",t)},expression:"personalForm.summary"}})],1)],1)],1)],1)],1)]),e._v(" "),o("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[o("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v("报溢单明细")]),e._v(" "),o("div",{staticClass:"container"},[o("el-editable",{ref:"editable",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list2,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list2=t}}},[o("el-editable-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),o("el-editable-column",{attrs:{label:"编号",width:"55",align:"center",type:"index"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"locationCode",align:"center",label:"货位",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"batch",align:"center",label:"批次",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"productCode",align:"center",label:"物品编号",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"productName",align:"center",label:"物品名称",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"color",align:"center",label:"颜色",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"productType",align:"center",label:"规格",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"unit",align:"center",label:"单位",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"basicQuantity",align:"center",label:"基本数量",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"overflowQuantity",align:"center",label:"报溢数量",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"price",align:"center",label:"单价",width:"150px"}}),e._v(" "),o("el-editable-column",{attrs:{prop:"totalMoney",align:"center",label:"报溢金额",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v(e._s(e.getSize(t.row.overflowQuantity,t.row.price)))])]}}])}),e._v(" "),o("el-editable-column",{attrs:{prop:"remarks",align:"center",label:"备注",width:"150px"}})],1)],1)]),e._v(" "),o("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[o("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v("审核状态")]),e._v(" "),o("el-steps",{attrs:{active:e.reviewList.length,direction:"vertical"}},e._l(e.reviewList,function(t,l){return o("el-step",{key:l,staticStyle:{height:"100px"},attrs:{title:"审核步骤"+t.step}},[o("template",{slot:"description"},[o("span",{staticStyle:{"font-size":"16px",color:"red"}},[e._v(e._s(e._f("statfilter")(t.stat)))]),o("br"),e._v(" "),o("span",{staticStyle:{"font-size":"14px"}},[e._v("审核人: "+e._s(t.stepHandlerName))]),o("br"),e._v(" "),o("span",{staticStyle:{"font-size":"14px"}},[e._v("审核时间: "+e._s(t.createTime))])])],2)}))],1),e._v(" "),o("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px","margin-left":"30px"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleEditok()}}},[e._v("修改")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)},[],!1,null,"011a75e6",null));I.options.__file="DetailList.vue";var x=I.exports,S={name:"OverflowList",directives:{waves:c.a},components:{DetailList:x,Pagination:d.a,MyEdit:g,MyRepository:u.a,MyAccept:m.a,MyCreate:h.a},filters:{judgeStatFileter:function(e){return{0:"未审核",1:"审核中",2:"审核通过",3:"审核不通过"}[e]},receiptStatFilter:function(e){return{1:"制单",2:"执行",3:"结单"}[e]}},data:function(){return{selectInit:function(e,t){return 0===e.judgeStat},reviewParms:{id:"",judgePersonId:"",judgeStat:""},detailvisible:!1,visible2:!1,depts:[],handlePersonId:"",overflowRepositoryId:"",repositorycontrol:!1,createcontrol:!1,date:[],getemplist:{pageNum:1,pageSize:10,createPersonId:3,countryId:1,repositoryId:438,regionIds:2},moreaction:"",downloadLoading:!1,list:[],total:0,tableKey:0,listLoading:!0,personalForm:{},editVisible:!1}},mounted:function(){this.getdeptlist(),this.getlist()},methods:{getdeptlist:function(){var e=this;Object(n.m)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)})},handlechoose:function(){this.createcontrol=!0},createname:function(e){console.log(e),this.handlePersonId=e.personName,this.getemplist.handlePersonId=e.id},handlechooseRep:function(){this.repositorycontrol=!0},repositoryname:function(e){console.log(e),this.overflowRepositoryId=e.repositoryName,this.getemplist.overflowRepositoryId=e.id},getlist:function(){var e=this;this.listLoading=!0,Object(s.c)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount,e.listLoading=!1):e.$notify.error({title:"错误",message:"出错了",offset:100}),setTimeout(function(){e.listLoading=!1},50)})},restFilter:function(){this.overflowRepositoryId="",this.getemplist.overflowRepositoryId="",this.handlePersonId="",this.getemplist.handlePersonId=""},handleFilter:function(){var e=this;this.getemplist.pageNum=1,null===this.date||""===this.date?(this.getemplist.beginTime=null,this.getemplist.endTime=null):(this.getemplist.beginTime=this.date[0],this.getemplist.endTime=this.date[1]),Object(s.c)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount,e.restFilter()):(e.$notify.error({title:"错误",message:"出错了",offset:100}),e.restFilter())})},handleEdit:function(e){console.log(e),this.editVisible=!0,this.personalForm=i()({},e),this.personalForm.sourceType=String(e.sourceType)},refreshlist:function(e){!0===e&&this.getlist()},handleDetail:function(e){this.detailvisible=!0,this.personalForm=i()({},e),this.personalForm.sourceType=String(e.sourceType)},isReview:function(e){if(console.log(e),""!==e.approvalUseVos&&null!==e.approvalUseVos&&void 0!==e.approvalUseVos&&0!==e.approvalUseVos.length){var t=e.approvalUseVos;if(this.getemplist.createPersonId===t[t.length-1].stepHandler&&(1===e.judgeStat||0===e.judgeStat))return!0}},handleReview:function(e){var t=this;this.reviewParms.id=e.id,this.reviewParms.judgePersonId=this.getemplist.createPersonId,this.$confirm("请审核","审核",{distinguishCancelAndClose:!0,confirmButtonText:"通过",cancelButtonText:"不通过",type:"warning"}).then(function(){t.reviewParms.judgeStat=2;var e=a()(t.reviewParms);Object(s.e)(e).then(function(e){200===e.data.ret&&(t.$message({type:"success",message:"审核成功!"}),t.getlist())})}).catch(function(e){if("cancel"===e){t.reviewParms.judgeStat=1;var o=a()(t.reviewParms);Object(s.e)(o).then(function(e){200===e.data.ret&&(t.$message({type:"success",message:"审核成功!"}),t.getlist())})}})},handleSelectionChange:function(e){this.moreaction=e},handleCommand:function(e){var t=this,o=this.moreaction.map(function(e){return e.id}).join();"delete"===e&&this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.b)(o).then(function(e){200===e.data.ret?(t.$notify({title:"删除成功",type:"success",offset:100}),t.getlist()):t.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.b)(e.id).then(function(e){200===e.data.ret?(t.$notify({title:"删除成功",type:"success",offset:100}),t.getlist()):t.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleAdd:function(){this.$router.push("/InventoryOverflow/AddInventoryOverflow")},handleExport:function(){var e=this;this.downloadLoading=!0,Promise.all([o.e("chunk-ef4a"),o.e("chunk-73bb")]).then(o.bind(null,"S/jZ")).then(function(t){var o=e.formatJson(["id","InventoryOverflowName","InventoryOverflowShortName","typeName","regionName","buyerName","levelName","createName","createTime"],e.list);t.export_json_to_excel({header:["供应商编号","供应商名称","供应商简称","供应商类别","所在区域","采购员","供应商优质级别","建档人","建档日期"],data:o,filename:"经销商资料表"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handlePrint:function(){console.log(456)}}},F=(o("Uism"),Object(y.a)(S,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ERP-container"},[o("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px",height:"60px"}},[o("el-row",[o("el-form",{ref:"getemplist",staticStyle:{"margin-top":"-9px"},attrs:{model:e.getemplist,"label-width":"100px"}},[o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{label:"报溢单主题"}},[o("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("InventoryOverflow.title"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.title,callback:function(t){e.$set(e.getemplist,"title",t)},expression:"getemplist.title"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{label:"报溢单编号"}},[o("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("InventoryOverflow.overflowNumber"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.overflowNumber,callback:function(t){e.$set(e.getemplist,"overflowNumber",t)},expression:"getemplist.overflowNumber"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{label:"经办人"}},[o("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("InventoryOverflow.handlePersonId"),clearable:""},on:{focus:e.handlechoose},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.handlePersonId,callback:function(t){e.handlePersonId=t},expression:"handlePersonId"}})],1),e._v(" "),o("my-create",{attrs:{createcontrol:e.createcontrol},on:{"update:createcontrol":function(t){e.createcontrol=t},createname:e.createname}})],1),e._v(" "),o("el-col",{staticStyle:{"margin-left":"154px"},attrs:{span:4}},[o("el-popover",{attrs:{placement:"bottom",width:"500",trigger:"manual"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[o("el-select",{staticStyle:{width:"40%",float:"left","margin-left":"20px"},attrs:{placeholder:"请选择报溢部门",clearable:""},model:{value:e.getemplist.overflowDeptId,callback:function(t){e.$set(e.getemplist,"overflowDeptId",t)},expression:"getemplist.overflowDeptId"}},e._l(e.depts,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.deptName}})})),e._v(" "),o("el-input",{staticClass:"filter-item",staticStyle:{width:"40%",float:"right","margin-right":"20px"},attrs:{placeholder:e.$t("InventoryOverflow.overflowRepositoryId"),clearable:""},on:{focus:e.handlechooseRep},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.overflowRepositoryId,callback:function(t){e.overflowRepositoryId=t},expression:"overflowRepositoryId"}}),e._v(" "),o("my-repository",{attrs:{repositorycontrol:e.repositorycontrol},on:{"update:repositorycontrol":function(t){e.repositorycontrol=t},repositoryname:e.repositoryname}}),e._v(" "),o("el-date-picker",{staticStyle:{"margin-top":"20px","margin-left":"20px",width:"434px"},attrs:{type:"daterange","range-separator":"-","unlink-panels":"","start-placeholder":"Start","end-placeholder":"End","value-format":"yyyy-MM-dd"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),o("div",{staticClass:"seachbutton",staticStyle:{width:"100%",float:"right","margin-top":"20px"}},[o("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),o("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"140px"},attrs:{slot:"reference",type:"primary"},on:{click:function(t){e.visible2=!e.visible2}},slot:"reference"},[o("svg-icon",{staticStyle:{"margin-right":"6px"},attrs:{"icon-class":"shaixuan"}}),e._v(e._s(e.$t("public.filter")))],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1)],1)],1)],1),e._v(" "),o("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[o("el-dropdown",{on:{command:e.handleCommand}},[o("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary"}},[e._v("\n        "+e._s(e.$t("public.batchoperation"))+" "),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),o("el-dropdown-menu",{staticStyle:{width:"140px"},attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{staticStyle:{"text-align":"left"},attrs:{command:"delete"}},[o("svg-icon",{staticStyle:{width:"40px"},attrs:{"icon-class":"shanchu"}}),e._v(e._s(e.$t("public.delete")))],1)],1)],1),e._v(" "),o("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{loading:e.downloadLoading},on:{click:e.handleExport}},[o("svg-icon",{attrs:{"icon-class":"daochu"}}),e._v(e._s(e.$t("public.export")))],1),e._v(" "),o("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-printer"},on:{click:e.handlePrint}},[e._v(e._s(e.$t("public.print")))]),e._v(" "),o("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))])],1),e._v(" "),o("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{selectable:e.selectInit,type:"selection",width:"55",align:"center"}}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("InventoryOverflow.id"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{staticClass:"link-type",on:{click:function(o){e.handleDetail(t.row)}}},[e._v(e._s(t.row.id))])]}}])},[o("detail-list",{attrs:{detailcontrol:e.detailvisible,detaildata:e.personalForm},on:{"update:detailcontrol":function(t){e.detailvisible=t},"update:detaildata":function(t){e.personalForm=t}}})],1),e._v(" "),o("el-table-column",{attrs:{label:e.$t("InventoryOverflow.title"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.title))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("InventoryOverflow.overflowNumber"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.overflowNumber))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("InventoryOverflow.handlePersonId"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.handlePersonName))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("InventoryOverflow.overflowDeptId"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.overflowDeptName))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("InventoryOverflow.overflowRepositoryId"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.overflowRepositoryName))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("InventoryOverflow.createDate"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.createDate))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("Inventorydamaged.judgeStat"),resizable:!1,prop:"judgeStat",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(e._f("judgeStatFileter")(t.row.judgeStat)))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("Stockenter.receiptStat"),resizable:!1,align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(e._f("receiptStatFilter")(t.row.receiptStat)))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("public.actions"),resizable:!1,align:"center","min-width":"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(o){e.handleEdit(t.row)}}},[e._v(e._s(e.$t("public.edit")))]),e._v(" "),e.isReview(t.row)?o("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(o){e.handleReview(t.row)}}},[e._v(e._s(e.$t("public.review")))]):e._e(),e._v(" "),0===t.row.judgeStat?o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("public.delete")))]):e._e()]}}])})],1),e._v(" "),o("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pageNum,limit:e.getemplist.pageSize},on:{"update:page":function(t){e.$set(e.getemplist,"pageNum",t)},"update:limit":function(t){e.$set(e.getemplist,"pageSize",t)},pagination:e.getlist}}),e._v(" "),o("my-edit",{attrs:{editcontrol:e.editVisible,editdata:e.personalForm},on:{"update:editcontrol":function(t){e.editVisible=t},"update:editdata":function(t){e.personalForm=t},rest:e.refreshlist}})],1)],1)},[],!1,null,"be0fdb0a",null));F.options.__file="OverflowList.vue";t.default=F.exports},ARws:function(e,t,o){},Fa9U:function(e,t,o){"use strict";var l=o("Sxtv");o.n(l).a},LiRw:function(e,t,o){"use strict";var l=o("ARws");o.n(l).a},Sxtv:function(e,t,o){},Uism:function(e,t,o){"use strict";var l=o("4INp");o.n(l).a}}]);