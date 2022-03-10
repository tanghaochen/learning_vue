import router from "@/router";
import store from "@/store";
import { App, Plugin } from "vue";
import componentsPlugins from "@/components/index";

const plugins: Plugin[] = [store, router, componentsPlugins];

const usePlugins = (app: App) => plugins.forEach(app.use, app);

export { usePlugins };
