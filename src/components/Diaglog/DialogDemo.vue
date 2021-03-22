<template>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Demo from '../Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
export default {
  components: {Button},
  setup() {
    return {Demo,Dialog1Demo,Dialog2Demo};
  }
};

</script>

<style lang="scss" scoped>

</style>