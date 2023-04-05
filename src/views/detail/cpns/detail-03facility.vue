<template>
  <div class="facility">
    <detailSelect title="房屋设施" text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item, index) in houseFacility?.houseFacilitys.slice(0,3)" :key="index">
          <div class="item">
            <div class="head">
              <img :src="item.icon" alt="">
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="(iten, inden) in item.facilitys.slice(0, 4)" :key="inden">
                <div class="iten">
                  <i class="icon_check icon"></i>
                  <span>{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detailSelect>
  </div>
</template>

<script setup>
import detailSelect from '@/components/detail/detail-select.vue';
defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.facility-inner {
  .item {
    display: flex;
    justify-content: space-between;
    background-color: #f5f7fb;
    padding: 10px 0;
    .head {
      img {
        width: 30px;
        height: 30px;
      }
    }
    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .iten {
        display: flex;
        width: 50%;
        // justify-content: center;
        align-items: center;

        .icon_check {
          display: block;
          width: 24px;
          height: 24px;
          background: url(../../../assets/img/detail/icon_check.png) no-repeat;
        }
        span {
          margin-left: 5px;
        }
      }
    }

    .head {
      width: 90px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

  }
}</style>