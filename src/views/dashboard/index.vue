<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AdminDashboard from "./admin/index.vue";

export default defineComponent({
  components: {
    AdminDashboard,
  },
  setup() {
    const currentRole = ref("admin-dashboard");
    return {
      currentRole,
    };
  },
});
</script>
