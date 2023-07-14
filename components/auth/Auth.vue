<script setup lang="ts">
const loading = ref(false);
let email = ref<String>("");
let password = ref<String>("");

const { login } = useAuth();
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Nuxt 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input
          class="input input-bordered w-full max-w-xs"
          type="email"
          placeholder="Your email"
          v-model="email"
          autofocus
          name="email"
          id="email"
          required
        />
      </div>

      <button type="submit" class="btn btn-accent" :disabled="loading">
        {{ loading ? "Loading" : "Send magic link" }}
      </button>
    </div>
  </form>
</template>
