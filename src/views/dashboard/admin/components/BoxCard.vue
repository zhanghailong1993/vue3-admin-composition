<template>
  <el-card class="box-card-component" style="margin-left: 8px">
    <div class="box-card-header">
      <img
        src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
      />
    </div>
    <div style="position: relative">
      <PanThumb
        class="panThumb"
        image="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
      />
      <Mallki class="mallki-text" text="vue-typescript-admin" />
    </div>
    <div style="padding-top: 35px" class="progress-item">
      <span>Vue</span>
      <el-progress :percentage="51" />
    </div>
    <div class="progress-item">
      <span>Typescript</span>
      <el-progress :percentage="45" />
    </div>
    <div class="progress-item">
      <span>CSS</span>
      <el-progress :percentage="4" />
    </div>
    <div class="progress-item">
      <span>ESLint</span>
      <el-progress :percentage="100" status="success" />
    </div>
  </el-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PanThumb from "@/components/pan-thumb/index.vue";
import Mallki from "@/components/text-hover-effect/Mallki.vue";

export default defineComponent({
  components: {
    Mallki,
    PanThumb,
  },
});
</script>
<style lang="scss">
.panThumb {
  position: absolute !important;
  top: -45px;
  left: 0px;
  height: 70px !important;
  width: 70px !important;
  border: 5px solid #ffffff;
  background-color: #fff;
  margin: auto;
  box-shadow: none !important;

  .pan-info {
    box-shadow: none !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;

      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
}
</style>
