<template>
  <div class="root d-flex">
    <div id="home" class="rounded-3">
      <!--left-->
      <slide-bar />
      <!--      center-->
      <!-- <div class="d-flex flex-grow-1"><transition enter-active-class="animate__animated animate__zoomIn">
      </transition></div> -->
      <div
        style="display: flex; flex: 1"
        class="p-1 d-flex align-content-center justify-content-center flex-column"
      >
        <div class="text-center text-white my-4">
          <div style="font-size: 3rem">
            {{ title }} <span style="color: #02eefa">{{ des }}</span>
          </div>
          <div>您已被点赞c300次</div>
        </div>
        <router-view v-slot="{ Component }" class="d-flex flex-grow-1">
          <transition
            enter-active-class="animate__animated animate__zoomIn faster"
          >
            <component :is="Component" />
          </transition>
        </router-view>
        <!-- <router-view class="d-flex flex-grow-1"></router-view> -->
      </div>
      <!--      right-->
      <!--        <image src="https://picsum.photos/id/11/10/6" alt="1" class="flex-fill bg-primary h-100 w-100" style="width:100px;height:100px"></image>-->
      <img
        src="../assets/img/wr-user.jpg"
        alt="用户画像"
        style="flex-grow: 0; width: 30vw"
        class="img-thumbnail px"
      />
    </div>
  </div>
</template>

<script>
import slideBar from "@/components/slide-bar/slide-bar";
import { computedRouter } from "@/lib/routerLib.js";

export default {
  name: "Home",
  components: {
    slideBar,
  },
  setup() {
    const { des, title } = computedRouter();

    return { des, title };
  },
};
</script>

<style>
.root {
  background-image: url("../assets/img/bg.jpg") !important;
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#home {
  width: calc(100% - 10vw);
  height: calc(100% - 10vh);
  background-color: #2e3155;
  display: flex !important;
}

.left-fonts {
  writing-mode: vertical-rl;
}
</style>
