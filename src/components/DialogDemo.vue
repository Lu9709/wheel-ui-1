<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="bool" :close-onclick-overlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
  </Dialog>
  <h2>示例2</h2>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref, h} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {Button, Dialog},

  setup() {
    const bool = ref(false);
    const f1 = () => {
      return false;
    };
    const f2 = () => {

    };
    const toggle = () => {
      bool.value = !bool.value;
    };
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题一'),
        content: 'hello',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      });
    };
    return {bool, toggle, f1, f2, showDialog};
  }
};

</script>

<style lang="scss" scoped>

</style>