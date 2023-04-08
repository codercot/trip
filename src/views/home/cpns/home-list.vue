<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList">
        <home-list-v9 :item-data="item.data" v-if="item.discoveryContentType === 9" @click="itemclick(item.data)" />
        <home-list-v3 :item-data="item.data" v-else-if="item.discoveryContentType === 3" @click="itemclick(item.data)" />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/module/home';
import homeListV9 from '@/components/home-list-v9/home-list-v9.vue';
import HomeListV3 from '@/components/home-list-v3/home-list-v3.vue';
import { useRouter } from 'vue-router';
const homeStore = useHomeStore()
const { houseList } = homeStore
const router = useRouter()
const itemclick = (item) => {
  // 点击跳转到detail页面
  router.push("/detail/" + item.houseId)
}
</script>

<style lang="less" scoped>
.content {
  margin-top: 10px;
  padding-bottom: 200px;
  padding: 0 4px 0;

  .title {
    font-size: 22px;
    margin-left: 12px;
  }

  .list {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: space-between;
    flex-wrap: wrap;
  }
}
</style>