<template>
  <div
    id="homeLineCharts"
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
      default: "350px",
      require: true,
    },
  },
  setup() {
    const initChart = () => {
      const lineChart = init(
        document.getElementById("homeLineCharts") as HTMLDivElement,
        "macarons"
      );
      lineChart.setOption({
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          boundaryGap: false,
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: 10,
          right: 10,
          top: 30,
          bottom: 20,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          padding: 8,
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          data: ["expected", "actual"],
        },
        series: [
          {
            name: "expected",
            type: "line",
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410],
            itemStyle: {
              color: "#FF005A",
            },
            lineStyle: {
              color: "#FF005A",
              width: 2,
            },
            animationDuration: 2800,
            animationEasing: "cubicInOut",
          },
          {
            name: "actual",
            type: "line",
            smooth: true,
            itemStyle: {
              color: "#3888fa",
            },
            lineStyle: {
              color: "#3888fa",
              width: 2,
            },
            areaStyle: {
              color: "#f3f8ff",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
            animationDuration: 2800,
            animationEasing: "cubicInOut",
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
