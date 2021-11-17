<template>
  <transition :name="transitionName">
    <div
      v-show="visible"
      class="back-to-ceiling"
      :style="customStyle"
      @click="backToTop"
    >
      <div class="backTopIcon">
        <el-icon class="icon" size="20"><top /></el-icon>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
} from "vue";
import { Top } from "@element-plus/icons";
export default defineComponent({
  components: {
    Top,
  },
  props: {
    customStyle: Object,
    visibilityHeight: {
      type: Number,
      default: 400,
    },
    backPosition: {
      type: Number,
      default: 0,
    },
    transitionName: {
      type: String,
      default: "fade",
    },
  },
  setup(props) {
    const state = reactive({
      visible: false,
      isMoving: false,
    });

    const handleScroll = () => {
      state.visible = window.pageYOffset > props.visibilityHeight;
    };

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    };

    const backToTop = () => {
      if (state.isMoving) return;
      const start = window.pageYOffset;
      let i = 0;
      state.isMoving = true;
      const interval = setInterval(() => {
        const next = Math.floor(easeInOutQuad(10 * i, start, -start, 500));
        if (next <= props.backPosition) {
          window.scrollTo(0, props.backPosition);
          clearInterval(interval);
          state.isMoving = false;
        } else {
          window.scrollTo(0, next);
        }
        i++;
      }, 16.7);
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      ...toRefs(state),
      backToTop,
    };
  },
});
</script>
<style lang="scss" scoped>
.back-to-ceiling {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #d5dbe7;
  }
  .backTopIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background: #000;
    border-radius: 50%;
    text-align: center;
  }
  .icon {
    color: #fff;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
