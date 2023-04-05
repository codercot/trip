import dayjs from "dayjs";

export function formateMonDay (date,formatStr="MM月DD日"){
  return dayjs(date).format(formatStr)
}
export function getDiffDays(startDate,endDate){
  return dayjs(endDate).diff(startDate,"day")
}