<template>
  <section class="bg-header">
    <!-- Main Hero Section -->
    <div class="flex flex-col-reverse p-4 mx-auto place-items-center md:flex-row md:max-w-5xl md:space-y-0">
      <!-- Left Hero Text -->
      <div id="leftHero" class="md:w-1/2 md:text-left">
        <p class="text-sm font-semibold text-paleGreen">Join Us</p>
        <h2 class="text-5xl subpixel-antialiased font-semibold tracking-tighter md:text-6xl text-darkPurple">
          25K STUDENTS TRUST US
        </h2>
        <p class="mt-7 text-plainGray">Every day brings with it a fresh set of learning possibilities</p>
        <div class="flex mt-4 mr-2 align-center">
          <button type="button" class="px-5 pt-2.5 pb-2 text-white bg-paleGreen font-medium text-xs leading-normal rounded shadow-md hover:bg-opacity-75">
            Get Quote!
          </button>
          <!-- "Learn More" kept as <a> as per instruction, can be button if no href -->
          <a role="button" class="ml-4 px-5 pt-2.5 pb-2 border-paleGreen border-2 text-paleGreen font-medium text-xs leading-normal rounded hover:shadow-lg hover:bg-paleGreen hover:text-white">
            Learn More
          </a>
        </div>
      </div>
      <!-- Right Hero Image -->
      <div id="rightHero" class="md:w-1/2">
        <img src="./img/hero.png" alt="hero.png" width="500" height="462"> <!-- Path to be updated later -->
      </div>
    </div>

    <!-- Features Section -->
    <div class="z-50 flex flex-col items-center max-w-5xl mx-auto mt-5 md:flex-row md:-mt-10 md:space-x-5">
      <!-- Feature Card 1 -->
      <div class="px-5 py-3 mx-5 mt-5 mb-10 bg-white border-white border-solid rounded-md shadow-lg basis-1/3 md:py-5">
        <img src="./img/icons/icon-edu-.svg" alt="icon-edu" class="w-10 h-10"> <!-- Path to be updated later -->
        <h3 class="text-[16px] font-bold text-darkPurple mt-5 mb-5">Expert Instruction #1</h3>
        <div class="h-1 bg-red-600 w-[90px] rounded-t"></div>
        <p class="mt-5">
          The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th.
        </p>
      </div>
      <!-- Feature Card 2 -->
      <div class="px-5 py-3 mx-5 mt-5 mb-10 bg-white border-white border-solid rounded-md shadow-lg basis-1/3 md:py-5">
        <img src="./img/icons/icon-book.svg" alt="icon-book" class="w-10 h-10"> <!-- Path to be updated later -->
        <h3 class="text-[16px] font-bold text-darkPurple mt-5 mb-5">Expert Instruction #2</h3>
        <div class="h-1 bg-red-600 w-[90px] rounded-t"></div>
        <p class="mt-5">
          The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th.
        </p>
      </div>
      <!-- Feature Card 3 -->
      <div class="px-5 py-3 mx-5 mt-5 mb-10 bg-white border-white border-solid rounded-md shadow-lg basis-1/3 md:py-5">
        <img src="./img/icons/icon-school.svg" alt="icon-school" class="w-10 h-10"> <!-- Path to be updated later -->
        <h3 class="text-[16px] font-bold text-darkPurple mt-5 mb-5">Expert Instruction #3</h3>
        <div class="h-1 bg-red-600 w-[90px] rounded-t"></div>
        <p class="mt-5">
          The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific script logic needed for this static section yet.
</script>

<style scoped>
/* Add any component-specific styles if needed. */
</style>
