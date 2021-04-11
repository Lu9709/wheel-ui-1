<demo>
支持 level
</demo>
<template>
  <div>
    <div>
      <Button level="main">Primary</Button>
      <Button>Default</Button>
      <Button level="danger">Danger</Button>
    </div>
    <div>
      <Button theme="link" level="main">Primary(link)</Button>
      <Button theme="link">Default(link)</Button>
      <Button theme="link" level="danger">Danger(link)</Button>
    </div>
    <div>
      <Button theme="text" level="main">Primary(Text)</Button>
      <Button theme="text">Default(Text)</Button>
      <Button theme="text" level="danger">Danger(Text)</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>