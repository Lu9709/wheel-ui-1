import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:"/",component:Home},
    {path:'/Doc',component:Doc}
  ]
})
const app =createApp(App)
app.use(router)
app.mount('#app')
