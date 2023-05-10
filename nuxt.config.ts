
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
    },
    display: 'swap',
    subsets: ['latin']
  },
  tailwindcss: {
    configPath: 'tailwind.config',
  }
})
