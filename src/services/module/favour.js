import hyRequest from '../request'
export function getFavourData(){
  return hyRequest.get({
    url:"/favor/list"
  })
}