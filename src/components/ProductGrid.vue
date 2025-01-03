<template>
  <section class="py-12 bg-primary">
    <h2 class="text-center text-3xl md:text-4xl mb-8 text-accent">{{ $t("ourProducts.title") }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      <div v-for="category in categories" :key="category.name" class="relative group">
        <div class="flex items-center justify-center overflow-hidden rounded-lg">
          <img 
            :src="category.image" 
            :alt="category.name" 
            class="w-44 h-44 object-cover transition-transform transform group-hover:scale-105" 
          />
        </div>
        <h3 class="mt-2 text-center text-xl text-secondary font-semibold">{{ $t(category.name + '.title') }}</h3>
        <p class="text-center text-accent text-lg">{{ $t(category.name + '.description') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>

import spices from '../assets/spices.png'
import pastry from '../assets/pastry.png'
import cotton from '../assets/cotton-candy.png'
import seasoning from '../assets/seasoning.png'

const categories = [
  { name: "spices", image: spices },
  { name: "seasoning", image: seasoning },
  { name: "bakery", image: pastry },
  { name: "cottonCandy", image: cotton },
]
</script>
