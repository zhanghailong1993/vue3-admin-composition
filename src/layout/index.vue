<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <Navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { AppMain, Sidebar, Navbar } from "./components";

export default defineComponent({
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
});
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.main-container {
  position: relative;
  min-height: 100%;
  margin-left: 300px;
}
.sidebar-container {
  width: 300px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  font-size: 0;
  overflow: hidden;
  background-color: #fff !important;
}
</style>
