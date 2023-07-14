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
  <div class="bg-secondary">
    <p v-if="authStore">{{ authStore.user }}</p>
  </div>
</template>
