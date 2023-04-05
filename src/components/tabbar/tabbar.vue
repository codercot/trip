<template>
  <div class="tab-bar">
    <van-tabbar v-model="currendIndex" active-color="#ff9645">
      <template v-for="(item, index) in tabBarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img :src="getAssetURL(item.image)" alt="" v-if="currendIndex !== index">
            <img :src="getAssetURL(item.imageActive)" alt="" v-else>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabBarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load_assets'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

// 解决手动改变地址，下面图片对应不上的问题
const currendIndex = ref(0)
const route = useRoute()
watch(route, (newValue) => {
  const index = tabBarData.findIndex(item => item.path === newValue.path)
  currendIndex.value = index
})

</script>

<style lang="less" scoped>
.tab-bar {
  // --van-tabbar-item-icon-size:50px !important;
  // :deep(.van-tabbar-item__icon) {
  //   font-size: 50px;
  // }
  img {
    height: 26px;
  }
}
</style>