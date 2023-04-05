<template>
  <div class="tab-bar">
     <div class="tab-bar-item"> 
     <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div> 

    <!-- <template v-for="(item, index) in tabBarData">
      <div class="tab-bar-item" :class="{ active: currendIndex === index }" 
      @click="itemClick(index,item)">
        <img v-if="currendIndex!==index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import tabBarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load_assets'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const currendIndex = ref(0)

// 点击切换
const itemClick = function(index,item){
  currendIndex.value=index
  // 切换路由  传递路径
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  display: flex;

  height: 50px;
  border-top: 1px solid #ccc;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px;
    }

    .text {
      font-size: 14px;
    }
  }
}
</style>