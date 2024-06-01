<script setup xmlns="">
import ItemBox from './components/ItemBox.vue'
import {h, ref} from "vue";

let bg = `url(img/background/bg${1 + Math.floor(Math.random() * 6)}.webp)`
// 修改#app的背景
document.getElementById('app').style.backgroundImage = bg;
// 修改body背景 + 模糊
document.body.style.backgroundImage = bg;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backdropFilter = 'blur(10px)';

let data = ref([]);

fetch('test_source.json')
    .then(response => response.json())
    .then(jsonData => {
          jsonData.forEach(element => {
            // 添加ItemBox，遍历element.children添加Item
            data.value = jsonData
          });
        }
    )
</script>

<template>
  <div class="nav-bar">
    <div class="logo-div" style="border-radius: 50%; height: 100%; aspect-ratio: 1; margin-right: 10px">
      <img alt="Liteyuki logo" class="logo"
           src="https://cdn.liteyuki.icu/static/img/liteyuki_icon_640.png" height="100%"
           style="aspect-ratio: 1/1;"/>
    </div>
    <div class="title">Liteyuki Status 后端开发中，此处仅为展示数据...</div>
  </div>
  <ItemBox v-for="itemBox in data" :key="itemBox.name" :name="itemBox.name" :items="itemBox.children"/>
</template>
<style scoped>


header {
  line-height: 1.5;
}

.nav-bar {
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--card-c);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 60px;
  backdrop-filter: blur(10px);
  margin-bottom: 20px;
}

.nav-bar .logo {
  position: relative;
  display: inline-block;
}

.nav-bar .title {
  font-size: 1.3rem;
  font-weight: 700;
}

@media (min-width: 600px) {
  .nav-bar {
  }
}
</style>
