<template>
  <div class="map">
    <detailSelect title="地图周边" text="查看更多周边信息">
      <div class="baidu" ref="mapref"></div>
    </detailSelect>

  </div>
</template>

<script setup>
import detailSelect from '@/components/detail/detail-select.vue';
import { onMounted, ref } from 'vue';

const props=defineProps({
  position:{
    type:Object,
    default:()=>({})
  }
})

const mapref = ref()
onMounted(() => {
  const map = new BMapGL.Map(mapref.value);
  const point = new BMapGL.Point(props.position.longitude, props.position.latitude);
  map.centerAndZoom(point, 15);
  const marker = new BMapGL.Marker(point);        // 创建标注   
  map.addOverlay(marker);                         // 将标注添加到地图中
})
</script>

<style lang="less" scoped>
.map {
  .baidu {
    height: 300px;
  }
}
</style>