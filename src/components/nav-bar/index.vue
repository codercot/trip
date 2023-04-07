<template>
  <van-nav-bar left-arrow @click-left="onClickLeft">
    <template #left>
      <slot name="left">
        <span @click="btnclick" style="color: #ff9856;font-size: 18px;">{{ LeftText }}</span>
      </slot>
    </template>
    <template #title>
      <slot name="title">
        {{ title }}
      </slot>
    </template>
    <template #right>
      <slot name="right">
        <i></i>
      </slot>
    </template>
  </van-nav-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
defineProps({
  LeftText: {
    type: String,
    default:"默认内容"
  },
  title: {
    type: String
  }
})
const emit = defineEmits(["leftClick"]);

const router = useRouter();
const onClickLeft = () => {
  router.go(-1);
  emit("leftClick");
};

const btnclick =()=>{
  router.push("/home")
}
</script>

<style lang="less" scoped></style>