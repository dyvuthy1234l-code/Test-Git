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
  <div class="relative min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 overflow-hidden">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-12 right-12 w-[250px] h-[250px] bg-violet-600/15 blur-[90px] rounded-full pointer-events-none"></div>

    <div class="relative w-full max-w-md">
      <!-- Main Card -->
      <div class="rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-8 sm:p-10 shadow-2xl space-y-6">
        
        <!-- Header Section -->
        <div class="text-center space-y-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Practice Environment
          </div>
          <h1 class="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p class="text-xs text-slate-400">
            UI demonstration only &mdash; No real authentication backend
          </p>
        </div>

        <!-- Success Notification -->
        <div
          v-if="isSubmitted"
          class="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs rounded-2xl flex items-center gap-3 backdrop-blur-md"
        >
          <div class="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span>Mock login submitted successfully for <strong class="text-emerald-200 font-semibold">{{ email }}</strong>!</span>
        </div>

        <!-- Error Notification -->
        <div
          v-if="errorMessage"
          class="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs rounded-2xl flex items-center gap-3 backdrop-blur-md"
        >
          <div class="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email Field -->
          <div class="space-y-1.5">
            <label for="email" class="block text-xs font-semibold text-slate-300 tracking-wide uppercase">
              Email Address
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="developer@example.com"
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition text-sm"
                required
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="space-y-1.5">
            <label for="password" class="block text-xs font-semibold text-slate-300 tracking-wide uppercase">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="••••••••"
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition text-sm"
                required
              />
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-[0.98] transition-all duration-200 mt-2"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  </div>
</template>