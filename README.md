# Vite + Vue 3 Starter Template

[![Version](https://img.shields.io/github/v/release/templates-collective/starter-vite-vue3?style=flat&label=%20&color=%230d0d0d)](https://github.com/templates-collective/starter-vite-vue3/releases)

Vite + Vue 3 SPA Starter Template, supports I18n, UnoCSS, Axios, File Routing and API auto-import.

## Features

- [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [UnoCSS](https://github.com/antfu/unocss), [Pinia](https://pinia.vuejs.org/), [TypeScript](https://www.typescriptlang.org/) - the latest web develop stack.
- File-based [routing](./src/pages) and [layout](./src/layouts) system, it's automatic.
- [Components](https://github.com/antfu/unplugin-vue-components), [API](https://github.com/antfu/unplugin-auto-import) and src directories are auto importing.
- Out-of-the-box network requests, based on [Axios](https://axios-http.com/).
- Use [SVG icons](https://github.com/antfu/unocss/tree/main/packages/preset-icons) from any icon sets with classes.
- [I18n](./locales) ready, and supports automatic import of translated files.
- Unit Testing with [Vitest](https://github.com/vitest-dev/vitest).
- Deploy on Netlify with zero-config, supports other deployment methods as well.

## Preview

[![Preview Image](https://github.com/templates-collective/.github/blob/main/preview/starter-vite-vue3.png)](https://starter-vite-vue3.netlify.app/)

## Usage

[Create a repo](https://github.com/templates-collective/starter-vite-vue3/generate) from this template on GitHub.

```bash
git clone <git remote url>
```

Install npm dependencies.

```bash
cd starter-vite-vue3 # Or your project directory

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

Just run and visit http://localhost:9865.

```bash
pnpm dev
```

To build the App, you can run:

```bash
pnpm build
```

You will then see the `dist` folder generated for publishing, which you can preview locally with the following command.

```bash
pnpm preview
```

## Clean Template

If you prefer to do it manually with the cleaner git history:

```bash
npx degit templates-collective/starter-vite-vue3 starter-vite-vue3

cd starter-vite-vue3

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

When you use this template, try follow the checklist to update your info properly:

- [ ] Change the author name in `LICENSE`.
- [ ] Change the title in `locales/*.json` and `VITE_APP_NAME` env.
- [ ] Change the favicon in `public` and remove preview image.
- [ ] Remove the `.github` folder which contains the funding info.

## License

[MIT License](./LICENSE) © 2024 [Kieran Wong](https://github.com/kieranwong9865/)
