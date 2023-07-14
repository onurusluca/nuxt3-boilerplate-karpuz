<script setup lang="ts">
const auth = useAuth();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

let passwordsDoNotMatch = ref(false);

console.log("auth", auth);

const handleSignup = async () => {
  // Check if passwords match
  if (password.value !== confirmPassword.value) {
    passwordsDoNotMatch.value = true;
    return;
  }

  await auth.signUp(email.value, password.value);

  console.log("Sign up form submitted");
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  console.log("Confirm Password:", confirmPassword.value);
};
</script>

<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Sign Up</h1>
    <form @submit.prevent="handleSignup">
      <div class="mb-4">
        <label for="email" class="block font-bold mb-1">Email:</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="form-input"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block font-bold mb-1">Password:</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-input"
          required
        />
      </div>
      <div class="mb-4">
        <label for="confirmPassword" class="block font-bold mb-1"
          >Confirm Password:</label
        >
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          class="form-input"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
    <div v-if="passwordsDoNotMatch" class="text-red-500">
      Passwords do not match
    </div>
  </div>
</template>
