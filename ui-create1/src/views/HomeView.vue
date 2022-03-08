<template>
  <div class="root d-flex">
    <div id="home" class="rounded-3">
      <!--left-->
      <slide-bar />
      <!--      center-->
      <div
        style="display: flex; flex: 1"
        class="p-1 d-flex align-content-center justify-content-center flex-column"
      >
        <div class="text-center text-white my-4">
          <div style="font-size: 3rem">
            I'M <span style="color: #02eefa">Mark</span>
          </div>
          <div>您已被点赞300次</div>
        </div>
        <div class="flex-fill d-flex flex-column pb-5 py">
          <div class="d-flex" style="flex: 1">
            <card-index size="90">About me</card-index>
            <card-index>Resume</card-index>
          </div>
          <div class="d-flex" style="flex: 1">
            <card-index>Portfolio</card-index>
          </div>
        </div>
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
import cardIndex from "@/components/common/card-index";
import slideBar from "@/components/slide-bar/slide-bar";

export default {
  name: "Home",
  components: {
    cardIndex,
    slideBar,
  },
  setup() {
    return {};
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
