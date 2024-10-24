export default defineNuxtConfig({
  app: {
    baseURL: '/Swiss-Fire-Safty-Website/', // Replace with your repository name
  },
  css: [
    'vuetify/styles',
  ],  // Ensure Vuetify styles are loaded
  build: {
    transpile: ['vuetify'],  // Transpile Vuetify for proper build compatibility
  },
  plugins: ['~/plugins/vuetify.js'],  // Load your custom Vuetify plugin
  devtools: { enabled: true },
  vite: { 
    server: { 
      hmr: { 
        protocol: 'ws', // or 'wss' for secure host: 'localhost', },
      }, 
    }
  }
})
