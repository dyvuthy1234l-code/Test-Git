<script setup lang="ts">
// AboutView component
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[300px] h-[300px] bg-violet-600/15 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="relative w-full max-w-4xl space-y-8">
      <!-- Main Hero Card -->
      <div class="relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden">
        <!-- Subtle Grid Pattern Overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        <div class="relative space-y-8">
          <!-- Header Badge & Title -->
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Git &amp; GitHub Team Collaboration Practice
            </div>
            
            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
              About This Project
            </h1>
            
            <p class="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Designed as a collaborative sandbox to help our engineering team master essential Git workflows, branch strategies, and code reviews prior to launching our core Vue.js application.
            </p>
          </div>

          <!-- Objectives Grid -->
          <div class="grid sm:grid-cols-2 gap-4 pt-4">
            <div class="group p-5 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 class="text-base font-semibold text-slate-200">Branching &amp; Commits</h3>
              <p class="text-sm text-slate-400 mt-1">Master feature branching naming conventions and clear, descriptive commit standards.</p>
            </div>

            <div class="group p-5 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-violet-500/40 transition-all duration-300">
              <div class="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-base font-semibold text-slate-200">PRs &amp; Conflicts</h3>
              <p class="text-sm text-slate-400 mt-1">Conduct constructive code reviews and safely resolve complex merge conflicts.</p>
            </div>
          </div>

          <!-- Highlight Banner -->
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900 border border-indigo-500/30 p-5">
            <div class="flex items-start gap-4">
              <div class="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="space-y-1">
                <span class="text-xs font-bold uppercase tracking-wider text-indigo-400">Environment Note</span>
                <p class="text-sm text-slate-300">
                  This isolated playground allows everyone to make mistakes, experiment with complex Git commands, and refine collaboration habits without breaking production code.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
