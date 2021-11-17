<template>
  <div class="tinymce-container">
    <QuillEditor
      ref="myQuillEditor"
      v-model="content"
      :style="{ width: width, height: `${height - 66}px` }"
      :options="options"
      placeholder="请填入信息"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    height: {
      type: Number,
      default: 400,
    },
    width: {
      type: String,
      default: "auto",
    },
  },
  setup() {
    const myQuillEditor = ref<any | null>(null);
    const options = ref({
      debug: "info",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }], // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ direction: "rtl" }], // text direction

          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ["clean"], // remove formatting button
        ],
      },
      theme: "snow",
    });

    return {
      myQuillEditor,
      options,
      content:
        '<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="Logo" src="./favicon.ico" alt="Logo" width="100" height="100" /><ul><li>Our <a href="https://vueup.github.io/vue-quill">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://vueup.github.io/vue-quill">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://vueup.github.io/vue-quill">VueQuill premium subscriptions</a>.</li></ul>',
    };
  },
});
</script>
