<template>
  <section id="wrapperNavBar" class="bg-header sticky top-0 self-center z-50 p-[30px] w-full backdrop-blur flex-none drop-shadow-lg">
    <div id="navBar" class="flex justify-between max-w-5xl mx-auto">
      <h1 class="text-xl font-bold tracking-tighter text-darkPurple">
        <router-link to="/">BrandName</router-link>
      </h1>
      <!-- Desktop Menu -->
      <nav id="menu-desktop">
        <ul class="justify-center hidden pt-1 text-sm antialiased font-semibold md:flex text-plainGray">
          <li><router-link to="/" class="ml-4 font-serif">Home</router-link></li>
          <li><router-link to="/product-placeholder" class="ml-4 font-serif">Product</router-link></li>
          <li><router-link to="/pricing-placeholder" class="ml-4 font-serif">Pricing</router-link></li>
          <li><router-link to="/contact-placeholder" class="ml-4 font-serif">Contact</router-link></li>
        </ul>
      </nav>
      <!-- Auth Buttons -->
      <div class="justify-center hidden px-1 space-x-1 text-sm font-medium tracking-tight text-paleGreen md:flex">
        <router-link to="/login-placeholder" class="hidden px-5 py-1 text-sm md:inline-block lg:ml-auto lg:mr-3 text-paleGreen rounded-xl">
          Login
        </router-link>
        <router-link to="/join-placeholder" class="hidden md:flex align-center -mt-1 px-5 pt-2.5 pb-2 bg-paleGreen text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:text-[#FFF] hover:shadow-lg hover:bg-opacity-75 focus:text-paleGreen focus:shadow-lg focus:outline-none focus:ring-0 active:text-paleGreen active:shadow-lg transition duration-150 ease-in-out">
          Join Us
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
      <!-- Mobile Menu Button -->
      <button id="menu-btn" @click="toggleMobileMenu" :class="{ 'open': isMobileMenuOpen }" class="block hamburger md:hidden focus:outline-none w-[27px] h-[27px] mt-1"> <!-- Adjusted h-[27] to h-[27px] for consistency -->
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
      <!-- Mobile Menu -->
      <div class="md:hidden">
        <div id="menu" :class="{ 'flex': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-header sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <router-link to="/" @click="closeMobileMenu">Home</router-link>
          <router-link to="/product-placeholder" @click="closeMobileMenu">Product</router-link>
          <router-link to="/pricing-placeholder" @click="closeMobileMenu">Pricing</router-link>
          <router-link to="/contact-placeholder" @click="closeMobileMenu">Contact</router-link>
          <router-link to="/join-placeholder" @click="closeMobileMenu">Join Us</router-link>
          <router-link to="/login-placeholder" @click="closeMobileMenu">Login</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
/* Original hamburger styles can be kept here or moved to global input.css if they are generic enough.
   For now, let's assume they might be component-specific or can be managed by Tailwind classes directly.
   The Tailwind classes .hamburger, .hamburger-top, etc. and .open are already in input.css.
   If these classes are in src/input.css and are global, they should work.
   If they need to be component-specific and are not covered by Tailwind utilities, they can be added here.
   Let's verify if existing global styles for hamburger in input.css are sufficient.
*/

/* .hamburger classes are already global in input.css, so no need to repeat here unless overriding */
</style>
