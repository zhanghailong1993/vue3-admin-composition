<template>
  <div
    id="homePieCharts"
    :class="className"
    :style="{ width: width, height: height }"
  ></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, nextTick } from "vue";
import { init } from "echarts";

export default defineComponent({
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
      require: true,
    },
    height: {
      type: String,
      default: "300px",
      require: true,
    },
  },
  setup() {
    const initChart = () => {
      const radarChart = init(
        document.getElementById("homePieCharts") as HTMLDivElement,
        "macarons"
      );
      radarChart.setOption({
        tooltip: {
          show: true,
          formatter: `{a} <br />{b} : {c} ({d}%)`,
        },
        legend: {
          left: "center",
          bottom: "10",
          data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
        },
        series: [
          {
            name: "WEEKLY WRITE ARTICLES",
            color: ["#435EBE", "#5DDAB4", "#9694FF", "#FF7976", "#57CAEB"],
            type: "pie",
            roseType: "radius",
            center: ["50%", "38%"],
            radius: [15, 95],
            data: [
              { value: 320, name: "Industries" },
              { value: 240, name: "Technology" },
              { value: 149, name: "Forex" },
              { value: 100, name: "Gold" },
              { value: 59, name: "Forecasts" },
            ],
            animationEasing: "cubicInOut",
            animationDuration: 2600,
          },
        ],
      });
    };
    onMounted(() => {
      nextTick(() => {
        initChart();
      });
    });
  },
});
</script>
<style lang="scss" scoped></style>
