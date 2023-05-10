// Apenas para que o objeto de rota seja acessível em todo o projeto
class Router {
  instance
  constructor() {
    this.instance = null
  }

  setInstance(r) {
    this.instance = r
  }
}

const router = new Router()

export default router
