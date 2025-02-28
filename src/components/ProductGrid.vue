<template>
  <!-- <section class="bg-primary">
    <div class="overflow-hidden">
      <div class="mx-auto max-w-7xl pb-12 pt-14 pl-8 sm:pt-60 lg:pt-4">
        <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div class="mt-12 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div class="ml-auto w-72 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-40">
              <div class="relative">
                <img src="../assets/images/jelly_roll.jpg" alt="" class="aspect-[3/2] w-full h-64 rounded-xl bg-gray-900/5 object-cover shadow-lg">
                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
            <div class="mr-auto w-72 flex-none space-y-8 sm:mr-0 sm:pt-44 lg:pt-6">
              <div class="relative">
                <img src="../assets/images/lemon_pound_cake.jpg" alt="" class="aspect-[3/2] h-64 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div class="relative">
                <img src="../assets/header/fruit-mix-cotton.jpg" alt="" class="aspect-[3/2] h-64 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
            <div class="w-72 flex-none space-y-8 pt-96 sm:pt-36">
              <div class="relative">
                <img src="../assets/header/strawberry-roll-cake.jpg" alt="" class="aspect-[3/2] h-64 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
          </div>
          <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl lg:pl-10">
            <h1 class="text-pretty text-3xl md:text-4xl 2xl:text-5xl tracking-tight text-accent sm:text-5xl">{{ $t('featuredProducts') }}</h1>
          </div>
        </div>
      </div>
    </div>
  </section> -->
<div class="container mx-auto px-4 mt-20 mb-44">
  <h1 class="text-3xl md:text-4xl 2xl:text-5xl text-center text-accent mb-16">
    {{ $t('featuredProducts') }}
  </h1>
  <div class="grid grid-cols-3 gap-4 items-center w-full mx-auto">
    <div class="flex justify-center items-center">
      <div class="relative">
        <img src="../assets/images/jelly_roll.jpg" class="aspect-[3/3] w-full h-96 rounded-xl bg-gray-900/5 object-cover shadow-lg">
        <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
    </div>
  
    <div class="flex flex-col space-y-12">
      <div class="relative">
        <img src="../assets/images/lemon_pound_cake.jpg" class="aspect-[3/3] h-96 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
        <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div class="relative">
        <img src="../assets/header/fruit-mix-cotton.jpg" class="aspect-[3/3] h-96 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
        <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
    </div>
  
    <div class="flex justify-center items-center">
      <div class="relative">
        <img src="../assets/images/muffins.jpg" class="aspect-[3/3] h-96 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
        <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import spices from '../assets/spices.png'
import pastry from '../assets/pastry.png'
import cotton from '../assets/cotton-candy.png'
import seasoning from '../assets/seasoning.png'

</script>
