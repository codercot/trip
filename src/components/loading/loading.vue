<template>
  <div class="loading" v-if="mainStore.isLoading" @click="isShow">
    <div class="bg">
      <img src="../../assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
  import usemainStore from '@/stores/module/main';
  const mainStore = usemainStore()
  const isShow = ()=>{
    mainStore.isLoading=false
  }
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
  .bg {
    width: 104px;
    height: 104px;
    background: url(../../assets/img/home/loading-bg.png) 0 0 /100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>