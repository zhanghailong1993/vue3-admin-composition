<template>
  <div class="sideWrap">
    <SidebarLogo :collapse="isCollapse" />
    <el-scrollbar height="400px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="!isCollapse"
        active-text-color="#57caeb"
      >
        <SidebarItem v-for="route in routes" :key="route.path" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SidebarLogo from "./SidebarLogo.vue";
import SidebarItem from "./SidebarItem.vue";

export default defineComponent({
  components: {
    SidebarLogo,
    SidebarItem,
  },
  setup() {
    const isCollapse = ref<boolean>(true);
    return {
      isCollapse,
      routes: [
        {
          path: "",
          title: "额威威",
          meta: {
            hidden: false,
          },
          chidlren: [],
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped></style>
