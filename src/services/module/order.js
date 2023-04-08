import hyRequest from '../request/index'
export function getAllOrder(type) {
  return hyRequest.get({
    url: `/order/list?type=${type}`
  })
}
export function getRecentOrder(type) {
  return hyRequest.get({
    url: `/order/list?type=${type}`
  })
}
export function getPendOrder(type) {
  return hyRequest.get({
    url: `/order/list?type=${type}`
  })
}