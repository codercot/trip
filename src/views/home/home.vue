<template>
  <div class="home" ref="homeRef">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="../../assets/img/home/banner.webp" alt="">
    </div>
    <homeSearch></homeSearch>
    <HomeCategories></HomeCategories>
    <div class="search-bar" v-if="isshow">
      <searchBar></searchBar>
    </div>
    <HomeList></HomeList>
    <div class="loading-icon">
      <loading></loading>
    </div>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearch from './cpns/home-search.vue'
import useHomeStore from '@/stores/module/home.js';
import HomeCategories from './cpns/home-categories.vue';
import HomeList from "./cpns/home-list.vue"
import usescroll from '@/hooks/useScroll.js'
import { watch, ref,computed,onActivated } from 'vue';
import searchBar from '@/components/search-bar/search-bar.vue';
import loading from '@/components/loading/loading.vue';
// 热门城市请求
const homeStore = useHomeStore()
homeStore.fetchHomeHotSuggest()

// 热门搜索请求
homeStore.fetchHomeCategories()
homeStore.fetchHomeHouseList()
const homeRef = ref()
const { isReachBottom, scrollTop } = usescroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHomeHouseList()
    isReachBottom.value = false
  }
})

// 搜索框显示与隐藏
// const isshow = ref(false)
// watch(scrollTops, (newValue) => {
//   // console.log(newValue);
//   isshow.value = newValue > 200
// })
// 利用计算属性
const isshow = computed(()=>{
  return scrollTop.value>350
})

// onActivated(()=>{
//   homeRef.value?.scrollTop({
//     top:scrollTop.value
//   })
// })

</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;box-sizing: border-box;
}
.banner {
  img {
    width: 100%;
  }
}
.search-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px 16px 16px 8px;
  z-index: 3;
  background-color: #ffffff;
}
</style>