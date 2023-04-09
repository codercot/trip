import hyRequest from '../request/index'
export function getSearchSelect() {
  return hyRequest.get({
    url: "/search/top"
  })
}
export function getSearchList() {
  return hyRequest.get({
    url: "/search/result"
  })
}