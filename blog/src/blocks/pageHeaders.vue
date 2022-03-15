<template>
  <div>
    <a-page-header
      class="b-header"
      style="border: 1px solid rgb(235, 237, 240)"
      :isScroll="isScroll"
      :avatar="{
        src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
      }"
    >
      <template #tags>
        <a-tag :color="item.color" v-for="(item, index) in tags" :key="index">{{
          item.text
        }}</a-tag>
      </template>
      <template #extra>
        <a-button
          :type="item.type"
          @click="item.handle"
          v-for="(item, index) in menu"
          :key="index"
          >{{ item.text }}</a-button
        >
      </template>
    </a-page-header>
  </div>
</template>
<script lang="ts" setup>
// const tag = [];

import { onUnmounted, ref } from "vue";
const tags = [
  {
    color: "success",
    text: "vuejs",
  },
  {
    color: "blue",
    text: "typescript",
  },
  {
    color: "cyan",
    text: "eggjs",
  },
];
const menu = [
  {
    text: "首页",
    handle: () => console.log("你好, 我是首页"),
  },
  {
    text: "归档",
  },
  {
    text: "赞助列表",
  },
  {
    text: "关于我",
    type: "primary",
  },
];
const useWindowEvent = (eventType: string, callback: any) => {
  window.addEventListener(eventType, callback);

  const removeEventHandler = () =>
    window.removeEventListener(eventType, callback);
  onUnmounted(removeEventHandler);
};

const useWindowScrollStatus = () => {
  const status = ref(false);
  const judgeScrollStatusHandler = () => {
    const { scrollTop } = document.documentElement;
    status.value = scrollTop > 0 ? true : false;
  };
  useWindowEvent("scroll", judgeScrollStatusHandler);
  return status;
};

const isScroll = useWindowScrollStatus();
</script>
<style lang="scss" scoped>
.b-header {
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 10px;
  transition: all 0.9s ease-in-out;
}

.b-header:hover,
.b-header[isScroll="true"] {
  transition: all 0.9s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}
</style>
