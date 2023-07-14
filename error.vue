<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
});

const message = computed(() => String(props.error?.message || ""));
const is404 = computed(
  () => props.error?.statusCode === 404 || message.value?.includes("404")
);
const isDev = process.dev;

function handleRedirectUser(redirectPath: string) {
  if (redirectPath === "back") {
    window.history.back();
  } else {
    window.location.href = "/";
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div
      class="bg-slate-800 shadow-lg shadow-slate-950 p-10 rounded-lg max-w-3xl"
    >
      <div class="text-center">
        <h1 class="text-4xl mb-4">
          {{
            is404
              ? $t("errorPage.pageDoesNotExist")
              : $t("errorPage.anErrorOccurred")
          }}
        </h1>
        <p class="mb-6">
          {{ $t("errorPage.title") }}
        </p>
      </div>

      <div class="flex justify-center gap-5 mb-5">
        <button @click="handleRedirectUser('back')" class="btn btn-primary">
          {{ $t("errorPage.goBack") }}
        </button>
        <button @click="handleRedirectUser('home')" class="btn btn-outline">
          {{ $t("errorPage.goHome") }}
        </button>
      </div>

      <div v-if="isDev" class="mockup-code bg-zinc-900 text-white rounded-lg">
        <pre class="p-5 whitespace-pre-wrap break-all"><code>{{
        error
      }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style>
/* ... (optional) include your custom styles here ... */
</style>
