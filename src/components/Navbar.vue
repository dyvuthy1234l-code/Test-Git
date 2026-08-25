<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref<boolean>(false)

const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-indigo-600 text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo / Project Name -->
        <div class="flex items-center space-x-3">
          <RouterLink to="/" class="flex items-center space-x-2 font-bold text-xl tracking-tight text-white hover:text-indigo-100 transition" @click="closeMobileMenu">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span>Vue Team Git Practice</span>
          </RouterLink>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-4">
          <RouterLink
            to="/"
            class="px-3 py-2 rounded-md text-sm font-medium transition hover:bg-indigo-700"
            active-class="bg-indigo-800 font-semibold text-white"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="px-3 py-2 rounded-md text-sm font-medium transition hover:bg-indigo-700"
            active-class="bg-indigo-800 font-semibold text-white"
          >
            About
          </RouterLink>
          <RouterLink
            to="/login"
            class="px-4 py-2 rounded-md text-sm font-medium bg-white text-indigo-600 hover:bg-indigo-50 font-semibold transition shadow-sm"
            active-class="ring-2 ring-white"
          >
            Login
          </RouterLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle navigation menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-indigo-700 px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-indigo-500">
      <RouterLink
        to="/"
        class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800 transition"
        active-class="bg-indigo-900 font-bold"
        @click="closeMobileMenu"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800 transition"
        active-class="bg-indigo-900 font-bold"
        @click="closeMobileMenu"
      >
        About
      </RouterLink>
      <RouterLink
        to="/login"
        class="block px-3 py-2 rounded-md text-base font-medium bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition"
        @click="closeMobileMenu"
      >
        Login
      </RouterLink>
    </div>
  </nav>
</template>
