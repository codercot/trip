<template>
  <div class="item-list">
    <template v-for="(item, index) in favourData" :key="index">
      <div class="item">
        <div class="top">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <template v-for="(iten, indey) in item.pictureList">
              <van-swipe-item><img :src="iten" alt=""></van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
              <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
            </template>
          </van-swipe>

        </div>
        <div class="infos">
          <div class="tops">
            <span class="adress">{{ item.address }}</span>
            <span v-for="(iten, index) in item.unitSummeries.slice(0, 2)" class="people">
              {{ iten.text }}
            </span>
          </div>
          <div class="center">
            <span class="name">{{ item.unitName }}</span>
            <span class="discount" v-for="(ite, index) in item.houseTags"
              :style="{ color: ite.color, backgroundColor: ite.background.color }">
              {{ ite.text }}
            </span>
          </div>
          <div class="bottom">
            <div class="price">￥{{ item.allActiveAndRedPacket.everyDayAmount }}</div>
            <span class="old">￥{{ item.productPrice }}</span>
            <div class="dis">
              <div class="icon"></div>
              <span>{{ item.priceTipBadge?.text }}</span>
            </div>
          </div>
        </div>
        <div class="comment">
          <div class="title">
            <img :src="item.logoUrl" alt="">
          </div>
          <img src="../../../assets/img/search/tj-mob-ui_unit-item_collected-new.png" alt="" class="pad">
          <div class="com">
            <img src="@/assets/img/search/tj-mob-ui_unit-item_comment-new.png" alt="">
            {{ item.commentBriefForCD.totalCount }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>

import { ref } from 'vue';
const props = defineProps({
  favourData: Array,
  default: () => []
})

const value = ref(1)
</script>

<style lang="less" scoped>
.item {
  position: relative;
  // height: 360px;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 10px;

  .top {
    img {
      width: 100%;
    }
  }

  .infos {
    .tops {
      display: flex;
      margin-top: 8px;

      .adress {
        display: block;
        background-color: #3f4954;
        color: #fff;
        font-size: 12px;
        padding: 2px 5px;
        border-radius: 2px;

      }

      .people {
        margin-left: 8px;
        font-size: 10px;
        color: #ff9645;
      }
    }

    .center {
      .name {
        font-size: 18px;
        display: block;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-top: 8px;
      }

      .discount {
        display: inline-block;
        padding: 4px 3px 4px 3px;
        margin-top: 6px;
        font-size: 12px;
        margin-left: 6px;
        border-radius: 3px;
      }
    }

    .bottom {
      margin-top: 5px;
      display: flex;
      align-items: center;

      .price {
        font-size: 20px;
        font-weight: 700;
        color: #ff9645;
      }

      .old {
        font-weight: 500;
        font-size: 12px;
        text-decoration: line-through;
        color: #999;
        padding-left: 5px;
      }

      .dis {
        display: flex;
        background: rgb(251, 74, 74);
        border-radius: 8px;
        font-size: 12px;
        color: #fff;
        padding: 1px 5px;
        align-items: center;
        justify-content: center;
        margin-left: 8px;

        .icon {
          width: 10px;
          height: 10px;
          background: url(https://fe.tujiacdn.com/pwa/static/fevueui/images/unit-item-m/icon-unit-sound.png) no-repeat;
          background-size: 10px 10px;
          background-position: 50%;
          margin-bottom: 1px;
        }
      }
    }
  }

  .comment {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 8px;
    top: 30px;
    .pad {
      padding: 10px 0;
    }
    img {
      height: 30px;
      width: 30px;
    }

    .title {
      img {
        border-radius: 20px;
        width: 40px;
        height: 40px;
      }
    }
    .com {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
}

.custom-indicator {
  position: absolute;
  right: 6px;
  bottom: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
}</style>