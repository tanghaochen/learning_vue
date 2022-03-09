<template>
  <div class="flex-fill d-flex flex-column pb-5 py">
    <div class="d-flex" style="flex: 1">
      <card-index size="90" @click="toPage('about')">About me</card-index>
      <card-index @click="toPage('resume')">Resume</card-index>
    </div>
    <div class="d-flex" style="flex: 1">
      <card-index  @click="toPage('portfolio')">Portfolio</card-index>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import cardIndex from "@/components/common/card-index";

export default {
  // name: "Default",
  components: {
    cardIndex,
  },
  setup() {
    const router = useRouter();
    /**
     * 路径跳转路由函数
     * @description 根据路径跳转对应路由
     * @param {string} path 路径
     */
    const toPage = (path) => router.push(path);
    return { toPage };
  },
};
</script>
<style lang=""></style>
