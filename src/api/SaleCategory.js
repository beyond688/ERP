import request from '@/utils/request'

// 分类属性列表
export function searchSaleCategory(query) {
  var params = new URLSearchParams()
  if (query.categoryname !== '' && query.categoryname !== null && query.categoryname !== undefined) {
    params.append('categoryname', query.categoryname) // 你要传给后台的参数值 key/value
  }
  if (query.iseffective !== '' && query.iseffective !== null && query.iseffective !== undefined) {
    params.append('iseffective', query.iseffective) // 你要传给后台的参数值 key/value
  }
  if (query.type !== '' && query.type !== null && query.type !== undefined) {
    params.append('type', query.type) // 你要传给后台的参数值 key/value
  }
  params.append('pagenum', query.pagenum) // 你要传给后台的参数值 key/value
  params.append('pagesize', query.pagesize) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/salecategory/searchSaleCategory',
    method: 'post',
    data: params
  })
}

// 新增分类属性
export function addSaleCategory(query) {
  var params = new URLSearchParams()
  if (query.categoryname !== '' && query.categoryname !== null) {
    params.append('categoryname', query.categoryname) // 你要传给后台的参数值 key/value
  }
  if (query.category !== '' && query.category !== null) {
    params.append('category', query.category) // 你要传给后台的参数值 key/value
  }
  if (query.iseffective !== '' && query.iseffective !== null) {
    params.append('iseffective', query.iseffective) // 你要传给后台的参数值 key/value
  }
  if (query.type !== '' && query.type !== null) {
    params.append('type', query.type) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/salecategory/addSaleCategory',
    method: 'post',
    data: params
  })
}

// 修改分类属性
export function updateSaleCategory(query) {
  var params = new URLSearchParams()
  if (query.categoryName !== '' && query.categoryName !== null) {
    params.append('categoryname', query.categoryName) // 你要传给后台的参数值 key/value
  }
  if (query.isEffective !== '' && query.isEffective !== null) {
    params.append('iseffective', query.isEffective) // 你要传给后台的参数值 key/value
  }
  if (query.id !== '' && query.id !== null) {
    params.append('id', query.id) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/salecategory/updateSaleCategory',
    method: 'post',
    data: params
  })
}

// 删除分类属性
export function delateSaleCategory(query) {
  var params = new URLSearchParams()
  if (query !== '' && query !== null) {
    params.append('ids', query) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/salecategory/delateSaleCategory',
    method: 'post',
    data: params
  })
}
