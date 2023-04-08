<template>
  <div class="recent">
    <!-- <order :recent-order="recentOrder"></order> -->
  </div>
</template>

<script setup>
import useOrder from '@/stores/module/order';
import { storeToRefs } from 'pinia';
import order from '@/components/order/order.vue';
const orderStore = useOrder()
const { recentOrder } = storeToRefs(orderStore)
</script>

<style lang="less" scoped></style>