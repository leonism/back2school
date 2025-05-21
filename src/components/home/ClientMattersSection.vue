<template>
  <section class="flex flex-col-reverse items-center mx-auto my-10 md:flex-row md:max-w-5xl">
    <div id="leftHero2" class="px-5 mx-1 my-10 basis-1/2">
      <div class="h-1 bg-red-600 w-[150px] rounded-t mb-10"></div>
      <h2 class="text-4xl subpixel-antialiased font-semibold md:text-6xl text-darkPurple">
        Every Client Matters
      </h2>
      <p class="mt-5 text-[#737373]">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      <p class="mt-5 text-sm font-normal text-paleGreen">
        <router-link to="/learn-more-placeholder">Learn More</router-link>
      </p>
    </div>
    <div id="rightHero2" class="my-10 basis-1/2">
      <img src="./img/hero2.png" alt="hero2.png" width="450"> <!-- Path to be updated later -->
    </div>
  </section>
</template>

<script setup>
// No specific script logic needed for this static section yet.
</script>

<style scoped>
/* Add any component-specific styles if needed. */
</style>
