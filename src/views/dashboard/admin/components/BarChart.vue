<template>
  <div
    id="homebarcharts"
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
        document.getElementById("homebarcharts") as HTMLDivElement,
        "macarons"
      );
      radarChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: 10,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "pageA",
            type: "bar",
            color: ["#57CAEB", "#5DDAB4", "#57CAEB", "#435EBE"],
            stack: "vistors",
            data: [79, 52, 200, 334, 390, 330, 220],
            animationDuration: 6000,
          },
          {
            name: "pageB",
            type: "bar",
            stack: "vistors",
            // barWidth: '60%',
            data: [80, 52, 200, 334, 390, 330, 220],
            animationDuration: 6000,
          },
          {
            name: "pageC",
            type: "bar",
            stack: "vistors",
            // barWidth: '60%',
            data: [30, 52, 200, 334, 390, 330, 220],
            animationDuration: 6000,
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
