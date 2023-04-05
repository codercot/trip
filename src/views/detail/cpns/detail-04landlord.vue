<template>
  <div class="homlandlorde">
    <detailSelect title="房东介绍" text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlord?.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img src="" alt="">
            </div>
            <div class="info">
              <div class="name"></div>
              <div class="tags">
                <template>
                  <div class="item">
                    <span></span>
                    <span></span>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </detailSelect>
  </div>
</template>

<script setup>
import detailSelect from '@/components/detail/detail-select.vue';
defineExpose({
  landlord:{
    type:Object,
    default:()=>({})
  }
})
</script>

<style lang="less" scoped></style>