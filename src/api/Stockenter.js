import request from '@/utils/request'

// 列表和查询仓库门店
export function stockenterlist(query) {
  var params = new URLSearchParams()
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.enterNumber !== '' && query.enterNumber !== null && query.enterNumber !== undefined) {
    params.append('enterNumber', query.enterNumber) // 你要传给后台的参数值 key/value
  }
  if (query.deliveryPersonId !== '' && query.deliveryPersonId !== null && query.deliveryPersonId !== undefined) {
    params.append('deliveryPersonId', query.deliveryPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.acceptPersonId !== '' && query.acceptPersonId !== null && query.acceptPersonId !== undefined) {
    params.append('acceptPersonId', query.acceptPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.receiptStat !== '' && query.receiptStat !== null && query.receiptStat !== undefined) {
    params.append('receiptStat', query.receiptStat) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.beginTime !== '' && query.beginTime !== null && query.beginTime !== undefined) {
    params.append('beginTime', query.beginTime) // 你要传给后台的参数值 key/value
  }
  if (query.endTime !== '' && query.endTime !== null && query.endTime !== undefined) {
    params.append('endTime', query.endTime) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionIds !== '' && query.regionIds !== null && query.regionIds !== undefined) {
    params.append('regionIds', query.regionIds) // 你要传给后台的参数值 key/value
  }
  params.append('pagenum', query.pagenum) // 你要传给后台的参数值 key/value
  params.append('pagesize', query.pagesize) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/stockenter/stockenterlist',
    method: 'post',
    data: params
  })
}

// 删除仓库门店
export function deletestockenter(query) {
  var params = new URLSearchParams()
  if (query !== '' && query !== null && query !== undefined) {
    params.append('enterIds', query) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/stockenter/deletestockenter',
    method: 'post',
    data: params
  })
}

// 添加采购入库单
export function addstockenter(query, query2) {
  var params = new URLSearchParams()
  params.append('stockEnterDetailJson', query2) // 你要传给后台的参数值 key/value
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.sourceType !== '' && query.sourceType !== null && query.sourceType !== undefined) {
    params.append('sourceType', query.sourceType) // 你要传给后台的参数值 key/value
  }
  if (query.supplierId !== '' && query.supplierId !== null && query.supplierId !== undefined) {
    params.append('supplierId', query.supplierId) // 你要传给后台的参数值 key/value
  }
  if (query.stockPersonId !== '' && query.stockPersonId !== null && query.stockPersonId !== undefined) {
    params.append('stockPersonId', query.stockPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.stockDeptId !== '' && query.stockDeptId !== null && query.stockDeptId !== undefined) {
    params.append('stockDeptId', query.stockDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.deliveryPersonId !== '' && query.deliveryPersonId !== null && query.deliveryPersonId !== undefined) {
    params.append('deliveryPersonId', query.deliveryPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.acceptPersonId !== '' && query.acceptPersonId !== null && query.acceptPersonId !== undefined) {
    params.append('acceptPersonId', query.acceptPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryTypeId !== '' && query.repositoryTypeId !== null && query.repositoryTypeId !== undefined) {
    params.append('repositoryTypeId', query.repositoryTypeId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.receiptStat !== '' && query.receiptStat !== null && query.receiptStat !== undefined) {
    params.append('receiptStat', query.receiptStat) // 你要传给后台的参数值 key/value
  }
  if (query.judgeStat !== '' && query.judgeStat !== null && query.judgeStat !== undefined) {
    params.append('judgeStat', query.judgeStat) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.countryId !== '' && query.countryId !== null && query.countryId !== undefined) {
    params.append('countryId', query.countryId) // 你要传给后台的参数值 key/value
  }
  if (query.summary !== '' && query.summary !== null && query.summary !== undefined) {
    params.append('summary', query.summary) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionId !== '' && query.regionId !== null && query.regionId !== undefined) {
    params.append('regionId', query.regionId) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/stockenter/addstockenter',
    method: 'post',
    data: params
  })
}

//  修改采购入库
export function updatestockenter(query, query2) {
  var params = new URLSearchParams()
  params.append('stockEnterDetailJson', query2) // 你要传给后台的参数值 key/value
  if (query.id !== '' && query.id !== null && query.id !== undefined) {
    params.append('enterId', query.id) // 你要传给后台的参数值 key/value
  }
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.sourceType !== '' && query.sourceType !== null && query.sourceType !== undefined) {
    params.append('sourceType', query.sourceType) // 你要传给后台的参数值 key/value
  }
  if (query.batch !== '' && query.batch !== null && query.batch !== undefined) {
    params.append('batch', query.batch) // 你要传给后台的参数值 key/value
  }
  if (query.supplierId !== '' && query.supplierId !== null && query.supplierId !== undefined) {
    params.append('supplierId', query.supplierId) // 你要传给后台的参数值 key/value
  }
  if (query.stockPersonId !== '' && query.stockPersonId !== null && query.stockPersonId !== undefined) {
    params.append('stockPersonId', query.stockPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.stockDeptId !== '' && query.stockDeptId !== null && query.stockDeptId !== undefined) {
    params.append('stockDeptId', query.stockDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.deliveryPersonId !== '' && query.deliveryPersonId !== null && query.deliveryPersonId !== undefined) {
    params.append('deliveryPersonId', query.deliveryPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.acceptPersonId !== '' && query.acceptPersonId !== null && query.acceptPersonId !== undefined) {
    params.append('acceptPersonId', query.acceptPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryTypeId !== '' && query.repositoryTypeId !== null && query.repositoryTypeId !== undefined) {
    params.append('repositoryTypeId', query.repositoryTypeId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.receiptStat !== '' && query.receiptStat !== null && query.receiptStat !== undefined) {
    params.append('receiptStat', query.receiptStat) // 你要传给后台的参数值 key/value
  }
  if (query.judgeStat !== '' && query.judgeStat !== null && query.judgeStat !== undefined) {
    params.append('judgeStat', query.judgeStat) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.countryId !== '' && query.countryId !== null && query.countryId !== undefined) {
    params.append('countryId', query.countryId) // 你要传给后台的参数值 key/value
  }
  if (query.summary !== '' && query.summary !== null && query.summary !== undefined) {
    params.append('summary', query.summary) // 你要传给后台的参数值 key/value
  }
  if (query.endPersonId !== '' && query.endPersonId !== null && query.endPersonId !== undefined) {
    params.append('endPersonId', query.endPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.modifyPersonId !== '' && query.modifyPersonId !== null && query.modifyPersonId !== undefined) {
    params.append('modifyPersonId', query.modifyPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionId !== '' && query.regionId !== null && query.regionId !== undefined) {
    params.append('regionId', query.regionId) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/stockenter/updatestockenter',
    method: 'post',
    data: params
  })
}

//   添加生产入库
export function addproduceenter(query, query2) {
  var params = new URLSearchParams()
  params.append('produceEnterDetailJson', query2) // 你要传给后台的参数值 key/value
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.sourceType !== '' && query.sourceType !== null && query.sourceType !== undefined) {
    params.append('sourceType', query.sourceType) // 你要传给后台的参数值 key/value
  }
  if (query.processType !== '' && query.processType !== null && query.processType !== undefined) {
    params.append('processType', query.processType) // 你要传给后台的参数值 key/value
  }
  if (query.produceManagerId !== '' && query.produceManagerId !== null && query.produceManagerId !== undefined) {
    params.append('produceManagerId', query.produceManagerId) // 你要传给后台的参数值 key/value
  }
  if (query.enterPersonId !== '' && query.enterPersonId !== null && query.enterPersonId !== undefined) {
    params.append('enterPersonId', query.enterPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryTypeId !== '' && query.repositoryTypeId !== null && query.repositoryTypeId !== undefined) {
    params.append('repositoryTypeId', query.repositoryTypeId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.countryId !== '' && query.countryId !== null && query.countryId !== undefined) {
    params.append('countryId', query.countryId) // 你要传给后台的参数值 key/value
  }
  if (query.summary !== '' && query.summary !== null && query.summary !== undefined) {
    params.append('summary', query.summary) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionId !== '' && query.regionId !== null && query.regionId !== undefined) {
    params.append('regionId', query.regionId) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/produceenter/addproduceenter',
    method: 'post',
    data: params
  })
}

//   生产入库列表
export function produceenterlist(query) {
  var params = new URLSearchParams()
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.enterId !== '' && query.enterId !== null && query.enterId !== undefined) {
    params.append('enterId', query.enterId) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.enterNumber !== '' && query.enterNumber !== null && query.enterNumber !== undefined) {
    params.append('enterNumber', query.enterNumber) // 你要传给后台的参数值 key/value
  }
  if (query.enterPersonId !== '' && query.enterPersonId !== null && query.enterPersonId !== undefined) {
    params.append('enterPersonId', query.enterPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.receiptStat !== '' && query.receiptStat !== null && query.receiptStat !== undefined) {
    params.append('receiptStat', query.receiptStat) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.produceManagerId !== '' && query.produceManagerId !== null && query.produceManagerId !== undefined) {
    params.append('produceManagerId', query.produceManagerId) // 你要传给后台的参数值 key/value
  }
  if (query.beginTime !== '' && query.beginTime !== null && query.beginTime !== undefined) {
    params.append('beginTime', query.beginTime) // 你要传给后台的参数值 key/value
  }
  if (query.endTime !== '' && query.endTime !== null && query.endTime !== undefined) {
    params.append('endTime', query.endTime) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionIds !== '' && query.regionIds !== null && query.regionIds !== undefined) {
    params.append('regionIds', query.regionIds) // 你要传给后台的参数值 key/value
  }
  params.append('pageNum', query.pageNum) // 你要传给后台的参数值 key/value
  params.append('pageSize', query.pageSize) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/produceenter/produceenterlist',
    method: 'post',
    data: params
  })
}

// 删除生产入库
export function deleteproduceenter(query) {
  var params = new URLSearchParams()
  if (query !== '' && query !== null && query !== undefined) {
    params.append('enterIds', query) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/produceenter/deleteproduceenter',
    method: 'post',
    data: params
  })
}

//   修改生产入库单
export function updatestockenter2(query, query2) {
  var params = new URLSearchParams()
  params.append('produceEnterDetailJson', query2) // 你要传给后台的参数值 key/value
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.id !== '' && query.id !== null && query.id !== undefined) {
    params.append('enterId', query.id) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.sourceType !== '' && query.sourceType !== null && query.sourceType !== undefined) {
    params.append('sourceType', query.sourceType) // 你要传给后台的参数值 key/value
  }
  if (query.processType !== '' && query.processType !== null && query.processType !== undefined) {
    params.append('processType', query.processType) // 你要传给后台的参数值 key/value
  }
  if (query.produceManagerId !== '' && query.produceManagerId !== null && query.produceManagerId !== undefined) {
    params.append('produceManagerId', query.produceManagerId) // 你要传给后台的参数值 key/value
  }
  if (query.enterPersonId !== '' && query.enterPersonId !== null && query.enterPersonId !== undefined) {
    params.append('enterPersonId', query.enterPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryTypeId !== '' && query.repositoryTypeId !== null && query.repositoryTypeId !== undefined) {
    params.append('repositoryTypeId', query.repositoryTypeId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.countryId !== '' && query.countryId !== null && query.countryId !== undefined) {
    params.append('countryId', query.countryId) // 你要传给后台的参数值 key/value
  }
  if (query.summary !== '' && query.summary !== null && query.summary !== undefined) {
    params.append('summary', query.summary) // 你要传给后台的参数值 key/value
  }
  if (query.receiptStat !== '' && query.receiptStat !== null && query.receiptStat !== undefined) {
    params.append('receiptStat', query.receiptStat) // 你要传给后台的参数值 key/value
  }
  if (query.judgeStat !== '' && query.judgeStat !== null && query.judgeStat !== undefined) {
    params.append('judgeStat', query.judgeStat) // 你要传给后台的参数值 key/value
  }
  if (query.judgePersonId !== '' && query.judgePersonId !== null && query.judgePersonId !== undefined) {
    params.append('judgePersonId', query.judgePersonId) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionId !== '' && query.regionId !== null && query.regionId !== undefined) {
    params.append('regionId', query.regionId) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/produceenter/updatestockenter',
    method: 'post',
    data: params
  })
}

//   添加生产入库
export function addotherenter(query, query2) {
  var params = new URLSearchParams()
  params.append('otherEnterDetailJson', query2) // 你要传给后台的参数值 key/value
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.sourceType !== '' && query.sourceType !== null && query.sourceType !== undefined) {
    params.append('sourceType', query.sourceType) // 你要传给后台的参数值 key/value
  }
  if (query.deliveryPersonId !== '' && query.deliveryPersonId !== null && query.deliveryPersonId !== undefined) {
    params.append('deliveryPersonId', query.deliveryPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.processType !== '' && query.processType !== null && query.processType !== undefined) {
    params.append('processType', query.processType) // 你要传给后台的参数值 key/value
  }
  if (query.acceptPersonId !== '' && query.acceptPersonId !== null && query.acceptPersonId !== undefined) {
    params.append('acceptPersonId', query.acceptPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterPersonId !== '' && query.enterPersonId !== null && query.enterPersonId !== undefined) {
    params.append('enterPersonId', query.enterPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryTypeId !== '' && query.repositoryTypeId !== null && query.repositoryTypeId !== undefined) {
    params.append('repositoryTypeId', query.repositoryTypeId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterReason !== '' && query.enterReason !== null && query.enterReason !== undefined) {
    params.append('enterReason', query.enterReason) // 你要传给后台的参数值 key/value
  }
  if (query.newOrOld !== '' && query.newOrOld !== null && query.newOrOld !== undefined) {
    params.append('newOrOld', query.newOrOld) // 你要传给后台的参数值 key/value
  }
  if (query.countryId !== '' && query.countryId !== null && query.countryId !== undefined) {
    params.append('countryId', query.countryId) // 你要传给后台的参数值 key/value
  }
  if (query.summary !== '' && query.summary !== null && query.summary !== undefined) {
    params.append('summary', query.summary) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionId !== '' && query.regionId !== null && query.regionId !== undefined) {
    params.append('regionId', query.regionId) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/otherenter/addotherenter',
    method: 'post',
    data: params
  })
}

//   其他入库列表
export function otherenterlist(query) {
  var params = new URLSearchParams()
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.enterId !== '' && query.enterId !== null && query.enterId !== undefined) {
    params.append('enterId', query.enterId) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.enterNumber !== '' && query.enterNumber !== null && query.enterNumber !== undefined) {
    params.append('enterNumber', query.enterNumber) // 你要传给后台的参数值 key/value
  }
  if (query.enterPersonId !== '' && query.enterPersonId !== null && query.enterPersonId !== undefined) {
    params.append('enterPersonId', query.enterPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.receiptStat !== '' && query.receiptStat !== null && query.receiptStat !== undefined) {
    params.append('receiptStat', query.receiptStat) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.deliveryPersonId !== '' && query.deliveryPersonId !== null && query.deliveryPersonId !== undefined) {
    params.append('deliveryPersonId', query.deliveryPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.acceptPersonId !== '' && query.acceptPersonId !== null && query.acceptPersonId !== undefined) {
    params.append('acceptPersonId', query.acceptPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.beginTime !== '' && query.beginTime !== null && query.beginTime !== undefined) {
    params.append('beginTime', query.beginTime) // 你要传给后台的参数值 key/value
  }
  if (query.endTime !== '' && query.endTime !== null && query.endTime !== undefined) {
    params.append('endTime', query.endTime) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionIds !== '' && query.regionIds !== null && query.regionIds !== undefined) {
    params.append('regionIds', query.regionIds) // 你要传给后台的参数值 key/value
  }
  params.append('pageNum', query.pageNum) // 你要传给后台的参数值 key/value
  params.append('pageSize', query.pageSize) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/otherenter/otherenterlist',
    method: 'post',
    data: params
  })
}

//   修改其他入库
export function updateotherenter(query, query2) {
  var params = new URLSearchParams()
  params.append('otherEnterDetailJson', query2) // 你要传给后台的参数值 key/value
  if (query.id !== '' && query.id !== null && query.id !== undefined) {
    params.append('id', query.id) // 你要传给后台的参数值 key/value
  }
  if (query.title !== '' && query.title !== null && query.title !== undefined) {
    params.append('title', query.title) // 你要传给后台的参数值 key/value
  }
  if (query.enterNumber !== '' && query.enterNumber !== null && query.enterNumber !== undefined) {
    params.append('enterNumber', query.enterNumber) // 你要传给后台的参数值 key/value
  }
  if (query.sourceNumber !== '' && query.sourceNumber !== null && query.sourceNumber !== undefined) {
    params.append('sourceNumber', query.sourceNumber) // 你要传给后台的参数值 key/value
  }
  if (query.sourceType !== '' && query.sourceType !== null && query.sourceType !== undefined) {
    params.append('sourceType', query.sourceType) // 你要传给后台的参数值 key/value
  }
  if (query.deliveryPersonId !== '' && query.deliveryPersonId !== null && query.deliveryPersonId !== undefined) {
    params.append('deliveryPersonId', query.deliveryPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.processType !== '' && query.processType !== null && query.processType !== undefined) {
    params.append('processType', query.processType) // 你要传给后台的参数值 key/value
  }
  if (query.acceptPersonId !== '' && query.acceptPersonId !== null && query.acceptPersonId !== undefined) {
    params.append('acceptPersonId', query.acceptPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterPersonId !== '' && query.enterPersonId !== null && query.enterPersonId !== undefined) {
    params.append('enterPersonId', query.enterPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterDeptId !== '' && query.enterDeptId !== null && query.enterDeptId !== undefined) {
    params.append('enterDeptId', query.enterDeptId) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryTypeId !== '' && query.repositoryTypeId !== null && query.repositoryTypeId !== undefined) {
    params.append('repositoryTypeId', query.repositoryTypeId) // 你要传给后台的参数值 key/value
  }
  if (query.enterRepositoryId !== '' && query.enterRepositoryId !== null && query.enterRepositoryId !== undefined) {
    params.append('enterRepositoryId', query.enterRepositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.createPersonId !== '' && query.createPersonId !== null && query.createPersonId !== undefined) {
    params.append('createPersonId', query.createPersonId) // 你要传给后台的参数值 key/value
  }
  if (query.enterReason !== '' && query.enterReason !== null && query.enterReason !== undefined) {
    params.append('enterReason', query.enterReason) // 你要传给后台的参数值 key/value
  }
  if (query.newOrOld !== '' && query.newOrOld !== null && query.newOrOld !== undefined) {
    params.append('newOrOld', query.newOrOld) // 你要传给后台的参数值 key/value
  }
  if (query.countryId !== '' && query.countryId !== null && query.countryId !== undefined) {
    params.append('countryId', query.countryId) // 你要传给后台的参数值 key/value
  }
  if (query.summary !== '' && query.summary !== null && query.summary !== undefined) {
    params.append('summary', query.summary) // 你要传给后台的参数值 key/value
  }
  if (query.repositoryId !== '' && query.repositoryId !== null && query.repositoryId !== undefined) {
    params.append('repositoryId', query.repositoryId) // 你要传给后台的参数值 key/value
  }
  if (query.regionId !== '' && query.regionId !== null && query.regionId !== undefined) {
    params.append('regionId', query.regionId) // 你要传给后台的参数值 key/value
  }
  if (query.receiptStat !== '' && query.receiptStat !== null && query.receiptStat !== undefined) {
    params.append('receiptStat', query.receiptStat) // 你要传给后台的参数值 key/value
  }
  if (query.judgeStat !== '' && query.judgeStat !== null && query.judgeStat !== undefined) {
    params.append('judgeStat', query.judgeStat) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/otherenter/updateotherenter',
    method: 'post',
    data: params
  })
}

// 删除其他入库
export function deleteotherenter(query) {
  var params = new URLSearchParams()
  if (query !== '' && query !== null && query !== undefined) {
    params.append('enterIds', query) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/otherenter/deleteotherenter',
    method: 'post',
    data: params
  })
}

// 审核入库单操作
export function updatestockenter3(query, query2, query3) {
  var params = new URLSearchParams()
  if (query.id !== '' && query.id !== null && query.id !== undefined) {
    params.append('enterId', query.id) // 你要传给后台的参数值 key/value
  }
  if (query3 !== '' && query3 !== null && query3 !== undefined) {
    params.append('judgePersonId', query3) // 你要传给后台的参数值 key/value
  }
  if (query2 !== '' && query2 !== null && query2 !== undefined) {
    params.append('judgeStat', query2) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/stockenter/updatestockenter',
    method: 'post',
    data: params
  })
}

// 审核生产完成入库单操作
export function updatestockenter4(query, query2, query3) {
  var params = new URLSearchParams()
  if (query.id !== '' && query.id !== null && query.id !== undefined) {
    params.append('enterId', query.id) // 你要传给后台的参数值 key/value
  }
  if (query3 !== '' && query3 !== null && query3 !== undefined) {
    params.append('judgePersonId', query3) // 你要传给后台的参数值 key/value
  }
  if (query2 !== '' && query2 !== null && query2 !== undefined) {
    params.append('judgeStat', query2) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/produceenter/updatestockenter',
    method: 'post',
    data: params
  })
}

// 审核其他入库单操作
export function updateotherenter5(query, query2, query3) {
  var params = new URLSearchParams()
  if (query.id !== '' && query.id !== null && query.id !== undefined) {
    params.append('id', query.id) // 你要传给后台的参数值 key/value
  }
  if (query3 !== '' && query3 !== null && query3 !== undefined) {
    params.append('judgePersonId', query3) // 你要传给后台的参数值 key/value
  }
  if (query2 !== '' && query2 !== null && query2 !== undefined) {
    params.append('judgeStat', query2) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/otherenter/updateotherenter',
    method: 'post',
    data: params
  })
}
