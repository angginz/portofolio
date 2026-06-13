// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Anggi Nuraziz",
      meta: [
        {
          name: "description",
          content:
            "Portfolio of Anggi Nuraziz — Backend Developer specializing in scalable web applications, APIs, and business solutions.",
        },
        {
          name: "keywords",
          content:
            "Backend Developer, Node.js, Express, Prisma, PostgreSQL, Nuxt, API, software development, portfolio",
        },
        { name: "author", content: "Anggi Nuraziz" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "Anggi Nuraziz" },
        {
          property: "og:description",
          content:
            "Portfolio of Anggi Nuraziz — Backend Developer specializing in scalable web applications, APIs, and business solutions.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://angginz.com" },
        {
          property: "og:image",
          content: "https://angginz.com/og-image.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Anggi Nuraziz | Backend Developer" },
        {
          name: "twitter:description",
          content:
            "Portfolio of Anggi Nuraziz — Backend Developer specializing in scalable web applications, APIs, and business solutions.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
      },
    ],
  },
});
