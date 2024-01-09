import type { App, Plugin } from 'vue'

export function installPlugin(app: App, plugin: Plugin) {
  app.use(plugin)
}

export function installPlugins(app: App, plugins: Plugin[]) {
  plugins.forEach((plugin) => {
    installPlugin(app, plugin)
  })
}
