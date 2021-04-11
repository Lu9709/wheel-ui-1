<demo>
支持 disabled
</demo>
<template>
  <Button disabled>Primary(disabled)</Button>
  <Button theme="link" disabled>Link(disabled)</Button>
  <Button theme="text" disabled>Text(disabled)</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>