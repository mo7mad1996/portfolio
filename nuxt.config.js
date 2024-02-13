const port = process.env.PORT,
  dev = process.env.NODE_ENV == "development";

module.exports = {
  // server
  server: {
    host: "0.0.0.0",
    port,
  },
  dev,
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
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Mohamed Ibrahim portfolio, The best fullStack web developer...",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/logo.svg",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/scss/reset.scss",
    "~assets/scss/anmations.scss",
    "~assets/scss/styles.scss",
  ],

  // loading component
  loading: "~/components/LoadingBar.vue",

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

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
    port,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  telemetry: false,
};
