import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadAllPlugins } from "./plugins";
import "@/styles/index.scss";

const app = createApp(App);

loadAllPlugins(app);

app.use(store).use(router).mount("#app");
