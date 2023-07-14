<script setup>
// https://nuxt.com/docs/guide/directory-structure/app
import supabase from "~/composables/useInitSupabase";
import { useAuthStore } from "~/stores/auth-store";

const authStore = useAuthStore();

// listen for auth events (e.g. sign in, sign out, refresh)
supabase.auth.getSession().then(({ data }) => {
  authStore.session = data.session;
  authStore.user = data.session?.user;
});

supabase.auth.onAuthStateChange((_, _session) => {
  authStore.session = _session;
  authStore.user = _session?.user;
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  charset: "utf-8",
  title: "Karpuz 🍉",
  titleTemplate: (title) =>
    title !== "Karpuz 🍉" ? `${title} · Karpuz 🍉` : title,
  description:
    "Karpuz - An opinionated Nuxt 3 starter boilerplate with TypeScript, TailwindCSS, i18n, eslint, prettier and more... ",
  meta: [
    {
      name: "Karpuz 🍉",
      content:
        "Karpuz - An opinionated Nuxt 3 starter boilerplate with TypeScript, TailwindCSS, i18n, eslint, prettier and more...",
    },
    { name: "msapplication-TileColor", content: "#333333" },
    { name: "theme-color", content: "#333333" },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
});
</script>

<template>
  <div class="font-Cabin">
    <NuxtLayout>
      <!-- https://nuxt.com/docs/api/components/nuxt-loading-indicator -->
      <NuxtLoadingIndicator />
      <NuxtPage class="ml-28 mt-5 mr-4" />
    </NuxtLayout>
  </div>
</template>

<!-- h-screen w-screen  -->
