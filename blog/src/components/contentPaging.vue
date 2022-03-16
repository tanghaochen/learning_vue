<template>
  <div style="padding: 2rem 0">
    <a-pagination
      size="small"
      :total="50"
      show-size-changer
      show-quick-jumper
      @showSizeChange="showSizeChange"
      @change="changePage"
    />
  </div>
</template>
<script lang="ts" setup>
// import { useRoute, useRouter } from "vue-router";
import { router } from "@/router";
import { watch } from "@vue/runtime-core";

// const route = useRoute();
// const router = useRouter();

// watch(route, () => {
//   console.log(route.path);
// });
const showSizeChange = (page, pageSize) => {
  console.log("showSizeChange", page, pageSize);
  router.push(page);
};

const changePage = (current: number, size: number) => {
  console.log("changePage", current, size);
  router.push({ query: { current } });
  // router.push(size);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // const useRouteParamChange = (type: any) => (page: string | number) =>
  //   // router.push({ query: { [type]: page } });

  // const pageNumParamChange = useRouteParamChange("pageNum");
  // const onPageNumChange = (pageNum: any) => pageNumParamChange(pageNum);
};
</script>
<style lang="scss"></style>
