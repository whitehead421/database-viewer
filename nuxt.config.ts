// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  pages: true,
  serverDir: "server",
  app: {
    head: {
      title: "Database | London Fire Brigade",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
