<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view class="bg-white flex-grow-1 d-flex flex-column" id="app"/>
</template>

<script></script>

<style lang="scss">
@import url("@/assets/Bootstrap.css");
@import url("@/assets/MyStyle.sass");
$test: 10rem;

#app {
  width: 100vw;
  height: 100vh;
}
</style>
