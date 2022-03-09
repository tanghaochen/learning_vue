import router from "@/router";
import store from "@/store";
import { App, Plugin } from "vue";

const plugins: Plugin[] = [store, router];

const usePlugins = (app: App) => plugins.forEach(app.use, app);

export { usePlugins };
