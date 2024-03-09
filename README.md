<p align="center">
  <img width="88px" src="./src/images/logo.svg" />
</p>

<h3 align="center"><b>Opuntia</b> <sup><em>(Preview)</em></sup></h3>

<p align="center">Vite + Vue 3 SPA web starter template.</p>

<br/>

<p align="center">
  <samp>
    <a target="_blank" href="https://opuntia.netlify.app">Live Demo</a> ·
    <b>English</b> |
    <a href="./README.zh-CN.md">简体中文</a>
  </samp>
</p>

<br />

<p align="center">
  <a href="https://stackblitz.com/github/opuntia-dev/opuntia" target="_blank"><img height="32" src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>

## Features

- [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [UnoCSS](https://github.com/antfu/unocss), [Pinia](https://pinia.vuejs.org/), TypeScript - the latest web develop stack.
- File-based [routing](./src/pages) and [layout](./src/layouts) system, it's auto.
- [Components](./src/components) and [APIs](https://github.com/antfu/unplugin-auto-import) is auto importing.
- Use SVG [icons](https://github.com/antfu/unocss/tree/main/packages/preset-icons) from any icon sets with classes.
- [I18n](./locales) ready, and supports automatic import of translated files.
- Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/).
- Deploy on Netlify, zero-config.

## Quick Start

[Create a repo](https://github.com/opuntia-dev/opuntia/generate) from this template on GitHub.

If you prefer to do it manually with the cleaner git history:

```bash
npx degit opuntia-dev/opuntia opuntia-app

cd opuntia-app

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

When you use this template, try follow the checklist to update your info properly:

- [ ] Change the author name in `LICENSE`.
- [ ] Change the title in `locales/*.json`.
- [ ] Change the hostname in `vite.config.ts`.
- [ ] Change the favicon in `public`.
- [ ] Remove the `.github` folder which contains the funding info.

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

## License

[MIT License](./LICENSE) © 2023-PRESENT [Kaivan Wong](https://github.com/kaivanwong)
