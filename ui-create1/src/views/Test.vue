<template lang="">
    <div style="height: 100px;width: 100px;background:white;" class="d-flex flex-grow-1">
        testasdfasdfsadfsad
    </div>
</template>
<script>
import cardIndex from "@/components/common/card-index";
import slideBar from "@/components/slide-bar/slide-bar";
import { useRouter } from 'vue-router'

export default {
  name: "Test",
  components: {
    cardIndex,
    slideBar,
  },
  setup() {
    let router = useRouter();
    console.log(router.options.routes);
    return {};
  },

  aboutMe() {
    console.log("aboutMe");
  },
};
</script>
<style lang="">
    
</style>