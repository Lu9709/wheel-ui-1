<template>
  <button @click="toggle" :class="{checked:value}"><span></span></button>
</template>

<script lang="ts">

export default {
  props:{
    value:Boolean
  },
  setup(props,content) {
    const toggle =()=>{
      content.emit('update:input',!props.value)
    }
    return {toggle}
  }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  transition: all 250ms;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
  }
  &.checked {
    background: #1890ff;
  }
  &:hover > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    outline: none;
  }
  &:active{
    > span {width: $h2 + 4px;}
  }
  &.checked:active{
    > span {width: $h2 + 4px; margin-left: -4px;}
  }
}


</style>