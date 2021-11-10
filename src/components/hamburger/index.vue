<template>
  <div :class="[{ 'is-active': isActive }]" @click="toggleClick">
    <el-icon class="icon"><fold v-show="!isActive" /><expand v-show="isActive"></expand></el-icon>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Fold, Expand } from "@element-plus/icons";
export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Fold,
    Expand
  },
  emits: ["toggle-click"],
  setup(_, context) {
    const toggleClick = () => {
      context.emit("toggle-click");
    };
    return {
      toggleClick,
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
