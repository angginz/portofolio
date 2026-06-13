<template>
  <section id="projects" class="mb-32">
    <h2 class="text-sm tracking-widest text-slate-400 uppercase mb-8">
      Projects
    </h2>

    <div class="space-y-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="group rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/40 hover:shadow-lg hover:shadow-slate-900/20"
      >
        <h3
          class="text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-emerald-400"
        >
          {{ project.title }}
        </h3>

        <p
          class="mt-4 text-slate-400 transition-colors duration-300 group-hover:text-slate-300"
        >
          {{ project.description }}
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "@/data/portfolio";
</script>
