<script setup lang="ts">
import { usePracticeStore } from '@/stores/practiceStore'

const practiceStore = usePracticeStore()

const practiceList: string[] = [
  'Branch',
  'Commit',
  'Push',
  'Pull Request',
  'Code Review',
  'Merge',
  'Conflict Resolution',
]

interface FeatureCard {
  title: string
  description: string
  icon: string
}

const featureCards: FeatureCard[] = [
  {
    title: 'Git Workflow',
    description: 'Practice branches, commits and pushes.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Team Collaboration',
    description: 'Practice Pull Requests and code reviews.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Conflict Resolution',
    description: 'Practice handling merge conflicts.',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  },
]
</script>

<template>
  <div class="space-y-12 py-4">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white rounded-2xl p-8 sm:p-12 shadow-xl text-center space-y-6">
      <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
        Vue Team Git Practice
      </h1>
      <p class="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
        A practice project for learning Git and GitHub team collaboration.
      </p>

      <!-- Practice Checklist Pill Box -->
      <div class="pt-4 max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <h2 class="text-sm font-semibold uppercase tracking-wider text-indigo-200 mb-3">
          Practice Topics
        </h2>
        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="item in practiceList"
            :key="item"
            class="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full transition"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </section>

    <!-- Feature Cards Section -->
    <section class="space-y-6">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-900">Collaboration Features</h2>
        <p class="text-gray-600 mt-1">Core skills team members will master during this practice.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="card in featureCards"
          :key="card.title"
          class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition duration-200 flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="card.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">{{ card.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pinia Interactive Checklist Demo -->
    <section class="bg-white rounded-xl p-6 shadow-md border border-gray-100 space-y-4">
      <div class="border-b border-gray-100 pb-3">
        <h3 class="text-lg font-bold text-gray-900">Pinia State Check: Practice Goals</h3>
        <p class="text-xs text-gray-500">Interactive Pinia store verification</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          v-for="topic in practiceStore.topics"
          :key="topic.id"
          @click="practiceStore.toggleTopic(topic.id)"
          class="flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition select-none"
          :class="topic.completed ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'"
        >
          <input
            type="checkbox"
            :checked="topic.completed"
            class="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 pointer-events-none"
          />
          <span class="text-sm font-medium" :class="{ 'line-through opacity-75': topic.completed }">
            {{ topic.title }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
