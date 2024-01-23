<p align="center">
  <img width="88px" src="./src/assets/logo.svg" />
</p>

<br/>

<h3 align="center"><b>Opuntia</b> <sup><em>(Preview)</em></sup></h3>

<p align="center">Vite + Vue starter template with the latest technology stack.</p>

<br/>

<p align='center'>
  <a target="_blank" href="https://opuntia.netlify.app">Live Demo</a>
</p>

<br/>

> **Note**: This template can't be applied to all scenes, currently only for single-page rendering (SPA). If you need server-side rendering (SSR) please use [Nuxt 3](https://nuxt.com), which also supports static-site generation (SSG).

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite) - the latest web develop stack. (supported [Vue DevTools](https://github.com/vuejs/devtools-next))
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine.
- 📦 [Components auto importing](https://github.com/antfu/unplugin-vue-components).
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly.
- 🦾 TypeScript, of course.
- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions).
- ☁️ Deploy on Netlify, zero-config.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable [Vetur](https://vuejs.github.io/vetur/) if you have it).

## Try it now!

### Online

<a href="https://stackblitz.com/github/kaivanwong/opuntia" target="_blank"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/kaivanwong/opuntia/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history.

```bash
npx degit kaivanwong/opuntia opuntia-app

cd opuntia-app

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly:

- [ ] Change the author name in `LICENSE`.
- [ ] Change the title in `app.vue`.
- [ ] Change the hostname in `vite.config.ts`.
- [ ] Change the favicon in `public`.
- [ ] Remove the `.github` folder which contains the funding info.

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:5173.

```bash
pnpm dev
```

### Build

To build the App, run:

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

## License

[MIT License](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)
