import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch/SwitchDemo.vue'
import Button from './components/Button/ButtonDemo.vue'
import Tabs from './components/Tabs/TabsDemo.vue'
import Dialog from './components/Diaglog/DialogDemo.vue'
import Markdown from './components/Markdown.vue'
// @ts-ignore
import intro from './markdown/intro.md'
// @ts-ignore
import install from './markdown/install.md'
// @ts-ignore
import getStarted from './markdown/get-started.md'
import {h} from 'vue'

const md = string =>h(Markdown,{content:string,key:string})
import {createRouter,createWebHashHistory} from 'vue-router'
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:"/",component:Home},
    {path:'/Doc',component:Doc,
      children:[
        {path:"",redirect:"/doc/intro"},
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        {path:'Switch',component:Switch},
        {path:'Button',component:Button},
        {path:'Dialog',component:Dialog},
        {path:'Tabs',component:Tabs}
      ]}
  ]
})
export default router