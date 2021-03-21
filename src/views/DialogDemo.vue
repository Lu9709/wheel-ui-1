<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="bool" :close-onclick-overlay="false" :ok="f1" :cancel="f2"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},

  setup() {
    const bool = ref(false);
    const f1 = () => {
      return false
    };
    const f2 = () => {

    };
    const toggle = () => {
      bool.value = !bool.value;
    };
    return {bool, toggle, f1, f2};
  }
};

</script>

<style lang="scss" scoped>

</style>