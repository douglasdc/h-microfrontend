<script setup>
import router from './myroute'
function goToPage2() {
  router.instance.push({
    path: '/second-page'
  })
}

function addParams() {
  router.instance.push({
    query: {
      chat: 2345
    }
  })
}
</script>

<template>
  <div>
    <h1>Olá oia nois da lib!!!</h1>
    <button @click="goToPage2">Vamos pra página 2</button>
    <button @click="addParams">Fica aqui com parâmetro</button>
  </div>
</template>

<style scoped></style>
