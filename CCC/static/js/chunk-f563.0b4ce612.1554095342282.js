(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f563"],{"0zGY":function(e,t,a){"use strict";a.d(t,"g",function(){return n}),a.d(t,"l",function(){return r}),a.d(t,"e",function(){return o}),a.d(t,"h",function(){return l}),a.d(t,"o",function(){return d}),a.d(t,"j",function(){return s}),a.d(t,"i",function(){return c}),a.d(t,"b",function(){return p}),a.d(t,"c",function(){return m}),a.d(t,"n",function(){return u}),a.d(t,"f",function(){return f}),a.d(t,"k",function(){return y}),a.d(t,"a",function(){return g}),a.d(t,"m",function(){return v}),a.d(t,"d",function(){return h});var i=a("t3Un");function n(e){return Object(i.a)({url:"/erp/country/getdeptlist",method:"post",params:e})}function r(e,t){var a=new URLSearchParams;return""!==e&&null!==e&&a.append("empids",e),""!==t&&null!==t&&a.append("stat",t),Object(i.a)({url:"/erp/employee/startorendemp",method:"post",data:a})}function o(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("empids",e),Object(i.a)({url:"/erp/employee/deleteemp",method:"post",data:t})}function l(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("id",e),Object(i.a)({url:"/erp/employee/getempinfo",method:"post",data:t})}function d(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("employeeid",e.id),""!==e.firstName&&null!==e.firstName&&void 0!==e.firstName&&t.append("firstname",e.firstName),""!==e.middleName&&null!==e.middleName&&void 0!==e.middleName&&t.append("middlename",e.middleName),""!==e.lastName&&null!==e.lastName&&void 0!==e.lastName&&t.append("lastname",e.lastName),""!==e.password&&null!==e.password&&void 0!==e.password&&t.append("passwd",e.password),""!==e.email&&null!==e.email&&void 0!==e.email&&t.append("email",e.email),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&t.append("phone",e.phone),""!==e.gender&&null!==e.gender&&void 0!==e.gender&&t.append("gender",e.gender),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&t.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&t.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&t.append("cityid",e.cityid),""!==e.address&&null!==e.address&&void 0!==e.address&&t.append("address",e.address),""!==e.birthday&&null!==e.birthday&&void 0!==e.birthday&&t.append("birthday",e.birthday),""!==e.deptId&&null!==e.deptId&&void 0!==e.deptId&&t.append("deptid",e.deptId),""!==e.postId&&null!==e.postId&&void 0!==e.postId&&t.append("postid",e.postId),""!==e.repositoryid2&&null!==e.repositoryid2&&void 0!==e.repositoryid2&&t.append("repositoryid",e.repositoryid2),""!==e.regionId&&null!==e.regionId&&void 0!==e.regionId&&t.append("regionid",e.regionId),""!==e.certificateType&&null!==e.certificateType&&void 0!==e.certificateType&&t.append("certificatetype",e.certificateType),""!==e.certificateNumber&&null!==e.certificateNumber&&void 0!==e.certificateNumber&&t.append("certificatenumber",e.certificateNumber),Object(i.a)({url:"/erp/employee/updateemp",method:"post",data:t})}function s(e){var t=new URLSearchParams;return t.append("firstname",e.firstname),t.append("middlename",e.middlename),t.append("lastname",e.lastname),t.append("passwd",e.passwd),t.append("email",e.email),t.append("phone",e.phone),t.append("gender",e.gender),t.append("countryid",e.country),t.append("provinceid",e.provinceid),t.append("cityid",e.cityid),t.append("address",e.address),""===e.birthday&&null===e.birthday||t.append("birthday",e.birthday),t.append("account",e.account),t.append("jobnumber",e.jobnumber),t.append("deptid",e.deptid),t.append("roleid",e.roleid),t.append("postid",e.postid),t.append("repositoryid",e.repositoryid),t.append("regionid",e.regionid1),t.append("certificatetype",e.certificatetype),t.append("certificatenumber",e.certificatenumber),Object(i.a)({url:"/erp/employee/register",method:"post",data:t})}function c(e){var t=new URLSearchParams;return""!==e.repositoryid&&t.append("repositoryid",e.repositoryid),""!==e.regionid&&void 0!==e.regionid&&t.append("regionid",e.regionid),""!==e.postid&&t.append("postid",e.postid),""!==e.deptid&&t.append("deptid",e.deptid),""!==e.employeename&&t.append("employeename",e.employeename),""!==e.stat&&t.append("stat",e.stat),""!==e.time&&null!==e.time&&t.append("time",e.time),""!==e.jobnumber&&t.append("jobnumber",e.jobnumber),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(i.a)({url:"/erp/employee/getemplist",method:"post",data:t})}function p(e){var t=new URLSearchParams;return""!==e.employeeid&&t.append("employeeid",e.employeeid),""!==e.contractname&&t.append("contractname",e.contractname),""!==e.signtime&&null!==e.signtime&&t.append("signtime",e.signtime),""!==e.expiredtime&&null!==e.expiredtime&&t.append("expiredtime",e.expiredtime),""!==e.effectivetime&&null!==e.effectivetime&&t.append("effectivetime",e.effectivetime),""!==e.typeid&&t.append("typeid",e.typeid),""!==e.attribute&&t.append("attribute",e.attribute),""!==e.period&&t.append("period",e.period),""!==e.iscorrection&&t.append("iscorrection",e.iscorrection),""!==e.stat&&t.append("stat",e.stat),""!==e.advanceday&&t.append("advanceday",e.advanceday),""!==e.trialsalary&&t.append("trialsalary",e.trialsalary),""!==e.correctionsalary&&t.append("correctionsalary",e.correctionsalary),""!==e.remindpersonid&&t.append("remindpersonid",e.remindpersonid),Object(i.a)({url:"/erp/contract/addcontract",method:"post",data:t})}function m(e){var t=new URLSearchParams;return""!==e.contractname&&t.append("contractname",e.contractname),""!==e.contractnumber&&t.append("contractnumber",e.contractnumber),""!==e.empnumber&&t.append("empnumber",e.empnumber),""!==e.empname&&t.append("empname",e.empname),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(i.a)({url:"/erp/contract/contractlist",method:"post",data:t})}function u(e){var t=new URLSearchParams;return""!==e.id&&t.append("contractid",e.id),""!==e.contractName&&t.append("contractname",e.contractName),""!==e.signTime&&t.append("signtime",e.signTime),""!==e.expiredTime&&t.append("expiredtime",e.expiredTime),""!==e.effectiveTime&&t.append("effectivetime",e.effectiveTime),""!==e.type&&t.append("typeid",e.type),""!==e.contractAttribute&&t.append("attribute",e.contractAttribute),""!==e.contractAttribute&&t.append("period",e.period),""!==e.isCorrection&&t.append("iscorrection",e.isCorrection),""!==e.stat&&t.append("stat",e.stat),""!==e.advanceDay&&t.append("advanceday",e.advanceDay),""!==e.trialSalary&&t.append("trialsalary",e.trialSalary),""!==e.correctionSalary&&t.append("correctionsalary",e.correctionSalary),""!==e.expiredRemindPersonId&&null!==e.expiredRemindPersonId&&t.append("remindpersonid",e.expiredRemindPersonId),Object(i.a)({url:"/erp/contract/updatecontract",method:"post",data:t})}function f(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("empcontractids",e),Object(i.a)({url:"/erp/contract/deleteempcontract",method:"post",data:t})}function y(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&void 0!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(i.a)({url:"/erp/employee/searchEmpCategory",method:"post",data:t})}function g(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.category&&null!==e.category&&t.append("category",e.category),""!==e.iseffective&&null!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&t.append("type",e.type),Object(i.a)({url:"/erp/employee/addEmpCategory",method:"post",data:t})}function v(e){var t=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&t.append("categoryname",e.categoryName),""!==e.isEffective&&null!==e.isEffective&&t.append("iseffective",e.isEffective),""!==e.id&&null!==e.id&&t.append("id",e.id),Object(i.a)({url:"/erp/employee/updateEmpCategory",method:"post",data:t})}function h(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("ids",e),Object(i.a)({url:"/erp/employee/delateEmpCategory",method:"post",data:t})}},"3Ld3":function(e,t,a){"use strict";var i=a("Nj65");a.n(i).a},Nj65:function(e,t,a){},Y5bG:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),Math.easeInOutQuad=function(e,t,a,i){return(e/=i/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function n(e,t,a){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,r=e-n,o=0;t=void 0===t?500:t;!function e(){o+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(o,n,r,t)),o<t?i(e):a&&"function"==typeof a&&a()}()}},ZySA:function(e,t,a){"use strict";var i=a("P2sY"),n=a.n(i),r=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var i=n()({},t.value),r=n()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=r.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var l=o.getBoundingClientRect(),d=o.querySelector(".waves-ripple");switch(d?d.className="waves-ripple":((d=document.createElement("span")).className="waves-ripple",d.style.height=d.style.width=Math.max(l.width,l.height)+"px",o.appendChild(d)),r.type){case"center":d.style.top=l.height/2-d.offsetHeight/2+"px",d.style.left=l.width/2-d.offsetWidth/2+"px";break;default:d.style.top=(a.pageY-l.top-d.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",d.style.left=(a.pageX-l.left-d.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return d.style.backgroundColor=r.color,d.className="waves-ripple z-active",!1}},!1)}}),o=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;t.a=r},jUE0:function(e,t,a){},"uFM+":function(e,t,a){"use strict";a.r(t);var i=a("P2sY"),n=a.n(i),r=a("0zGY"),o=a("ZySA"),l=a("Mz3J"),d={name:"EmpCategory",directives:{waves:o.a},components:{Pagination:l.a},filters:{typeFilter:function(e){return{1:"部门类别",2:"职位类别",3:"合同类型"}[e]},iseffectiveFilter:function(e){return{1:"启用",2:"停用"}[e]}},data:function(){return{moreaction:[],categoryVisible:!1,addCategoryForm:{categoryname:"",type:"",iseffective:""},addCategoryFormRules:{category:[{required:!0,message:"请输入",trigger:"blur"}],categoryname:[{required:!0,message:"请输入",trigger:"blur"}],type:[{required:!0,message:"请选择",trigger:"change"}],iseffective:[{required:!0,message:"请选择",trigger:"change"}]},editcategoryVisible:!1,editCategoryForm:{categoryName:"",type:"",isEffective:""},editCategoryFormRules:{categoryName:[{required:!0,message:"请输入",trigger:"blur"}],isEffective:[{required:!0,message:"请选择",trigger:"change"}]},downloadLoading:!1,list:[],total:0,tableKey:0,listLoading:!0,getemplist:{categoryname:"",type:"",iseffective:"",pagenum:1,pagesize:10}}},mounted:function(){this.getlist()},methods:{getlist:function(){var e=this;this.listLoading=!0,Object(r.k)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount):console.log("列表出错"),setTimeout(function(){e.listLoading=!1},50)})},handleFilter:function(){var e=this;this.getemplist.pagenum=1,Object(r.k)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount):console.log("搜索出错")})},handleSelectionChange:function(e){this.moreaction=e},handleCommand:function(e){var t=this,a=this.moreaction.map(function(e){return e.id}).join();"delete"===e&&this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.d)(a).then(function(e){200===e.data.ret?(t.$notify({title:"删除成功",type:"success",offset:100}),t.getlist()):t.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.d)(e.id).then(function(e){200===e.data.ret?(t.$notify({title:"删除成功",type:"success",offset:100}),t.getlist()):t.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleEdit:function(e){console.log(e),this.editcategoryVisible=!0,this.editCategoryForm=n()({},e),this.editCategoryForm.type=String(e.type),this.editCategoryForm.isEffective=String(e.isEffective)},handleNo:function(){this.editcategoryVisible=!1},handleOk:function(){var e=this;this.$refs.editCategoryForm.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;Object(r.m)(e.editCategoryForm).then(function(t){200===t.data.ret?(e.$notify({title:"成功",message:"修改成功",type:"success",offset:100}),e.getlist(),e.$refs.editCategoryForm.clearValidate(),e.$refs.editCategoryForm.resetFields(),e.editcategoryVisible=!1):console.log("列表出错")})})},handleAdd:function(){this.categoryVisible=!0},handlecancel:function(){this.categoryVisible=!1},restAddCategoryForm:function(){this.addCategoryForm={categoryname:"",type:"",iseffective:""}},handlesave:function(){var e=this;console.log(this.addCategoryForm),this.$refs.addCategoryForm.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;Object(r.a)(e.addCategoryForm).then(function(t){200===t.data.ret?(e.$notify({title:"成功",message:"新建成功",type:"success",offset:100}),e.getlist(),e.$refs.addCategoryForm.clearValidate(),e.$refs.addCategoryForm.resetFields(),e.restAddCategoryForm(),e.categoryVisible=!1):e.$notify.error({title:"错误",message:"出错了",offset:100})})})},handleContract:function(){console.log(123)},handleExport:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-ef4a"),a.e("chunk-73bb")]).then(a.bind(null,"S/jZ")).then(function(t){var a=e.formatJson(["id","jobNumber","account","firstName","gender","birthday","email","postName","deptName","regionName","repositoryName","createTime","dimissionTime","stat"],e.list);t.export_json_to_excel({header:["编号","工号","员工登陆账号","姓名","性别","生日","邮箱","职位","所属部门","所属区域","所属门店","入职时间","离职时间","状态"],data:a,filename:"员工资料表"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handlePrint:function(){console.log(456)}}},s=(a("3Ld3"),a("KHd+")),c=Object(s.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ERP-container"},[a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px",height:"60px"},attrs:{shadow:"never"}},[a("el-row",[a("el-form",{ref:"getemplist",staticStyle:{"margin-top":"-9px"},attrs:{model:e.getemplist,"label-width":"100px"}},[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"分类名称","label-width":"100px"}},[a("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.categoryname,callback:function(t){e.$set(e.getemplist,"categoryname",t)},expression:"getemplist.categoryname"}})],1)],1),e._v(" "),a("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:5}},[a("el-form-item",{attrs:{label:"分类类别"}},[a("el-select",{attrs:{value:e.getemplist.type,clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.type,callback:function(t){e.$set(e.getemplist,"type",t)},expression:"getemplist.type"}},[a("el-option",{attrs:{label:"部门类别",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"职位类别",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"合同类型",value:"3"}})],1)],1)],1),e._v(" "),a("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:5}},[a("el-form-item",{attrs:{label:"启用状态"}},[a("el-select",{attrs:{value:e.getemplist.iseffective,clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.iseffective,callback:function(t){e.$set(e.getemplist,"iseffective",t)},expression:"getemplist.iseffective"}},[a("el-option",{attrs:{label:"active ",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"dead",value:"2"}})],1)],1)],1),e._v(" "),a("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:3}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search",round:""},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1)],1)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[a("el-dropdown",{on:{command:e.handleCommand}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"0"},attrs:{type:"primary"}},[e._v("\n        "+e._s(e.$t("public.batchoperation"))+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{staticStyle:{width:"140px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{staticStyle:{"text-align":"left"},attrs:{command:"delete"}},[a("svg-icon",{staticStyle:{width:"40px"},attrs:{"icon-class":"shanchu"}}),e._v(e._s(e.$t("public.delete")))],1)],1)],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{loading:e.downloadLoading},on:{click:e.handleExport}},[a("svg-icon",{attrs:{"icon-class":"daochu"}}),e._v(e._s(e.$t("public.export")))],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-printer"},on:{click:e.handlePrint}},[e._v(e._s(e.$t("public.print")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))]),e._v(" "),a("el-dialog",{staticClass:"normal",attrs:{visible:e.categoryVisible,title:"新建分类属性",width:"600px",center:""},on:{"update:visible":function(t){e.categoryVisible=t}}},[a("el-form",{ref:"addCategoryForm",staticClass:"demo-ruleForm",staticStyle:{margin:"0 auto",width:"400px"},attrs:{rules:e.addCategoryFormRules,model:e.addCategoryForm}},[a("el-form-item",{attrs:{label:e.$t("NewEmployeeInformation.type"),"label-width":"100px",prop:"type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类别"},model:{value:e.addCategoryForm.type,callback:function(t){e.$set(e.addCategoryForm,"type",t)},expression:"addCategoryForm.type"}},[a("el-option",{attrs:{label:"部门类别",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"职位类别",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"合同类型",value:"3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("NewEmployeeInformation.categoryname"),"label-width":"100px",prop:"categoryname"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.addCategoryForm.categoryname,callback:function(t){e.$set(e.addCategoryForm,"categoryname",t)},expression:"addCategoryForm.categoryname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("NewEmployeeInformation.iseffective"),"label-width":"100px",prop:"iseffective"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择状态"},model:{value:e.addCategoryForm.iseffective,callback:function(t){e.$set(e.addCategoryForm,"iseffective",t)},expression:"addCategoryForm.iseffective"}},[a("el-option",{attrs:{label:"active ",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"dead",value:"2"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{selectable:e.selectInit,type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.id"),resizable:!1,align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.type"),resizable:!1,align:"center","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("typeFilter")(t.row.type)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.categoryname"),resizable:!1,align:"center","min-width":"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.categoryName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.iseffective"),resizable:!1,align:"center","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("iseffectiveFilter")(t.row.isEffective)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("public.actions"),resizable:!1,align:"center","min-width":"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleEdit(t.row)}}},[e._v(e._s(e.$t("public.edit")))]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("public.delete")))])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pagenum,limit:e.getemplist.pagesize},on:{"update:page":function(t){e.$set(e.getemplist,"pagenum",t)},"update:limit":function(t){e.$set(e.getemplist,"pagesize",t)},pagination:e.getlist}}),e._v(" "),a("el-dialog",{staticClass:"normal",attrs:{visible:e.editcategoryVisible,title:"修改分类属性",width:"600px",center:""},on:{"update:visible":function(t){e.editcategoryVisible=t}}},[a("el-form",{ref:"editCategoryForm",staticClass:"demo-ruleForm",staticStyle:{margin:"0 auto",width:"400px"},attrs:{rules:e.editCategoryFormRules,model:e.editCategoryForm}},[a("el-form-item",{attrs:{label:e.$t("NewEmployeeInformation.type"),"label-width":"100px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类别",disabled:""},model:{value:e.editCategoryForm.type,callback:function(t){e.$set(e.editCategoryForm,"type",t)},expression:"editCategoryForm.type"}},[a("el-option",{attrs:{label:"部门类别",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"职位类别",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"合同类型",value:"3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("NewEmployeeInformation.categoryname"),"label-width":"100px",prop:"categoryName"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.editCategoryForm.categoryName,callback:function(t){e.$set(e.editCategoryForm,"categoryName",t)},expression:"editCategoryForm.categoryName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("NewEmployeeInformation.iseffective"),"label-width":"100px",prop:"isEffective"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择状态"},model:{value:e.editCategoryForm.isEffective,callback:function(t){e.$set(e.editCategoryForm,"isEffective",t)},expression:"editCategoryForm.isEffective"}},[a("el-option",{attrs:{label:"active ",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"dead",value:"2"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleOk()}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handleNo()}}},[e._v("取消")])],1)],1)],1)],1)},[],!1,null,"74404538",null);c.options.__file="EmpCategory.vue";t.default=c.exports}}]);