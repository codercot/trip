<template>
  <div class="detail hiden" ref="deRef">
    <div class="tab" v-if="isshow">
      <tabControl :titles="['abc', 'cbn', 'nba', 'aaa']"></tabControl>
    </div>
    <van-nav-bar title="房间详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="mainPart">
      <detailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail02info :top-infos="mainPart.topModule" />
      <detail03facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <!-- <Detail04landlord :landlord="mainPart.dynamicModule.landlordModule"/> -->
      <!-- <detail06notice/> -->
      <detail07Map :position="mainPart.dynamicModule.positionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_check.png" alt="">
      <div class="text">弘源旅途，永无止境</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/services'
import detailSwipe from './cpns/detail-01swipe.vue'
import detail02info from './cpns/detail-02info.vue';
import detail03facility from './cpns/detail-03facility.vue';
import Detail04landlord from './cpns/detail-04landlord.vue';

import detail06notice from './cpns/detail-06notice.vue';
import detail07Map from './cpns/detail-07-map.vue';
import tabControl from '@/components/tab-cotnrol/tab-control.vue';
import usescroll from '@/hooks/useScroll.js'
const router = useRouter()
const route = useRoute()
const houseId = route.params.id
const detailData = ref({})
const mainPart = computed(() => detailData.value.mainPart)
// 网络请求数据
getDetailInfos(houseId).then(res => {
  detailData.value = res.data
})

const onClickLeft = () => {
  router.back()
}
const deRef = ref()
const {scrollTop} = usescroll(deRef)
const isshow = computed(()=>{
  return scrollTop.value>20
})
</script>

<style lang="less" scoped>
.tab {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
  padding: 10px 0 15px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 390px;
  color: #ff9856;
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto;
}
</style>