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
    <router-view v-slot="{ Component }" style="margin: 1rem">
      <transition
        enter-active-class="animate__animated animate__backInDown animate__faster"
        leave-to-class="animate__animated animate__bounceOut my-element animate__fast"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";
import { HomeOutlined } from "@ant-design/icons-vue";

const JumpChildPage = (routeName: string) =>
  router.push.bind(router, { name: routeName });
// icon 试过v-html等各种方式,都失败了
const buttonGroup = [
  {
    text: "日志",
    icon: `<BookOutlined />`,
    handle: JumpChildPage("blog"),
  },
  {
    text: "读书",
    icon: `<ReadOutlined />`,
    handle: JumpChildPage("book"),
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
.my-element {
  --animate-duration: 0.3s;
}

:root {
  --animate-delay: 0.5s;
}
.show {
  margin: 4rem auto;
  width: 50vw;
}
/*
* 全局样式表
*/
#app {
  min-height: 110vh;
  background-color: #eceff1;
}
</style>
