<template>
  <div id="screenfull">
    <div @click="click">
      <el-icon class="icon"><full-screen /></el-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { FullScreen } from "@element-plus/icons";
import { useFullscreen } from "@vueuse/core";

export default defineComponent({
  components: {
    FullScreen,
  },
  setup() {
    const { toggle } = useFullscreen();
    const state = reactive({
      isFullscreen: false,
      click: () => {
        toggle();
      },
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
.icon {
  vertical-align: middle;
  font-size: 22px;
}
</style>
