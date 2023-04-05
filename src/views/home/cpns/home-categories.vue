<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/module/home';
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  margin-top: 10px;
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  &::-webkit-scrollbar{
    display: none;
  }
  .item {
    flex-shrink: 0;//默认为1，默认压缩盒子，为0时不压缩盒子
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    .text {
      font-size: 12px;
    }
  }
  img {
    width: 32px;
    height: 32px;
  }
  
}
</style>