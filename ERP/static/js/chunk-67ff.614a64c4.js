(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-67ff"],{"/0Gm":function(e,t,a){},"0zGY":function(e,t,a){"use strict";a.d(t,"g",function(){return r}),a.d(t,"l",function(){return n}),a.d(t,"e",function(){return o}),a.d(t,"h",function(){return l}),a.d(t,"o",function(){return s}),a.d(t,"j",function(){return c}),a.d(t,"i",function(){return p}),a.d(t,"b",function(){return d}),a.d(t,"c",function(){return m}),a.d(t,"n",function(){return u}),a.d(t,"f",function(){return f}),a.d(t,"k",function(){return y}),a.d(t,"a",function(){return g}),a.d(t,"m",function(){return v}),a.d(t,"d",function(){return h});var i=a("t3Un");function r(e){return Object(i.a)({url:"/erp/country/getdeptlist",method:"post",params:e})}function n(e,t){var a=new URLSearchParams;return""!==e&&null!==e&&a.append("empids",e),""!==t&&null!==t&&a.append("stat",t),Object(i.a)({url:"/erp/employee/startorendemp",method:"post",data:a})}function o(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("empids",e),Object(i.a)({url:"/erp/employee/deleteemp",method:"post",data:t})}function l(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("id",e),Object(i.a)({url:"/erp/employee/getempinfo",method:"post",data:t})}function s(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("employeeid",e.id),""!==e.firstName&&null!==e.firstName&&void 0!==e.firstName&&t.append("firstname",e.firstName),""!==e.middleName&&null!==e.middleName&&void 0!==e.middleName&&t.append("middlename",e.middleName),""!==e.lastName&&null!==e.lastName&&void 0!==e.lastName&&t.append("lastname",e.lastName),""!==e.password&&null!==e.password&&void 0!==e.password&&t.append("passwd",e.password),""!==e.email&&null!==e.email&&void 0!==e.email&&t.append("email",e.email),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&t.append("phone",e.phone),""!==e.gender&&null!==e.gender&&void 0!==e.gender&&t.append("gender",e.gender),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&t.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&t.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&t.append("cityid",e.cityid),""!==e.address&&null!==e.address&&void 0!==e.address&&t.append("address",e.address),""!==e.birthday&&null!==e.birthday&&void 0!==e.birthday&&t.append("birthday",e.birthday),""!==e.deptId&&null!==e.deptId&&void 0!==e.deptId&&t.append("deptid",e.deptId),""!==e.postId&&null!==e.postId&&void 0!==e.postId&&t.append("postid",e.postId),""!==e.repositoryid2&&null!==e.repositoryid2&&void 0!==e.repositoryid2&&t.append("repositoryid",e.repositoryid2),""!==e.regionId&&null!==e.regionId&&void 0!==e.regionId&&t.append("regionid",e.regionId),""!==e.certificateType&&null!==e.certificateType&&void 0!==e.certificateType&&t.append("certificatetype",e.certificateType),""!==e.certificateNumber&&null!==e.certificateNumber&&void 0!==e.certificateNumber&&t.append("certificatenumber",e.certificateNumber),Object(i.a)({url:"/erp/employee/updateemp",method:"post",data:t})}function c(e){var t=new URLSearchParams;return t.append("firstname",e.firstname),t.append("middlename",e.middlename),t.append("lastname",e.lastname),t.append("passwd",e.passwd),t.append("email",e.email),t.append("phone",e.phone),t.append("gender",e.gender),t.append("countryid",e.country),t.append("provinceid",e.provinceid),t.append("cityid",e.cityid),t.append("address",e.address),""===e.birthday&&null===e.birthday||t.append("birthday",e.birthday),t.append("account",e.account),t.append("jobnumber",e.jobnumber),t.append("deptid",e.deptid),t.append("roleid",e.roleid),t.append("postid",e.postid),t.append("repositoryid",e.repositoryid),t.append("regionid",e.regionid1),t.append("certificatetype",e.certificatetype),t.append("certificatenumber",e.certificatenumber),Object(i.a)({url:"/erp/employee/register",method:"post",data:t})}function p(e){var t=new URLSearchParams;return""!==e.repositoryid&&t.append("repositoryid",e.repositoryid),""!==e.regionid&&void 0!==e.regionid&&t.append("regionid",e.regionid),""!==e.postid&&t.append("postid",e.postid),""!==e.deptid&&t.append("deptid",e.deptid),""!==e.employeename&&t.append("employeename",e.employeename),""!==e.stat&&t.append("stat",e.stat),""!==e.time&&null!==e.time&&t.append("time",e.time),""!==e.jobnumber&&t.append("jobnumber",e.jobnumber),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(i.a)({url:"/erp/employee/getemplist",method:"post",data:t})}function d(e){var t=new URLSearchParams;return""!==e.employeeid&&t.append("employeeid",e.employeeid),""!==e.contractname&&t.append("contractname",e.contractname),""!==e.signtime&&null!==e.signtime&&t.append("signtime",e.signtime),""!==e.expiredtime&&null!==e.expiredtime&&t.append("expiredtime",e.expiredtime),""!==e.effectivetime&&null!==e.effectivetime&&t.append("effectivetime",e.effectivetime),""!==e.typeid&&t.append("typeid",e.typeid),""!==e.attribute&&t.append("attribute",e.attribute),""!==e.period&&t.append("period",e.period),""!==e.iscorrection&&t.append("iscorrection",e.iscorrection),""!==e.stat&&t.append("stat",e.stat),""!==e.advanceday&&t.append("advanceday",e.advanceday),""!==e.trialsalary&&t.append("trialsalary",e.trialsalary),""!==e.correctionsalary&&t.append("correctionsalary",e.correctionsalary),""!==e.remindpersonid&&t.append("remindpersonid",e.remindpersonid),Object(i.a)({url:"/erp/contract/addcontract",method:"post",data:t})}function m(e){var t=new URLSearchParams;return""!==e.contractname&&t.append("contractname",e.contractname),""!==e.contractnumber&&t.append("contractnumber",e.contractnumber),""!==e.empnumber&&t.append("empnumber",e.empnumber),""!==e.empname&&t.append("empname",e.empname),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(i.a)({url:"/erp/contract/contractlist",method:"post",data:t})}function u(e){var t=new URLSearchParams;return""!==e.id&&t.append("contractid",e.id),""!==e.contractName&&t.append("contractname",e.contractName),""!==e.signTime&&t.append("signtime",e.signTime),""!==e.expiredTime&&t.append("expiredtime",e.expiredTime),""!==e.effectiveTime&&t.append("effectivetime",e.effectiveTime),""!==e.type&&t.append("typeid",e.type),""!==e.contractAttribute&&t.append("attribute",e.contractAttribute),""!==e.contractAttribute&&t.append("period",e.period),""!==e.isCorrection&&t.append("iscorrection",e.isCorrection),""!==e.stat&&t.append("stat",e.stat),""!==e.advanceDay&&t.append("advanceday",e.advanceDay),""!==e.trialSalary&&t.append("trialsalary",e.trialSalary),""!==e.correctionSalary&&t.append("correctionsalary",e.correctionSalary),""!==e.expiredRemindPersonId&&null!==e.expiredRemindPersonId&&t.append("remindpersonid",e.expiredRemindPersonId),Object(i.a)({url:"/erp/contract/updatecontract",method:"post",data:t})}function f(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("empcontractids",e),Object(i.a)({url:"/erp/contract/deleteempcontract",method:"post",data:t})}function y(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.iseffective&&null!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&t.append("type",e.type),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(i.a)({url:"/erp/employee/searchEmpCategory",method:"post",data:t})}function g(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.category&&null!==e.category&&t.append("category",e.category),""!==e.iseffective&&null!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&t.append("type",e.type),Object(i.a)({url:"/erp/employee/addEmpCategory",method:"post",data:t})}function v(e){var t=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&t.append("categoryname",e.categoryName),""!==e.isEffective&&null!==e.isEffective&&t.append("iseffective",e.isEffective),""!==e.id&&null!==e.id&&t.append("id",e.id),Object(i.a)({url:"/erp/employee/updateEmpCategory",method:"post",data:t})}function h(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("ids",e),Object(i.a)({url:"/erp/employee/delateEmpCategory",method:"post",data:t})}},"2i82":function(e,t,a){"use strict";a.r(t);var i=a("6HaC"),r=a("0zGY"),n=a("ZySA"),o=a("Mz3J"),l={name:"NewEmployeeContract",directives:{waves:n.a},components:{Pagination:o.a},filters:{genderFilter:function(e){return{1:"男",2:"女"}[e]}},data:function(){return{currentRow:null,list:[],total:0,tableKey:0,listLoading:!0,getemplist:{repositoryid:"",regionid:"",postid:"",deptid:"",employeename:"",pagenum:1,pagesize:10,stat:1,time:"",jobnumber:""},depts:[],props:{value:"id",label:"regionName",children:"regionListVos"},regions:[],getemplistregions:[],repositories:[],employeeVisible:!1,employeeName:"",contractForm:{employeeid:"",contractname:"",signtime:"",expiredtime:"",effectivetime:"",typeid:"",attribute:"",period:"",iscorrection:"",stat:"",advanceday:"",trialsalary:"",correctionsalary:"",remindpersonid:""},contractFormRules:{employeeid:[{required:!0,message:"请选择员工",trigger:"focus"}],typeid:[{required:!0,message:"请选择合同类别",trigger:"change"}],contractname:[{required:!0,message:"请输入合同名称",trigger:"blur"}],signtime:[{required:!0,message:"请选择签约时间",trigger:"blur"}],expiredtime:[{required:!0,message:"请选择签约时间",trigger:"blur"}],effectivetime:[{required:!0,message:"请选择签约时间",trigger:"blur"}]}}},created:function(){this.getnationlist()},methods:{getnationlist:function(){var e=this;this.listLoading=!0,console.log(this.getemplist),Object(r.i)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount):e.$notify.error({title:"错误",message:"出错了",offset:100}),setTimeout(function(){e.listLoading=!1},50)}),Object(r.g)().then(function(t){200===t.data.ret?e.depts=t.data.data.content:e.$notify.error({title:"错误",message:"出错了",offset:100})}),Object(i.d)().then(function(t){200===t.data.ret&&(e.regions=e.tranKTree(t.data.data.content))})},handleFilter:function(){var e=this;this.getemplist.regionid=this.getemplistregions[this.getemplistregions.length-1],console.log(this.getemplist),""===this.getemplist.deptid&&""===this.getemplist.employeename&&""===this.getemplist.jobnumber&&""===this.getemplist.postid&&""===this.getemplist.regionid&&""===this.getemplist.repositoryid&&""===this.getemplist.stat&&""===this.getemplist.time||null===this.getemplist.time?this.getnationlist():Object(r.i)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount):e.$notify.error({title:"错误",message:"出错了",offset:100})})},handleAdd:function(){this.$router.push("/EmployeeInformation/NewEmployeeInformation")},tranKTree:function(e){var t=this;if(e&&e.length)return e.map(function(e){return{id:e.id,regionName:e.regionName,regionListVos:t.tranKTree(e.regionListVos)}})},handlechange4:function(e){var t=this,a=e[e.length-1];Object(i.e)(a).then(function(e){200===e.data.ret?t.repositories=e.data.data.content.list:t.$message.error("出错了")})},restemplist:function(){this.getemplist={repositoryid:"",regionid:"",postid:"",deptid:"",employeename:"",pagenum:1,pagesize:10,stat:1,time:"",jobnumber:""},this.getemplistregions=[]},handlechoose:function(){this.restemplist(),console.log(this.getemplist),this.getnationlist(),this.employeeVisible=!0},handleCurrentChange:function(e){this.currentRow=e,this.contractForm.employeeid=e.id,this.employeeName=e.personName,this.employeeVisible=!1},handlesave:function(){var e=this;this.$refs.contractForm.validate(function(t){if(!t){e.$notify.error({title:"错误",message:"信息未填完整",offset:100});var a=e.$refs.geren.offsetTop;return document.documentElement.scrollTop=a-100,!1}Object(r.b)(e.contractForm).then(function(t){200===t.data.ret?(e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.contractForm.clearValidate(),e.$refs.contractForm.resetFields()):e.$notify.error({title:"错误",message:t.data.msg,offset:100})})})},restAllForm:function(){this.contractForm={employeeid:"",contractname:"",signtime:"",expiredtime:"",effectivetime:"",typeid:"",attribute:"",period:"",iscorrection:"",stat:"",advanceday:"",trialsalary:"",correctionsalary:"",remindpersonid:""},this.employeeName=""},handleentry:function(){var e=this;console.log(this.contractForm),this.$refs.contractForm.validate(function(t){if(!t){e.$notify.error({title:"错误",message:"信息未填完整",offset:100});var a=e.$refs.geren.offsetTop;return document.documentElement.scrollTop=a-100,!1}Object(r.b)(e.contractForm).then(function(t){if(200===t.data.ret){e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.contractForm.clearValidate(),e.$refs.contractForm.resetFields();var a=e.$refs.geren.offsetTop;document.documentElement.scrollTop=a-100}else e.$notify.error({title:"错误",message:t.data.msg,offset:100})})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/EmployeeInformation/NewEmployeeContract",name:"NewEmployeeContract",fullPath:"/EmployeeInformation/NewEmployeeContract",title:"NewEmployeeContract"}).then(function(e){e.visitedViews})}}},s=(a("8eEM"),a("KHd+")),c=Object(s.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ERP-container"},[a("div",{staticClass:"app-container"},[a("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"contractForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.contractForm,rules:e.contractFormRules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("NewEmployeeInformation.employeeid"),prop:"employeeid"}},[a("el-input",{attrs:{placeholder:"请选择员工",clearable:""},on:{focus:e.handlechoose},model:{value:e.employeeName,callback:function(t){e.employeeName=t},expression:"employeeName"}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.employeeVisible,top:"10px",title:"选择员工"},on:{"update:visible":function(t){e.employeeVisible=t}}},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("NewEmployeeInformation.employeename"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.employeename,callback:function(t){e.$set(e.getemplist,"employeename",t)},expression:"getemplist.employeename"}}),e._v(" "),a("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("NewEmployeeInformation.jobnumber2"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.jobnumber,callback:function(t){e.$set(e.getemplist,"jobnumber",t)},expression:"getemplist.jobnumber"}}),e._v(" "),a("el-date-picker",{staticClass:"filter-item",attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.getemplist.time,callback:function(t){e.$set(e.getemplist,"time",t)},expression:"getemplist.time"}}),e._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"500",trigger:"click"}},[a("el-cascader",{staticStyle:{width:"40%",float:"left","margin-left":"20px"},attrs:{options:e.regions,props:e.props,"show-all-levels":!1,placeholder:"请选择区域","change-on-select":"",filterable:"",clearable:""},on:{change:e.handlechange4},model:{value:e.getemplistregions,callback:function(t){e.getemplistregions=t},expression:"getemplistregions"}}),e._v(" "),a("el-select",{staticStyle:{width:"40%",float:"right","margin-right":"20px"},attrs:{placeholder:"请选择门店",clearable:"",filterable:""},model:{value:e.getemplist.repositoryid,callback:function(t){e.$set(e.getemplist,"repositoryid",t)},expression:"getemplist.repositoryid"}},e._l(e.repositories,function(e,t){return a("el-option",{key:t,attrs:{label:e.repositoryName,value:e.id}})})),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%",float:"left","margin-top":"10px","margin-left":"20px"},attrs:{value:e.getemplist.postid,placeholder:e.$t("NewEmployeeInformation.postid2"),clearable:""},model:{value:e.getemplist.postid,callback:function(t){e.$set(e.getemplist,"postid",t)},expression:"getemplist.postid"}},[a("el-option",{attrs:{label:"xxx",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"xxx",value:"2"}})],1),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%",float:"right","margin-top":"10px","margin-right":"20px"},attrs:{placeholder:e.$t("NewEmployeeInformation.deptid2"),clearable:""},model:{value:e.getemplist.deptid,callback:function(t){e.$set(e.getemplist,"deptid",t)},expression:"getemplist.deptid"}},e._l(e.depts,function(e,t){return a("el-option",{key:t,attrs:{label:e.deptName,value:e.id}})})),e._v(" "),a("div",{staticClass:"seachbutton",staticStyle:{width:"100%",float:"right","margin-top":"20px"}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v(e._s(e.$t("public.filter"))),a("svg-icon",{staticStyle:{"margin-left":"4px"},attrs:{"icon-class":"shaixuan"}})],1)],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.id"),resizable:!1,property:"id",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.jobNumber"),resizable:!1,property:"jobNumber",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.account"),resizable:!1,property:"account",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.name"),resizable:!1,align:"center",width:"109"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.firstName)+" "+e._s(t.row.middleName)+" "+e._s(t.row.lastName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.gender"),resizable:!1,prop:"gender",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("genderFilter")(t.row.gender)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.deptName"),resizable:!1,prop:"deptName",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.deptName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.regionName"),resizable:!1,prop:"regionName",align:"center",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.regionName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.repositoryName"),resizable:!1,prop:"repositoryName",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.repositoryName))])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pagenum,limit:e.getemplist.pagesize},on:{"update:page":function(t){e.$set(e.getemplist,"pagenum",t)},"update:limit":function(t){e.$set(e.getemplist,"pagesize",t)},pagination:e.getnationlist}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("NewEmployeeInformation.typeid"),prop:"typeid"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择合同类别"},model:{value:e.contractForm.typeid,callback:function(t){e.$set(e.contractForm,"typeid",t)},expression:"contractForm.typeid"}},[a("el-option",{attrs:{label:"类型1",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"类型2",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("NewEmployeeInformation.contractname"),prop:"contractname"}},[a("el-input",{attrs:{placeholder:"请输入合同名称",clearable:""},model:{value:e.contractForm.contractname,callback:function(t){e.$set(e.contractForm,"contractname",t)},expression:"contractForm.contractname"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("NewEmployeeInformation.signtime"),prop:"signtime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择签约时间","value-format":"yyyy-MM-dd"},model:{value:e.contractForm.signtime,callback:function(t){e.$set(e.contractForm,"signtime",t)},expression:"contractForm.signtime"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("NewEmployeeInformation.expiredtime"),prop:"expiredtime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择到期时间","value-format":"yyyy-MM-dd"},model:{value:e.contractForm.expiredtime,callback:function(t){e.$set(e.contractForm,"expiredtime",t)},expression:"contractForm.expiredtime"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("NewEmployeeInformation.effectivetime"),prop:"effectivetime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择生效时间","value-format":"yyyy-MM-dd"},model:{value:e.contractForm.effectivetime,callback:function(t){e.$set(e.contractForm,"effectivetime",t)},expression:"contractForm.effectivetime"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("NewEmployeeInformation.period")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择合同期限"},model:{value:e.contractForm.period,callback:function(t){e.$set(e.contractForm,"period",t)},expression:"contractForm.period"}},[a("el-option",{attrs:{label:"类型1",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"类型2",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("NewEmployeeInformation.attribute")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择合同属性"},model:{value:e.contractForm.attribute,callback:function(t){e.$set(e.contractForm,"attribute",t)},expression:"contractForm.attribute"}},[a("el-option",{attrs:{label:"类型1",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"类型2",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("NewEmployeeInformation.iscorrection")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择转正标志"},model:{value:e.contractForm.iscorrection,callback:function(t){e.$set(e.contractForm,"iscorrection",t)},expression:"contractForm.iscorrection"}},[a("el-option",{attrs:{label:"是",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("NewEmployeeInformation.contractstat")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择合同状态"},model:{value:e.contractForm.stat,callback:function(t){e.$set(e.contractForm,"stat",t)},expression:"contractForm.stat"}},[a("el-option",{attrs:{label:"类型1",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"类型2",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("NewEmployeeInformation.trialsalary")}},[a("el-input",{attrs:{placeholder:"请输入试用工资",clearable:""},model:{value:e.contractForm.trialsalary,callback:function(t){e.$set(e.contractForm,"trialsalary",t)},expression:"contractForm.trialsalary"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("NewEmployeeInformation.correctionsalary")}},[a("el-input",{attrs:{placeholder:"请输入转正工资",clearable:""},model:{value:e.contractForm.correctionsalary,callback:function(t){e.$set(e.contractForm,"correctionsalary",t)},expression:"contractForm.correctionsalary"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("NewEmployeeInformation.remindpersonid")}},[a("el-input",{attrs:{placeholder:"请选择提醒人",clearable:""},model:{value:e.contractForm.remindpersonid,callback:function(t){e.$set(e.contractForm,"remindpersonid",t)},expression:"contractForm.remindpersonid"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("NewEmployeeInformation.advanceday")}},[a("el-input",{attrs:{placeholder:"请输入提前时间",clearable:""},model:{value:e.contractForm.advanceday,callback:function(t){e.$set(e.contractForm,"advanceday",t)},expression:"contractForm.advanceday"}},[a("template",{slot:"append"},[e._v("天")])],2)],1)],1)],1),e._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){e.handleentry()}}},[e._v("继续新建")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)])])},[],!1,null,"46a4d723",null);c.options.__file="NewEmployeeContract.vue";t.default=c.exports},"6HaC":function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"d",function(){return n}),a.d(t,"e",function(){return o}),a.d(t,"c",function(){return l}),a.d(t,"a",function(){return s});var i=a("t3Un");function r(e){return Object(i.a)({url:"/erp/country/getcountrylist",method:"post",params:e})}function n(e){return Object(i.a)({url:"/erp/region/detaillist",method:"post",params:e})}function o(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("regionId",e),t.append("pagenum",1),t.append("pagesize",99999),Object(i.a)({url:"/erp/repository/searchRepository",method:"post",data:t})}function l(e){var t=new URLSearchParams;return t.append("countryid",e),Object(i.a)({url:"/erp/country/getprovincelist",method:"post",data:t})}function s(e){var t=new URLSearchParams;return t.append("provinceid",e),Object(i.a)({url:"/erp/country/getcitylist",method:"post",data:t})}},"8eEM":function(e,t,a){"use strict";var i=a("/0Gm");a.n(i).a},Y5bG:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),Math.easeInOutQuad=function(e,t,a,i){return(e/=i/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function r(e,t,a){var r=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,n=e-r,o=0;t=void 0===t?500:t;!function e(){o+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(o,r,n,t)),o<t?i(e):a&&"function"==typeof a&&a()}()}},ZySA:function(e,t,a){"use strict";var i=a("P2sY"),r=a.n(i),n=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var i=r()({},t.value),n=r()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=n.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var l=o.getBoundingClientRect(),s=o.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(l.width,l.height)+"px",o.appendChild(s)),n.type){case"center":s.style.top=l.height/2-s.offsetHeight/2+"px",s.style.left=l.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-l.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-l.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=n.color,s.className="waves-ripple z-active",!1}},!1)}}),o=function(e){e.directive("waves",n)};window.Vue&&(window.waves=n,Vue.use(o)),n.install=o;t.a=n},jUE0:function(e,t,a){}}]);