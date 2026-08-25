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
  <div class="min-h-screen bg-slate-50 text-slate-900">

    <!-- ================= HERO ================= -->
    <section
      class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-800 px-6 py-16 sm:px-10 lg:px-16"
    >
      <!-- Background decoration -->
      <div
        class="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
      ></div>

      <div
        class="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
      ></div>

      <div class="relative grid items-center gap-12 lg:grid-cols-2">

        <!-- Hero Content -->
        <div class="text-white">

          <div
            class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur"
          >
            <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
            Git & GitHub Team Practice
          </div>

          <h1
            class="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
          >
            Master Git.
            <span class="text-indigo-300">Build Together.</span>
          </h1>

          <p
            class="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg"
          >
            Learn real-world Git and GitHub collaboration through practical
            exercises, team workflows, pull requests, code reviews, and merge
            conflict resolution.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <button
              class="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Start Practice
              <span class="ml-2">→</span>
            </button>

            <button
              class="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Workflow
            </button>
          </div>
        </div>

        <!-- Terminal Card -->
        <div class="relative">
          <div
            class="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur"
          >

            <!-- Terminal Header -->
            <div class="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span class="h-3 w-3 rounded-full bg-red-400"></span>
              <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span class="h-3 w-3 rounded-full bg-green-400"></span>

              <span class="ml-3 text-xs text-slate-500">
                git-practice ~/project
              </span>
            </div>

            <!-- Terminal Body -->
            <div class="space-y-4 p-6 font-mono text-sm">

              <div>
                <span class="text-emerald-400">➜</span>
                <span class="text-slate-300"> git checkout -b feature/homepage</span>
              </div>

              <div>
                <span class="text-emerald-400">➜</span>
                <span class="text-slate-300"> git add .</span>
              </div>

              <div>
                <span class="text-emerald-400">➜</span>
                <span class="text-slate-300">
                  git commit -m "Create homepage"
                </span>
              </div>

              <div>
                <span class="text-emerald-400">➜</span>
                <span class="text-slate-300">
                  git push origin feature/homepage
                </span>
              </div>

              <div class="mt-5 rounded-lg bg-emerald-500/10 p-3 text-emerald-400">
                ✓ Everything up-to-date
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ================= STATS ================= -->
    <section class="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

      <div
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <div class="flex items-center justify-between">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl"
          >
            🌿
          </div>
          <span class="text-xs font-semibold text-emerald-600">
            Git
          </span>
        </div>

        <p class="mt-4 text-2xl font-bold">7</p>
        <p class="text-sm text-slate-500">Core Topics</p>
      </div>

      <div
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <div class="flex items-center justify-between">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl"
          >
            👥
          </div>
          <span class="text-xs font-semibold text-purple-600">
            Team
          </span>
        </div>

        <p class="mt-4 text-2xl font-bold">3</p>
        <p class="text-sm text-slate-500">Collaboration Skills</p>
      </div>

      <div
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <div class="flex items-center justify-between">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl"
          >
            ⚡
          </div>
          <span class="text-xs font-semibold text-amber-600">
            Practice
          </span>
        </div>

        <p class="mt-4 text-2xl font-bold">100%</p>
        <p class="text-sm text-slate-500">Hands-on Learning</p>
      </div>

      <div
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <div class="flex items-center justify-between">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-xl"
          >
            🚀
          </div>
          <span class="text-xs font-semibold text-emerald-600">
            Ready
          </span>
        </div>

        <p class="mt-4 text-2xl font-bold">GitHub</p>
        <p class="text-sm text-slate-500">Team Workflow</p>
      </div>

    </section>


    <!-- ================= WORKFLOW ================= -->
    <section class="mt-16">

      <div class="mb-8">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-indigo-600"
        >
          Learning Path
        </p>

        <h2 class="mt-2 text-3xl font-bold tracking-tight">
          From Code to Collaboration
        </h2>

        <p class="mt-2 max-w-2xl text-slate-500">
          Follow a simple workflow to understand how developers collaborate
          using Git and GitHub.
        </p>
      </div>


      <div class="grid gap-4 md:grid-cols-4">

        <div
          v-for="(step, index) in [
            {
              number: '01',
              title: 'Create Branch',
              description: 'Work safely without changing the main branch.',
              icon: '🌿'
            },
            {
              number: '02',
              title: 'Commit Changes',
              description: 'Save your work with meaningful commits.',
              icon: '💾'
            },
            {
              number: '03',
              title: 'Pull Request',
              description: 'Share your changes with your team.',
              icon: '🔀'
            },
            {
              number: '04',
              title: 'Merge',
              description: 'Review and combine changes together.',
              icon: '🚀'
            }
          ]"
          :key="step.number"
          class="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
        >

          <div class="flex items-center justify-between">
            <span
              class="text-xs font-bold tracking-widest text-indigo-500"
            >
              {{ step.number }}
            </span>

            <span class="text-2xl">
              {{ step.icon }}
            </span>
          </div>

          <h3 class="mt-6 text-lg font-bold">
            {{ step.title }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-slate-500">
            {{ step.description }}
          </p>

        </div>

      </div>
    </section>


    <!-- ================= PRACTICE TOPICS ================= -->
    <section class="mt-16">

      <div class="mb-8 text-center">
        <p
          class="text-sm font-semibold uppercase tracking-widest text-indigo-600"
        >
          Practice
        </p>

        <h2 class="mt-2 text-3xl font-bold">
          What You Will Learn
        </h2>

        <p class="mx-auto mt-2 max-w-2xl text-slate-500">
          Build practical Git skills that you can use in real development
          projects.
        </p>
      </div>


      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div
          v-for="(item, index) in practiceList"
          :key="item"
          class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
        >

          <div class="flex items-center justify-between">

            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <span class="text-slate-300 transition group-hover:text-indigo-400">
              →
            </span>

          </div>

          <h3 class="mt-5 font-bold text-slate-900">
            {{ item }}
          </h3>

          <p class="mt-2 text-sm text-slate-500">
            Practice {{ item.toLowerCase() }} in a real team workflow.
          </p>

        </div>

      </div>
    </section>


    <!-- ================= PINIA PROGRESS ================= -->
    <section
      class="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >

      <div class="grid lg:grid-cols-[1fr_1.5fr]">

        <!-- Left -->
        <div class="bg-gradient-to-br from-indigo-950 to-indigo-800 p-8 text-white">

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl"
          >
            ✓
          </div>

          <h2 class="mt-6 text-2xl font-bold">
            Your Practice Progress
          </h2>

          <p class="mt-3 text-sm leading-6 text-indigo-200">
            Complete each topic and build your confidence with Git
            collaboration.
          </p>

          <div class="mt-8">

            <div class="mb-2 flex justify-between text-sm">
              <span class="text-indigo-200">Progress</span>
              <span class="font-bold">
                {{
                  Math.round(
                    (practiceStore.topics.filter(t => t.completed).length /
                      practiceStore.topics.length) *
                      100
                  )
                }}%
              </span>
            </div>

            <div class="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                class="h-full rounded-full bg-white transition-all duration-500"
                :style="{
                  width:
                    Math.round(
                      (practiceStore.topics.filter(t => t.completed).length /
                        practiceStore.topics.length) *
                        100
                    ) + '%'
                }"
              ></div>
            </div>

          </div>
        </div>


        <!-- Right -->
        <div class="p-8">

          <div class="grid gap-3 sm:grid-cols-2">

            <div
              v-for="topic in practiceStore.topics"
              :key="topic.id"
              @click="practiceStore.toggleTopic(topic.id)"
              class="group flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition"
              :class="
                topic.completed
                  ? 'border-emerald-200 bg-emerald-50'
                  : 'border-slate-200 bg-slate-50 hover:border-indigo-200 hover:bg-indigo-50'
              "
            >

              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition"
                :class="
                  topic.completed
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-slate-400 shadow-sm'
                "
              >
                {{ topic.completed ? '✓' : '○' }}
              </div>

              <div class="min-w-0">
                <p
                  class="text-sm font-semibold"
                  :class="
                    topic.completed
                      ? 'text-emerald-800 line-through'
                      : 'text-slate-700'
                  "
                >
                  {{ topic.title }}
                </p>

                <p class="mt-0.5 text-xs text-slate-400">
                  {{ topic.completed ? 'Completed' : 'Click to complete' }}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ================= CTA ================= -->
    <section
      class="relative mt-16 overflow-hidden rounded-3xl bg-indigo-600 px-6 py-12 text-center text-white sm:px-12"
    >

      <div
        class="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl"
      ></div>

      <div class="relative">

        <h2 class="text-3xl font-bold sm:text-4xl">
          Ready to become a better Git collaborator?
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-indigo-100">
          Practice the workflow, complete your goals, and learn how
          professional development teams collaborate.
        </p>

        <button
          class="mt-7 rounded-xl bg-white px-7 py-3 font-bold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50"
        >
          Start Learning →
        </button>

      </div>
    </section>

  </div>
</template>
