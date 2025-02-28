<template>
  <Navbar />
  <div class="px-28 py-12">
    <p class="text-2xl text-justify text-accent">
      {{ $t('aboutUs.first') }}
      <br />
      <br />
      {{ $t('aboutUs.second') }}
      <br />
      <br />
      {{ $t('aboutUs.third') }}
      <br/>
      <br/>
      {{ $t('aboutUs.fourth') }}
    </p>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
</script>