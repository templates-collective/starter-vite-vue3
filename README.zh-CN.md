# Vite + Vue 3 启动模板

[![Version](https://img.shields.io/github/v/release/templates-collective/starter-vite-vue3?style=flat&label=%20&color=%230d0d0d)](https://github.com/templates-collective/starter-vite-vue3/releases)

Vite + Vue 3 单页面应用初始化模板, 支持国际化、Axios、UnoCSS、文件路由和自动化的 API 导入。

- [在线演示](https://starter-vite-vue3.netlify.app/)
- [在 Stackblitz 上试用](https://stackblitz.com/github/templates-collective/starter-vite-vue3)
- [简体中文的 README](./README.zh-CN.md)

## 特性

- 使用 [Vue 3](https://github.com/vuejs/core)、[Vite](https://github.com/vitejs/vite)、[UnoCSS](https://github.com/antfu/unocss)、[Pinia](https://pinia.vuejs.org/)、[TypeScript](https://www.typescriptlang.org/) 构建，代表最新的 Web 开发技术栈。
- 基于文件的 [路由](./src/pages) 和 [布局](./src/layouts) 系统，自动化处理。
- [组件](https://github.com/antfu/unplugin-vue-components)、[API](https://github.com/antfu/unplugin-auto-import) 和 `src` 目录中的内容自动导入。
- 开箱即用的网络请求功能，基于 [Axios](https://axios-http.com/)。
- 通过类名使用来自任意图标集的 [SVG 图标](https://github.com/antfu/unocss/tree/main/packages/preset-icons)。
- 支持 [I18n](./locales)，并自动导入翻译文件。
- 使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试。
- 零配置部署到 [Netlify](https://app.netlify.com/)，并支持其他部署方式。

## 预览

[![预览图片](https://github.com/templates-collective/.github/blob/main/preview/starter-vite-vue3.png)](https://starter-vite-vue3.netlify.app/)

## 使用方法

从 GitHub 上 [创建一个仓库](https://github.com/templates-collective/starter-vite-vue3/generate) 基于此模板。

```bash
git clone <git 远程地址>
```

安装依赖。

```bash
cd starter-vite-vue3 # 或者你的项目目录

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

运行项目并访问 http://localhost:9865。

```bash
pnpm dev
```

要构建应用，可以运行：

```bash
pnpm build
```

构建后会生成 `dist` 文件夹，你可以使用以下命令进行本地预览。

```bash
pnpm preview
```

## 清理模板

如果你更喜欢手动操作并保持更清晰的 git 历史记录：

```bash
npx degit templates-collective/starter-vite-vue3 starter-vite-vue3

cd starter-vite-vue3

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

使用此模板时，请按照以下检查列表正确更新信息：

- [ ] 更改 `LICENSE` 中的作者姓名。
- [ ] 更改 `locales/*.json` 和 `.env` 中的标题。
- [ ] 更改 `public` 中的 favicon，并移除预览图片。

## 许可证

[MIT 许可证](./LICENSE) © 2024 [Kieran Wang](https://github.com/kieranwv/)
