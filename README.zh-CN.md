<p align="center">
  <img width="88px" src="./src/images/logo.svg" />
</p>

<h3 align="center"><b>Opuntia</b> <sup><em>(Preview)</em></sup></h3>

<p align="center">使用最新 Web 开发技术栈的 Vite + Vue 3 模板。</p>

<br/>

<p align="center">
  <samp>
    <a target="_blank" href="https://opuntia.netlify.app">在线 Demo</a> ·
    <a  href="./README.zh-CN.md">English</a> |
    <b>简体中文</b>
  </samp>
</p>

<br />

<p align="center">
  <a href="https://stackblitz.com/github/kaivanwong/opuntia" target="_blank"><img height="32" src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>

## 特性

- [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [UnoCSS](https://github.com/antfu/unocss), [Pinia](https://pinia.vuejs.org/), TypeScript - 最新 web 开发技术栈.
- 基于文件的 [路由](./src/pages) 和 [布局](./src/layouts) 系统，支持自动化导入。
- [组件](./src/components) 和 [功能 API](https://github.com/antfu/unplugin-auto-import) 是自动化导入的.
- 各种 [图标集](https://github.com/antfu/unocss/tree/main/packages/preset-icons) 为你所用。
- [I18n 国际化](./locales) 开箱即用, 并且翻译文件支持自动导入。
- 使用 [Vitest](https://github.com/vitest-dev/vitest) 的单元测试, 使用 [Cypress](https://cypress.io/) 的端到端测试.
- 零配置部署 Netlify。

## 快速开始

使用这个模板在 Github 上[创建仓库](https://github.com/kaivanwong/opuntia/generate).

如果您更喜欢使用更干净的 git 历史记录手动执行此操作。

```bash
npx degit kaivanwong/opuntia opuntia-app

cd opuntia-app

pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

使用此模板时，请尝试按照清单正确更新您自己的信息。

- [ ] 在 `LICENSE` 中改变作者名。
- [ ] 在 `locales/*.json` 中改变标题。
- [ ] 在 `public` 目录下改变favicon。
- [ ] 移除 `.github` 文件夹中的信息。
- [ ] 如果你不需要 `Netlify`，可用移除 `netlify.toml`。

## 使用

只需要执行以下命令就可以在 http://localhost:1977。

```bash
pnpm dev
```

构建该应用只需要执行以下命令。

```bash
pnpm build
```

然后你会看到用于发布的 `dist` 文件夹被生成，你可以通过以下命令本地预览。

```bash
pnpm preview
```

## 许可证

[MIT 开源协议](./LICENSE) © 2023-PRESENT [Kaivan Wong](https://github.com/kaivanwong)
