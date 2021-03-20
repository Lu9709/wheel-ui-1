<template>
  <Switch :value="buttonValue" @input="buttonValue=$event"/>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue';

export default {
  components:{Switch},
  setup(){
    const buttonValue = ref(false)
    return {buttonValue}
  }
}
</script>

<style lang="scss" scoped>

</style>