import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'  //如果需要axios，请引入
import ElementPlus from 'element-plus' // 引入element-plus库
import 'element-plus/dist/index.css' // 引入element-plus样式

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VForm3 from 'vform3-builds' // 引入VForm3库

import 'vform3-builds/dist/designer.style.css' // 引入VForm3样式

const app = createApp(App)

app.use(store).use(router)
app.use(ElementPlus) // 全局注册element-plus
app.use(VForm3) // 全局注册VForm3(同时注册了v-form-designe、v-form-render等组件)
/* 注意：如果你的项目中有使用axios，请用下面一行代码将全局axios复位为你的axios！！ */
// window.axios = axios
app.mount('#app')
