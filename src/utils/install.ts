import type { App, Plugin } from 'vue'

/**
 * Install modules from a glob path
 *
 * @param app
 * @returns app instance with installed modules
 */
export function installModules(app: App): App {
  for (const [, module] of Object.entries<{ default: Plugin }>(import.meta.glob('@/modules/*.ts', { eager: true })))
    app.use(module.default)
  return app
}
