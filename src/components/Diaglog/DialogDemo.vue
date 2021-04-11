<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <Demo :component="Dialog3Demo" />
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Demo from '../Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Dialog3Demo from './Dialog3.demo.vue'
export default {
  components: {Demo, Button},
  setup() {
    return {Demo,Dialog1Demo,Dialog2Demo,Dialog3Demo};
  }
};

</script>

<style lang="scss" scoped>

</style>