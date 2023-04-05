<template>
  <div class="app">
    <RouterView v-slot="props">
    <KeepAlive include="home">
      <component :is="props.Component"></component>
    </KeepAlive>
  </RouterView>
    <TabBar></TabBar>
  </div>
</template>

<script setup>
import TabBar from '@/components/tabbar/tabbar.vue'
import { useRoute } from 'vue-router';
const router = useRoute()
</script>

<style scoped>

</style>