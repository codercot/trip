<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <!-- 这里需要在第一组前面加上自定义的一小组 -->
      <div class="list">
        <template v-for="items in groupData.hotCities">
          <div class="city" @click="cityClick(items)">{{ items.cityName }}</div>
        </template>
      </div>
      <template v-for="(item, index) in groupData.cities">
        <van-index-anchor :index="item.group" />
        <template v-for="(iten, indey) in item.cities">
          <van-cell :title="iten.cityName" @click="cityClick(iten)"/>
        </template>
      </template>
    </van-index-bar>

    <!-- currentGrop一开始没有数据，要加上问号进行判断 -->
    <!-- <template v-for="(item, index) in groupData.cities" :key="index">
      <div class="group-item">
        <h2>{{ item.group }}</h2>
        <div class="list">
          <template v-for="(iten, indey) in item.cities" :key="indey">
            <div class="city">{{ iten.cityName }}</div>
          </template>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import useCity from '@/stores/module/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  groupData: {
    type: Object,
    // 默认返回一个空对象
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = props.groupData.cities?.map(it => it.group)
  list?.unshift("#")
  return list
})
// 监听点击
const router = useRouter()
const cityStore = useCity()
const cityClick=(city)=>{
  // console.log(city); 存储到pinia中
  cityStore.currentCity=city
  router.back()
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 25px;

  .city {
    width: 70px;
    height: 28px;
    background-color: #fff4ec;
    border-radius: 14px;
    text-align: center;
    line-height: 28px;
    margin: 10px 0;
  }
}
</style>