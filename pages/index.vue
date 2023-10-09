<script setup lang="ts">
import { useAuthStore } from "~/stores/auth-store";
const authStore = useAuthStore();

/*
watchEffect(() => {
  if (user.value) {
    navigateTo('/tasks')
  }
}) */

definePageMeta({
  layout: "default",
  middleware: "auth", // middleware: 'auth'
});

useHead({
  title: "Dashboard",
});
</script>

<template>
  <div
    class="bg-slate-600 text-white w-screen h-screen flex justify-center align-middle items-center"
  >
    <div class="flex-col text-center">
      <h1 class="text-lg">
        🍉 Karpuz - An opinionated Nuxt 3 starter boilerplate with TypeScript,
        TailwindCSS, i18n, eslint, prettier and more...
      </h1>
      <br />

      <p>Start by editing <code>pages/index.vue</code></p>
    </div>
  </div>
</template>
