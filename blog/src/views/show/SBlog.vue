<template>
  <div>
    <a-card
      title="Default size card"
      style="text-align: start; margin-top: 1rem"
      v-for="item in 10"
      :key="item"
      hoverable
    >
      <template #extra>2020;32;32</template>
      <div>content{{ item }}</div>
    </a-card>
    <contentPageVue />
  </div>
</template>
<script lang="ts" setup>
import contentPageVue from "@/components/contentPaging.vue";
</script>
<style lang="scss"></style>
