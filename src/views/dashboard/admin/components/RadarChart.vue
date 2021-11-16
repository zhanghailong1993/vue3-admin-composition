<template>
  <div
    id="homeRadarCharts"
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
        document.getElementById("homeRadarCharts") as HTMLDivElement,
        "macarons"
      );
      radarChart.setOption({
        legend: {
          left: "center",
          bottom: "8",
        },
        radar: {
          center: ["50%", "42%"],
          radius: "66%",
          splitNumber: 8,
          indicator: [
            { name: "Sales", max: 10000 },
            { name: "Administration", max: 20000 },
            { name: "Information Technology", max: 20000 },
            { name: "Customer Support", max: 20000 },
            { name: "Development", max: 20000 },
            { name: "Marketing", max: 20000 },
          ],
          splitArea: {
            areaStyle: {
              color: "#C5CEE6",
              opacity: 1,
              shadowBlur: 45,
              shadowColor: "rgba(0,0,0,.1)",
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            },
          },
        },
        series: [
          {
            type: "radar",
            symbolSize: 0,
            color: ["#435EBE", "#5DDAB4", "#57CAEB"],
            areaStyle: {
              shadowBlur: 13,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1,
            },
            data: [
              {
                value: [5000, 7000, 12000, 11000, 15000, 14000],
                name: "Allocated Budget",
              },
              {
                value: [4000, 9000, 15000, 15000, 13000, 11000],
                name: "Expected Spending",
              },
              {
                value: [5500, 11000, 12000, 15000, 12000, 12000],
                name: "Actual Spending",
              },
            ],
            animationDuration: 3000,
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
