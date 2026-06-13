<template>
  <aside
    class="flex flex-col justify-center py-16 lg:sticky lg:top-0 lg:h-screen"
  >
    <div>
      <h1 class="text-5xl font-bold tracking-tight text-slate-100">
        Anggi Nuraziz
      </h1>

      <h2 class="mt-4 text-xl font-medium text-slate-200">Backend Developer</h2>

      <p class="mt-6 max-w-sm leading-relaxed text-slate-400">
        Backend Developer focused on building scalable web applications, APIs,
        and business solutions.
      </p>
    </div>

    <nav class="hidden lg:block mt-16">
      <ul class="space-y-4">
        <li>
          <a
            href="#about"
            class="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
            :class="
              activeSection === 'about'
                ? 'text-slate-200'
                : 'text-slate-500 hover:text-slate-200'
            "
          >
            <span
              class="h-px transition-all duration-300"
              :class="
                activeSection === 'about'
                  ? 'w-16 bg-slate-200'
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              "
            />
            About
          </a>
        </li>

        <li>
          <a
            href="#experience"
            class="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
            :class="
              activeSection === 'experience'
                ? 'text-slate-200'
                : 'text-slate-500 hover:text-slate-200'
            "
          >
            <span
              class="h-px transition-all duration-300"
              :class="
                activeSection === 'experience'
                  ? 'w-16 bg-slate-200'
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              "
            />
            Experience
          </a>
        </li>

        <li>
          <a
            href="#projects"
            class="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
            :class="
              activeSection === 'projects'
                ? 'text-slate-200'
                : 'text-slate-500 hover:text-slate-200'
            "
          >
            <span
              class="h-px transition-all duration-300"
              :class="
                activeSection === 'projects'
                  ? 'w-16 bg-slate-200'
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              "
            />
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            class="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
            :class="
              activeSection === 'contact'
                ? 'text-slate-200'
                : 'text-slate-500 hover:text-slate-200'
            "
          >
            <span
              class="h-px transition-all duration-300"
              :class="
                activeSection === 'contact'
                  ? 'w-16 bg-slate-200'
                  : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
              "
            />
            Contact
          </a>
        </li>
      </ul>
    </nav>

    <div class="mt-16 flex items-center gap-6">
      <a
        href="https://github.com/angginz"
        target="_blank"
        rel="noopener noreferrer"
        class="text-slate-400 transition-colors duration-300 hover:text-emerald-400"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/anggi-nuraziz/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-slate-400 transition-colors duration-300 hover:text-emerald-400"
      >
        LinkedIn
      </a>
    </div>

    <div class="mt-8">
      <a
        href="/resume.pdf"
        target="_blank"
        class="inline-flex items-center font-medium text-emerald-400 transition-colors duration-300 hover:text-emerald-300"
      >
        View Resume
        <span
          class="ml-2 transition-transform duration-300 hover:translate-x-1"
        >
          →
        </span>
      </a>
    </div>

    <p class="mt-12 text-xs tracking-wide text-slate-500">
      Built with Nuxt 4 & Tailwind CSS
    </p>
  </aside>
</template>

<script setup lang="ts">
const activeSection = inject("activeSection", ref("about"));
</script>
