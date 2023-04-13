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
