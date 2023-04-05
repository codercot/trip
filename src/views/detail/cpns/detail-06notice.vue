<template>
  <div class="notice">
    <detailSelect title="预定须知">
      <div class="notice-inner">
        <template v-for="(item,index) in orderRules">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="intro">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detailSelect>
  </div>
</template>

<script setup>
  import detailSelect from '@/components/detail/detail-select.vue';
  
</script>

<style lang="less" scoped>

</style>