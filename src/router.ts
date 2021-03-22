import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/SwitchDemo.vue'
import Button from './views/ButtonDemo.vue'
import Tabs from './views/TabsDemo.vue'
import Dialog from './views/DialogDemo.vue'
import DocDemo from './views/DocDemo.vue'
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:"/",component:Home},
    {path:'/Doc',component:Doc,
      children:[
        {path:'',component:DocDemo},
        { path: "intro", component: Intro },
        { path: "get-started", component: GetStarted },
        { path: "install", component: Install },
        {path:'Switch',component:Switch},
        {path:'Button',component:Button},
        {path:'Dialog',component:Dialog},
        {path:'Tabs',component:Tabs}
      ]}
  ]
})
export default router