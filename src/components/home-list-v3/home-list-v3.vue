<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="../../assets/img/home/location.png" alt="">
          <span>{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <div class="new">￥{{ itemData.finalPrice }}</div>
          <div class="old">￥{{ itemData.productPrice }}</div>
          <div class="tip">{{ itemData?.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-item {
  border-radius: 6px;
  overflow: hidden;
  margin-top:11px;
  .item-inner {
    border: 1px solid #f9f9f9;
    position: relative;
    width: 170px;
    height: 226px;
    font-size: 15px;
    // margin-top: 8px;
    .cover {
      img {
        width: 170px
      }
    }

    .info {
      margin-left: 5px;
      position: absolute;
      bottom: 5px;
      .location {
        margin-top: 8px;

        img {
          width: 17px;
          height: 17px;
        }
      }

      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        .new {
          color: #eccdb4;
          margin: 0 4px;
        }

        .old {
          text-decoration: dotted;
          // margin-left: 3px;
        }

        .tip {
          height: 20px;
          background-color: #ff7967;
          border-radius: 8px;
          line-height: 20px;
          margin-left: 5px;
          color: #fff;
        }
      }
    }
  }

}</style>