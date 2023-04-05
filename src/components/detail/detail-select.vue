<template>
  <div class="select">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="contnet">
      <slot>我是默认内容</slot>
    </div>
    <div class="footer" v-if="text.length">
      <span class="more">{{ text }}
        <van-icon name="arrow" />
      </span>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title:{
      type:String,
      default:"我是默认标题"
    },
    text :{
      String,
      default:""
    }
  })
</script>

<style lang="less" scoped>
.select {
  margin-top: 25px;
  padding: 0 15px;
  .header {
    .title {
      font-size: 20px;
      border-bottom: 2px solid #f5f5f5;
      padding: 10px 0;
    }
  }
  .footer {
    text-align: right;
  }
  .footer {
    padding: 10px 0;
    color: #ff9856;
  }
}
</style>