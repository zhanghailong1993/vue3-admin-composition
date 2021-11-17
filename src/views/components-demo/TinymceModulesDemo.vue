<template>
  <div class="components-container">
    <aside>
      富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了VueQuill。更详细的富文本比较和介绍见
      <a
        target="_blank"
        class="link-type"
        href="https://vueup.github.io/vue-quill/"
        >文档</a
      >
    </aside>
    <div>
      <Tinymce />
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div class="editor-content" v-html="content" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Tinymce from "@/components/tinymce/index.vue";

export default defineComponent({
  components: {
    Tinymce,
  },
  setup() {
    return {
      content:
        '<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="Logo" src="./favicon.ico" alt="Logo" width="100" height="100" /><ul><li>Our <a href="https://vueup.github.io/vue-quill">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://vueup.github.io/vue-quill">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://vueup.github.io/vue-quill">VueQuill premium subscriptions</a>.</li></ul>',
    };
  },
});
</script>
