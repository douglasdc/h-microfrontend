<template>
  <h1>First page</h1>
  <button @click="goToSecond">Go to second page</button>
  <div id="mflib" style="background-color: gray"></div>
</template>

<script setup>
const router = useRouter();
let timer = null;

function goToSecond() {
  navigateTo({
    path: "/second-page"
  });
}

useHead({
  script: ["http://127.0.0.1:4173/mf-lib.umd.js"]
});

onMounted(() => {
  timer = setTimeout(() => {
    try {
      $MFLIB.init({
        router
      });
      $MFLIB.injectAt("#mflib");

      clearTimeout(timer);
    } catch {
      console.log("deu pau?");
    }
  }, 200);
});
</script>
