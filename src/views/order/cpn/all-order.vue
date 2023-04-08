<template>
  <div class="allorderlist">
    <!-- <order :order="allOrder"></order> -->
  </div>
</template>

<script setup>
import useOrder from '@/stores/module/order';
import { storeToRefs } from 'pinia';
import order from '@/components/order/order.vue';
const orderStore = useOrder()
const { allOrder } = storeToRefs(orderStore)
</script>

<style lang="less" scoped>

</style>