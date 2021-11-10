<template>
  <div
    class="sidebar-logo-container"
    :class="collapse ? 'collapse' : 'notitle'"
  >
    <router-link class="sidebar-logo-link" to="/">
      <img :src="Logo" class="sidebar-logo" />
      <h1 class="sidebar-title">
        Vue<span style="color: #57caeb">3</span>管理后台
      </h1>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {
      Logo: require("@/assets/images/home/logo.png"),
    };
  },
});
</script>
<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  text-align: center;
  overflow: hidden;
  margin-bottom: 30px;
  margin-top: 20px;
  .sidebar-logo-link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .sidebar-logo {
      display: inline-block;
      height: 100%;
    }
    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #435ebe;
      font-weight: 600;
      line-height: 50px;
      font-size: 24px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
  &.collapse {
    .sidebar-logo {
      margin-right: 12px;
    }
  }
  &.notitle {
    .sidebar-title {
      display: none;
    }
    .sidebar-logo {
      height: 60%;
    }
  }
}
</style>
