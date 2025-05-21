<template>
  <div class="bg-gray-50 pt-10"> <!-- Wrapper div -->
    <!-- Top Footer Section: Links and Get in Touch -->
    <section class="flex flex-col px-5 mx-auto text-gray-500 md:space-x-10 md:flex-row md:max-w-5xl">
      <!-- Company Info Column -->
      <div class="pb-4 text-left basis-1/5">
        <h6 class="pb-2 font-medium text-gray-700">Company Info</h6>
        <p class="pb-2 text-sm font-medium"><router-link to="/about-placeholder" class="hover:text-gray-900">About Us</router-link></p>
        <p class="pb-2 text-sm font-medium"><router-link to="/carrier-placeholder" class="hover:text-gray-900">Carrier</router-link></p>
        <p class="pb-2 text-sm font-medium"><router-link to="/hiring-placeholder" class="hover:text-gray-900">We're Hiring</router-link></p>
        <p class="text-sm font-medium"><router-link to="/blog-placeholder" class="hover:text-gray-900">Blog</router-link></p>
      </div>

      <!-- Legal Column -->
      <div class="pb-4 text-left basis-1/5">
        <h6 class="pb-2 font-medium text-gray-700">Legal</h6>
        <p class="pb-2 text-sm font-medium"><router-link to="/legal-about-placeholder" class="hover:text-gray-900">About Us</router-link></p>
        <p class="pb-2 text-sm font-medium"><router-link to="/legal-carrier-placeholder" class="hover:text-gray-900">Carrier</router-link></p>
        <p class="pb-2 text-sm font-medium"><router-link to="/legal-hiring-placeholder" class="hover:text-gray-900">We're Hiring</router-link></p>
        <p class="text-sm font-medium"><router-link to="/legal-blog-placeholder" class="hover:text-gray-900">Blog</router-link></p>
      </div>

      <!-- Features Column -->
      <div class="pb-4 text-left basis-1/5">
        <h6 class="pb-2 font-medium text-gray-700">Features</h6>
        <p class="pb-2 text-sm font-medium"><router-link to="/feature-business-marketing-placeholder" class="hover:text-gray-900">Business Marketing</router-link></p>
        <p class="pb-2 text-sm font-medium"><router-link to="/feature-user-analytic-placeholder" class="hover:text-gray-900">User Analytic</router-link></p>
        <p class="pb-2 text-sm font-medium"><router-link to="/feature-live-chat-placeholder" class="hover:text-gray-900">Live Chat</router-link></p>
        <p class="text-sm font-medium"><router-link to="/feature-unlimited-support-placeholder" class="hover:text-gray-900">Unlimited Support</router-link></p>
      </div>

      <!-- Resources Column -->
      <div class="pb-4 text-left basis-1/5">
        <h6 class="pb-2 font-medium text-gray-700">Resources</h6>
        <p class="pb-2 text-sm font-medium"><router-link to="/resource-ios-android-placeholder" class="hover:text-gray-900">IOS & Android</router-link></p>
        <p class="pb-2 text-sm font-medium"><router-link to="/resource-watch-demo-placeholder" class="hover:text-gray-900">Watch a Demo</router-link></p>
        <p class="pb-2 text-sm font-medium"><router-link to="/resource-customers-placeholder" class="hover:text-gray-900">Customers</router-link></p>
        <p class="text-sm font-medium"><router-link to="/resource-api-placeholder" class="hover:text-gray-900">API</router-link></p>
      </div>

      <!-- Get in Touch Column -->
      <div class="pb-4 text-left basis-1/5">
        <h6 class="pb-2 font-medium text-gray-700">Get in Touch!</h6>
        <div class="flex pb-2 text-sm font-medium align-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <p>(480) 555-0103</p>
        </div>
        <div class="flex pb-2 text-sm font-medium align-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <p>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
        </div>
        <div class="flex pb-2 text-sm font-medium align-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <p>debra.holt@example.com</p>
        </div>
      </div>
    </section>

    <!-- Bottom Footer Section: Copyright and Social Media -->
    <footer class="text-center text-gray-600 bg-gray-100 lg:text-left mt-10">
      <div class="flex items-center justify-center p-6 border-t border-gray-300 lg:justify-between">
        <div class="hidden mr-12 lg:block">
          <span class="pb-2 text-xs font-medium">Made With Love By Figmaland All Right Reserved</span>
        </div>
        <div class="flex justify-center">
          <a href="#" class="mr-6 text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" class="mr-6 text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.735.884 3.269 2.228 4.165-.823-.026-1.602-.253-2.284-.629v.08c0 2.395 1.703 4.405 3.951 4.868-.414.112-.85.172-1.296.172-.317 0-.623-.031-.928-.086.635 1.953 2.475 3.379 4.649 3.419-1.693 1.326-3.825 2.112-6.147 2.112-.4 0-.794-.023-1.179-.069 2.189 1.407 4.795 2.229 7.622 2.229 9.141 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.56 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <!-- Assuming Instagram Icon -->
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919.058-1.265.07-1.644.07-4.849zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No specific script logic needed for this static footer yet.
</script>

<style scoped>
/* Add any component-specific styles if needed. */
</style>
