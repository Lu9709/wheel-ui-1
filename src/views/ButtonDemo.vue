<template>
  <div>Button 示例</div>
  <h1>示例一</h1>
  <div>
    <Button>按钮一</Button>
    <Button theme="button">按钮二</Button>
    <Button theme="link">按钮三</Button>
    <Button theme="text">按钮四</Button>
  </div>
  <h1>示例二</h1>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  }
};
</script>

<style lang="scss" scoped>

</style>