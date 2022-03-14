<template>
  <div class="home">homepage</div>
  <a-button type="primary">Primary Button</a-button>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <a-button type="primary" ghost>Primary</a-button>
    <a-button ghost>Default</a-button>
    <a-button type="dashed" ghost>Dashed</a-button>
    <a-button danger ghost>Danger</a-button>
  </div>
  <a-progress :percent="30" />
  <a-progress :percent="50" status="active" />
  <a-progress :percent="70" status="exception" />
  <a-progress :percent="100" />
  <a-progress :percent="50" :show-info="false" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HomeView extends Vue {}
</script>
