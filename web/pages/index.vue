<template>
  <button @click="goFirstPage">First page</button>
  <button @click="goSecondPage">Second page</button>
</template>
<script setup>
function goFirstPage() {
  navigateTo("/first-page");
}
function goSecondPage() {
  navigateTo("/second-page");
}
</script>
