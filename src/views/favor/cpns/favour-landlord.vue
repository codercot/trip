<template>
  <div class="landlord">
   <img src="../../../assets/img/favor/empty_favorite.44731802.png" alt="">
   <span>暂无收藏</span>
   <div class="fav">
    <span>点击 <img src="../../../assets/img/favor/favor.png" alt=""> 即可收藏对应的房东</span>
   </div>
   <span class="redirect" @click="btnclick">随便去逛逛</span>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
  const btnclick = ()=>{
    router.push("/home")
  }
</script>

<style lang="less" scoped>
.landlord {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fb;
  height: 85vh;
  img {
    width: 100%;
  }
  .fav {
    padding: 15px 0 20px 0;
    img {
      width: 15px;
      height: 15px;
    }
  }

  .redirect {
    display: block;
    height: 20px;
    background-color: #ff9856;
    padding: 10px 40px;
    border-radius: 20px;
    color: #fff;
  }

}
</style>
