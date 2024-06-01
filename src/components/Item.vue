<script setup>

const props = defineProps({
  item: Object,
})

</script>

<template>
  <div class="item">
    <div class="nav-bar" style="display: flex; align-items: center">
      <div class="status-icon" :style="{backgroundColor: item['color']}"></div>
      <div class="item-name">{{item['name']}}</div>
    </div>
    <div class="item-content">
    </div>
  </div>
  <!--  网格区域-->
</template>

<style scoped>

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