const port = process.env.PORT,
  dev = process.env.NODE_ENV == "development";

module.exports = {
  // server
  server: {
    host: "0.0.0.0",
    port,
  },

  // is in development mode?
  dev,

  plugins: ["~/plugins/toast"],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s | Mohamed Ibrahim",
    title: "Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        name: "theme-color",
        content: "#072142",
      },
      {
        charset: "utf-8",
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/scss/reset.scss",

    "~assets/scss/anmations.scss",
    "~assets/scss/styles.scss",
    "vue-toast-notification/dist/theme-sugar.css",
  ],

  // loading component
  loading: "~/components/LoadingBar.vue",

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  axios: {
    baseURL: process.env.AXIOS_BASEURL,
  },

  telemetry: false,
  target: "static",
};
