<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.swipe {
  .my-swipe {
    .item {
      img {
        width: 100%;
      }
    }

    .custom-indicator {
      width: 50px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      position: absolute;
      border-radius: 8px;
      color: #fff;
      right: 5px;
      bottom: 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>