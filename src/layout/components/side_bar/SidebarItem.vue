<template>
  <div v-if="!item.meta || !item.meta.hidden">
    <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ theOnlyOneChild.meta.title }}</template>
      </el-menu-item>
    </template>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :is-first-level="false"
          class="nest-menu"
        />
      </template>
    </el-sub-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: "SidebarItem",
  props: {
    item: {
      type: Object as PropType<RouteRecordRaw>,
      require: true
    },
  },
  setup(props) {
    const theOnlyOneChild = computed(() => {
      // if (props.item.children) {
      //   for (const child of props.item.children) {
      //     if (!child.meta || !child.meta.hidden) {
      //       return child;
      //     }
      //   }
      // }
      return { ...props.item, path: "" };
    });
    return {
      theOnlyOneChild,
    };
  },
});
</script>
<style lang="scss" scoped></style>
