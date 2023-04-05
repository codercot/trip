

import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeHouseList } from '@/services'
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggest: [],
    categories: [],
    houseList: [],
    currentPage:1
  }),

  actions: {
    fetchHomeHotSuggest() {
      getHomeHotSuggests().then(res => {
        this.hotSuggest = res.data
      })
    },
    fetchHomeCategories() {
      getHomeCategories().then(res => {
        this.categories = res.data
      })
    },
     fetchHomeHouseList() {
      getHomeHouseList(this.currentPage).then(res => {
        // 把对象从数组中结构出来
        this.houseList.push(...res.data)
        this.currentPage++
      })
      // const res = await getHomeHouseList(this.currentPage)
      // this.houseList.push(...res.data)
      // this.currentPage++
    }


  }

})
export default useHomeStore