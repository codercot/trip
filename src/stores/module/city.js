import { defineStore } from "pinia";
import { getCityAll } from "@/services";
const useCity = defineStore('city',{
  state(){
    return {
      allCity:{},
      currentCity:{cityName:"广州"}
    }
  },
  actions:{
     async fechCityAction(){
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})
export default useCity