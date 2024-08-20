# Vite + Vue 3 SPA starter template

[![Version](https://img.shields.io/github/v/release/templates-collective/starter-vite-vue3?style=flat&label=%20&color=%230d0d0d)](https://github.com/templates-collective/starter-vite-vue3/releases)

Vite + Vue 3 SPA starter template, supports I18n, UnoCSS, Axios and API auto-import.

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

[Live Demo](https://starter-vite-vue3.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6b182d34-7d30-4206-aad9-9789d1c8ed11/deploy-status)](https://app.netlify.com/sites/starter-vite-vue3/deploys)

![Preview Image](https://github.com/templates-collective/.github/blob/main/preview/starter-vite-vue3.png)

## Quick Start

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/templates-collective/starter-vite-vue3)

Click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

If you just want to develop locally, you can [create a repo](https://github.com/templates-collective/starter-vite-vue3/generate) from this template on GitHub.

## Usage

Just run and visit http://localhost:1977.

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
npx degit templates-collective/starter-vite-vue3 app

cd app

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

When you use this template, try follow the checklist to update your info properly:

- [ ] Change the author name in `LICENSE`.
- [ ] Change the title in `locales/*.json` and `VITE_APP_NAME` env.
- [ ] Change the favicon in `public` and remove preview image.
- [ ] Remove the `.github` folder which contains the funding info.

## License

[MIT License](./LICENSE) © 2024 [Kieran Wong](https://github.com/kieranwong9865/)
