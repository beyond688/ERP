(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ec6"],{25:function(e,n){},26:function(e,n){},27:function(e,n){},BJvg:function(e,n,t){"use strict";t.d(n,"j",function(){return d}),t.d(n,"e",function(){return r}),t.d(n,"a",function(){return i}),t.d(n,"l",function(){return o}),t.d(n,"h",function(){return p}),t.d(n,"c",function(){return l}),t.d(n,"d",function(){return u}),t.d(n,"n",function(){return c}),t.d(n,"g",function(){return s}),t.d(n,"k",function(){return m}),t.d(n,"b",function(){return v}),t.d(n,"m",function(){return y}),t.d(n,"f",function(){return f}),t.d(n,"i",function(){return h});var a=t("t3Un");function d(e){var n=new URLSearchParams;return""!==e&&null!==e&&n.append("type",e),n.append("pagenum",1),n.append("pagesize",9999),Object(a.a)({url:"/erp/customer/searchCusCategory",method:"post",data:n})}function r(e){var n=new URLSearchParams;return""!==e.customername&&null!==e.customername&&void 0!==e.customername&&n.append("customername",e.customername),""!==e.level&&null!==e.level&&void 0!==e.level&&n.append("level",e.level),""!==e.createtime&&null!==e.createtime&&void 0!==e.createtime&&n.append("createtime",e.createtime),""!==e.type&&null!==e.type&&void 0!==e.type&&n.append("type",e.type),""!==e.repositoryid&&null!==e.repositoryid&&void 0!==e.repositoryid&&n.append("repositoryid",e.repositoryid),""!==e.source&&null!==e.source&&void 0!==e.source&&n.append("source",e.source),""!==e.customerphone&&null!==e.customerphone&&void 0!==e.customerphone&&n.append("customerphone",e.customerphone),n.append("pagenum",e.pagenum),n.append("pagesize",e.pagesize),Object(a.a)({url:"/erp/customer/customerlist",method:"post",data:n})}function i(e){var n=new URLSearchParams;return""!==e.firstname&&null!==e.firstname&&void 0!==e.firstname&&n.append("firstname",e.firstname),""!==e.middlename&&null!==e.middlename&&void 0!==e.middlename&&n.append("middlename",e.middlename),""!==e.lastname&&null!==e.lastname&&void 0!==e.lastname&&n.append("lastname",e.lastname),""!==e.email&&null!==e.email&&void 0!==e.email&&n.append("email",e.email),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&n.append("phone",e.phone),""!==e.gender&&null!==e.gender&&void 0!==e.gender&&n.append("gender",e.gender),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&n.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&n.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&n.append("cityid",e.cityid),""!==e.level&&null!==e.level&&void 0!==e.level&&n.append("level",e.level),""!==e.address&&null!==e.address&&void 0!==e.address&&n.append("address",e.address),""!==e.repositoryid&&null!==e.repositoryid&&void 0!==e.repositoryid&&n.append("repositoryid",e.repositoryid),""!==e.birthday&&null!==e.birthday&&void 0!==e.birthday&&n.append("birthday",e.birthday),""!==e.source&&null!==e.source&&void 0!==e.source&&n.append("source",e.source),""!==e.newold&&null!==e.newold&&void 0!==e.newold&&n.append("newold",e.newold),""!==e.customertype&&null!==e.customertype&&void 0!==e.customertype&&n.append("customertype",e.customertype),Object(a.a)({url:"/erp/customer/addCustomer",method:"post",data:n})}function o(e){var n=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&n.append("customerid",e.id),""!==e.firstName&&null!==e.firstName&&void 0!==e.firstName&&n.append("firstname",e.firstName),""!==e.middleName&&null!==e.middleName&&void 0!==e.middleName&&n.append("middlename",e.middleName),""!==e.lastName&&null!==e.lastName&&void 0!==e.lastName&&n.append("lastname",e.lastName),""!==e.phoneNumber&&null!==e.phoneNumber&&void 0!==e.phoneNumber&&n.append("phone",e.phoneNumber),""!==e.gender&&null!==e.gender&&void 0!==e.gender&&n.append("gender",e.gender),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&n.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&n.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&n.append("cityid",e.cityid),""!==e.level&&null!==e.level&&void 0!==e.level&&n.append("level",e.level),""!==e.address&&null!==e.address&&void 0!==e.address&&n.append("address",e.address),""!==e.repositoryid&&null!==e.repositoryid&&void 0!==e.repositoryid&&n.append("repositoryid",e.repositoryid),""!==e.birthday&&null!==e.birthday&&void 0!==e.birthday&&n.append("birthday",e.birthday),""!==e.source&&null!==e.source&&void 0!==e.source&&n.append("source",e.source),""!==e.newOrOld&&null!==e.newOrOld&&void 0!==e.newOrOld&&n.append("newold",e.newOrOld),""!==e.customerType&&null!==e.customerType&&void 0!==e.customerType&&n.append("customertype",e.customerType),Object(a.a)({url:"/erp/customer/updateCustomer",method:"post",data:n})}function p(e){var n=new URLSearchParams;return""!==e&&null!==e&&n.append("customerids",e),Object(a.a)({url:"/erp/customer/deletecustomer",method:"post",data:n})}function l(e){var n=new URLSearchParams;return""!==e.agentname&&null!==e.agentname&&void 0!==e.agentname&&n.append("agentname",e.agentname),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&n.append("phone",e.phone),""!==e.type&&null!==e.type&&void 0!==e.type&&n.append("type",e.type),""!==e.pinyin&&null!==e.pinyin&&void 0!==e.pinyin&&n.append("pinyin",e.pinyin),""!==e.level&&null!==e.level&&void 0!==e.level&&n.append("level",e.level),""!==e.source&&null!==e.source&&void 0!==e.source&&n.append("source",e.source),""!==e.discount&&null!==e.discount&&void 0!==e.discount&&n.append("discount",e.discount),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&n.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&n.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&n.append("cityid",e.cityid),""!==e.introduce&&null!==e.introduce&&void 0!==e.introduce&&n.append("introduce",e.introduce),""!==e.address&&null!==e.address&&void 0!==e.address&&n.append("address",e.address),""!==e.contactname&&null!==e.contactname&&void 0!==e.contactname&&n.append("contactname",e.contactname),""!==e.traderid&&null!==e.traderid&&void 0!==e.traderid&&n.append("traderid",e.traderid),""!==e.transmode&&null!==e.transmode&&void 0!==e.transmode&&n.append("transmode",e.transmode),""!==e.deliverymode&&null!==e.deliverymode&&void 0!==e.deliverymode&&n.append("deliverymode",e.deliverymode),""!==e.createid&&null!==e.createid&&void 0!==e.createid&&n.append("createid",e.createid),""!==e.newold&&null!==e.newold&&void 0!==e.newold&&n.append("newold",e.newold),Object(a.a)({url:"/erp/agent/addagent",method:"post",data:n})}function u(e){var n=new URLSearchParams;return""!==e.agentname&&null!==e.agentname&&void 0!==e.agentname&&n.append("agentname",e.agentname),""!==e.level&&null!==e.level&&void 0!==e.level&&n.append("level",e.level),""!==e.createtime&&null!==e.createtime&&void 0!==e.createtime&&n.append("createtime",e.createtime),""!==e.type&&null!==e.type&&void 0!==e.type&&n.append("type",e.type),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&n.append("phone",e.phone),""!==e.source&&null!==e.source&&void 0!==e.source&&n.append("source",e.source),""!==e.pinyin&&null!==e.pinyin&&void 0!==e.pinyin&&n.append("pinyin",e.pinyin),""!==e.contactname&&null!==e.contactname&&void 0!==e.contactname&&n.append("contactname",e.contactname),n.append("pagenum",e.pagenum),n.append("pagesize",e.pagesize),Object(a.a)({url:"/erp/agent/agentlist",method:"post",data:n})}function c(e){var n=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&n.append("agentid",e.id),""!==e.agentName&&null!==e.agentName&&void 0!==e.agentName&&n.append("agentname",e.agentName),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&n.append("phone",e.phone),""!==e.type&&null!==e.type&&void 0!==e.type&&n.append("type",e.type),""!==e.pinyin&&null!==e.pinyin&&void 0!==e.pinyin&&n.append("pinyin",e.pinyin),""!==e.level&&null!==e.level&&void 0!==e.level&&n.append("level",e.level),""!==e.source&&null!==e.source&&void 0!==e.source&&n.append("source",e.source),""!==e.discount&&null!==e.discount&&void 0!==e.discount&&n.append("discount",e.discount),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&n.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&n.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&n.append("cityid",e.cityid),""!==e.introduce&&null!==e.introduce&&void 0!==e.introduce&&n.append("introduce",e.introduce),""!==e.address&&null!==e.address&&void 0!==e.address&&n.append("address",e.address),""!==e.contactName&&null!==e.contactName&&void 0!==e.contactName&&n.append("contactname",e.contactName),""!==e.traderid&&null!==e.traderid&&void 0!==e.traderid&&n.append("traderid",e.traderid),""!==e.transMode&&null!==e.transMode&&void 0!==e.transMode&&n.append("transmode",e.transMode),""!==e.deliveryMode&&null!==e.deliveryMode&&void 0!==e.deliveryMode&&n.append("deliverymode",e.deliveryMode),""!==e.deliveryMode&&null!==e.deliveryMode&&void 0!==e.deliveryMode&&n.append("deliverymode",e.deliveryMode),Object(a.a)({url:"/erp/agent/updateagent",method:"post",data:n})}function s(e){var n=new URLSearchParams;return""!==e&&null!==e&&n.append("ids",e),Object(a.a)({url:"/erp/agent/deleteagent",method:"post",data:n})}function m(e){var n=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&n.append("categoryname",e.categoryname),""!==e.iseffective&&null!==e.iseffective&&n.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&n.append("type",e.type),n.append("pagenum",e.pagenum),n.append("pagesize",e.pagesize),Object(a.a)({url:"/erp/customer/searchCusCategory",method:"post",data:n})}function v(e){var n=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&n.append("categoryname",e.categoryname),n.append("category",void 0),""!==e.iseffective&&null!==e.iseffective&&n.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&n.append("type",e.type),Object(a.a)({url:"/erp/customer/addCusCategory",method:"post",data:n})}function y(e){var n=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&n.append("categoryname",e.categoryName),""!==e.isEffective&&null!==e.isEffective&&n.append("iseffective",e.isEffective),""!==e.id&&null!==e.id&&n.append("id",e.id),Object(a.a)({url:"/erp/customer/updateCusCategory",method:"post",data:n})}function f(e){var n=new URLSearchParams;return""!==e&&null!==e&&n.append("ids",e),Object(a.a)({url:"/erp/customer/delateCusCategory",method:"post",data:n})}function h(e){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("customerJson",e),Object(a.a)({url:"/erp/customer/manyinsert",method:"post",data:n})}},axDa:function(e,n,t){"use strict";t.r(n);var a=t("gDS+"),d=t.n(a),r=t("N5aa"),i=t("BJvg"),o={name:"ManyCustomer",components:{UploadExcelComponent:r.a},data:function(){return{tableData:[],tableHeader:[],uploadHead:[]}},methods:{beforeUpload:function(e){return e.size/1024/1024<1||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var n=e.results,t=e.header;this.tableData=n,this.tableHeader=["编号","客户姓名","客户类型","客户优质级别","生日","客户来源","新老客户","客户电话","性别","详细地址","积分"],this.uploadHead=n.map(function(e){return{id:e.编号,customerName:e.客户姓名,customerTypeWZ:e.客户类型,customerLevel:e.客户优质级别,birthday:e.生日,source:e.客户来源,newOrOld:e.新老客户,phoneNumber:e.客户电话,gender:e.性别,address:e.详细地址,point:e.积分}}),console.log(t)},uploads:function(){var e=this;Object(i.i)(d()(this.uploadHead)).then(function(n){200===n.data.ret?e.$notify({title:"成功",message:"修改成功",type:"success",offset:100}):e.$notify.error({title:"错误",message:n.data.msg,offset:100})})}}},p=(t("yQ3/"),t("KHd+")),l=Object(p.a)(o,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-container"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("下载模板  ")])]),e._v(" "),t("a",{attrs:{href:"/static/file/客户资料表.xlsx"}},[t("el-button",{attrs:{type:"primary"}},[e._v("下载模板")])],1)]),e._v(" "),t("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("上传Excel表格")])]),e._v(" "),t("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}})],1),e._v(" "),t("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("表格数据")]),e._v(" "),t("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"primary"},on:{click:e.uploads}},[e._v("导入数据")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,function(e){return t("el-table-column",{key:e,attrs:{prop:e,label:e}})}))],1)],1)},[],!1,null,"4e1e78f8",null);l.options.__file="ManyCustomer.vue";n.default=l.exports},"gDS+":function(e,n,t){e.exports={default:t("oh+g"),__esModule:!0}},iWmu:function(e,n,t){},"oh+g":function(e,n,t){var a=t("WEpk"),d=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return d.stringify.apply(d,arguments)}},"yQ3/":function(e,n,t){"use strict";var a=t("iWmu");t.n(a).a}}]);