import './assets/main.css'

import {createApp, h} from 'vue'
import App from './App.vue'
import Item from "@/components/Item.vue";
import ItemBox from "@/components/ItemBox.vue";

const app = createApp(App)
app.mount('#app')
//
// app.component('Item', Item)
// app.component('ItemBox', ItemBox)

