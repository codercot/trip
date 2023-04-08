<template>
  <div class="orderlist">
    <template v-for="(item, index) in order?.orders">
      <div class="item">
        <div class="top">
          <div class="info">
            <span class="name">{{ item.unitName }}</span>
            <span class="status">{{ item.orderStatusDesc }}</span>
            <img :src="item.unitPicture" alt="">
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../assets/img/order/icon-time.png" alt="">
            <span class="time">{{ item.cancelReasonCode }}分</span>
            <span class="end">{{ item.summary }}</span>
          </div>
          <div class="right">
            <div class="phone">联系房东</div>
            <div class="pay">去支付</div>
          </div>
        </div>
        <div class="data">
          <div class="left">
            <div class="startdata">
              <div class="month">{{ formateMonDay(item.checkInDate,"M月DD日") }}</div>
              <div class="week-time">
                <span class="week">周三</span>
                <span class="time">15:00</span>
              </div>
            </div>
          </div>
          <img src="../../assets/img/order/icon_right_orderlist.png" alt="" class="arrow">
          <div class="center">
            <div class="enddata">
              <div class="month">{{ formateMonDay(item.checkOutDate,"M月DD日") }}</div>
              <div class="week-time">
                <span class="week">周四</span>
                <span class="time">12:00</span>
              </div>
            </div>
          </div>
          <div class="right">
            <span class="pay">支付总价</span>
            <span class="price">￥289</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { formateMonDay } from '@/utils/formate';
const props = defineProps({
  order:{
    type :Object,
    default:()=>({})
  }
})
console.log(props.order.orders);
</script>

<style lang="less" scoped>
.orderlist {
  background-color: #f7f8fb;

  .item {
    position: relative;
    background-color: #ffffff;
    margin-top: 10px;
    padding: 0 20px;
  }

  .top {
    .info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      .status {
        color: #ff9856;
        font-weight: 600;
        font-size: 17px;
      }

      .name {
        padding: 20px 0;
        font-size: 12px;
        max-width: 220px;
        overflow: hidden;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      img {
        border-radius: 6px;
        width: 100%;
      }
    }
  }

  .bottom {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      line-height: 11px;

      .time,
      .end {
        font-size: 11px;
      }

      .time {
        color: var(--primary-color);
      }

      .end {
        color: #666666;
      }

      img {
        width: 11px;
        height: 11px;
      }
    }

    .right {
      display: flex;

      .phone {
        border-radius: 4px;
        border: 1px solid #e9e9e9;
        padding: 8px 8px;
      }

      .pay {
        border-radius: 4px;
        color: #fff;
        background-color: var(--primary-color);
        padding: 8px 10px;
        margin-left: 10px;
      }
    }
  }

  .data {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 65px;
    left: 0;
    right: 0;
    width: 335px;
    height: 60px;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
    background: rgba(9, 10, 14, 0.7);

    .arrow {
      width: 16px;
      height: 12px;
    }

    .month {
      font-size: 16px;
    }

    .week-time {
      font-size: 12px;
      margin-top: 2px;
      color: #d9d9d9;
    }

    .left {
      .startdata {
        color: #fff;

      }
    }

    .center {
      .enddata {
        color: #fff;
      }
    }

    .right {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .pay {
        color: #fff;
      }

      .price {
        color: var(--primary-color);
      }
    }
  }
}</style>