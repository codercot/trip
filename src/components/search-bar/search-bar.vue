<template>
  <div class="search">
    <div class="select-time">
      <div class="start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import usemainStore from '@/stores/module/main';
import { storeToRefs } from 'pinia';
import { formateMonDay } from '@/utils/formate';
import { computed } from 'vue'
const mainStore = usemainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formateMonDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formateMonDay(endDate.value, "MM.DD"))
</script>

<style lang="less" scoped>
.search {
  height: 44px;
  display: flex;
  justify-content: space-between;
  background-color: #f2f4f5;
  border-radius: 7px;

  .select-time {
    width: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .start {
      display: flex;

      .name {
        color: #ccccd0;
      }
    }

    .end {
      display: flex;

      .name {
        color: #ccccd0;
      }
    }
  }

  .content {
    .keyword {
      line-height: 44px;
      // margin-left: 10px;
      color: #ccccd0;
    }
  }

  .right {
    width: 50px;
    display: flex;
    justify-content: center;

    .icon-search {
      background: url(../../assets/img/home/home-sprite.png);
      width: 24px;
      height: 24px;
      display: inline-block;
      background-position: -29px -151px;
      background-size: 207px 192px;
      margin-top: 9px;
    }
  }
}
</style>