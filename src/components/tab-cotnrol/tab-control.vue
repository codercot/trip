<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="index">
      <div class="tabitem" :class="{ active: index === currentIndex }" @click="btnclick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  titles: {
    type: Array,
    default: []
  }
})
const currentIndex = ref(0)
const btnclick = (index) => {
  currentIndex.value = index
}
</script>

<style lang="less" scoped>
.tab-control {
  height: 44px;
  display: flex;
  text-align: center;
  align-items: center;
  // background-color: #f2f4f5;
  .tabitem {
    flex: 1;
    
  }
  .active span{
    border-bottom: 2px solid var(--primary-color);
    padding: 8px;
    }
    
}
</style>