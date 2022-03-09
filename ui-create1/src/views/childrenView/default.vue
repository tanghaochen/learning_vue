<template>
  <div class="flex-fill d-flex flex-column pb-5 py">
    <div class="d-flex" style="flex: 1">
      <card-index size="90" @click="toPage('about')">About me</card-index>
      <card-index @click="toPage('resume')">Resume</card-index>
    </div>
    <div class="d-flex" style="flex: 1">
      <card-index @click="toPage('portfolio')">Portfolio</card-index>
    </div>
  </div>
</template>
<script>
import cardIndex from "@/components/common/card-index";
import { routerPush } from "@/lib/routerLib";

export default {
  // name: "Default",
  components: {
    cardIndex,
  },
  setup() {
    const { toPage } = routerPush();
    return { toPage };
  },
};
</script>
<style lang=""></style>
