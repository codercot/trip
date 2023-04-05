<template>
  <div class="info">
    <div class="name">
      {{ topInfos.houseName }}
    </div>
    <div class="tags">
      <template v-for="(item, index) in topInfos?.houseTags" :key="index">
        <span v-if="item.tagText" 
        :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="score"> {{ topInfos.commentBrief.overall }} </span>
        <span class="title"> {{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="com">{{ topInfos.commentBrief.totalCount }}条评论
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="location">
      <div class="left">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">
        地图.周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.info {
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  .name {
    font-weight: 700;
    font-size: 22px;
    padding: 20px 0 5px;
  }
  .tags {
    display: flex;
    font-size: 14px;
    flex-wrap: wrap;
    span {
      margin-left: 5px;
    }
  }
  .comment {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    background-color: #f5f7fb;
    border-radius: 8px;
    margin-top: 10px;
    padding: 0 10px;
    .score {
      font-size: 22px;
      font-weight: 700;
    }
    .brief {
      font-size: 14px;
    }
    .title {
      font-weight: 700;
    }
    .com {
      color: #ff9856;
      font-size: 14px;
    }
  }
  .location {
    display: flex;
    background-color: #f5f7fb;
    width: 100%;

    align-items: center;
    padding: 10px 10px;
    margin-top: 10px;
    border-radius: 8px;
    .left {
      flex: 1;
      font-weight: 600;
      font-size: 15px;
    }
    .right {
      width: 75px;
      display: flex;
      color: #ff9856;
      font-size: 14px;
      // justify-content: center;
      // flex-wrap: nowrap;
      // flex-direction: column;
    }
  }
}

</style>