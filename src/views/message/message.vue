<template>
  <div class="message">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <img src="../../assets/img/message/icon_message.png" alt="">
      <span class="info">暂无聊天消息</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const onClickLeft = () => {
  router.push("/home")
}
</script>

<style lang="less" scoped>
.message {
  background-color: #f7f8fb;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  // background-color: #f7f8fb;
  margin-top: 100px;
  height: 80vh;
  img {
    width: 88%;
  }
}
</style>