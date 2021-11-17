import { createApp } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadAllPlugins } from "./plugins";
import "@/styles/index.scss";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
const app = createApp(App);

loadAllPlugins(app);
app.component("QuillEditor", QuillEditor);

app.use(store).use(router).mount("#app");
