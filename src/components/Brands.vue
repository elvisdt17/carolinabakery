<template>
  <section class="py-12 bg-primary">
    <h2 class="text-center text-3xl md:text-4xl mb-8 text-accent">{{ $t("ourBrands") }}</h2>
    <div class="flex flex-row justify-center">
      <div v-for="brand in brands" :key="brand.name" class="relative group flex flex-col">
        <div class="flex h-full items-center justify-center overflow-hidden rounded-lg">
          <img 
            :src="brand.image" 
            :alt="brand.name" 
            class="w-full object-cover transition-transform transform group-hover:scale-105" 
          />
        </div>
        <h3 class="mt-auto text-center text-2xl text-secondary font-semibold">{{ brand.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>

import jorocho from '../assets/jorocho.png'
import zoo from '../assets/zoo_bakery.png'

const brands = [
  { name: "El Jorocho", image: jorocho },
  { name: "Zoo Bakery", image: zoo },
]
</script>
