<template>
  <div class="container mx-auto px-4 mt-20 mb-20">
    <h2 class="text-3xl md:text-4xl text-center text-accent mb-2">
      {{ $t('findUs.title') }}
    </h2>
    <div class="relative">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :autoplay="{ delay: 3000 }"
        :breakpoints="{
          '640': { slidesPerView: 2 },
          '768': { slidesPerView: 3 },
          '1024': { slidesPerView: 4 }
        }"
        :navigation="true"
      >
        <swiper-slide 
          v-for="partner in partners"
          :key="partner.id"
          class="flex items-center justify-center p-8"
        >
          <img 
            :src="partner.logo" 
            :alt="partner.name"
            class="max-h-20 opacity-70 hover:opacity-100 transition-opacity duration-200"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Autoplay, Navigation]

import saveALotLogo from '../assets/images/Save-A-Lot_logo.png'
import carlie_cs_logo from '../assets/images/carlie_cs_logo.png'
import fresh_foods_logo from '../assets/images/fresh_foods_logo.png'
import food_depot_logo from '../assets/images/food_depot_logo.png'
import piggly_wiggly_logo from '../assets/images/Piggly-Wiggly-Logo.png'
import super_g_mart from '../assets/images/super_g_mart_logo.png'
import wow_super_logo from '../assets/images/wow_supermarket_logo.png'
import compare_foods_logo from '../assets/images/compare_foods_logo.png'

const partners = [
  { id: 1, name: 'Save a lot', logo: saveALotLogo },
  { id: 2, name: "Carlie C's", logo: carlie_cs_logo },
  { id: 3, name: 'Fresh Foods', logo: fresh_foods_logo },
  { id: 4, name: 'Food Depot', logo: food_depot_logo },
  { id: 5, name: 'Piggly Wigglys', logo: piggly_wiggly_logo },
  { id: 6, name: 'Super G Mart', logo: super_g_mart },
  { id: 7, name: 'Wow Supermarket', logo: wow_super_logo },
  { id: 8, name: 'Compare Foods', logo: compare_foods_logo },
]
</script>