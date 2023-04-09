<template>
  <div class="content">
    <div class="city">
      <span>{{ $route.query.currentCity }}
      </span>
    </div>
    <div class="data">
      <div class="startdata">
        <div class="start">住</div>
        <div class="time">{{ $route.query.startDate }}</div>
      </div>
      <div class="enddata">
        <div class="end">离</div>
        <div class="time">{{ $route.query.endDate }}</div>
      </div>
    </div>
    <div class="search">
      <span class="keyword">搜索博尔塔拉的景点、地标、房源</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

.content {
  width: 270px;
  display: flex;
  // justify-content: space-between;
  height: 35px;
  align-items: center;
  color: #333333;
  background-color: #f2f4f6;
  border-radius: 3px;

  .city {
    height: 35px;
    border-right: 2px solid #fff;
    line-height: 35px;

    span {
      font-size: 14px;
      font-weight: 400;
      padding: 0 6px;
    }
  }

  .data {
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 3px;

    .start,
    .end {
      font-size: 10px;
    }

    .time {
      font-size: 10px;
    }

    .startdata {
      display: flex;

    }

    .enddata {
      display: flex;
      margin-top: -5px;
    }

    .start,
    .end {
      color: #a5a6a6;
    }
  }

  .search {
    height: 35px;
    color: #a5a6a6;
    border-left: 3px solid #fff;
    margin-left: 10px;
    line-height: 35px;
    max-width: 175px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .keyword {
      margin-left: 8px;
      font-size: 12px;
    }
  }

}
</style>