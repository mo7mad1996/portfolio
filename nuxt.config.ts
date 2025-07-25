// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // env file
  runtimeConfig: {
    EMAIL_USER: import.meta.env.EMAIL_USER,
    EMAIL_PASS: import.meta.env.EMAIL_PASS,
    IP2LOCATION_API_KEY: import.meta.env.IP2LOCATION_API_KEY,
    public: {},
  },
});
