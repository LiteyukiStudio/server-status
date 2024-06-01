<script setup>
</script>

<template>
  <div class="item">
    <div class="item-name">Jiulongpo A1</div>
    <div class="item-content">
      <div class="item-content-item">
        <div class="item-content-item-name">CPU</div>
        <div class="item-content-item-value">Xeon E5-2678 v3</div>
      </div>
      <div class="item-content-item">
        <div class="item-content-item-name">RAM</div>
        <div class="item-content-item-value">64GB</div>
      </div>
      <div class="item-content-item">
        <div class="item-content-item-name">Disk</div>
        <div class="item-content-item-value">1TB</div>
      </div>
      <div class="item-content-item">
        <div class="item-content-item-name">Network</div>
        <div class="item-content-item-value">1Gbps</div>
      </div>
    </div>
  </div>
  <!--  网格区域-->
</template>

<style scoped>
.item {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  max-height: 200px;
  width: 200px;
}

.item-name {
  font-size: 20px;
  font-weight: bold;
}

.item-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
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