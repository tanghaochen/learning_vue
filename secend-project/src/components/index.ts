import myButton from "@/components/my-button.vue";
import { Component, Plugin } from "vue";

const component: Map<string, Component> = new Map([["my-button", myButton]]);

const componentsPlugins: Plugin = (app) => {
  component.forEach((component, name) => {
    app.component(name, component);
  });
};

export default componentsPlugins;