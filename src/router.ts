import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/Switch.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:"/",component:Home},
    {path:'/Doc',component:Doc,children:[
        {path:'Switch',component:Switch}
      ]}
  ]
})
export default router