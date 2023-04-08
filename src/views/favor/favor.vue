<template>
  <div class="favor">
    <NavBar LeftText="< 旅途">
      <template #title>
        <van-tabs v-model:active="active" type="card">
          <van-tab v-for="(item, index) in title" :title="item"></van-tab>
        </van-tabs>
      </template>
    </NavBar>

    <!-- 我的收藏 -->
    <div v-if="active === 0">
      <van-tabs v-model:active="activeName">
        <van-tab title="房屋" name="house">
          <div class="content">
            <favourHouseItem :favour-data="favourData"></favourHouseItem>
          </div>
        </van-tab>
        <van-tab title="房东" name="b">
          <favourLandlord></favourLandlord>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 浏览历史 -->
    <div class="history" v-if="active===1">
     <favourHistory :favourHistoryData="favourHistoryData"></favourHistory>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/nav-bar/index.vue';
import favourHouseItem from './cpns/favour-house-item.vue';
import favourLandlord from './cpns/favour-landlord.vue';
import favourHistory from './cpns/favour-history.vue'
import { getFavourData,getHistoryData } from '@/services'
import { ref } from 'vue';
const active = ref(0)
const title = ref(["我的收藏", "浏览历史"])
const activeName = ref("house");
const favourData = ref([])
const favourHistoryData = ref([])
getFavourData().then((res) => {
  favourData.value = res.data.data.items
  
})
getHistoryData().then((res)=>{
  favourHistoryData.value=res.data.data.items
  // console.log(res.data.data.items);
})
</script>

<style lang="less" scoped>
.content {
  padding:5px 20px 50px 20px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #f7f8fb;
}
</style>