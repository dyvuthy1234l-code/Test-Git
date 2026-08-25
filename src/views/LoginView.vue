<script setup lang="ts">
import { ref } from 'vue'

const email = ref<string>('')
const password = ref<string>('')
const isSubmitted = ref<boolean>(false)
const errorMessage = ref<string>('')

const handleLogin = (): void => {
  if (!email.value || !password.value) {
    errorMessage.value = 'Please enter both email and password.'
    isSubmitted.value = false
    return
  }

  errorMessage.value = ''
  isSubmitted.value = true
}
</script>

<template>
  <div class="max-w-md mx-auto py-12">
    <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6">
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-bold text-gray-900 tracking-tight">Login Practice UI</h1>
        <p class="text-xs text-gray-500">UI demonstration only &mdash; No real authentication backend</p>
      </div>

      <!-- Success Notification (Simulation) -->
      <div
        v-if="isSubmitted"
        class="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg flex items-center space-x-2"
      >
        <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Mock login submitted successfully for <strong>{{ email }}</strong>!</span>
      </div>

      <!-- Error Notification -->
      <div
        v-if="errorMessage"
        class="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg"
      >
        {{ errorMessage }}
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="email" class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="developer@example.com"
            class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-sm"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-sm"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition duration-150"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
