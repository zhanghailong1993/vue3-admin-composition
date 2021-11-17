<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="use clipboard directly" name="directly">
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width: 400px; max-width: 100%; margin-right: 10px"
        />
        <el-button type="primary" @click="copy(inputData)">
          <el-icon><document-copy /></el-icon>
          copy
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="use clipboard by v-directive" name="v-directive">
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width: 400px; max-width: 100%; margin-right: 10px"
        />
        <el-button type="primary" @click="copy(inputData)">
          <el-icon><document-copy /></el-icon>
          copy
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { DocumentCopy } from "@element-plus/icons";
import { useClipboard } from "@vueuse/core";

export default defineComponent({
  components: {
    DocumentCopy,
  },
  setup() {
    const dataMap = reactive({
      activeName: "directly",
      inputData: "https://github.com/Armour/vue-typescript-admin-template",
    });
    const { copy } = useClipboard();

    return {
      ...toRefs(dataMap),
      copy,
    };
  },
});
</script>
