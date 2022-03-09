<template lang="">
  <div
    style="height: 100px; width: 100px; background: white"
    class="d-flex flex-grow-1"
  >
    about
  </div>
</template>
<script>
import cardIndex from "@/components/common/card-index";
import slideBar from "@/components/slide-bar/slide-bar";

export default {
  name: "About",
  components: {
    cardIndex,
    slideBar,
  },
  setup() {
    return {};
  },

  aboutMe() {
    console.log("aboutMe");
  },
};
</script>
<style lang=""></style>
