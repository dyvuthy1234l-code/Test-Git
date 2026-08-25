<script setup lang="ts">
// AboutView component
</script>

<template>
  <div class="max-w-3xl mx-auto py-8 space-y-8">
    <div class="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-gray-100 space-y-6">
      <div class="border-b border-gray-100 pb-4">
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
          About This Project
        </h1>
        <p class="text-indigo-600 font-medium text-sm mt-1">
          Git &amp; GitHub Team Collaboration Practice
        </p>
      </div>

      <div class="prose prose-indigo max-w-none text-gray-700 space-y-4">
        <p class="text-lg leading-relaxed">
          This project is created to help our team learn and practice Git and GitHub before starting our main Vue.js project.
        </p>
      </div>

      <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-semibold text-indigo-900">Practice Objectives</h3>
            <p class="text-xs text-indigo-700 mt-1">
              Master branching conventions, commit messages, PR reviews, and resolving merge conflicts safely in a isolated practice environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
