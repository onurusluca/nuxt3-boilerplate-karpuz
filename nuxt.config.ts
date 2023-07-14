// https://nuxt.com/docs/api/configuration/nuxt-config

const isDev = process.env.NODE_ENV === "development";

export default defineNuxtConfig({
  /*  typescript: {
    strict: true,
  }, */

  devtools: { enabled: isDev ? true : false },
  nitro: {
    routeRules: {
      // About this and hydration problem: https://github.com/nuxt/nuxt/issues/12266#issuecomment-1569771479
      "/**": { ssr: false },

      /*
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: true },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' }
  */
    },
  },

  runtimeConfig: {
    // Auth
    supabaseUrl: "",
    supabaseAnonKey: "",

    // General
    currentEnv: "",
    baseUrl: "",

    // WebRTC
    webRtcApiBaseUrl: "",
    livekitHostUrl: "",

    // Realtime
    realtimeApiUrl: "",
  },

  modules: [
    "nuxt-icon", // https://nuxt.com/modules/icon
    "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org/
    "@pinia/nuxt", // https://pinia.vuejs.org/ssr/nuxt.html
    "@vueuse/nuxt", // https://vueuse.org/nuxt/README.html
    "@nuxtjs/i18n", // https://i18n.nuxtjs.org/
    "@nuxtjs/tailwindcss", // https://tailwindcss.nuxtjs.org/getting-started/setup
    "@nuxtjs/google-fonts", // https://google-fonts.nuxtjs.org/setup
  ],

  pinia: {
    autoImports: [["defineStore", "definePiniaStore"]],
  },

  colorMode: {
    preference: "dark", // default theme
    dataValue: "theme", // activates data-theme in <html> tag
    classSuffix: "",
  },

  googleFonts: {
    families: {
      Cabin: true,
    },
    display: "swap",
    prefetch: false,
    preconnect: false,
    preload: true,
    download: false,
    base64: false,
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: "en",
    },
    strategy: "no_prefix",
    locales: [
      { code: "en", iso: "en-US", file: "en.yml", name: "English", dir: "ltr" },
      { code: "ja", iso: "ja-JP", file: "ja.yml", name: "日本語", dir: "ltr" },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
  },
});
