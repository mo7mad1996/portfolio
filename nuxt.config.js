module.exports = {
  // server
  server: { port: process.env.PORT },

  dev: process.env.NODE_ENV == "development",

  plugins: ["~/plugins/toast"],

  head: {
    titleTemplate: "%s | Mohamed Ibrahim",
    title: "Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "theme-color",
        content: "#072142",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
      {
        hid: "description",
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
        content: "cOJq1Ce5BlzFFqOji8aC1Sy_602TuQVawU6Uib6bSE0",
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

  css: [
    "~assets/scss/reset.scss",
    "~assets/scss/animations.scss",
    "~assets/scss/styles.scss",
    "vue-toast-notification/dist/theme-sugar.css",
  ],

  // loading component
  loading: "~/components/LoadingBar.vue",

  // Auto import components
  components: true,

  modules: ["@nuxtjs/axios"],
  buildModules: ["@nuxtjs/fontawesome"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  axios: {
    baseURL: process.env.AXIOS_BASEURL,
  },

  telemetry: false,

  target: "static",
};
