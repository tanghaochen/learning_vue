<template>
  <pageHeader></pageHeader>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>
<script lang="ts" setup>
import pageHeader from "@/blocks/pageHeaders.vue";
</script>
<style lang="scss"></style>
