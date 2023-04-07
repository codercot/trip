<template>
  <div class="history-list">
    <favourHouseItem :favourData="favourHistoryData"></favourHouseItem>
  </div>
</template>

<script setup>
import favourHouseItem from './favour-house-item.vue';

defineProps({
  favourHistoryData: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.history-list {
  padding: 5px 20px 60px 20px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #f7f8fb;
}
</style>