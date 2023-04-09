<template>
  <div class="search hiden">
    <div class="nav">
      <div class="top">
        <NavBar>
          <template #left>
            <van-nav-bar left-arrow @click-left="onClickLeft" />
          </template>
          <template #title>
            <searchTop></searchTop>
          </template>
        </NavBar>
      </div>
      <div class="select">
        <DropdownSelect :items-data="searchSelectData"></DropdownSelect>
      </div>
    </div>
    <div class="house-list">
      <favourHouseItem :favourData="searchHouseListData"></favourHouseItem>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/components/nav-bar/index.vue';
import searchTop from './cpn/search-top.vue';
import DropdownSelect from '../../components/dropdown-select/index.vue';
import favourHouseItem from '@/views/favor/cpns/favour-house-item.vue';
import { getSearchSelect, getSearchList } from "../../services/index"
const router = useRouter()
const onClickLeft = () => {
  router.push("/home")
}
const searchSelectData = ref([])
const searchHouseListData = ref([])
getSearchSelect().then((res) => {
  searchSelectData.value = res.data.data.allConditions
})
getSearchList().then((res) => {
  // console.log(res.data.data.items);
  searchHouseListData.value = res.data.data.items
})
</script>

<style lang="less" scoped>
:global(.van-nav-bar .van-nav-bar__content .van-nav-bar__title) {
  width: 73%;
  max-width: 100%;
}

:global(.van-nav-bar__left) {
  left: -8px !important;
}
:global(.van-ellipsis) {
  font-size: 12px;
}

.house-list {
  padding: 0 20px;
  margin-top: 110px;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  
}
</style>