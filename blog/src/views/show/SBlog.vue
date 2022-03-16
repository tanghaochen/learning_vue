<template>
  <div>
    <a-card
      title="Default size card"
      style="text-align: start; margin-top: 1rem"
      v-for="item in 5"
      :key="item"
      hoverable
    >
      <template #extra>2020;32;32</template>
      <div>content</div>
    </a-card>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss"></style>
