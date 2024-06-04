<script setup>

import {onMounted, ref} from "vue";
import {CanvasRenderer} from 'echarts/renderers';
import {use} from 'echarts/core'
import {PieChart} from 'echarts/charts'
import {TooltipComponent, LegendComponent} from 'echarts/components'
import VChart from 'vue-echarts'

const props = defineProps({
  item: Object,
})


use(
    [CanvasRenderer, PieChart, TooltipComponent, LegendComponent]
)

const chartOptions = ref({
  series: [
    {
      name: 'info',
      type: 'pie',
      radius: ['80%', '100%'],
      center: ['50%', '50%'],
      data: [
        {value: 50, name: 'Used'},
        {value: 50, name: 'Empty'}
      ]
    }
  ]
})
// echarts
onMounted(() => {

})


</script>

<template>
  <div class="item">
    <div class="nav-bar" style="display: flex; align-items: center">
      <div class="status-icon" :style="{backgroundColor: item['color']}"></div>
      <div class="item-name">{{ item['name'] }}</div>
    </div>
    <div class="item-content">
      <div class="hardware-info">
        <VChart class="usage-chart cpu-chart" :options="chartOptions"/>
        <VChart class="usage-chart memory-chart" :options="chartOptions"/>
        <VChart class="usage-chart disk-chart" :options="chartOptions"/>
      </div>
      <div class="detail-info">
        <div class="item-content-item" v-for="detail in item['details']">
          <div class="item-content-item-name">{{ detail['name'] }}</div>
          <div class="item-content-item-value">{{ detail['value'] }}</div>
        </div>
      </div>
    </div>
  </div>
  <!--  网格区域-->
</template>

<style scoped>

.usage-chart {
  height: 50px;
  width: 50px;
}

.hardware-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.status-icon {
  border-radius: 50%;
  height: 20px;
  aspect-ratio: 1;
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.item {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  height: 100%;
  width: 100%;
}

.item-name {
  font-size: 20px;
  font-weight: bold;
}

.item-content {

}

.item-content-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-content-item-name {
  font-size: 16px;
  font-weight: bold;
}

.item-content-item-value {
  font-size: 14px;
}
</style>