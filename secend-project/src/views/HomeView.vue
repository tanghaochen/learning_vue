<template>
  <div class="min-vh-100">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <my-header :pageList="PageLis">用户管理</my-header>
    <div
      class="m-5 shadow-sm p-3 mb-5 bg-body rounded d-flex flex-grow-1 border"
    >
      <!-- <router-view></router-view> -->
      <c-table :tableBody="userInfos" :tableHeader="tableHeader"></c-table>
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MyHeader from "@/components/MyHeader.vue";
import {
  pageListStyle,
  tableHeaderType,
  tableBodyType,
} from "@/lib/interface/type";
import { tableButton } from "@/lib/interface/index";
import {userInfos} from "@/lib/interface/tableData"
import CTable from "../components/c-table.vue";

// @Options({
export default {
  components: {
    HelloWorld,
    MyHeader,
    CTable,
  },

  setup() {
    // hrader button
    const PageLis: pageListStyle = [
      {
        id: 0,
        name: "首页",
        path: "",
      },
      {
        id: 1,
        name: "关于",
        path: "about",
      },
    ];
    //table header--------------------------------------------------------------------
    const tableHeader = new Set(["姓名", "性别", "年龄", "删除", "编辑"]);

    //table body--------------------------------------------------------------------
    
    return { PageLis, userInfos, tableHeader };
  },
};
// })
// export default class HomeView extends Vue {}
</script>
