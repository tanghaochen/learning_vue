<template>
  <div id="myApp">
    <pageHeader></pageHeader>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import pageHeader from "@/blocks/pageHeaders.vue";
</script>
<style lang="scss" scoped>
#myApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eaeef0;
}
</style>
