<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button size="big">Large</Button>
      <Button>Default</Button>
      <Button size="small">small</Button>
    </div>
    <div>
      <Button theme="link" size="big">Large</Button>
      <Button theme="link">Default</Button>
      <Button size="small" theme="link">small</Button>
    </div>
    <div>
      <Button size="big" theme="text">Large</Button>
      <Button theme="text">Default</Button>
      <Button size="small" theme="text">small</Button>
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