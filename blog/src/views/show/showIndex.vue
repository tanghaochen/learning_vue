<template>
  <div class="show">
    <a-page-header
      title="Title"
      class="site-page-header"
      sub-title="This is a subtitle"
      :avatar="{
        src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
      }"
    >
      <template #extra>
        <a-button key="1" type="primary"><HomeOutlined />返回首页</a-button>
      </template>
      <template #footer>
        <div style="display: flex; justify-content: start">
          <a-button
            v-for="(item, index) in buttonGroup"
            :key="index"
            style="margin-right: 1rem"
            @click="item.handle"
            >{{ item.text }}</a-button
          >
        </div>
      </template>
    </a-page-header>
  </div>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import router from "@/router";
import { HomeOutlined } from "@ant-design/icons-vue";

const JumpChildPage = (name: string) => {
  console.log("ads");
  router.push(name);
};
// icon 试过v-html等各种方式,都失败了
const buttonGroup = [
  {
    text: "日志",
    icon: `<BookOutlined />`,
    handle: JumpChildPage("Blog"),
  },
  {
    text: "读书",
    icon: `<ReadOutlined />`,
    handle: JumpChildPage("Book"),
  },
  {
    text: "项目",
    icon: `<ScheduleOutlined />`,
    handle: JumpChildPage("project"),
  },
  {
    text: "归档",
    icon: `<SisternodeOutlined />`,
    handle: JumpChildPage("file"),
  },
  {
    text: "赞助列表",
    icon: `<LikeOutlined />`,
    handle: JumpChildPage("list"),
  },
];
</script>

<style lang="scss" scoped>
.show {
  margin: 4rem auto;
  width: 70vw;
}
</style>
