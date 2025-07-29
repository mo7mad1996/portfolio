// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  // env file
  runtimeConfig: {
    ...import.meta.env,

    public: {
      AXIOS_BASE_URL: import.meta.env.AXIOS_BASE_URL,
    },
  },

  css: [
    "~/assets/scss/reset.scss",
    "~/assets/scss/animations.scss",
    "~/assets/scss/styles.scss",
  ],
  // loading: "~/components/LoadingBar.vue",
  spaLoadingTemplate: true,

  modules: ["nuxt-toast", "@nuxtjs/tailwindcss", "@vesp/nuxt-fontawesome"],

  fontawesome: {
    component: "fa",
    icons: {
      solid: [
        "envelope-open-text",
        "mobile-alt",
        "envelope-open-text",
        "paper-plane",
        "download",
      ],
      brands: ["github", "whatsapp", "whatsapp", "linkedin", "buffer"],
      regular: [],
    },
  },

  // for axios issue
  build: {
    transpile: ["form-data"],
  },
  app: {
    head: {
      titleTemplate: "%s | Mohamed Ibrahim",
      title: "Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "theme-color", content: "#072142" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        {
          name: "description",
          content: `
        السيره الذاتيه،
        مطور برمجيات محترف،محمد ابراهيم خريج علوم الحاسب، مصري ، يجيد تطوير المواقع وبناء و تصميم المواقع الالكترونيه
          , Professional fullstack web developer in Egypt, Mohamed Ibrhim portfolio website
          `,
        },
        {
          name: "keywords",
          content: `مبرمج، مصمم، تطوير المواقع، بناء موقع الكتروني، website، محمد ابراهيم، مصري، تصميم، برمجه، fullstack, frontend , backend, node.js, react.js, next.js, vue.js , nuxt.js`,
        },

        // google seo
        {
          name: "google-site-verification",
          content: "ddFoy-9QqEQyv049MCCtvf3l7NpRS0NBfwhuATdhX0k",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/logo.svg",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js",
          async: true,
        },
      ],
    },
  },

  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    build: {
      // Increase timeout for module loading
      modulePreload: {
        polyfill: true,
      },
    },
    optimizeDeps: {
      entries: [],
    },
  },
});
