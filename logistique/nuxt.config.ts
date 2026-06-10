export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // Google Fonts supprimé — on utilise Chillax en local
  ],
  colorMode: { classSuffix: '' },
  css: ['~/assets/css/main.css'],

  
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }

})