<template>
  <div>
    <Navbar />
    <div class="bg-primary content mt-20 mb-10">
      <h1 class="text-3xl text-accent text-center">{{ $t('navbar.contact') }}</h1>
      <form action="#" method="POST" class="px-6 sm:pb-32 lg:px-8 lg:py-8">
        <div class="mx-auto max-w-xl lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">{{ $t('firstName') }}</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent" />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">{{ $t('lastName') }}</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm/6 font-semibold text-gray-900">{{ $t('email') }}</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">{{ $t('phone') }}</label>
              <div class="mt-2.5">
                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm/6 font-semibold text-gray-900">{{ $t('message') }}</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent" />
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit" class="rounded-md bg-accent px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-accent/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">{{ $t('send') }}</button>
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"

</script>