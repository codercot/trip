<template>
  <div class="order">
    <div class="top">
      <van-nav-bar title="订单列表" left-arrow @click-left="onClickLeft" />
      <van-tabs v-model:active="active">
        <van-tab title="全部订单"></van-tab>
        <van-tab title="近期订单"></van-tab>
        <van-tab title="待支付"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <div class="allorder" v-if="active === 0">
        <order :order="allOrderData"></order>
      </div>
      <div class="recentorder" v-if="active === 1">
        <order :order="recentOrderData"></order>
      </div>
      <div class="pendorder" v-if="active === 2">
        <order :order="pendOrderData"></order>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useOrder from '@/stores/module/order';
import { useRouter } from 'vue-router';
import order from '@/components/order/order.vue';
import { storeToRefs } from 'pinia';
const active = ref(0)
const store = useOrder()
// 网络请求
store.fetAllOredr("all")
store.fetRecentOredr("recent")
store.fetPendOredr("pend")
// 获取数据
const orderStore = useOrder()
const {allOrderData,recentOrderData,pendOrderData}=storeToRefs(orderStore)
const router = useRouter()
const onClickLeft = () => {
  router.push("/home")
}
</script>

<style lang="less" scoped>
// 样式穿透
::v-deep(.van-tab--active) {
  font-weight: 400;
}

.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
.content {
  margin-top: 90px;
}
</style>