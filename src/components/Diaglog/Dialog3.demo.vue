<demo>
信息提示
</demo>
<template>
  <div>
    <Button @click="Info">Info</Button>
    <Button @click="Success">Success</Button>
    <Button @click="Warning">Warning</Button>
  </div>
</template>
<script lang="ts">
import Button from '../../lib/Button.vue';
import {h} from 'vue';
import {openDialogMessage} from '../../lib/openDialogMessage.ts';
import info from '../../assets/images/info.png';
import success from '../../assets/images/success.png'
import warning from '../../assets/images/warning.png'
export default {
  components: {Button},
  setup() {

    const Info = () => {
      openDialogMessage({
        img: h('img', {src: info}),
        title: h('strong', {}, 'Info'),
        content: 'info',
        ok() {console.log('ok');},
      });
    };
    const Success = () => {
      openDialogMessage({
        img: h('img', {src: success}),
        title: h('strong', {}, 'success'),
        content: 'success',
        ok() {console.log('ok');},
      });
    };
    const Warning = () => {
      openDialogMessage({
        img: h('img', {src: warning}),
        title: h('strong', {}, 'warning'),
        content: 'warning',
        ok() {console.log('ok');},
      });
    };
    return {Info,Success,Warning};
  }
};
</script>
<style lang="scss" scoped>
</style>