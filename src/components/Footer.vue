<template>
  <footer class="bg-accent text-primary py-8 2xl:py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center">
        <!-- Logo container -->
        <div class="relative inline-block h-32">
          <img 
            src="../assets/logo.png" 
            alt="Logo outline" 
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 scale-105 brightness-0 invert"
          />
          <img 
            src="../assets/logo.png" 
            alt="Logo" 
            class="relative h-32"
          />
        </div>

        <!-- Contact Information -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center w-full">
          <div class="space-y-2">
            <h3 class="font-bold text-xl 2xl:text-3xl mb-4">{{ $t('footer.visitUs') }}</h3>
            <p class="text-lg 2xl:text-2xl">2051 Champagne Dr</p>
            <p class="text-lg 2xl:text-2xl">Asheboro, NC 27203</p>
          </div>

          <div class="space-y-2">
            <h3 class="font-bold text-xl 2xl:text-3xl mb-4">{{ $t('navbar.contact') }}</h3>
            <a 
              href="mailto:info@carolinabakery.com" 
              class="text-lg 2xl:text-2xl block hover:text-secondary transition-colors"
            >
              carolinabakeryinc@gmail.com
            </a>
            <p class="text-lg 2xl:text-2xl">Tel: (336) 736-8203</p>
          </div>

          <div class="space-y-2">
            <h3 class="font-bold text-xl 2xl:text-3xl mb-4">{{ $t('footer.followUs') }}</h3>
            <a 
              href="https://facebook.com/carolinabakeryinc" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-lg 2xl:text-2xl flex items-center justify-center hover:text-secondary transition-colors"
            >
              <svg 
                class="size-6 2xl:size-8 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                  clip-rule="evenodd" 
                />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-center mt-8 pt-8 border-t border-primary w-full">
          <p class="text-lg 2xl:text-xl">&copy; {{ year }} Carolina Bakery Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>