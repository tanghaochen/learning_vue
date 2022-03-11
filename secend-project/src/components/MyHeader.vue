<template>
  <div>
    <ul class="nav bg-success bg-gradient justify-content-sm-between p-2">
      <li class="nav-item">
        <a class="nav-link text-white" aria-current="page" href="#"
          ><slot></slot
        ></a>
      </li>
      <div class="d-flex">
        <li v-for="pageLi in pageList" :key="pageLi.id">
          <my-button
            class="d-flex flex-grow-1 justify-content-md-end"
            style="margin-right: 1rem"
            @click="pageJump(pageLi.path)"
            >{{ pageLi.name }}</my-button
          >
        </li>
      </div>
    </ul>
  </div>
</template>
<script lang="ts">
import { RouterPush } from "@/router/routerFn";
import { pageListStyle } from "@/lib/interface/type";
import { PropType } from "vue";

export default {
  props: {
    pageList: {
      // 因为这里比较类型比较复杂，需要 as
      type: Array as PropType<pageListStyle>,
      default: () => [],
    },
  },
  setup() {
    const pageJump = RouterPush();
    return { pageJump };
  },
};
</script>
<style lang=""></style>
