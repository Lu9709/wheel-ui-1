<template>
  <div>
    <top-nav/>
    <div class="banner">
      <h1>wheel UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="">GitHub</a>

        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: {TopNav}
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3e9e9;

  > .actions {
    margin: 8px 0;

    a {
      margin: 0 8px;
      background: #ffffff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>