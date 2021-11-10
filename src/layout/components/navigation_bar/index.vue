<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" @toggle-click="toggleSideBar" />
    <BreadCrumb />
    <div class="right-menu">
      <Screenfull class="right-menu-item hover-effect" />
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img
            :src="avatar + '?imageView2/1/w/80/h/80'"
            class="user-avatar"
          >
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link to="/profile">2222 </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/">首页 </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <a
                target="_blank"
                href="https://armour.github.io/vue-typescript-admin-docs/"
              >
                Docs
              </a>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span>退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Hamburger from "@/components/hamburger/index.vue";
import Screenfull from '@/components/screenfull/index.vue';
import BreadCrumb from '@/components/bread-crumb/index.vue'

export default defineComponent({
  components: {
    Hamburger,
    Screenfull,
    BreadCrumb
  },
  setup() {
    const toggleSideBar = () => {
      console.log('23223')
    };
    return {
      toggleSideBar,
      avatar: ''
    };
  },
});
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;
        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
  }
}
</style>
