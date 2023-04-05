import HYRequest from '../request/index'

export function getCityAll(){
  return HYRequest.get({
    url:"/city/all"
  })
}