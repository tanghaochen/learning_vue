import { createApp } from "vue";
import App from "./App.vue";
import { usePlugins } from "./plugins";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
usePlugins(app);
app.mount("#app");
