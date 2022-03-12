<template>
  <div class="min-vh-100">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <MyHeader :pageList="PageLis">用户管理</MyHeader>
    <div
      class="m-5 shadow-sm p-3 mb-5 bg-body rounded d-flex flex-grow-1 border"
    >
      <!-- <router-view></router-view> -->
      <CTable
        :tableBody="tableDate"
        :tableHeader="tableHeader"
        @searchValue="HomeSearchValue"
      ></CTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MyHeader from "@/components/MyHeader.vue";
import { pageListStyle } from "@/lib/interface/type";
import { userInfos } from "@/lib/interface/tableData";
import CTable from "@/components/c-table.vue";
import { ref, toRef, toRefs, watch } from "vue";

// header button
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

//table search--------------------------------------------------------------------

const tableDate = ref(userInfos);

const HomeSearchValue = (value: string) => {
  tableDate.value = userInfos.filter((userInfo) => {
    return (userInfo.info[0] as string).includes(value);
  });
  watch(userInfos, () => {
    tableDate.value = userInfos.filter((userInfo) => {
      return (userInfo.info[0] as string).includes(value);
    });
  });
};
</script>
