<template>
  <h1>Second page</h1>
  <button @click="goFirstPage">Go first-pge</button>
</template>

<script setup>
async function goFirstPage() {
  await navigateTo({ path: "/first-page" });
}
</script>
