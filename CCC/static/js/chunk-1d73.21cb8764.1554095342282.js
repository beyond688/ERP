(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d73"],{"0zGY":function(e,t,a){"use strict";a.d(t,"g",function(){return r}),a.d(t,"l",function(){return i}),a.d(t,"e",function(){return o}),a.d(t,"h",function(){return p}),a.d(t,"o",function(){return d}),a.d(t,"j",function(){return l}),a.d(t,"i",function(){return s}),a.d(t,"b",function(){return c}),a.d(t,"c",function(){return u}),a.d(t,"n",function(){return m}),a.d(t,"f",function(){return f}),a.d(t,"k",function(){return y}),a.d(t,"a",function(){return g}),a.d(t,"m",function(){return v}),a.d(t,"d",function(){return h});var n=a("t3Un");function r(e){return Object(n.a)({url:"/erp/country/getdeptlist",method:"post",params:e})}function i(e,t){var a=new URLSearchParams;return""!==e&&null!==e&&a.append("empids",e),""!==t&&null!==t&&a.append("stat",t),Object(n.a)({url:"/erp/employee/startorendemp",method:"post",data:a})}function o(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("empids",e),Object(n.a)({url:"/erp/employee/deleteemp",method:"post",data:t})}function p(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("id",e),Object(n.a)({url:"/erp/employee/getempinfo",method:"post",data:t})}function d(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("employeeid",e.id),""!==e.firstName&&null!==e.firstName&&void 0!==e.firstName&&t.append("firstname",e.firstName),""!==e.middleName&&null!==e.middleName&&void 0!==e.middleName&&t.append("middlename",e.middleName),""!==e.lastName&&null!==e.lastName&&void 0!==e.lastName&&t.append("lastname",e.lastName),""!==e.password&&null!==e.password&&void 0!==e.password&&t.append("passwd",e.password),""!==e.email&&null!==e.email&&void 0!==e.email&&t.append("email",e.email),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&t.append("phone",e.phone),""!==e.gender&&null!==e.gender&&void 0!==e.gender&&t.append("gender",e.gender),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&t.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&t.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&t.append("cityid",e.cityid),""!==e.address&&null!==e.address&&void 0!==e.address&&t.append("address",e.address),""!==e.birthday&&null!==e.birthday&&void 0!==e.birthday&&t.append("birthday",e.birthday),""!==e.deptId&&null!==e.deptId&&void 0!==e.deptId&&t.append("deptid",e.deptId),""!==e.postId&&null!==e.postId&&void 0!==e.postId&&t.append("postid",e.postId),""!==e.repositoryid2&&null!==e.repositoryid2&&void 0!==e.repositoryid2&&t.append("repositoryid",e.repositoryid2),""!==e.regionId&&null!==e.regionId&&void 0!==e.regionId&&t.append("regionid",e.regionId),""!==e.certificateType&&null!==e.certificateType&&void 0!==e.certificateType&&t.append("certificatetype",e.certificateType),""!==e.certificateNumber&&null!==e.certificateNumber&&void 0!==e.certificateNumber&&t.append("certificatenumber",e.certificateNumber),Object(n.a)({url:"/erp/employee/updateemp",method:"post",data:t})}function l(e){var t=new URLSearchParams;return t.append("firstname",e.firstname),t.append("middlename",e.middlename),t.append("lastname",e.lastname),t.append("passwd",e.passwd),t.append("email",e.email),t.append("phone",e.phone),t.append("gender",e.gender),t.append("countryid",e.country),t.append("provinceid",e.provinceid),t.append("cityid",e.cityid),t.append("address",e.address),""===e.birthday&&null===e.birthday||t.append("birthday",e.birthday),t.append("account",e.account),t.append("jobnumber",e.jobnumber),t.append("deptid",e.deptid),t.append("roleid",e.roleid),t.append("postid",e.postid),t.append("repositoryid",e.repositoryid),t.append("regionid",e.regionid1),t.append("certificatetype",e.certificatetype),t.append("certificatenumber",e.certificatenumber),Object(n.a)({url:"/erp/employee/register",method:"post",data:t})}function s(e){var t=new URLSearchParams;return""!==e.repositoryid&&t.append("repositoryid",e.repositoryid),""!==e.regionid&&void 0!==e.regionid&&t.append("regionid",e.regionid),""!==e.postid&&t.append("postid",e.postid),""!==e.deptid&&t.append("deptid",e.deptid),""!==e.employeename&&t.append("employeename",e.employeename),""!==e.stat&&t.append("stat",e.stat),""!==e.time&&null!==e.time&&t.append("time",e.time),""!==e.jobnumber&&t.append("jobnumber",e.jobnumber),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(n.a)({url:"/erp/employee/getemplist",method:"post",data:t})}function c(e){var t=new URLSearchParams;return""!==e.employeeid&&t.append("employeeid",e.employeeid),""!==e.contractname&&t.append("contractname",e.contractname),""!==e.signtime&&null!==e.signtime&&t.append("signtime",e.signtime),""!==e.expiredtime&&null!==e.expiredtime&&t.append("expiredtime",e.expiredtime),""!==e.effectivetime&&null!==e.effectivetime&&t.append("effectivetime",e.effectivetime),""!==e.typeid&&t.append("typeid",e.typeid),""!==e.attribute&&t.append("attribute",e.attribute),""!==e.period&&t.append("period",e.period),""!==e.iscorrection&&t.append("iscorrection",e.iscorrection),""!==e.stat&&t.append("stat",e.stat),""!==e.advanceday&&t.append("advanceday",e.advanceday),""!==e.trialsalary&&t.append("trialsalary",e.trialsalary),""!==e.correctionsalary&&t.append("correctionsalary",e.correctionsalary),""!==e.remindpersonid&&t.append("remindpersonid",e.remindpersonid),Object(n.a)({url:"/erp/contract/addcontract",method:"post",data:t})}function u(e){var t=new URLSearchParams;return""!==e.contractname&&t.append("contractname",e.contractname),""!==e.contractnumber&&t.append("contractnumber",e.contractnumber),""!==e.empnumber&&t.append("empnumber",e.empnumber),""!==e.empname&&t.append("empname",e.empname),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(n.a)({url:"/erp/contract/contractlist",method:"post",data:t})}function m(e){var t=new URLSearchParams;return""!==e.id&&t.append("contractid",e.id),""!==e.contractName&&t.append("contractname",e.contractName),""!==e.signTime&&t.append("signtime",e.signTime),""!==e.expiredTime&&t.append("expiredtime",e.expiredTime),""!==e.effectiveTime&&t.append("effectivetime",e.effectiveTime),""!==e.type&&t.append("typeid",e.type),""!==e.contractAttribute&&t.append("attribute",e.contractAttribute),""!==e.contractAttribute&&t.append("period",e.period),""!==e.isCorrection&&t.append("iscorrection",e.isCorrection),""!==e.stat&&t.append("stat",e.stat),""!==e.advanceDay&&t.append("advanceday",e.advanceDay),""!==e.trialSalary&&t.append("trialsalary",e.trialSalary),""!==e.correctionSalary&&t.append("correctionsalary",e.correctionSalary),""!==e.expiredRemindPersonId&&null!==e.expiredRemindPersonId&&t.append("remindpersonid",e.expiredRemindPersonId),Object(n.a)({url:"/erp/contract/updatecontract",method:"post",data:t})}function f(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("empcontractids",e),Object(n.a)({url:"/erp/contract/deleteempcontract",method:"post",data:t})}function y(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&void 0!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.iseffective&&null!==e.iseffective&&void 0!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(n.a)({url:"/erp/employee/searchEmpCategory",method:"post",data:t})}function g(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.category&&null!==e.category&&t.append("category",e.category),""!==e.iseffective&&null!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&t.append("type",e.type),Object(n.a)({url:"/erp/employee/addEmpCategory",method:"post",data:t})}function v(e){var t=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&t.append("categoryname",e.categoryName),""!==e.isEffective&&null!==e.isEffective&&t.append("iseffective",e.isEffective),""!==e.id&&null!==e.id&&t.append("id",e.id),Object(n.a)({url:"/erp/employee/updateEmpCategory",method:"post",data:t})}function h(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("ids",e),Object(n.a)({url:"/erp/employee/delateEmpCategory",method:"post",data:t})}},"6HaC":function(e,t,a){"use strict";a.d(t,"e",function(){return r}),a.d(t,"j",function(){return i}),a.d(t,"m",function(){return o}),a.d(t,"g",function(){return p}),a.d(t,"d",function(){return d}),a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s}),a.d(t,"f",function(){return c}),a.d(t,"h",function(){return u}),a.d(t,"i",function(){return m}),a.d(t,"n",function(){return f}),a.d(t,"o",function(){return y}),a.d(t,"k",function(){return g}),a.d(t,"l",function(){return v}),a.d(t,"c",function(){return h});var n=a("t3Un");function r(e){return Object(n.a)({url:"/erp/country/getcountrylist",method:"post",params:e})}function i(e){return Object(n.a)({url:"/erp/region/detaillist",method:"post",params:e})}function o(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("regionId",e),t.append("pagenum",1),t.append("pagesize",99999),Object(n.a)({url:"/erp/repository/searchRepository",method:"post",data:t})}function p(e){var t=new URLSearchParams;return t.append("countryid",e),Object(n.a)({url:"/erp/country/getprovincelist",method:"post",data:t})}function d(e){var t=new URLSearchParams;return t.append("provinceid",e),Object(n.a)({url:"/erp/country/getcitylist",method:"post",data:t})}function l(e,t){var a=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&a.append("repositoryId",e),""!==t&&null!==t&&void 0!==t&&a.append("productCode",t),Object(n.a)({url:"/erp/location/batchlist",method:"post",data:a})}function s(e,t,a,r){var i=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&i.append("repositoryId",e),""!==t&&null!==t&&void 0!==t&&i.append("locationId",t),""!==a&&null!==a&&void 0!==a&&i.append("productCode",a),""!==r&&null!==r&&void 0!==r&&i.append("batch",r),Object(n.a)({url:"/erp/location/getQuantity",method:"post",data:i})}function c(e,t){var a=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&a.append("repositoryId",e),""!==t.productCode&&null!==t.productCode&&void 0!==t.productCode&&a.append("productCode",t.productCode),Object(n.a)({url:"/erp/location/getlocation",method:"post",data:a})}function u(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("repositoryId",e),t.append("pageNum",1),t.append("pageSize",99999),Object(n.a)({url:"/erp/location/locationlist",method:"post",data:t})}function m(){var e=new URLSearchParams;return e.append("pageNum",1),e.append("pageSize",9999),Object(n.a)({url:"/erp/materialslist/materialslist",method:"post",data:e})}function f(){var e=new URLSearchParams;return e.append("stat",1),e.append("pageNum",1),e.append("pageSize",9999),Object(n.a)({url:"/erp/processFile/search",method:"post",data:e})}function y(e){var t=new URLSearchParams;return t.append("deptId",e),t.append("stat",1),t.append("pageNum",1),t.append("pageSize",99999),Object(n.a)({url:"/erp/workCenter/search",method:"post",data:t})}function g(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("sourceNumber",e),Object(n.a)({url:"/erp/requireplan/requireplanlist",method:"post",data:t})}function v(e,t){var a=new URLSearchParams;return a.append("zcc",e),a.append("regionId",t),Object(n.a)({url:"/erp/zcc/saveRegion",method:"post",data:a})}function h(e){var t=new URLSearchParams;return t.append("regionId",e),Object(n.a)({url:"/erp/zcc/getRegion",method:"post",data:t})}},RPKf:function(e,t,a){},Y5bG:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),Math.easeInOutQuad=function(e,t,a,n){return(e/=n/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t};var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function r(e,t,a){var r=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,i=e-r,o=0;t=void 0===t?500:t;!function e(){o+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(o,r,i,t)),o<t?n(e):a&&"function"==typeof a&&a()}()}},ZySA:function(e,t,a){"use strict";var n=a("P2sY"),r=a.n(n),i=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var n=r()({},t.value),i=r()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var p=o.getBoundingClientRect(),d=o.querySelector(".waves-ripple");switch(d?d.className="waves-ripple":((d=document.createElement("span")).className="waves-ripple",d.style.height=d.style.width=Math.max(p.width,p.height)+"px",o.appendChild(d)),i.type){case"center":d.style.top=p.height/2-d.offsetHeight/2+"px",d.style.left=p.width/2-d.offsetWidth/2+"px";break;default:d.style.top=(a.pageY-p.top-d.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",d.style.left=(a.pageX-p.left-d.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return d.style.backgroundColor=i.color,d.className="waves-ripple z-active",!1}},!1)}}),o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;t.a=i},"gDS+":function(e,t,a){e.exports={default:a("oh+g"),__esModule:!0}},jUE0:function(e,t,a){},lvXW:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return p});var n=a("t3Un");function r(e){var t=new URLSearchParams;return t.append("Json",e),Object(n.a)({url:"/erp/outFactory/create",method:"post",data:t})}function i(e){var t=new URLSearchParams;return""!==e.code&&null!==e.code&&void 0!==e.code&&t.append("code",e.code),""!==e.factoryName&&null!==e.factoryName&&void 0!==e.factoryName&&t.append("factoryName",e.factoryName),""!==e.factoryContactName&&null!==e.factoryContactName&&void 0!==e.factoryContactName&&t.append("factoryContactName",e.factoryContactName),""!==e.stat&&null!==e.stat&&void 0!==e.stat&&t.append("stat",e.stat),t.append("pageNum",e.pageNum),t.append("pageSize",e.pageSize),Object(n.a)({url:"/erp/outFactory/search",method:"post",data:t})}function o(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("modelids",e),Object(n.a)({url:"/erp/outFactory/delete",method:"post",data:t})}function p(e){var t=new URLSearchParams;return t.append("Json",e),Object(n.a)({url:"/erp/outFactory/update",method:"post",data:t})}},nvZe:function(e,t,a){"use strict";var n=a("6HaC"),r=a("0zGY"),i=a("ZySA"),o=a("Mz3J"),p={directives:{waves:i.a},components:{Pagination:o.a},filters:{genderFilter:function(e){return{1:"男",2:"女"}[e]}},props:{deliverycontrol:{type:Boolean,default:!1}},data:function(){return{jobCat:{type:2,pagenum:1,pagesize:9999},jobs:[],choosedata:"",managerPeople:"",regionManagerId:"",currentRow:null,list:[],total:0,tableKey:0,listLoading:!0,getemplist:{repositoryid:"",regionid:"",postid:"",deptid:"",employeename:"",pagenum:1,pagesize:10,stat:1,time:"",jobnumber:""},depts:[],props2:{value:"id",label:"regionName",children:"regionListVos"},regions2:[],getemplistregions:[],repositories:[],employeeVisible:this.deliverycontrol,regionManagerVisible:!1}},watch:{deliverycontrol:function(){this.employeeVisible=this.deliverycontrol}},created:function(){this.gitemplist()},methods:{gitemplist:function(){var e=this;this.listLoading=!0,console.log(this.getemplist),Object(r.i)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount),setTimeout(function(){e.listLoading=!1},50)}),Object(r.g)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)}),Object(n.j)().then(function(t){200===t.data.ret&&(e.regions2=e.tranKTree(t.data.data.content))}),Object(r.k)(this.jobCat).then(function(t){200===t.data.ret?e.jobs=t.data.data.content.list:console.log("职位列表出错")})},tranKTree:function(e){var t=this;if(e&&e.length)return e.map(function(e){return{id:e.id,regionName:e.regionName,regionListVos:t.tranKTree(e.regionListVos)}})},handleFilter:function(){var e=this;this.getemplist.regionid=this.getemplistregions[this.getemplistregions.length-1],Object(r.i)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount)})},handleAdd:function(){this.employeeVisible=!1,this.$router.push("/EmployeeInformation/NewEmployeeInformation")},handlechange4:function(e){var t=this;console.log(e);var a=e[e.length-1];Object(n.m)(a).then(function(e){200===e.data.ret?(console.log(e),t.repositories=e.data.data.content.list):t.$message.error("出错了")})},restemplist:function(){this.getemplist={repositoryid:"",regionid:"",postid:"",deptid:"",employeename:"",pagenum:1,pagesize:10,stat:1,time:"",jobnumber:""},this.getemplistregions=[]},handleCurrentChange:function(e){this.choosedata=e},handleConfirm:function(){this.employeeVisible=!1,this.$emit("deliveryName",this.choosedata)}}},d=(a("rpF+"),a("KHd+")),l=Object(d.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.employeeVisible,deliverycontrol:e.deliverycontrol,"close-on-press-escape":!1,top:"10px",title:"选择员工","append-to-body":""},on:{"update:visible":function(t){e.employeeVisible=t},close:function(t){e.$emit("update:deliverycontrol",!1)}}},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("NewEmployeeInformation.employeename"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.employeename,callback:function(t){e.$set(e.getemplist,"employeename",t)},expression:"getemplist.employeename"}}),e._v(" "),a("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("NewEmployeeInformation.jobnumber2"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.jobnumber,callback:function(t){e.$set(e.getemplist,"jobnumber",t)},expression:"getemplist.jobnumber"}}),e._v(" "),a("el-date-picker",{staticClass:"filter-item",attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.getemplist.time,callback:function(t){e.$set(e.getemplist,"time",t)},expression:"getemplist.time"}}),e._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"500",trigger:"click"}},[a("el-cascader",{staticStyle:{width:"40%",float:"left","margin-left":"20px"},attrs:{options:e.regions2,props:e.props2,"show-all-levels":!1,placeholder:"请选择区域","change-on-select":"",filterable:"",clearable:""},on:{change:e.handlechange4},model:{value:e.getemplistregions,callback:function(t){e.getemplistregions=t},expression:"getemplistregions"}}),e._v(" "),a("el-select",{staticStyle:{width:"40%",float:"right","margin-right":"20px"},attrs:{placeholder:"请选择门店",clearable:"",filterable:""},model:{value:e.getemplist.repositoryid,callback:function(t){e.$set(e.getemplist,"repositoryid",t)},expression:"getemplist.repositoryid"}},e._l(e.repositories,function(e,t){return a("el-option",{key:t,attrs:{label:e.repositoryName,value:e.id}})})),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%",float:"left","margin-top":"10px","margin-left":"20px"},attrs:{value:e.getemplist.postid,placeholder:e.$t("NewEmployeeInformation.postid2"),clearable:""},model:{value:e.getemplist.postid,callback:function(t){e.$set(e.getemplist,"postid",t)},expression:"getemplist.postid"}},e._l(e.jobs,function(e,t){return a("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})})),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%",float:"right","margin-top":"10px","margin-right":"20px"},attrs:{placeholder:e.$t("NewEmployeeInformation.deptid2"),clearable:""},model:{value:e.getemplist.deptid,callback:function(t){e.$set(e.getemplist,"deptid",t)},expression:"getemplist.deptid"}},e._l(e.depts,function(e,t){return a("el-option",{key:t,attrs:{label:e.deptName,value:e.id}})})),e._v(" "),a("div",{staticClass:"seachbutton",staticStyle:{width:"100%",float:"right","margin-top":"20px"}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v(e._s(e.$t("public.filter"))),a("svg-icon",{staticStyle:{"margin-left":"4px"},attrs:{"icon-class":"shaixuan"}})],1)],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.id"),resizable:!1,property:"id",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.jobNumber"),resizable:!1,property:"jobNumber",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.account"),resizable:!1,property:"account",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.name"),resizable:!1,align:"center",width:"109"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.firstName)+" "+e._s(t.row.middleName)+" "+e._s(t.row.lastName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.gender"),resizable:!1,prop:"gender",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("genderFilter")(t.row.gender)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.deptName"),resizable:!1,prop:"deptName",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.deptName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.regionName"),resizable:!1,prop:"regionName",align:"center",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.regionName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.repositoryName"),resizable:!1,prop:"repositoryName",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.repositoryName))])]}}])})],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"100px",float:"left","margin-top":"10px"},attrs:{type:"success"},on:{click:e.handleConfirm}},[e._v("确认添加")]),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pagenum,limit:e.getemplist.pagesize},on:{"update:page":function(t){e.$set(e.getemplist,"pagenum",t)},"update:limit":function(t){e.$set(e.getemplist,"pagesize",t)},pagination:e.gitemplist}})],1)},[],!1,null,"1a020bd1",null);l.options.__file="MyDelivery.vue";t.a=l.exports},"oh+g":function(e,t,a){var n=a("WEpk"),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},"rpF+":function(e,t,a){"use strict";var n=a("RPKf");a.n(n).a}}]);