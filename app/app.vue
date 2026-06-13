<template>
  <div class="font-sans bg-[#0a192f] text-slate-300 min-h-screen">
    <div class="bg-[#0a192f] text-slate-300 min-h-screen">
      <div class="mx-auto max-w-7xl px-6 lg:px-12">
        <div class="lg:grid lg:grid-cols-[400px_1fr] lg:gap-24">
          <Sidebar />

          <main class="py-16">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, onBeforeUnmount } from "vue";

const activeSection = ref("about");
provide("activeSection", activeSection);

let sectionElements: HTMLElement[] = [];

const updateActiveSection = () => {
  if (!sectionElements.length) return;

  const viewportMiddle = window.innerHeight * 0.4;
  let current = sectionElements[0]?.id || "about";

  for (const section of sectionElements) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= viewportMiddle) {
      current = section.id;
    }
  }

  activeSection.value = current;
};

onMounted(() => {
  sectionElements = Array.from(
    document.querySelectorAll<HTMLElement>("main section[id]"),
  );
  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("resize", updateActiveSection);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateActiveSection);
  window.removeEventListener("resize", updateActiveSection);
});
</script>
