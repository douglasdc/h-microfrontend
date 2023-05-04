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
  console.log('Config: ', config)

  if (config.router) {
    router.setInstance(config.router)
    console.log(config.router)
  } else {
    console.log('tinha nada de route aqui não')
  }
}
