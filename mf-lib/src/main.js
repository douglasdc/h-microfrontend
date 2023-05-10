import Vue from 'vue'
import App from './App.vue'

import router from './myroute'

if (process.env.NODE_ENV === 'development') {
  injectAt('#app')
}

export function injectAt(elementId) {
  new Vue({
    render: (h) => h(App)
  }).$mount(elementId)
}

export function init(config) {
  if (!config.socket) {
    throw new Error(
      'Necessário passar a instancia do socket. Para mais inforamções ler o Readme do projeto'
    )
  } else if (!config.api) {
    throw Error(
      'Necessário passar o access token da API. Para mais inforamções ler o Readme do projeto'
    )
  } else if (!config.router) {
    throw Error(
      'Necessário passar o objeto de rota em. Para mais inforamções ler o Readme do projeto'
    )
  }

  if (config.router) {
    router.setInstance(config.router)
  }
}
