<script setup lang="ts">
import { useAuthStore } from "~/stores/auth-store";

const auth = useAuth();
const authStore = useAuthStore();

const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i: { code: string }) => i.code !== locale.value);
});

const handleSignOut = async () => {
  await auth.signOut();
  navigateTo("/signIn");
};
</script>

<template>
  <div>
    <h1>fsadfsd</h1>
  </div>
</template>
