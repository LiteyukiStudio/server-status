<script setup xmlns="">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ItemBox from './components/ItemBox.vue'
import Item from './components/Item.vue'

// 设置随机背景
document.body.style.backgroundImage = `url(src/assets/background/bg${1 + Math.floor(Math.random() * 6)}.webp)`;
</script>

<template>
  <div class="nav-bar">
    <div class="logo-div" style="border-radius: 50%; height: 100%; aspect-ratio: 1; margin-right: 10px">
      <img alt="Liteyuki logo" class="logo"
           src="https://cdn.liteyuki.icu/static/img/liteyuki_icon_640.png" height="100%"
           style="aspect-ratio: 1/1;"/>
    </div>
    <div class="title">Liteyuki Status</div>
  </div>
  <item-box/>
  <item-box/>
</template>
<style scoped>
:root{
  card-bg-color: rgba(255, 255, 255, 0.8);
}

header {
  line-height: 1.5;
}

body {
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
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
}

.nav-bar .logo {
  position: relative;
  display: inline-block;
}

.nav-bar .logo::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://cdn.liteyuki.icu/static/img/liteyuki_icon_640.png') no-repeat;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.nav-bar .title {
  font-size: 1.3rem;
  font-weight: 700;
}


@media (min-width: 1024px) {

}
</style>
