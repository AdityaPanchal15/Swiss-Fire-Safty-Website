export default defineNuxtConfig({
  css: ['vuetify/styles'],  // Ensure Vuetify styles are loaded
  build: {
    transpile: ['vuetify'],  // Transpile Vuetify for proper build compatibility
  },
  plugins: ['~/plugins/vuetify.js'],  // Load your custom Vuetify plugin
  devtools: { enabled: true }
})
