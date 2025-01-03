<template>
  <header class="h-screen relative bg-cover bg-center header-bg">
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
      <h1 class="text-4xl lg:text-6xl font-thin mb-4">{{ $t('header.title') }}</h1>
      <!-- <button class="bg-secondary text-primary py-2 px-4 rounded-lg hover:bg-opacity-80">
        {{ $t('header.cta') }}
      </button> -->
    </div>
  </header>
</template>

<style scoped>
.header-bg {
  background-image: url('../assets/images/header-bg.jpg');
}
</style>