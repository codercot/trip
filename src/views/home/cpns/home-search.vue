<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityclick">{{ currentCity.cityName }}</div>
      <div class="position">
        <span>我的位置</span>
        <img src="../../../assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <div class="date-range" @click="showDate = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
      </div>
      <div class="stay">共{{ stayDay }}晚</div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showDate" type="range" color="#ff9856" :show-confirm="false" @confirm="onConfirm" />

    <div class="price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="keyword">关键字/位置/民宿名</div>
    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggest" :key="index">
        <span :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>

    <div class="search-btn">
      <div class="btn" @click="searchBtn">热门搜索</div>
    </div>
  </div>
</template>

<script setup>
import useCity from '@/stores/module/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formateMonDay, getDiffDays } from '@/utils/formate.js'
import { ref,computed } from 'vue';
import useHomeStore from '@/stores/module/home.js'
import usemainStore from '@/stores/module/main';
const router = useRouter()
const cityStore = useCity()
const cityclick = function () {
  router.push('/city')
}

const { currentCity } = storeToRefs(cityStore)

// 动态获取日期
const stayDay = ref(1)

// 设置的时间是当前时间加一
const mainStore = usemainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formateMonDay(startDate.value))
const endDateStr = computed(() => formateMonDay(endDate.value))
stayDay.value = ref(getDiffDays(startDate.value, endDate.value))
// 日历表单
const showDate = ref(false)
const onConfirm = (value) => {
  mainStore.startDate = value[0]
  mainStore.endDate = value[1]
  showDate.value = false
  stayDay.value = ref(getDiffDays(value[0], value[1]))
}



// 发送网络请求 热门城市
const homeStore = useHomeStore()
const { hotSuggest } = storeToRefs(homeStore)

console.log(formateMonDay(startDate.value));

// 监听热门搜索点击
const searchBtn = () => {
  // 进行页面跳转，同时把相应的数据传递过去
  router.push({
    path: "/search",
    query: {
      startDate: formateMonDay(startDate.value,"M.DD"),
      endDate: formateMonDay(endDate.value,"M.DD"),
      currentCity: currentCity.value.cityName
    }
  })
}


</script>

<style lang="less" scoped>
.location {
  margin-top: 10px;
  display: flex;

  .city {
    margin-left: 15px;
    flex: 1;
    font-size: 15px;
  }

  .position {
    width: 96px;
    display: flex;
    align-items: center;
    font-size: 15px;

    img {
      width: 16px;
      height: 16px;
      margin-left: 5px;
    }
  }
}

.date-range {
  display: flex;
  justify-content: space-between;
  padding: 5px 12px;

  .stay {
    line-height: 44px;
    font-size: 14px;
  }

  .date {
    display: flex;
    height: 44px;
    flex-direction: column;
    justify-content: center;

    .tip {
      font-size: 12px;
      color: #e1e1e1;
    }
  }
}

.price-counter {
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  font-size: 14px;
  color: #9b9b9b;
  border-bottom: 1px solid #fefefe;
}

.hot-suggest {
  padding: 4px 12px;

  span {
    display: inline-block;
    height: 15px;
    border-radius: 14px;
    margin: 4px;
    padding: 4px 8px;
    margin-top: 6px;
    line-height: 15px;
  }
}

.keyword {
  font-size: 14px;
  padding: 15px 12px;
}

.search-btn {
  margin-top: 10px;

  .btn {
    width: 342px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    margin: 0 auto;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear);
  }
}
</style>