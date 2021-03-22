import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/SwitchDemo.vue'
import Button from './views/ButtonDemo.vue'
import Tabs from './views/TabsDemo.vue'
import Dialog from './views/DialogDemo.vue'
import DocDemo from './views/DocDemo.vue'
import Markdown from './components/Markdown.vue'
import {h} from 'vue'

const md = filename => h(Markdown,{path:`../markdown/${filename}.md`, key: filename})
import {createRouter,createWebHashHistory} from 'vue-router'
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:"/",component:Home},
    {path:'/Doc',component:Doc,
      children:[
        {path:'',component:DocDemo},
        { path: "intro", component: md("intro") },
        { path: "get-started", component: md("get-started") },
        { path: "install", component: md("install") },
        {path:'Switch',component:Switch},
        {path:'Button',component:Button},
        {path:'Dialog',component:Dialog},
        {path:'Tabs',component:Tabs}
      ]}
  ]
})
export default router