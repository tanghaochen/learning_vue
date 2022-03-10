import { createApp } from "vue";
import App from "./App.vue";
import { usePlugins } from "@/plugins";
import componentsPlugins from "@/components/index";

const app = createApp(App);

usePlugins(app);

app.mount("#app");
