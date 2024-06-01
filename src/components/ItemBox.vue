<script setup>
import Item from "@/components/Item.vue";
</script>

<template>

  <!--  网格区域-->
  <div class="class-div">
    <div class="box-name">
      Virtual Machine
    </div>
    <div class="grid-container">
      <item/>
      <item/>
      <item/>
      <item/>
    </div>
  </div>
</template>

<style scoped>
.class-div {
  padding: 20px;
  margin-top: 30px;
  display: grid;
  gap: 10px;
  background-color: var(--card-c);
  border-radius: 30px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.box-name {
  font-size: 16px;
  font-weight: bold;
}
</style>