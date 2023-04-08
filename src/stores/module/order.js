import { defineStore } from "pinia";
import { getAllOrder,getRecentOrder,getPendOrder } from "@/services";
const useOrder = defineStore("order",{
  state:()=>({
    allOrderData:{},
    recentOrderData:{},
    pendOrderData:{}
  }),
  actions:{
    fetAllOredr(type){
      getAllOrder(type).then((res)=>{
        this.allOrderData=res.data.data
      })
    },
    fetRecentOredr(type){
      getRecentOrder(type).then((res)=>{
        this.recentOrderData=res.data.data
      })
    },
    fetPendOredr(type){
      getPendOrder(type).then((res)=>{
        this.pendOrderData=res.data.data
      })
    }
  }
})
export default useOrder;