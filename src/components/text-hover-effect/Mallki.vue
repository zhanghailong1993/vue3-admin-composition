<template>
  <a class="link--mallki" href="#">
    {{ text }}
    <span :data-letters="text" />
    <span :data-letters="text" />
  </a>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    className: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "vue3-compisition-admin",
    },
  },
});
</script>
<style lang="scss" scoped>
.link--mallki {
  font-weight: 800;
  color: #4dd9d5;
  font-family: "Dosis", sans-serif;
  overflow: hidden;
  position: relative;
  display: inline-block;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: color 0.5s 0.25s;

  &::before {
    content: "";
    width: 100%;
    height: 6px;
    background: #3888fa;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }
  &:hover {
    transition: none;
    color: transparent;
    &::before {
      transform: translate3d(100%, 0, 0);
    }
  }
  span {
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    top: 0;
    overflow: hidden;
    &::before {
      content: attr(data-letters);
      position: absolute;
      left: 0;
      width: 100%;
      color: #3888fa;
      transition: transform 0.5s;
    }
    &:nth-child(2) {
      top: 50%;
    }
    &:first-child::before {
      top: 0;
      transform: translate3d(0, 100%, 0);
    }
    &:nth-child(2)::before {
      bottom: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
}
</style>
