import router from "@/router";
import store from "@/store";
import { App } from "vue";
import Antd from "ant-design-vue";

const plugins = [store, router, Antd];

export const usePlugins = (app: App) => plugins.forEach(app.use, app);
