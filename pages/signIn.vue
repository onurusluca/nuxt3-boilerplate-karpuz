<script setup>
const auth = useAuth();
const router = useRouter();
const route = useRouter();

const email = ref("");
const password = ref("");

const handleSignIn = async () => {
  const signUpResult = await auth.signIn(email.value, password.value);
  // Example API request placeholder
  console.log("Sign in form submitted");
  console.log("Email:", email.value);
  console.log("Password:", password.value);

  // Navigate to dashboard
  console.log(signUpResult);
  if (signUpResult) {
    router.push("/");
  }
};
</script>

<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Sign In</h1>
    <form @submit.prevent="handleSignIn">
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
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</template>
