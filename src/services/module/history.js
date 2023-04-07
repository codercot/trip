import hyRequest from '../request'
export function getHistoryData(){
  return hyRequest.get({
    url:"/favor/history"
  })
}