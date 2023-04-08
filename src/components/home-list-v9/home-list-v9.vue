<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name"> {{ itemData.houseName }}</div>
        <div class="price">
          <van-rate v-model="score" color="#fff" :size="16" readonly allow-half />
          <div class="new">￥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const poprs = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
const score = computed(() => Number(poprs.itemData.commentScore))
</script>

<style lang="less" scoped>
.house-item {
  position: relative;
  width: 170px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 10px;

  img {
    width: 170px;
  }

  .info {
    width: 165px;
    margin-left: 5px;
    position: absolute;
    bottom: 10px;
    color: #fff;
    font-size: 14px;
    line-height: 17px;

    .summary {
      margin-left: 10px;
    }

    .name {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
      justify-content: space-between;
    }
  }
}</style>