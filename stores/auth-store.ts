import { defineStore } from "pinia";
import type { Session, User } from "~/types/auth.types";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return { session: {} as Session, user: {} /* as User */ };
  },
});
