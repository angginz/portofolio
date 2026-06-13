<template>
  <section id="experience" class="mb-32">
    <h2 class="text-sm tracking-widest text-slate-400 uppercase mb-8">
      Experience
    </h2>

    <div class="space-y-6">
      <div
        v-for="(item, index) in experiences"
        :key="index"
        class="group rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/40 hover:shadow-lg hover:shadow-slate-900/20"
      >
        <p class="text-sm text-slate-500">{{ item.period }}</p>

        <h3
          class="mt-2 text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-emerald-400"
        >
          {{ item.title }} · {{ item.company }}
        </h3>

        <p
          class="mt-4 text-slate-400 transition-colors duration-300 group-hover:text-slate-300"
        >
          {{ item.description }}
        </p>

        <ul class="mt-4 list-disc pl-5 space-y-2 text-slate-400">
          <li
            v-for="(detail, detailIndex) in item.details || []"
            :key="detailIndex"
            class="text-sm leading-relaxed"
          >
            {{ detail }}
          </li>
        </ul>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in item.tags"
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
import { experiences } from "@/data/portfolio";
</script>
