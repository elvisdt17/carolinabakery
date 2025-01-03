<template>
  <nav
    class="sticky top-0 z-10 flex items-center justify-between px-6 py-1 bg-transparent backdrop-blur-lg transition-colors duration-300"
    :class="{ 'bg-primary shadow-lg': scrolled }"
  >
    <!-- Logo and Company Name -->
    <div class="flex items-center">
      <img src="../assets/logo.png" alt="Company Logo" class="h-12 sm:h-16 md:h-20 -ml-4" />
      <span class="ml-3 text-2xl md:text-4xl font-bold text-secondary">Carolina Bakery</span>
    </div>

    <!-- Mobile Menu Button -->
    <button 
      @click="isMenuOpen = !isMenuOpen"
      class="md:hidden text-secondary focus:outline-none"
    >
      <svg 
        class="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          v-if="!isMenuOpen"
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M4 6h16M4 12h16m-7 6h7"
        />
        <path 
          v-else
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Desktop Navigation -->
    <ul 
      class="hidden md:flex space-x-6" 
      :class="{ 'text-white': scrolled }"
    >
      <li v-for="item in menuItems" :key="item.route">
        <router-link
          :to="item.route"
          class="text-secondary hover:text-accent transition-colors text-lg lg:text-2xl font-bold"
        >
          {{ $t(item.label) }}
        </router-link>
      </li>
    </ul>

    <!-- Mobile Navigation -->
    <div 
      v-show="isMenuOpen"
      class="absolute top-full left-0 right-0 bg-primary shadow-lg md:hidden"
    >
      <ul class="px-6 py-4 space-y-4">
        <li v-for="item in menuItems" :key="item.route">
          <router-link
            :to="item.route"
            class="block text-secondary hover:text-accent transition-colors text-xl font-bold"
            @click="isMenuOpen = false"
          >
            {{ $t(item.label) }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Language Toggle Button -->
    <button
      @click="toggleLocale"
      class="hidden md:block px-4 py-2 ml-4 text-sm font-semibold text-white bg-secondary rounded hover:bg-accent transition-colors"
    >
      {{ currentLanguage }}
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const scrolled = ref(false);
const isMenuOpen = ref(false)

const menuItems = [
  { route: '/', label: 'navbar.home' },
  { route: '/about', label: 'navbar.aboutUs' },
  { route: '/products', label: 'navbar.products' },
  { route: '/contact-us', label: 'navbar.contact' }
]

const toggleLocale = () => {
  locale.value = locale.value === "en" ? "es" : "en";
};

const currentLanguage = computed(() =>
  locale.value === "en" ? "ES" : "EN"
);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

</script>

<style>
/* TailwindCSS will handle most styles. Add custom styles if necessary. */
</style>
