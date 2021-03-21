<template>
  <div>Button 示例</div>
  <h1>示例一</h1>
  <div>
    <Button>按钮一</Button>
    <Button theme="button">按钮二</Button>
    <Button theme="button">按钮三</Button>
    <Button theme="button">按钮四</Button>
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