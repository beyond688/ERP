(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7fb0"],{25:function(e,a){},26:function(e,a){},27:function(e,a){},VG0r:function(e,a,t){"use strict";t.d(a,"o",function(){return d}),t.d(a,"n",function(){return i}),t.d(a,"a",function(){return p}),t.d(a,"q",function(){return n}),t.d(a,"f",function(){return c}),t.d(a,"e",function(){return o}),t.d(a,"m",function(){return u}),t.d(a,"i",function(){return l}),t.d(a,"k",function(){return s}),t.d(a,"l",function(){return m}),t.d(a,"b",function(){return v}),t.d(a,"c",function(){return f}),t.d(a,"r",function(){return j}),t.d(a,"g",function(){return h}),t.d(a,"p",function(){return g}),t.d(a,"j",function(){return y}),t.d(a,"d",function(){return b}),t.d(a,"s",function(){return P}),t.d(a,"h",function(){return w});var r=t("t3Un");function d(e){var a=new URLSearchParams;return""!==e&&null!==e&&a.append("type",e),a.append("pagenum",1),a.append("pagesize",99999),Object(r.a)({url:"/erp/product/searchProCategory",method:"post",data:a})}function i(e){var a=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&a.append("categoryname",e.categoryname),""!==e.iseffective&&null!==e.iseffective&&a.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&a.append("type",e.type),a.append("pagenum",e.pagenum),a.append("pagesize",e.pagesize),Object(r.a)({url:"/erp/product/searchProCategory",method:"post",data:a})}function p(e){var a=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&a.append("categoryname",e.categoryname),""!==e.category&&null!==e.category&&a.append("category",e.category),""!==e.iseffective&&null!==e.iseffective&&a.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&a.append("type",e.type),Object(r.a)({url:"/erp/product/addProCategory",method:"post",data:a})}function n(e){var a=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&a.append("categoryname",e.categoryName),""!==e.isEffective&&null!==e.isEffective&&a.append("iseffective",e.isEffective),""!==e.id&&null!==e.id&&a.append("id",e.id),Object(r.a)({url:"/erp/product/updateProCategory",method:"post",data:a})}function c(e){var a=new URLSearchParams;return""!==e&&null!==e&&a.append("ids",e),Object(r.a)({url:"/erp/product/delateProCategory",method:"post",data:a})}function o(e){var a=new URLSearchParams;return""!==e.code&&null!==e.code&&void 0!==e.code&&a.append("code",e.code),""!==e.effectiveDay&&null!==e.effectiveDay&&void 0!==e.effectiveDay&&a.append("effectiveDay",e.effectiveDay),""!==e.barcode&&null!==e.barcode&&void 0!==e.barcode&&a.append("barcode",e.barcode),""!==e.productname&&null!==e.productname&&void 0!==e.productname&&a.append("productname",e.productname),""!==e.typeid&&null!==e.typeid&&void 0!==e.typeid&&a.append("typeid",e.typeid),""!==e.categoryid&&null!==e.categoryid&&void 0!==e.categoryid&&a.append("categoryid",e.categoryid),""!==e.color&&null!==e.color&&void 0!==e.color&&a.append("color",e.color),""!==e.brand&&null!==e.brand&&void 0!==e.brand&&a.append("brand",e.brand),""!==e.kpigrade&&null!==e.kpigrade&&void 0!==e.kpigrade&&a.append("kpigrade",e.kpigrade),""!==e.point&&null!==e.point&&void 0!==e.point&&a.append("point",e.point),""!==e.zhibaoqi&&null!==e.zhibaoqi&&void 0!==e.zhibaoqi&&a.append("zhibaoqi",e.zhibaoqi),""!==e.weight&&null!==e.weight&&void 0!==e.weight&&a.append("weight",e.weight),""!==e.volume&&null!==e.volume&&void 0!==e.volume&&a.append("volume",e.volume),""!==e.costprice&&null!==e.costprice&&void 0!==e.costprice&&a.append("costprice",e.costprice),""!==e.tradeprice&&null!==e.tradeprice&&void 0!==e.tradeprice&&a.append("tradeprice",e.tradeprice),""!==e.saleprice&&null!==e.saleprice&&void 0!==e.saleprice&&a.append("saleprice",e.saleprice),""!==e.purchaseprice&&null!==e.purchaseprice&&void 0!==e.purchaseprice&&a.append("purchaseprice",e.purchaseprice),""!==e.lowerprice&&null!==e.lowerprice&&void 0!==e.lowerprice&&a.append("lowerprice",e.lowerprice),""!==e.supplierid&&null!==e.supplierid&&void 0!==e.supplierid&&a.append("supplierid",e.supplierid),""!==e.createid&&null!==e.createid&&void 0!==e.createid&&a.append("createid",e.createid),""!==e.createid&&null!==e.createid&&void 0!==e.createid&&a.append("createid",e.createid),""!==e.level&&null!==e.level&&void 0!==e.level&&a.append("level",e.level),""!==e.purchasemeasurement&&null!==e.purchasemeasurement&&void 0!==e.purchasemeasurement&&a.append("purchasemeasurement",e.purchasemeasurement),""!==e.salemeasurement&&null!==e.salemeasurement&&void 0!==e.salemeasurement&&a.append("salemeasurement",e.salemeasurement),""!==e.stockmeasurement&&null!==e.stockmeasurement&&void 0!==e.stockmeasurement&&a.append("stockmeasurement",e.stockmeasurement),""!==e.producemeasurement&&null!==e.producemeasurement&&void 0!==e.producemeasurement&&a.append("producemeasurement",e.producemeasurement),""!==e.source&&null!==e.source&&void 0!==e.source&&a.append("source",e.source),""!==e.valuation&&null!==e.valuation&&void 0!==e.valuation&&a.append("valuation",e.valuation),""!==e.isactive&&null!==e.isactive&&void 0!==e.isactive&&a.append("isactive",e.isactive),""!==e.picids&&null!==e.picids&&void 0!==e.picids&&a.append("picids",e.picids),""!==e.detailpicid&&null!==e.detailpicid&&void 0!==e.detailpicid&&a.append("detailpicid",e.detailpicid),""!==e.memberprice&&null!==e.memberprice&&void 0!==e.memberprice&&a.append("memberprice",e.memberprice),""!==e.isBatch&&null!==e.isBatch&&void 0!==e.isBatch&&a.append("isBatch",e.isBatch),Object(r.a)({url:"/erp/product/createnewproduct",method:"post",data:a})}function u(e){var a=new URLSearchParams;return""!==e.productid&&null!==e.productid&&void 0!==e.productid&&a.append("productid",e.productid),""!==e.code&&null!==e.code&&void 0!==e.code&&a.append("code",e.code),""!==e.productname&&null!==e.productname&&void 0!==e.productname&&a.append("productname",e.productname),""!==e.categoryid&&null!==e.categoryid&&void 0!==e.categoryid&&a.append("categoryid",e.categoryid),""!==e.typeid&&null!==e.typeid&&void 0!==e.typeid&&a.append("typeid",e.typeid),""!==e.isactive&&null!==e.isactive&&void 0!==e.isactive&&a.append("isactive",e.isactive),""!==e.supplierid&&null!==e.supplierid&&void 0!==e.supplierid&&a.append("supplierid",e.supplierid),a.append("pagenum",e.pagenum),a.append("pagesize",e.pagesize),Object(r.a)({url:"/erp/product/productlist",method:"post",data:a})}function l(e){var a=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&a.append("productids",e),Object(r.a)({url:"/erp/product/deleteproduct",method:"post",data:a})}function s(e){var a=new URLSearchParams;return""!==e.effectiveDay&&null!==e.effectiveDay&&void 0!==e.effectiveDay&&a.append("effectiveDay",e.effectiveDay),""!==e.id&&null!==e.id&&void 0!==e.id&&a.append("productid",e.id),""!==e.kpiGrade&&null!==e.kpiGrade&&void 0!==e.kpiGrade&&a.append("kpigrade",e.kpiGrade),""!==e.point&&null!==e.point&&void 0!==e.point&&a.append("point",e.point),""!==e.zhiBaoQi&&null!==e.zhiBaoQi&&void 0!==e.zhiBaoQi&&a.append("zhibaoqi",e.zhiBaoQi),""!==e.weight&&null!==e.weight&&void 0!==e.weight&&a.append("weight",e.weight),""!==e.volume&&null!==e.volume&&void 0!==e.volume&&a.append("volume",e.volume),""!==e.costPrice&&null!==e.costPrice&&void 0!==e.costPrice&&a.append("costprice",e.costPrice),""!==e.tradePrice&&null!==e.tradePrice&&void 0!==e.tradePrice&&a.append("tradeprice",e.tradePrice),""!==e.salePrice&&null!==e.salePrice&&void 0!==e.salePrice&&a.append("saleprice",e.salePrice),""!==e.purchasePrice&&null!==e.purchasePrice&&void 0!==e.purchasePrice&&a.append("purchaseprice",e.purchasePrice),""!==e.lowerPrice&&null!==e.lowerPrice&&void 0!==e.lowerPrice&&a.append("lowerprice",e.lowerPrice),""!==e.supplierid&&null!==e.supplierid&&void 0!==e.supplierid&&a.append("supplierid",e.supplierid),""!==e.level&&null!==e.level&&void 0!==e.level&&a.append("level",e.level),""!==e.purchaseMeasurement&&null!==e.purchaseMeasurement&&void 0!==e.purchaseMeasurement&&a.append("purchasemeasurement",e.purchaseMeasurement),""!==e.saleMeasurement&&null!==e.saleMeasurement&&void 0!==e.saleMeasurement&&a.append("salemeasurement",e.saleMeasurement),""!==e.stockMeasurement&&null!==e.stockMeasurement&&void 0!==e.stockMeasurement&&a.append("stockmeasurement",e.stockMeasurement),""!==e.produceMeasurement&&null!==e.produceMeasurement&&void 0!==e.produceMeasurement&&a.append("producemeasurement",e.produceMeasurement),""!==e.source&&null!==e.source&&void 0!==e.source&&a.append("source",e.source),""!==e.valuation&&null!==e.valuation&&void 0!==e.valuation&&a.append("valuation",e.valuation),""!==e.isActive&&null!==e.isActive&&void 0!==e.isActive&&a.append("isactive",e.isActive),""!==e.picids&&null!==e.picids&&void 0!==e.picids&&a.append("picids",e.picids),""!==e.detailpicid&&null!==e.detailpicid&&void 0!==e.detailpicid&&a.append("detailpicid",e.detailpicid),""!==e.memberPrice&&null!==e.memberPrice&&void 0!==e.memberPrice&&a.append("memberprice",e.memberPrice),""!==e.effectiveDay&&null!==e.effectiveDay&&void 0!==e.effectiveDay&&a.append("effectiveDay",e.effectiveDay),Object(r.a)({url:"/erp/product/editproduct",method:"post",data:a})}function m(e){var a=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&a.append("productJson",e),Object(r.a)({url:"/erp/product/manyinsert",method:"post",data:a})}function v(e){var a=new URLSearchParams;return""!==e.title&&null!==e.title&&void 0!==e.title&&a.append("title",e.title),""!==e.productname&&null!==e.productname&&void 0!==e.productname&&a.append("productname",e.productname),""!==e.productcode&&null!==e.productcode&&void 0!==e.productcode&&a.append("productcode",e.productcode),""!==e.costprice&&null!==e.costprice&&void 0!==e.costprice&&a.append("costprice",e.costprice),""!==e.tradeprice&&null!==e.tradeprice&&void 0!==e.tradeprice&&a.append("tradeprice",e.tradeprice),""!==e.saleprice&&null!==e.saleprice&&void 0!==e.saleprice&&a.append("saleprice",e.saleprice),""!==e.memberprice&&null!==e.memberprice&&void 0!==e.memberprice&&a.append("memberprice",e.memberprice),""!==e.lowerprice&&null!==e.lowerprice&&void 0!==e.lowerprice&&a.append("lowerprice",e.lowerprice),""!==e.adjustcostprice&&null!==e.adjustcostprice&&void 0!==e.adjustcostprice&&a.append("adjustcostprice",e.adjustcostprice),""!==e.adjusttradeprice&&null!==e.adjusttradeprice&&void 0!==e.adjusttradeprice&&a.append("adjusttradeprice",e.adjusttradeprice),""!==e.adjustsaleprice&&null!==e.adjustsaleprice&&void 0!==e.adjustsaleprice&&a.append("adjustsaleprice",e.adjustsaleprice),""!==e.adjustmemberprice&&null!==e.adjustmemberprice&&void 0!==e.adjustmemberprice&&a.append("adjustmemberprice",e.adjustmemberprice),""!==e.adjustlowerprice&&null!==e.adjustlowerprice&&void 0!==e.adjustlowerprice&&a.append("adjustlowerprice",e.adjustlowerprice),""!==e.adjustpersonid&&null!==e.adjustpersonid&&void 0!==e.adjustpersonid&&a.append("adjustpersonid",e.adjustpersonid),""!==e.adjustreason&&null!==e.adjustreason&&void 0!==e.adjustreason&&a.append("adjustreason",e.adjustreason),Object(r.a)({url:"/erp/adjustprice/addadjustprice",method:"post",data:a})}function f(e){var a=new URLSearchParams;return""!==e.adjustid&&null!==e.adjustid&&void 0!==e.adjustid&&a.append("adjustid",e.adjustid),""!==e.adjustnumber&&null!==e.adjustnumber&&void 0!==e.adjustnumber&&a.append("adjustnumber",e.adjustnumber),""!==e.productcode&&null!==e.productcode&&void 0!==e.productcode&&a.append("productcode",e.productcode),""!==e.productname&&null!==e.productname&&void 0!==e.productname&&a.append("productname",e.productname),a.append("pagenum",e.pagenum),a.append("pagesize",e.pagesize),Object(r.a)({url:"/erp/adjustprice/adjustpricelist",method:"post",data:a})}function j(e){var a=new URLSearchParams;return""!==e.title&&null!==e.title&&void 0!==e.title&&a.append("title",e.title),""!==e.adjustCostPrice&&null!==e.adjustCostPrice&&void 0!==e.adjustCostPrice&&a.append("adjustcostprice",e.adjustCostPrice),""!==e.id&&null!==e.id&&void 0!==e.id&&a.append("adjustid",e.id),""!==e.adjustTradePrice&&null!==e.adjustTradePrice&&void 0!==e.adjustTradePrice&&a.append("adjusttradeprice",e.adjustTradePrice),""!==e.adjustSalePrice&&null!==e.adjustSalePrice&&void 0!==e.adjustSalePrice&&a.append("adjustsaleprice",e.adjustSalePrice),""!==e.adjustMemberPrice&&null!==e.adjustMemberPrice&&void 0!==e.adjustMemberPrice&&a.append("adjustmemberprice",e.adjustMemberPrice),""!==e.adjustLowerPrice&&null!==e.adjustLowerPrice&&void 0!==e.adjustLowerPrice&&a.append("adjustlowerprice",e.adjustLowerPrice),""!==e.adjustpersonid&&null!==e.adjustpersonid&&void 0!==e.adjustpersonid&&a.append("adjustpersonid",e.adjustpersonid),""!==e.adjustReason&&null!==e.adjustReason&&void 0!==e.adjustReason&&a.append("adjustreason",e.adjustReason),""!==e.stat&&null!==e.stat&&void 0!==e.stat&&a.append("stat",e.stat),""!==e.judgePersonId&&null!==e.judgePersonId&&void 0!==e.judgePersonId&&a.append("judgepersonid",e.judgePersonId),Object(r.a)({url:"/erp/adjustprice/updateadjustprice",method:"post",data:a})}function h(e){var a=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&a.append("adjustids",e),Object(r.a)({url:"/erp/adjustprice/deleteadjustprice",method:"post",data:a})}function g(){var e=new URLSearchParams;return e.append("pagenum",1),e.append("pagesize",9998),Object(r.a)({url:"/erp/measurement/search",method:"post",data:e})}function y(){return Object(r.a)({url:"/erp/productclassfy/detaillist",method:"post"})}function b(e){var a=new URLSearchParams;return""!==e.name&&null!==e.name&&void 0!==e.name&&a.append("name",e.name),""!==e.levle&&null!==e.levle&&void 0!==e.levle&&a.append("levle",e.levle),""!==e.parentId&&null!==e.parentId&&void 0!==e.parentId&&a.append("parentId",e.parentId),""!==e.createId&&null!==e.createId&&void 0!==e.createId&&a.append("createId",e.createId),""!==e.isActive&&null!==e.isActive&&void 0!==e.isActive&&a.append("isActive",e.isActive),Object(r.a)({url:"/erp/productclassfy/create",method:"post",data:a})}function P(e){var a=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&void 0!==e.categoryName&&a.append("name",e.categoryName),""!==e.id&&null!==e.id&&void 0!==e.id&&a.append("id",e.id),""!==e.isActive&&null!==e.isActive&&void 0!==e.isActive&&a.append("isActive",e.isActive),Object(r.a)({url:"/erp/productclassfy/update",method:"post",data:a})}function w(e){var a=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&a.append("id",e),Object(r.a)({url:"/erp/productclassfy/delete",method:"post",data:a})}},"gDS+":function(e,a,t){e.exports={default:t("oh+g"),__esModule:!0}},"oh+g":function(e,a,t){var r=t("WEpk"),d=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return d.stringify.apply(d,arguments)}},rtvS:function(e,a,t){"use strict";var r=t("t/qI");t.n(r).a},"t/qI":function(e,a,t){},yH3Q:function(e,a,t){"use strict";t.r(a);var r=t("gDS+"),d=t.n(r),i=t("N5aa"),p=t("VG0r"),n={name:"ManyProduct",components:{UploadExcelComponent:i.a},data:function(){return{tableData:[],tableHeader:[],uploadHead:[]}},methods:{beforeUpload:function(e){return e.size/1024/1024<1||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var a=e.results,t=e.header;this.tableData=a,this.tableHeader=["物料编码","产品名称","物品分类","规格型号","颜色","绩效分","商品积分","成本价","采购价","创建者","创建时间"],this.uploadHead=a.map(function(e){return{code:e.物料编码,productName:e.产品名称,category:e.物品分类,productType:e.规格型号,color:e.颜色,kpiGrade:e.绩效分,point:e.商品积分,costPrice:e.成本价,purchasePrice:e.采购价,createId:e.创建者,createTime:e.创建时间}}),console.log(t)},uploads:function(){var e=this;Object(p.l)(d()(this.uploadHead)).then(function(a){200===a.data.ret?e.$notify({title:"成功",message:"修改成功",type:"success",offset:100}):e.$notify.error({title:"错误",message:a.data.msg,offset:100})})}}},c=(t("rtvS"),t("KHd+")),o=Object(c.a)(n,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("下载模板  ")])]),e._v(" "),t("a",{attrs:{href:"/static/file/物品资料表.xlsx"}},[t("el-button",{attrs:{type:"primary"}},[e._v("下载模板")])],1)]),e._v(" "),t("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("上传Excel表格")])]),e._v(" "),t("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}})],1),e._v(" "),t("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("表格数据")]),e._v(" "),t("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"primary"},on:{click:e.uploads}},[e._v("导入数据")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,function(e){return t("el-table-column",{key:e,attrs:{prop:e,label:e}})}))],1)],1)},[],!1,null,"eab36ec8",null);o.options.__file="ManyProduct.vue";a.default=o.exports}}]);