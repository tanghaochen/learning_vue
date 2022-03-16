<template>
  <div>
    <a-card
      title="Default size card12"
      style="text-align: start; margin-top: 1rem"
      v-for="item in 5"
      :key="item"
    >
      <template #extra>2020;32;32</template>
      <div>conten32t</div>
    </a-card>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss"></style>
