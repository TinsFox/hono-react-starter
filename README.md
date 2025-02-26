# Hono + Rsbuild + Turborepo

一个用于快速开发 Cloudflare Worker 应用的模板项目。集成了 Hono 作为后端框架，Rsbuild 作为前端构建工具，使用 pnpm workspace 和 Turborepo 管理 monorepo。

## 特性

- ⚡️ 使用 Hono.js 构建高性能的后端 API
- 🔥 Rsbuild 提供现代化的前端开发体验
- 📦 pnpm workspace 管理多包项目
- 🚀 Turborepo 优化构建流程
- ☁️ 一键部署到 Cloudflare Workers

## 项目结构

```plaintext
<root>/
├── apps/
│   ├── api/              # Hono 后端 API
│   │   ├── src/
│   │   ├── public/       # 静态资源目录（构建后的前端文件将被复制到这里）
│   │   ├── wrangler.toml # Cloudflare Workers 配置
│   │   └── package.json
│   │
│   └── web/              # Rsbuild 前端应用
│       ├── src/
│       ├── public/
│       └── package.json
│
├── packages/             # 共享代码包
│   ├── config/           # 共享配置
│   │   ├── eslint/
│   │   └── tsconfig/
│   │
│   └── ui/               # 共享 UI 组件（可选）
│
├── scripts/              # 构建和部署脚本
│   ├── build.js          # 构建脚本
│   └── deploy.js         # 部署脚本
│
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## 安装与设置

前置条件

- Node.js 20+
- pnpm 10+
- Cloudflare 账户

## 开发

```bash
pnpm dev
```

## 部署

```bash
pnpm deploy
```

## 许可证

Licensed under the [MIT license](./LICENSE).
