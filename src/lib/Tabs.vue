<template>
  <div>
    Tabs 组件
    <component :is="defaults[0]"></component>
    <component :is="defaults[1]"></component>
  </div>
</template>
<script lang="ts">
import Tab from  './Tab.vue'
export default {
  setup(props, context) {
    console.log(...context.slots.default());
    const defaults = context.slots.default();
    defaults.forEach((tag)=>{
      if(tag.type !== Tab){
        throw new Error('子组件必须是Tab')
      }
    })
    return {defaults}
  }
};
</script>