<template>
  <div class="mixin-components-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span>Buttons</span>
            </div>
          </template>
          <div style="margin-bottom: 50px">
            <el-row :span="24">
              <el-col :span="4" class="text-center">
                <router-link class="pan-btn blue-btn" to="/documentation/index">
                  Documentation
                </router-link>
              </el-col>
              <el-col :span="4" class="text-center">
                <router-link class="pan-btn light-blue-btn" to="/icon/index">
                  Icons
                </router-link>
              </el-col>
              <el-col :span="4" class="text-center">
                <router-link class="pan-btn pink-btn" to="/excel/export-excel">
                  Excel
                </router-link>
              </el-col>
              <el-col :span="4" class="text-center">
                <router-link
                  class="pan-btn green-btn"
                  to="/table/complex-table"
                >
                  Table
                </router-link>
              </el-col>
              <el-col :span="4" class="text-center">
                <router-link class="pan-btn tiffany-btn" to="/example/create">
                  Form
                </router-link>
              </el-col>
              <el-col :span="4" class="text-center">
                <router-link class="pan-btn yellow-btn" to="/theme/index">
                  Theme
                </router-link>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 50px">
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span>Material Design 的input</span>
            </div>
          </template>
          <div style="height: 100px">
            <el-form>
              <el-form-item> </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span>图片hover效果</span>
            </div>
          </template>
          <div class="component-item">
            <PanThumb
              width="100px"
              height="100px"
              image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"
            >
              vue-typescript-admin
            </PanThumb>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span>hover text</span>
            </div>
          </template>
          <div class="component-item">
            <Mallki class-name="mallki-text" text="vue-typescript-admin" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span>水波纹 waves v-directive</span>
            </div>
          </template>
          <div class="component-item">
            <el-button type="primary"> 水波纹效果 </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 50px">
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span>Share</span>
            </div>
          </template>
          <div class="component-item" style="height: 420px">
            <DropdownMenu
              :items="articleList"
              style="margin: 0 auto"
              title="系列文章"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PanThumb from "@/components/pan-thumb/index.vue";
import Mallki from "@/components/text-hover-effect/Mallki.vue";
import DropdownMenu from "@/components/dropdown-menu/index.vue";

export default defineComponent({
  components: {
    PanThumb,
    Mallki,
    DropdownMenu,
  },
  setup() {
    const articleList = [
      {
        title: "基础篇",
        href: "https://juejin.im/post/59097cd7a22b9d0065fb61d2",
      },
      {
        title: "登录权限篇",
        href: "https://juejin.im/post/591aa14f570c35006961acac",
      },
      {
        title: "实战篇",
        href: "https://juejin.im/post/593121aa0ce4630057f70d35",
      },
      {
        title: "vue-admin-template 篇",
        href: "https://juejin.im/post/595b4d776fb9a06bbe7dba56",
      },
      {
        title: "v4.0 篇",
        href: "https://juejin.im/post/5c92ff94f265da6128275a85",
      },
      {
        title: "优雅的使用 icon",
        href: "https://juejin.im/post/59bb864b5188257e7a427c09",
      },
    ];
    return {
      articleList,
    };
  },
});
</script>
<style lang="scss" scoped>
@mixin colorBtn($color) {
  background: $color;
  &:hover {
    color: $color;
    &:before,
    &:after {
      background: $color;
    }
  }
}
.blue-btn {
  @include colorBtn(#324157);
}
.light-blue-btn {
  @include colorBtn(#3a71a8);
}
.pink-btn {
  @include colorBtn(#e65d6e);
}
.green-btn {
  @include colorBtn(#30b08f);
}
.tiffany-btn {
  @include colorBtn(#4ab7bd);
}
.yellow-btn {
  @include colorBtn(#fec171);
}
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.pan-btn {
  font-size: 14px;
  color: #fff;
  padding: 14px 36px;
  border-radius: 8px;
  border: none;
  outline: none;
  position: relative;
  display: inline-block;
  transition: all ease 600ms;
  &:hover {
    background: #fff;
    &:before,
    &:after {
      width: 100%;
      transition: 600ms ease all;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
  }
  &::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
}
.component-item {
  min-height: 100px;
}
</style>
