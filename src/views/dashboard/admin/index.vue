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
        <div class="chart-wrapper">
          <PieChart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <BarChart />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="16"
        :xl="16"
        style="padding-right: 8px; margin-bottom: 30px"
      >
        <DependsTable style="border-radius: 8px" />
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="8"
        :xl="8"
        style="padding-right: 8px; margin-bottom: 30px"
      >
        <TodoList style="border-radius: 8px" />
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="16"
        :xl="16"
        style="padding-right: 8px; margin-bottom: 30px"
      >
        <UpdateTimeline style="border-radius: 8px" />
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="8"
        :xl="8"
        style="padding-right: 8px; margin-bottom: 30px"
      >
        <BoxCard style="border-radius: 8px" />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PanelGroup from "./components/PanelGroup.vue";
import LineChart from "./components/LineChart.vue";
import RadarChart from "./components/RadarChart.vue";
import PieChart from "./components/PieChart.vue";
import BarChart from "./components/BarChart.vue";
import DependsTable from "./components/DependsTable.vue";
import TodoList from "./components/todo-list/index.vue";
import UpdateTimeline from "./components/UpdateTimeline.vue";
import BoxCard from "./components/BoxCard.vue";

export default defineComponent({
  components: {
    PanelGroup,
    LineChart,
    RadarChart,
    PieChart,
    BarChart,
    DependsTable,
    TodoList,
    UpdateTimeline,
    BoxCard,
  },
  setup() {
    const currentRole2 = ref("admin-dashboard");
    return {
      currentRole2,
    };
  },
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
.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
  border-radius: 8px;
}
</style>
