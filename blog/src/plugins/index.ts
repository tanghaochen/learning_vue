import router from "@/router";
import store from "@/store";
import { App } from "vue";

const plugins = [store, router];

export const usePlugins = (app: App) => plugins.forEach(app.use, app);
