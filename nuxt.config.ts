export default defineNuxtConfig({
  app: {
    baseURL: '/', // Replace with your repository name
    head: {
      title: 'Swiss Fire Security - Fire Alarm Systems and Services in India',
      meta: [
        { name: 'description', content: 'Swiss Fire Security provides top-notch fire alarm systems, installation, and maintenance services across India. Based in Vadodara, we ensure your safety.' },
        { name: 'keywords', content: 'Fire Alarm Systems in India, Fire Safety Services Vadodara, Fire Security Solutions India, Fire Alarm Installation Vadodara, Best Fire Alarm Systems India, Fire Safety Equipment Suppliers, Fire Detection Services India, Fire Protection Systems Vadodara, Top Fire Alarm Companies India, Fire Alarm Maintenance Services, Emergency Fire Safety Solutions, Fire Alarm Repair Vadodara, Advanced Fire Safety Systems, Smoke Detector Installation India, Reliable Fire Alarm Systems, Fire Protection Services India, Commercial Fire Alarm Systems, Residential Fire Safety India, Affordable Fire Alarm Installation, Vadodara Fire Alarm Company' },
        { name: 'robots', content: 'index, follow' },
      ],
    },
  },
  css: [
    'vuetify/styles',
    '~/assets/styles/global.scss',
  ],
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
