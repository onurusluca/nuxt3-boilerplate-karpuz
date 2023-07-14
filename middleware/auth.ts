// Used in "index.vue" This is used to redirect the user to the signIn page if they are not logged in.
import { useAuthStore } from "~/stores/auth-store";

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();

  if (!authStore.session) {
    return navigateTo("/signIn");
  }
});
