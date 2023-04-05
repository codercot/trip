<template>
  <div class="city tab-page">
    <div class="top">
      <van-search v-model="searchValue" shape="round" show-action placeholder="请输入搜索关键词" />

      <van-tabs v-model:active="searchActive" color="#ff9856">
        <template v-for="(value, key, index) in allCity" :key="key">
          <!-- 这里通过name绑定key使得 searchActive里面的值是对应的key-->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <CityGroup :group-data="currentGrop"></CityGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { getCityAll } from '@/services'
import useCity from '@/stores/module/city'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import CityGroup from './cpns/city-group.vue';
// 搜索
const searchValue = ref("")

// 切换栏
const searchActive = ref()

// 数据
const cityStore = useCity()
// 默认调用，发送网络请求
cityStore.fechCityAction()
const { allCity } = storeToRefs(cityStore)
// 这里只要使用ref就会失去响应式 所以要使用computed返回
const currentGrop = computed(() => allCity.value[searchActive.value])
</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
 
}
</style>