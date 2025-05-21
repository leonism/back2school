<template>
  <TheHeader />
  <main class="p-4"> <!-- Consider if this padding is always desired or should be on specific views/layouts -->
    <router-view />
  </main>
  <TheFooter />
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
// Any other global setup for App.vue if needed
</script>

<style>
/* Global styles if needed */
body {
  /* display: flex; flex-direction: column; min-height: 100vh; */
  /* Consider these if footer needs to stick to bottom for short content pages */
}
/* main { flex-grow: 1; } */
</style>
