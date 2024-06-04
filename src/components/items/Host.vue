<script setup>
import '../../assets/css/item.css';
import * as echarts from "echarts";
import {nextTick, onMounted, ref, watchEffect} from "vue";

const props = defineProps({
  item: Object,
})

const cpuChartRef = ref(null);
const memoryChartRef = ref(null);
const diskChartRef = ref(null);


onMounted(async function () {
  // if (!cpuChartRef.value || !memoryChartRef.value || !diskChartRef.value) {
  //   return;
  // }
  let cpuChart = echarts.init(cpuChartRef.value);
  let memoryChart = echarts.init(memoryChartRef.value);
  let diskChart = echarts.init(diskChartRef.value);
  cpuChart.setOption(
      {
        title: {
          text: 'CPU',
          left: 'center',
          top: 'center',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 14,
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 50, name: 'CPU'},
              {value: 50, name: '空闲'}
            ]
          }
        ]
      }
  )
  memoryChart.setOption(
      {
        title: {
          text: '内存',
          left: 'center',
          top: 'center',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 14,
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 50, name: '内存'},
              {value: 50, name: '空闲'}
            ]
          }
        ]
      }
  )
  diskChart.setOption(
      {
        title: {
          text: '磁盘',
          left: 'center',
          top: 'center',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 14,
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 50, name: '磁盘'},
              {value: 50, name: '空闲'}
            ]
          }
        ]
      }
  )
}, undefined)


</script>

<template>
  <div class="item">
    <div class="nav-bar" style="display: flex; align-items: center">
      <!--       macos选项卡三个点-->
      <div class="status-icon" :style="{backgroundColor: '#FF5F57'}"></div>
      <div class="status-icon" :style="{backgroundColor: '#FFBD2E'}"></div>
      <div class="status-icon" :style="{backgroundColor: '#27C93F'}"></div>
      <div class="item-name">{{ item['name'] }}</div>
    </div>
    <div class="item-content">
      <div class="hardware-info">
        <div class="usage-chart cpu-chart" ref="cpuChartRef"></div>
        <div class="usage-chart memory-chart" ref="memoryChartRef"></div>
        <div class="usage-chart disk-chart" ref="diskChartRef"></div>
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
</style>