import type { App, Plugin } from 'vue'

export function installModule(app: App, module: Plugin) {
  app.use(module)
}

export function installModules(app: App, modules: Plugin[]) {
  modules.forEach((module) => {
    installModule(app, module)
  })
}
