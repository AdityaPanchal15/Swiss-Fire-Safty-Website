export default defineNuxtConfig({
  css: ['vuetify/styles'],  // Ensure Vuetify styles are loaded
  build: {
    transpile: ['vuetify'],  // Transpile Vuetify for proper build compatibility
  },
  plugins: ['~/plugins/vuetify.js'],  // Load your custom Vuetify plugin
  devtools: { enabled: true },
  compatibilityDate: '2024-10-21',
  
  // modules: ['@nuxtjs/vuetify'],  // Only `modules` is needed in Nuxt 3
  
  // vuetify: {
  //   // Configure Vuetify options here, if needed
  // }
})
