<template>
  <div>
    <div class="topNav">
      <div class="logo" @click="toggleMenu">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import {inject,Ref} from 'vue'
export default {
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleMenu = ()=>{
        asideVisible.value = !asideVisible.value
    }
    return {toggleMenu}
  }
}
</script>
<style lang="scss">
.topNav {
  background: #ddd7d7;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>