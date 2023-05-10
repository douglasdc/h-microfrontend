<template>
  <h1>First page</h1>
  <button @click="goToSecond">Go to second page</button>
  <div id="mflib" style="background-color: gray"></div>
</template>

<script setup>
import Socket from "@huggydigital/socket";

const MAX_RETRY = 10;
const INTERVAL_TIME = 200;
const router = useRouter();
let timer = null;
const config = useRuntimeConfig();

function goToSecond() {
  navigateTo({
    path: "/second-page"
  });
}

function initSocket() {
  Socket.init({
    agentToken: "AGENT_TOKEN",
    companyId: 1,
    host: {
      prod: "WSS_PROD_HOST",
      dev: "WSS_DEV_HOST"
    },
    environment: "prod"
  });
}

useHead({
  script: [
    {
      key: "primus",
      src: `https://cdn-flash.huggy.cloud/primus.min.js`,
      type: "text/javascript",
      tagPosition: "head",
      defer: true,
      onload: initSocket
    },
    { src: `${config.libHost}/mf-lib.umd.js`, tagPosition: "bodyClose" }
  ]
});

onMounted(() => {
  timer = setInterval(() => {
    try {
      $MFLIB.init({
        socket: Socket,
        api: () => "ACCESS_TOKEN",
        router
      });
      $MFLIB.injectAt("#mflib");

      clearInterval(timer);
    } catch (e) {
      console.error(e);
    }
  }, INTERVAL_TIME);

  setInterval(() => {
    clearInterval(timer);
  }, INTERVAL_TIME * MAX_RETRY);
});
</script>
