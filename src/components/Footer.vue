<script setup lang="ts">
const currentYear: number = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 py-6 mt-auto border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
      <p class="text-sm font-medium">
        Vue Team Git Practice &copy; {{ currentYear }} — Built for Git & GitHub Collaboration Training.
      </p>
      <p class="text-xs text-gray-400">
        Vue 3 &bull; TypeScript &bull; Vite &bull; Tailwind CSS &bull; Vue Router &bull; Pinia
      </p>
    </div>
  </footer>
</template>
