import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/SwitchDemo.vue'
import Button from './views/ButtonDemo.vue'
import Tabs from './views/TabsDemo.vue'
import Dialog from './views/DialogDemo.vue'
import DocDemo from './views/DocDemo.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:"/",component:Home},
    {path:'/Doc',component:Doc,
      children:[
        {path:'',component:DocDemo},
        {path:'Switch',component:Switch},
        {path:'Button',component:Button},
        {path:'Dialog',component:Dialog},
        {path:'Tabs',component:Tabs}
      ]}
  ]
})
export default router