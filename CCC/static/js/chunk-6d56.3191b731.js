(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6d56"],{"6CXL":function(e,t,a){},"6bP5":function(e,t,a){"use strict";var i=a("Qq1u");a.n(i).a},Focj:function(e,t,a){"use strict";a.r(t);var i=a("P2sY"),n=a.n(i),r=a("jr1U"),l=a.n(r),o=a("rfXi"),s=a.n(o),c=a("Kw5r");function d(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=[];return s()(e).forEach(function(e){void 0===e._expanded&&c.default.set(e,"_expanded",t);var r=1;if(void 0!==i&&null!==i&&(r=i+1),c.default.set(e,"_level",r),a&&c.default.set(e,"parent",a),n.push(e),e.children&&e.children.length>0){var l=d(e.children,t,e,r);n=n.concat(l)}}),n}var u={name:"TreeTable",props:{data:{type:[Array,Object],required:!0},columns:{type:Array,default:function(){return[]}},evalFunc:Function,evalArgs:Array,expandAll:{type:Boolean,default:!1}},computed:{formatData:function(){var e=void 0;e=Array.isArray(this.data)?this.data:[this.data];var t=this.evalFunc||d,a=this.evalArgs?l()([e,this.expandAll],this.evalArgs):[e,this.expandAll];return t.apply(null,a)}},methods:{showRow:function(e){var t=!e.row.parent||e.row.parent._expanded&&e.row.parent._show;return e.row._show=t,t?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},toggleExpanded:function(e){var t=this.formatData[e];t._expanded=!t._expanded},iconShow:function(e,t){return 0===e&&t.children&&t.children.length>0}}},m=(a("6bP5"),a("vhXz"),a("KHd+")),f=Object(m.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",e._b({attrs:{data:e.formatData,"row-style":e.showRow}},"el-table",e.$attrs,!1),[0===e.columns.length?a("el-table-column",{attrs:{width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row._level,function(e){return a("span",{key:e,staticClass:"ms-tree-space"})}),e._v(" "),e.iconShow(0,t.row)?a("span",{staticClass:"tree-ctrl",on:{click:function(a){e.toggleExpanded(t.$index)}}},[t.row._expanded?a("i",{staticClass:"el-icon-minus"}):a("i",{staticClass:"el-icon-plus"})]):e._e(),e._v("\n      "+e._s(t.$index)+"\n    ")]}}])}):e._l(e.columns,function(t,i){return a("el-table-column",{key:t.value,attrs:{label:t.text,width:t.width},scopedSlots:e._u([{key:"default",fn:function(n){return[e._l(n.row._level,function(t){return 0===i?a("span",{key:t,staticClass:"ms-tree-space"}):e._e()}),e._v(" "),e.iconShow(i,n.row)?a("span",{staticClass:"tree-ctrl",on:{click:function(t){e.toggleExpanded(n.$index)}}},[n.row._expanded?a("i",{staticClass:"el-icon-minus"}):a("i",{staticClass:"el-icon-plus"})]):e._e(),e._v("\n      "+e._s(n.row[t.value])+"\n    ")]}}])})}),e._v(" "),e._t("default")],2)},[],!1,null,"414e2741",null);f.options.__file="index.vue";var p=f.exports,v=a("t3Un");function g(e){var t=new URLSearchParams;return t.append("name",e.name),t.append("levle",e.levle),t.append("parentid",e.parentid),t.append("firstlevelid",e.firstlevelid),t.append("createid",e.createid),Object(v.a)({url:"http://192.168.1.45:8080/erp/region/create",method:"post",data:t})}function h(e){var t=new URLSearchParams;return t.append("regionid",e),Object(v.a)({url:"http://192.168.1.45:8080/erp/region/regionmanagercandidate",method:"post",data:t})}function b(e,t,a,i){var n=new URLSearchParams;return n.append("regionid",e),n.append("name",t),n.append("regionmanagerid",a),n.append("parentid",i),Object(v.a)({url:"http://192.168.1.45:8080/erp/region/updateregion",method:"post",data:n})}var _=a("Q2AE"),w={inserted:function(e,t,a){var i=t.value,n=_.a.getters&&_.a.getters.roles;if(!(i&&i instanceof Array&&i.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var r=i;n.some(function(e){return r.includes(e)})||e.parentNode&&e.parentNode.removeChild(e)}},y=function(e){e.directive("permission",w)};function x(e,t,a,i,n){var r=[],l=[];return s()(e).forEach(function(e){void 0===e._expanded&&c.default.set(e,"_expanded",t);var o=1;if(void 0!==i&&null!==i&&(o=i+1),c.default.set(e,"_level",o),a?(c.default.set(e,"parent",a),r[o]||(r[o]=0),c.default.set(e,"_marginLeft",r[o]+a._marginLeft),c.default.set(e,"_width",e[n]/a[n]*a._width),r[o]+=e._width):(r[e.id]=[],r[e.id][o]=0,c.default.set(e,"_marginLeft",0),c.default.set(e,"_width",1)),l.push(e),e.children&&e.children.length>0){var s=x(e.children,t,e,o,n);l=l.concat(s)}}),l}window.Vue&&(window.permission=w,Vue.use(y)),w.install=y;var $={name:"Regional",components:{treeTable:p},directives:{permission:w},data:function(){return{func:x,expandAll:!1,data:[],args:[null,null],dialogFormVisible:!1,categoriesform:{name:"",levle:1,parentid:0,zhuanfirstlevelid:"",firstlevelid:0,createid:""},dialogFormVisible2:!1,dialogFormVisible3:!1,categoriesform2:{name:"",levle:"",parentid:"",firstlevelid:0,createid:"",regionmanagerid:""},categoriesform3:{regionid:"",name:"",regionmanagerid:null,parentid:""},tempData:"",tempData2:"",formLabelWidth:"120px",options:[],value5:[],storelist:[]}},created:function(){this.getlist()},methods:{checkPermission:function(e){if(e&&e instanceof Array&&e.length>0){var t=e;return!!(_.a.getters&&_.a.getters.roles).some(function(e){return t.includes(e)})}return console.error("need roles!"),!1},getlist:function(){var e=this;(function(e){return Object(v.a)({url:"http://192.168.1.45:8080/erp/region/newdetailList",method:"post",params:e})})().then(function(t){e.data=t.data.data.content})},message:function(e){this.$message.info(e.name)},restcategoriesform:function(){this.categoriesform={name:"",levle:1,parentid:0,zhuanfirstlevelid:"",firstlevelid:0,createid:""}},handleCreate:function(){var e=this;this.restcategoriesform(),this.dialogFormVisible=!0,function(e){return Object(v.a)({url:"http://192.168.1.45:8080/erp/region/listbyparentid",method:"post",params:e})}().then(function(t){e.options=t.data.data.content})},createData:function(){var e=this;this.categoriesform.createid=this.$store.getters.userId,void 0===this.value5[this.value5.length-1]?(this.categoriesform.firstlevelid,g(this.categoriesform).then(function(t){e.getlist(),e.dialogFormVisible=!1,e.$notify({title:"successful",message:"successful",type:"success",duration:2e3})})):this.value5!==[]&&(this.categoriesform.firstlevelid=this.value5.join(),g(this.categoriesform).then(function(t){e.getlist(),e.dialogFormVisible=!1,e.$notify({title:"successful",message:"successful",type:"success",duration:2e3})}))},handleUpdate:function(e){var t=this;this.tempData=n()({},e),this.dialogFormVisible2=!0,console.log(e),h(e.id).then(function(e){t.storelist=e.data.data.content})},createData2:function(){var e=this;(function(e,t,a,i,n){var r=new URLSearchParams;return r.append("name",e),r.append("levle",t),r.append("parentid",a),r.append("createid",i),r.append("regionmanagerid",n),Object(v.a)({url:"http://192.168.1.45:8080/erp/region/create",method:"post",data:r})})(this.categoriesform2.name,this.tempData.level+1,this.tempData.id,this.$store.getters.userId,this.categoriesform2.regionmanagerid).then(function(t){e.getlist(),e.dialogFormVisible2=!1,e.$notify({title:"successful",message:"successful",type:"success",duration:2e3})})},handleDelete:function(e){var t=this;console.log(e),this.$confirm("This will permanently delete the record. Continue?","Warning",{confirmButtonText:"ok",cancelButtonText:"cancel",type:"warning"}).then(function(){(function(e){var t=new URLSearchParams;return t.append("regionid",e),Object(v.a)({url:"http://192.168.1.45:8080/erp/region/deleteregion",method:"post",data:t})})(e.id).then(function(e){console.log(e),t.getlist()}),t.$message({type:"success",message:"Delete completed!"})}).catch(function(){t.$message({type:"info",message:"Delete canceled"})})},handleEdit:function(e){var t=this;console.log(e),this.tempData2=n()({},e),this.categoriesform3.name=e.regionName,this.dialogFormVisible3=!0,function(e){var t=new URLSearchParams;return t.append("level",e),Object(v.a)({url:"http://192.168.1.45:8080/erp/region/getregionbylevel",method:"post",data:t})}(e.level).then(function(e){t.options=e.data.data.content}),h(e.id).then(function(e){t.storelist=e.data.data.content})},createData3:function(){var e=this;console.log(123),console.log(this.tempData2);var t=this.tempData2.id,a=this.categoriesform3.name,i=this.categoriesform3.regionmanagerid;if(void 0===this.value5[this.value5.length-1]){b(t,a,i,0).then(function(t){e.getlist(),e.dialogFormVisible3=!1,e.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})})}else if(this.value5!==[]){b(t,a,i,this.value5[this.value5.length-1]).then(function(t){e.getlist(),e.dialogFormVisible3=!1,e.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})})}}}},k=Object(m.a)($,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:[76],expression:"[76]"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("public.add")))])],1),e._v(" "),a("tree-table",{attrs:{data:e.data,"eval-func":e.func,"eval-args":e.args,"expand-all":e.expandAll,border:""}},[a("el-table-column",{attrs:{label:e.$t("area.SerialNumber"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("area.AreaName"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.regionName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("area.level"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.level)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("area.Manager"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.regionManagerName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("area.CreationTime"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.createTime)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("area.Founder"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.createName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{directives:[{name:"permission",rawName:"v-permission",value:[76,80,81],expression:"[76, 80, 81]"}],attrs:{label:e.$t("area.Operation"),width:"240",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:[76],expression:"[76]"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("public.add")))]),e._v(" "),2===t.row.isNext?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:[80],expression:"[80]"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("area.delete")))]):e._e(),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:[81],expression:"[81]"}],attrs:{type:"warning",size:"mini"},on:{click:function(a){e.handleEdit(t.row)}}},[e._v(e._s(e.$t("public.edit")))])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogFormVisible,title:e.$t("area.addAreas"),width:"45%",center:"","lock-scroll":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{staticStyle:{width:"400px",margin:"0 auto"},attrs:{model:e.categoriesform}},[a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:e.$t("area.AreaName")}},[a("el-input",{model:{value:e.categoriesform.name,callback:function(t){e.$set(e.categoriesform,"name",t)},expression:"categoriesform.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:e.$t("area.Inclusivearea")}},[a("el-select",{attrs:{multiple:"",placeholder:"plearse choose"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}},e._l(e.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.regionName,value:e.firstLevelId}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("area.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("area.ok")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogFormVisible2,title:e.$t("area.addAreas"),width:"45%",center:"","lock-scroll":""},on:{"update:visible":function(t){e.dialogFormVisible2=t}}},[a("el-form",{staticStyle:{width:"400px",margin:"0 auto"},attrs:{model:e.categoriesform2}},[a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:e.$t("area.AreaName")}},[a("el-input",{model:{value:e.categoriesform2.name,callback:function(t){e.$set(e.categoriesform2,"name",t)},expression:"categoriesform2.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:e.$t("area.Manager")}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"plearse choose",clearable:"",filterable:""},model:{value:e.categoriesform2.regionmanagerid,callback:function(t){e.$set(e.categoriesform2,"regionmanagerid",t)},expression:"categoriesform2.regionmanagerid"}},e._l(e.storelist,function(e){return a("el-option",{key:e.id,attrs:{label:e.firstName+e.middleName+e.lastName,value:e.id}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible2=!1}}},[e._v(e._s(e.$t("area.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createData2}},[e._v(e._s(e.$t("area.ok")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogFormVisible3,title:e.$t("area.editarea"),width:"45%",center:"","lock-scroll":""},on:{"update:visible":function(t){e.dialogFormVisible3=t}}},[a("el-form",{staticStyle:{width:"400px",margin:"0 auto"},attrs:{model:e.categoriesform3}},[a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:e.$t("area.AreaName")}},[a("el-input",{model:{value:e.categoriesform3.name,callback:function(t){e.$set(e.categoriesform3,"name",t)},expression:"categoriesform3.name"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:e.$t("area.Manager")}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"plearse choose",clearable:"",filterable:""},model:{value:e.categoriesform3.regionmanagerid,callback:function(t){e.$set(e.categoriesform3,"regionmanagerid",t)},expression:"categoriesform3.regionmanagerid"}},e._l(e.storelist,function(e){return a("el-option",{key:e.id,attrs:{label:e.firstName+e.middleName+e.lastName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:e.$t("area.Inclusivearea")}},[a("el-select",{attrs:{multiple:"",placeholder:"plearse choose"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}},e._l(e.options,function(e){return a("el-option",{key:e.id,attrs:{label:e.regionName,value:e.firstLevelId}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible3=!1}}},[e._v(e._s(e.$t("area.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createData3}},[e._v(e._s(e.$t("area.ok")))])],1)],1)],1)},[],!1,null,null,null);k.options.__file="Regional.vue";t.default=k.exports},Qq1u:function(e,t,a){},jr1U:function(e,t,a){e.exports={default:a("wObO"),__esModule:!0}},vhXz:function(e,t,a){"use strict";var i=a("6CXL");a.n(i).a},wObO:function(e,t){e.exports=function(){return Function.call.apply(Array.prototype.concat,arguments)}}}]);