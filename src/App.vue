<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="wrapper">
    <TheHeader />
      <main class="main">
        <router-view></router-view>
      </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
</style>