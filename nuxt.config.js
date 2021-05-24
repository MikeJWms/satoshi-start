export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: false, // Disable Server Side rendering
  generate: { dir: 'docs' },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'satoshi-start',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This project tests multiple new blog technologies. Nuxt-ts, nuxt-content, and tailwind css are the major ones' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n'
  ],

  // nuxt-i18n module configuration (https://i18n.nuxtjs.org)
  i18n: {
    baseUrl: 'https://myfirstsatoshi.com/',
    locales:
      [
        { code: 'en-us', iso: 'en-US', country: 'us', title: 'English, USA' },
        { code: 'es-us', iso: 'es-MX', country: 'us', title: 'Spanish, USA' }
      ],
    defaultLocale: 'en-us',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en-us',
      messages: {

      }
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
