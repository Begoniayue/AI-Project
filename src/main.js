import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import './assets/iconfont/iconfont.js';
// import waterfall from 'vue-waterfall2'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app= createApp(App)

app.use(router)
app.use(pinia)
// app.use(waterfall)
app.component('SvgIcon', SvgIcon);
app.mount('#app')
