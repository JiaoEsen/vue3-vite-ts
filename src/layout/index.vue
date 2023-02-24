<template>
  <div class="layout-container">
    <SideBar></SideBar>
    <section class="layout-main-container">
      <Header></Header>
      <Main></Main>
    </section>
  </div>
</template>

<script setup lang="ts">
import SideBar from './components/sidebar/index.vue'
import Header from './components/header/index.vue'
import Main from './components/main/index.vue'
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  width: 100%;
  height: 100vh;
  .layout-main-container {
    flex: 1;
  }
}
</style>
