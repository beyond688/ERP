import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

// /* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    meta: {
      type: 0
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'dashboard',
        meta: { title: 'nwow', icon: 'shouye', noCache: true, affix: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/EmployeeInformation',
    component: Layout,
    redirect: 'noredirect',
    name: 'EmployeeInformation',
    alwaysShow: true,
    meta: {
      title: 'EmployeeInformation',
      icon: 'ziliao',
      type: 1
    },
    children: [
      {
        path: 'NewEmployeeInformation',
        component: () => import('@/views/EmployeeInformation/NewEmployeeInformation'),
        name: 'NewEmployeeInformation',
        meta: { title: 'NewEmployeeInformation', noCache: false }
      },
      {
        path: 'EmployeeInformationList',
        component: () => import('@/views/EmployeeInformation/EmployeeInformationList'),
        name: 'EmployeeInformationList',
        meta: { title: 'EmployeeInformationList', noCache: true }
      },
      {
        path: 'EmployeeContract',
        component: () => import('@/views/EmployeeInformation/EmployeeContract'),
        name: 'EmployeeContract',
        meta: { title: 'EmployeeContract', noCache: true }
      },
      {
        path: 'NewEmployeeContract',
        component: () => import('@/views/EmployeeInformation/NewEmployeeContract'),
        name: 'NewEmployeeContract',
        meta: { title: 'NewEmployeeContract', noCache: true }
      },
      {
        path: 'EmpCategory',
        component: () => import('@/views/EmployeeInformation/EmpCategory'),
        name: 'EmpCategory',
        meta: { title: 'EmpCategory', noCache: true }
      }
    ]
  },
  {
    path: '/Repository',
    component: Layout,
    redirect: 'noredirect',
    name: 'Repository',
    alwaysShow: true,
    meta: {
      title: 'Repository',
      icon: 'cangku',
      type: 1
    },
    children: [
      {
        path: 'NewRepository',
        component: () => import('@/views/Repository/NewRepository'),
        name: 'NewRepository',
        meta: { title: 'NewRepository', noCache: false }
      },
      {
        path: 'RepositoryList',
        component: () => import('@/views/Repository/RepositoryList'),
        name: 'RepositoryList',
        meta: { title: 'RepositoryList', noCache: true }
      },
      {
        path: 'RepCategory',
        component: () => import('@/views/Repository/RepCategory'),
        name: 'RepCategory',
        meta: { title: 'RepCategory', noCache: true }
      },
      {
        path: 'Manyinsert',
        component: () => import('@/views/Repository/Manyinsert'),
        name: 'Manyinsert',
        meta: { title: 'Manyinsert', noCache: true }
      }
    ]
  },
  {
    path: '/Customer',
    component: Layout,
    redirect: 'noredirect',
    name: 'Customer',
    alwaysShow: true,
    meta: {
      title: 'Customer',
      icon: 'kehu',
      type: 1
    },
    children: [
      {
        path: 'NewCustomer',
        component: () => import('@/views/Customer/NewCustomer'),
        name: 'NewCustomer',
        meta: { title: 'NewCustomer', noCache: false }
      },
      {
        path: 'CustomerList',
        component: () => import('@/views/Customer/CustomerList'),
        name: 'CustomerList',
        meta: { title: 'CustomerList', noCache: true }
      },
      {
        path: 'ManyCustomer',
        component: () => import('@/views/Customer/ManyCustomer'),
        name: 'ManyCustomer',
        meta: { title: 'ManyCustomer', noCache: true }
      },
      {
        path: 'NewAgent',
        component: () => import('@/views/Customer/NewAgent'),
        name: 'NewAgent',
        meta: { title: 'NewAgent', noCache: false }
      },
      {
        path: 'AgentList',
        component: () => import('@/views/Customer/AgentList'),
        name: 'AgentList',
        meta: { title: 'AgentList', noCache: true }
      },
      {
        path: 'CustomerCategory',
        component: () => import('@/views/Customer/CustomerCategory'),
        name: 'CustomerCategory',
        meta: { title: 'CustomerCategory', noCache: true }
      }
    ]
  },
  {
    path: '/Supplier',
    component: Layout,
    redirect: 'noredirect',
    name: 'Supplier',
    alwaysShow: true,
    meta: {
      title: 'Supplier',
      icon: 'gongyinshang',
      type: 1
    },
    children: [
      {
        path: 'NewSupplier',
        component: () => import('@/views/Supplier/NewSupplier'),
        name: 'NewSupplier',
        meta: { title: 'NewSupplier', noCache: false }
      },
      {
        path: 'SupplierList',
        component: () => import('@/views/Supplier/SupplierList'),
        name: 'SupplierList',
        meta: { title: 'SupplierList', noCache: true }
      },
      {
        path: 'SupplierCategory',
        component: () => import('@/views/Supplier/SupplierCategory'),
        name: 'SupplierCategory',
        meta: { title: 'SupplierCategory', noCache: true }
      },
      {
        path: 'ManySupplier',
        component: () => import('@/views/Supplier/ManySupplier'),
        name: 'ManySupplier',
        meta: { title: 'ManySupplier', noCache: true }
      }
    ]
  },
  {
    path: '/Product',
    component: Layout,
    redirect: 'noredirect',
    name: 'Product',
    alwaysShow: true,
    meta: {
      title: 'Product',
      icon: 'wupin',
      type: 1
    },
    children: [
      {
        path: 'NewProduct',
        component: () => import('@/views/Product/NewProduct'),
        name: 'NewProduct',
        meta: { title: 'NewProduct', noCache: false }
      },
      {
        path: 'ProductList',
        component: () => import('@/views/Product/ProductList'),
        name: 'ProductList',
        meta: { title: 'ProductList', noCache: true }
      },
      {
        path: 'Newadjustprice',
        component: () => import('@/views/Product/Newadjustprice'),
        name: 'Newadjustprice',
        meta: { title: 'Newadjustprice', noCache: false }
      },
      {
        path: 'AdjustpriceList',
        component: () => import('@/views/Product/AdjustpriceList'),
        name: 'AdjustpriceList',
        meta: { title: 'AdjustpriceList', noCache: true }
      },
      {
        path: 'ProductCategory',
        component: () => import('@/views/Product/ProductCategory'),
        name: 'ProductCategory',
        meta: { title: 'ProductCategory', noCache: true }
      },
      {
        path: 'ManyProduct',
        component: () => import('@/views/Product/ManyProduct'),
        name: 'ManyProduct',
        meta: { title: 'ManyProduct', noCache: true }
      },
      {
        path: 'detaillist',
        component: () => import('@/views/Product/detaillist'),
        name: 'detaillist',
        meta: { title: 'detaillist', noCache: true }
      }
    ]
  },
  {
    path: '/LogisticsCar',
    component: Layout,
    redirect: 'noredirect',
    name: 'LogisticsCar',
    alwaysShow: true,
    meta: {
      title: 'LogisticsCar',
      icon: 'wuliu',
      type: 1
    },
    children: [
      {
        path: 'AddLogisticsCar',
        component: () => import('@/views/LogisticsCar/AddLogisticsCar'),
        name: 'AddLogisticsCar',
        meta: { title: 'AddLogisticsCar', noCache: false }
      },
      {
        path: 'LogisticsCarlist',
        component: () => import('@/views/LogisticsCar/LogisticsCarlist'),
        name: 'LogisticsCarlist',
        meta: { title: 'LogisticsCarlist', noCache: true }
      },
      {
        path: 'Addsendcar',
        component: () => import('@/views/LogisticsCar/Addsendcar'),
        name: 'Addsendcar',
        meta: { title: 'Addsendcar', noCache: false }
      },
      {
        path: 'SendcarList',
        component: () => import('@/views/LogisticsCar/SendcarList'),
        name: 'SendcarList',
        meta: { title: 'SendcarList', noCache: true }
      },
      {
        path: 'Addreturncar',
        component: () => import('@/views/LogisticsCar/Addreturncar'),
        name: 'Addreturncar',
        meta: { title: 'Addreturncar', noCache: false }
      },
      {
        path: 'ReturncarList',
        component: () => import('@/views/LogisticsCar/ReturncarList'),
        name: 'ReturncarList',
        meta: { title: 'ReturncarList', noCache: true }
      }
    ]
  },
  {
    path: '/BasicSettings',
    component: Layout,
    redirect: 'noredirect',
    name: 'BasicSettings',
    alwaysShow: true,
    meta: {
      title: 'BasicSettings',
      icon: 'shezhi',
      type: 1
    },
    children: [
      {
        path: 'Dept',
        component: () => import('@/views/BasicSettings/Dept'),
        name: 'Dept',
        meta: { title: 'Dept', noCache: true }
      },
      {
        path: 'NumberingRules',
        component: () => import('@/views/BasicSettings/NumberingRules'),
        name: 'NumberingRules',
        meta: { title: 'NumberingRules', noCache: true }
      },
      {
        path: 'SMSModelList',
        component: () => import('@/views/BasicSettings/SMSModelList'),
        name: 'SMSModelList',
        meta: { title: 'SMSModelList', noCache: true }
      },
      {
        path: 'Measurement',
        component: () => import('@/views/BasicSettings/Measurement'),
        name: 'Measurement',
        meta: { title: 'Measurement', noCache: true }
      },
      {
        path: 'Commission',
        component: () => import('@/views/BasicSettings/Commission'),
        name: 'Commission',
        meta: { title: 'Commission', noCache: true }
      },
      {
        path: 'Parameter',
        component: () => import('@/views/BasicSettings/Parameter'),
        name: 'Parameter',
        meta: { title: 'Parameter', noCache: true }
      },
      {
        path: 'NewApprovalProcess',
        component: () => import('@/views/BasicSettings/NewApprovalProcess'),
        name: 'NewApprovalProcess',
        meta: { title: 'NewApprovalProcess', noCache: false }
      },
      {
        path: 'ApprovalProcess',
        component: () => import('@/views/BasicSettings/ApprovalProcess'),
        name: 'ApprovalProcess',
        meta: { title: 'ApprovalProcess', noCache: true }
      },
      {
        path: 'BatchRules',
        component: () => import('@/views/BasicSettings/BatchRules'),
        name: 'BatchRules',
        meta: { title: 'BatchRules', noCache: true }
      },
      {
        path: 'Regional',
        component: () => import('@/views/BasicSettings/Regional'),
        name: 'Regional',
        meta: { title: 'Regional', noCache: true }
      }
    ]
  },
  // 库存管理
  {
    path: '/Stockenter',
    component: Layout,
    redirect: 'noredirect',
    name: 'Stockenter',
    alwaysShow: true,
    meta: {
      title: 'Stockenter',
      icon: 'chuku',
      type: 4
    },
    children: [
      {
        path: 'addstockenter',
        component: () => import('@/views/Stockenter/addstockenter'),
        name: 'addstockenter',
        meta: { title: 'addstockenter', noCache: false }
      },
      {
        path: 'Stockenterlist',
        component: () => import('@/views/Stockenter/Stockenterlist'),
        name: 'Stockenterlist',
        meta: { title: 'Stockenterlist', noCache: true }
      },
      {
        path: 'ProduceEnter',
        component: () => import('@/views/Stockenter/ProduceEnter'),
        name: 'ProduceEnter',
        meta: { title: 'ProduceEnter', noCache: false }
      },
      {
        path: 'ProduceEnterList',
        component: () => import('@/views/Stockenter/ProduceEnterList'),
        name: 'ProduceEnterList',
        meta: { title: 'ProduceEnterList', noCache: true }
      },
      {
        path: 'AddOtherenter',
        component: () => import('@/views/Stockenter/AddOtherenter'),
        name: 'AddOtherenter',
        meta: { title: 'AddOtherenter', noCache: false }
      },
      {
        path: 'OtherEnterList',
        component: () => import('@/views/Stockenter/OtherEnterList'),
        name: 'OtherEnterList',
        meta: { title: 'OtherEnterList', noCache: true }
      }
    ]
  },
  {
    path: '/StockOut',
    component: Layout,
    redirect: 'noredirect',
    name: 'StockOut',
    alwaysShow: true,
    meta: {
      title: 'StockOut',
      icon: 'ck',
      type: 4
    },
    children: [
      {
        path: 'AddOtherStockOut',
        component: () => import('@/views/StockOut/AddOtherStockOut'),
        name: 'AddOtherStockOut',
        meta: { title: 'AddOtherStockOut', noCache: false }
      },
      {
        path: 'OtherStockOutList',
        component: () => import('@/views/StockOut/OtherStockOutList'),
        name: 'OtherStockOutList',
        meta: { title: 'OtherStockOutList', noCache: false }
      }
    ]
  },
  {
    path: '/Storagemove',
    component: Layout,
    redirect: 'noredirect',
    name: 'Storagemove',
    alwaysShow: true,
    meta: {
      title: 'Storagemove',
      icon: 'diaobo',
      type: 4
    },
    children: [
      {
        path: 'AddStoragemove',
        component: () => import('@/views/Storagemove/AddStoragemove'),
        name: 'AddStoragemove',
        meta: { title: 'AddStoragemove', noCache: false }
      },
      {
        path: 'StoragemoveList',
        component: () => import('@/views/Storagemove/StoragemoveList'),
        name: 'StoragemoveList',
        meta: { title: 'StoragemoveList', noCache: true }
      },
      {
        path: 'AddMoveApplication',
        component: () => import('@/views/Storagemove/AddMoveApplication'),
        name: 'AddMoveApplication',
        meta: { title: 'AddMoveApplication', noCache: false }
      },
      {
        path: 'MoveApplicationList',
        component: () => import('@/views/Storagemove/MoveApplicationList'),
        name: 'MoveApplicationList',
        meta: { title: 'MoveApplicationList', noCache: true }
      }
    ]
  },
  {
    path: '/Inventorydamaged',
    component: Layout,
    redirect: 'noredirect',
    name: 'Inventorydamaged',
    alwaysShow: true,
    meta: {
      title: 'Inventorydamaged',
      icon: 'sunhuai',
      type: 4
    },
    children: [
      {
        path: 'AddInventorydamaged',
        component: () => import('@/views/Inventorydamaged/AddInventorydamaged'),
        name: 'AddInventorydamaged',
        meta: { title: 'AddInventorydamaged', noCache: false }
      },
      {
        path: 'InventorydamagedList',
        component: () => import('@/views/Inventorydamaged/InventorydamagedList'),
        name: 'InventorydamagedList',
        meta: { title: 'InventorydamagedList', noCache: true }
      }
    ]
  },
  {
    path: '/InventoryCount',
    component: Layout,
    redirect: 'noredirect',
    name: 'InventoryCount',
    alwaysShow: true,
    meta: {
      title: 'InventoryCount',
      icon: 'pandian',
      type: 4
    },
    children: [
      {
        path: 'AddInventoryCount',
        component: () => import('@/views/InventoryCount/AddInventoryCount'),
        name: 'AddInventoryCount',
        meta: { title: 'AddInventoryCount', noCache: false }
      },
      {
        path: 'InventoryCountList',
        component: () => import('@/views/InventoryCount/InventoryCountList'),
        name: 'InventoryCountList',
        meta: { title: 'InventoryCountList', noCache: true }
      }
    ]
  },
  {
    path: '/InventoryOverflow',
    component: Layout,
    redirect: 'noredirect',
    name: 'InventoryOverflow',
    alwaysShow: true,
    meta: {
      title: 'InventoryOverflow',
      icon: 'baoyi',
      type: 4
    },
    children: [
      {
        path: 'AddInventoryOverflow',
        component: () => import('@/views/InventoryOverflow/AddInventoryOverflow'),
        name: 'AddInventoryOverflow',
        meta: { title: 'AddInventoryOverflow', noCache: false }
      },
      {
        path: 'OverflowList',
        component: () => import('@/views/InventoryOverflow/OverflowList'),
        name: 'OverflowList',
        meta: { title: 'OverflowList', noCache: true }
      }
    ]
  },
  {
    path: '/AdjustPrice',
    component: Layout,
    redirect: 'noredirect',
    name: 'AdjustPrice',
    alwaysShow: true,
    meta: {
      title: 'AdjustPrice',
      icon: 'tiaojia',
      type: 4
    },
    children: [
      {
        path: 'AddAdjustPrice',
        component: () => import('@/views/AdjustPrice/AddAdjustPrice'),
        name: 'AddAdjustPrice',
        meta: { title: 'AddAdjustPrice', noCache: false }
      },
      {
        path: 'AdjustPriceList',
        component: () => import('@/views/AdjustPrice/AdjustPriceList'),
        name: 'AdjustPriceList',
        meta: { title: 'AdjustPriceList', noCache: true }
      }
    ]
  },
  {
    path: '/StockAlarm',
    component: Layout,
    redirect: 'noredirect',
    name: 'StockAlarm',
    alwaysShow: true,
    meta: {
      title: 'StockAlarm',
      icon: 'yujing',
      type: 4
    },
    children: [
      {
        path: 'StockAlarmList',
        component: () => import('@/views/StockAlarm/StockAlarmList'),
        name: 'StockAlarmList',
        meta: { title: 'StockAlarmList', noCache: true }
      },
      {
        path: 'BatchAlarm',
        component: () => import('@/views/StockAlarm/BatchAlarm'),
        name: 'BatchAlarm',
        meta: { title: 'BatchAlarm', noCache: true }
      },
      {
        path: 'AddStockAlarm',
        component: () => import('@/views/WarehouseAdjust/AddStockAlarm'),
        name: 'AddStockAlarm',
        meta: { title: 'AddStockAlarm', noCache: false }
      },
      {
        path: 'SearchStockAlarmRules',
        component: () => import('@/views/StockAlarm/SearchStockAlarmRules'),
        name: 'SearchStockAlarmRules',
        meta: { title: 'SearchStockAlarmRules', noCache: false }
      }
    ]
  },
  {
    path: '/BuildUp',
    component: Layout,
    redirect: 'noredirect',
    name: 'BuildUp',
    alwaysShow: true,
    meta: {
      title: 'BuildUp',
      icon: 'zuzhuang',
      type: 4
    },
    children: [
      {
        path: 'AddBuildUp',
        component: () => import('@/views/BuildUp/AddBuildUp'),
        name: 'AddBuildUp',
        meta: { title: 'AddBuildUp', noCache: false }
      },
      {
        path: 'BuildUpList',
        component: () => import('@/views/BuildUp/BuildUpList'),
        name: 'BuildUpList',
        meta: { title: 'BuildUpList', noCache: true }
      }
    ]
  },
  {
    path: '/TearDown',
    component: Layout,
    redirect: 'noredirect',
    name: 'TearDown',
    alwaysShow: true,
    meta: {
      title: 'TearDown',
      icon: 'chaizhuan',
      type: 4
    },
    children: [
      {
        path: 'AddTearDown',
        component: () => import('@/views/TearDown/AddTearDown'),
        name: 'AddTearDown',
        meta: { title: 'AddTearDown', noCache: false }
      },
      {
        path: 'TearDownList',
        component: () => import('@/views/TearDown/TearDownList'),
        name: 'TearDownList',
        meta: { title: 'TearDownList', noCache: true }
      }
    ]
  },
  {
    path: '/DailyAdjust',
    component: Layout,
    redirect: 'noredirect',
    name: 'DailyAdjust',
    alwaysShow: true,
    meta: {
      title: 'DailyAdjust',
      icon: 'tiaozheng',
      type: 4
    },
    children: [
      {
        path: 'AddDailyAdjust',
        component: () => import('@/views/DailyAdjust/AddDailyAdjust'),
        name: 'AddDailyAdjust',
        meta: { title: 'AddDailyAdjust', noCache: false }
      }
    ]
  },
  {
    path: '/WarehouseAdjust',
    component: Layout,
    redirect: 'noredirect',
    name: 'WarehouseAdjust',
    alwaysShow: true,
    meta: {
      title: 'WarehouseAdjust',
      icon: 'kuwei',
      type: 4
    },
    children: [
      {
        path: 'AddInitialenter',
        component: () => import('@/views/WarehouseAdjust/AddInitialenter'),
        name: 'AddInitialenter',
        meta: { title: 'AddInitialenter', noCache: false }
      },
      {
        path: 'Enterlist',
        component: () => import('@/views/WarehouseAdjust/Enterlist'),
        name: 'Enterlist',
        meta: { title: 'Enterlist', noCache: true }
      },
      {
        path: 'AddLocation',
        component: () => import('@/views/WarehouseAdjust/AddLocation'),
        name: 'AddLocation',
        meta: { title: 'AddLocation', noCache: false }
      },
      {
        path: 'Locationlist',
        component: () => import('@/views/WarehouseAdjust/Locationlist'),
        name: 'Locationlist',
        meta: { title: 'Locationlist', noCache: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
