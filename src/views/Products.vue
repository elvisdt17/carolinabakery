<template>
  <div>
    <Navbar />
    <section class="py-16">
      <div class="w-full border-b-8 border-secondary mb-8">
        <h1 class="text-center text-6xl text-accent">{{ $t("ourProducts.title") }}</h1>
      </div>
      <div v-for="category in categories" :key="category.name">
        <h2 class="text-left text-5xl pl-6 underline">{{ $t(category.name + '.title') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 mb-12 lg:grid-cols-4 gap-6 px-4 mt-8">
          <div v-for="product in category.products" :key="product.name" class="p-4 bg-secondary rounded-lg shadow">
            <img :src="product.image" alt="" class="rounded-lg w-full" />
            <h3 class="mt-2 text-2xl text-accent text-center font-semibold">{{ product.name }}</h3>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import cotton_green from "../assets/images/cotton_green.jpg"
import cotton_pink from "../assets/images/cotton_pink.jpg"
import cotton_yellow from "../assets/images/cotton_yellow.jpg"
import cotton_candy_strawberry from "../assets/images/cotton_candy_strawberry.jpg"
import jelly_roll from "../assets/images/jelly_roll.jpg"
import pound_cake from "../assets/images/pound_cake.jpg"
import lemon_pound_cake from "../assets/images/lemon_pound_cake.jpg"
import muffins from "../assets/images/muffins.jpg"
import corn_bread from "../assets/images/corn_bread.jpg"
import season_tender from "../assets/images/Seasoned-Tenderizer.jpg"
import meat_marinade from "../assets/images/meat-marinade.jpg"
import fajitas_marinade from "../assets/images/fajitas-marinade.jpg"
import meat_seasoning from "../assets/images/meat-seasoning.jpg"
import pork_chop_seasoning from "../assets/images/pork-chop-seasoning.jpg"
import fajitas_seasoning from "../assets/images/Fajitas-Seasoning.jpg"
import chicken_marinade from "../assets/images/chicken-marinade.jpg"
import chicken_seasoning from "../assets/images/chicken-Seasoning.jpg"
import al_pastor from "../assets/images/carne-al-Pastor-Paste.jpg"
import black_pepper from "../assets/images/black_pepper.jpg"
import adobo_criollo from "../assets/images/adobo_criollo.jpg"
import comino from "../assets/images/comino.jpg"
import adobo_birria from "../assets/images/adobo_birria.jpg"
import adobo_comp from "../assets/images/adobo_sazon_comp.jpg"
import malagueta from "../assets/images/malagueta.jpg"
import rosmery from "../assets/images/rosmery.jpg"
import thyme from "../assets/images/thyme.jpg"
import pink_salt from "../assets/images/pink_salt.jpg"
import garlic from "../assets/images/garlic_gran.jpg"
import onion from "../assets/images/onion_gran.jpg"

const categories = [
  {
    name: 'bakery',
    products: [
      { name: "Jelly Roll", image: jelly_roll },
      { name: "Muffins", image: muffins },
      { name: "Vanilla Pound Cake", image: pound_cake },
      { name: "Lemon Pound Cake", image: lemon_pound_cake },
    ]
  },
  {
    name: 'spices',
    products: [
      { name: "Garlic Granulated", image: garlic },
      { name: "Onion Granulated", image: onion },
      { name: "Ground Black Pepper", image: black_pepper },
      { name: "Comino Molido", image: comino },
      { name: "Pimienta Dulce", image: malagueta },
      { name: "Romero", image: rosmery },
      { name: "Tomillo", image: thyme },
      { name: "Sal Rosada", image: pink_salt },
    ]
  },
  {
    name: 'seasoning',
    products: [
      { name: "Seasoned Tenderizer", image: season_tender },
      { name: "Meat Marinade", image: meat_marinade },
      { name: "Fajitas Marinade", image: fajitas_marinade },
      { name: "Steak & Meat Seasoning", image: meat_seasoning },
      { name: "Pork Chop Seasoning", image: pork_chop_seasoning },
      { name: "Red Fajitas Seasoning", image: fajitas_seasoning },
      { name: "Chicken Marinade", image: chicken_marinade },
      { name: "Chicken Seasoning", image: chicken_seasoning },
      { name: "Al Pastor Paste", image: al_pastor },
      { name: "Adobo Criollo", image: adobo_criollo },
      { name: "Adobo Para Birria", image: adobo_birria },
      { name: "Adobo With Complete Seasoning", image: adobo_comp },
    ]
  },
  {
    name: 'cottonCandy',
    products: [
      { name: "Cotton Candy Green Apple", image: cotton_green },
      { name: "Cotton Candy Pink Vanilla", image: cotton_pink },
      { name: "Cotton Candy Banana", image: cotton_yellow },
      { name: "Cotton Candy Strawberry Pink", image: cotton_candy_strawberry },
    ]
  },

]
</script>
