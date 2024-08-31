# Vite + Vue 3 启动模板

[![版本](https://img.shields.io/github/v/release/templates-collective/starter-vite-vue3?style=flat&label=%20&color=%230d0d0d)](https://github.com/templates-collective/starter-vite-vue3/releases)

Vite + Vue 3 单页面应用初始化模板, 支持国际化、Axios、UnoCSS、文件路由和自动化的 API 导入。

- [在线演示](https://starter-vite-vue3.netlify.app/)
- [在 Stackblitz 上体验](https://stackblitz.com/github/templates-collective/starter-vite-vue3)

## 特性

- [Vue 3](https://github.com/vuejs/core)、[Vite](https://github.com/vitejs/vite)、[UnoCSS](https://github.com/antfu/unocss)、[Pinia](https://pinia.vuejs.org/)、[TypeScript](https://www.typescriptlang.org/) - 最新的 Web 开发技术栈。
- 基于文件的[路由](./src/pages)和[布局](./src/layouts)系统，自动化处理。
- [组件](https://github.com/antfu/unplugin-vue-components)、[API](https://github.com/antfu/unplugin-auto-import) 和 `src` 目录自动导入。
- 开箱即用的网络请求，基于 [Axios](https://axios-http.com/)。
- 使用来自任意图标集的[SVG 图标](https://github.com/antfu/unocss/tree/main/packages/preset-icons)。
- [I18n](./locales) 就绪，支持自动导入翻译文件。
- 使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试。
- 在 [Netlify](https://app.netlify.com/) 上零配置部署，也支持其他部署方式。

## 预览

[![预览图像](https://github.com/templates-collective/.github/blob/main/preview/starter-vite-vue3.png)](https://starter-vite-vue3.netlify.app/)

## 使用方法

[在 GitHub 上创建一个仓库](https://github.com/templates-collective/starter-vite-vue3/generate)来使用此模板。

```bash
git clone <git remote url>
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

要构建应用程序，你可以运行：

```bash
pnpm build
```

你将会看到生成的 `dist` 文件夹用于发布，你可以使用以下命令在本地预览。

```bash
pnpm preview
```

## 清理模板

如果你更喜欢手动清理 Git 历史记录：

```bash
npx degit templates-collective/starter-vite-vue3 starter-vite-vue3

cd starter-vite-vue3

pnpm i # 如果你没有安装 pnpm，运行：npm install -g pnpm
```

在使用此模板时，建议按照以下清单正确更新信息：

- [ ] 修改 `LICENSE` 中的作者名称。
- [ ] 修改 `locales/*.json` 中的标题和 `VITE_APP_NAME` 环境变量。
- [ ] 修改 `public` 中的 favicon 并移除预览图像。
- [ ] 删除包含资助信息的 `.github` 文件夹。

## 许可

[MIT 许可](./LICENSE) © 2024 [Kieran Wong](https://github.com/kieranwong9865/)
