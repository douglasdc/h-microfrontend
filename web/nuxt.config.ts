// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/first-page/**": { ssr: false }
  },
  runtimeConfig: {
    public: {
      libHost: process.env.LIB_HOST || "nada"
    }
  }
});
