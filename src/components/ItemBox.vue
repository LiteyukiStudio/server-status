<script setup>
import Host from "@/components/items/Host.vue";

const props = defineProps({
  name: String,
  items: Array,
})

</script>

<template>
<!--  网格-->
  <div class="class-div">

    <div class="box-name">
      {{ name }}
    </div>
    <div class="grid-container">
      <Host v-for="item in items" :key="item.name" :item="item"/>
    </div>
  </div>
</template>

<style scoped>

item-box {
  justify-content: center;
  align-items: center;
}


.class-div {
  padding: 20px;
  margin-top: 30px;
  display: grid;
  gap: 10px;
  background-color: var(--card-c);
  border-radius: 30px;
}

.grid-container {
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-rows: var(--grid-height);
  gap: 20px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

.box-name {
  font-size: 16px;
  font-weight: bold;
}
</style>