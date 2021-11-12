<template>
  <div class="dashboard-editor-container">
    <PanelGroup />
    <el-row class="linecharts">
      <LineChart />
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <RadarChart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PanelGroup from "./components/PanelGroup.vue";
import LineChart from "./components/LineChart.vue";
import RadarChart from './components/RadarChart.vue'

export default defineComponent({
  components: {
    PanelGroup,
    LineChart,
    RadarChart
  },
  setup() {
    const currentRole2 = ref("admin-dashboard");
    return {
      currentRole2,
    };
  }
});
</script>
<style lang="scss" scoped>
.dashboard-editor-container {
  position: relative;
  padding: 32px;
  background-color: #f2f7f7;
}
.linecharts {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
  border-radius: 8px;
}
</style>
