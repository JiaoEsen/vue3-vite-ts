<template>
  <div class="layout-main">
    <div class="layout-main-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-main {
  width: 100%;
  height: calc(100% - 60px);
  padding: 20px;
  background-color: #f2f2f2;

  .layout-main-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #fff;
  }
}
</style>
