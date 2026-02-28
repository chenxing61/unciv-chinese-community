# Unciv 中文社区

<div align="center">

![Unciv](public/UncivPNG.png)

**开源策略游戏 Unciv 的中文社区文档**

[![VitePress](https://img.shields.io/badge/VitePress-1.5.0-blue)](https://vitepress.dev/)

[访问网站](https://autumnpizazz.github.io/unciv-chinese-community/) · [GitHub 仓库](https://github.com/AutumnPizazz/unciv-chinese-community) · [QQ 群](https://qm.qq.com/q/G5lpttg688)

</div>

---

## 📖 简介

Unciv 中文社区是一个为中文玩家提供 Unciv 游戏攻略、模组介绍和开发文档的静态网站。Unciv 是一款开源的、类似《文明》系列的回合制策略游戏，本站致力于为中文玩家提供全面的游戏资源和开发支持。

### 主要内容

- **原版游戏指南**：基础术语、入门教程、玩法技巧、联机对战
- **模组专区**：CoeHarMod 等优质模组的介绍和更新日志
- **模组开发**：完整的模组制作教程和开发指南
- **开发者专区**：Unciv 项目开发文档、代码标准、构建部署
- **源码分析**：游戏机制深度解析

---

## 🚀 快速开始

### 在线访问

直接访问 [unciv-chinese-community](https://autumnpizazz.github.io/unciv-chinese-community/) 浏览文档。

### 本地开发

如果你想本地运行或贡献文档，请按以下步骤操作：

#### 前置要求

- [Node.js](https://nodejs.org/) (推荐 18.x 或更高版本)
- [npm](https://www.npmjs.com/) (通常随 Node.js 安装)

#### 安装依赖

```bash
npm install
```

#### 启动开发服务器

```bash
npm run docs:dev
```

服务器将在 `http://localhost:5173` 启动，支持热更新。

#### 构建生产版本

```bash
npm run docs:build
```

构建产物将输出到 `.vitepress/dist/` 目录。

#### 预览构建结果

```bash
npm run docs:preview
```

---

## 📚 文档导航

### 新玩家推荐阅读顺序

1. [Unciv 基础术语](原版专区/Unciv基础术语/) - 了解游戏基本概念
2. [众神与国王入门指南](原版专区/众神与国王入门指南/) - 学习游戏玩法
3. [自主左二前应该做什么](原版专区/自主左二前应该做什么/) - 掌握开荒技巧
4. [Unciv鳇脯菌校：全局篇](原版专区/Unciv鳇脯菌校/) - 了解全局时段规划与 PVP 策略
5. [联机教程](原版专区/联机教程/) - 学习如何进行联机对战

### 模组开发者推荐阅读

1. [模组开发入门](开发者专区/模组开发/模组) - 了解模组的基本概念
2. [创建新文明](开发者专区/模组开发/创建新文明) - 学习如何创建一个新文明
3. [Uniques 系统](开发者专区/模组开发/Unique能力列表) - 掌握 Unciv 的核心机制
4. [模组文件结构](开发者专区/模组开发/模组文件结构/概述) - 了解模组的文件组织方式

### 项目贡献者推荐阅读

1. [项目结构](开发者专区/代码贡献/项目结构/) - 了解 Unciv 的代码组织
2. [代码标准](开发者专区/代码贡献/代码标准/) - 遵循 Unciv 的代码规范
3. [构建和部署](开发者专区/代码贡献/构建和部署.md) - 了解项目的构建流程

---

## 🛠️ 技术栈

- **前端框架**：[VitePress](https://vitepress.dev/) 1.5.0
- **构建工具**：[Vite](https://vitejs.dev/)
- **Markdown 插件**：
  - [markdown-it-mathjax3](https://github.com/robertlieblin/MathJax-node/tree/master/packages/markdown-it-mathjax3) - 数学公式渲染
  - [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists) - 任务列表支持
- **部署平台**：[GitHub Pages](https://pages.github.com/)
- **自动化**：[GitHub Actions](https://github.com/features/actions)

---

## 📁 项目结构

```
unciv-chinese-community/
├── .vitepress/          # VitePress 配置和主题
├── 原版专区/             # Unciv 原版游戏文档
├── 模组专区/             # 模组介绍和更新日志
├── 开发者专区/           # 开发者文档
│   ├── 模组开发/         # 模组制作教程
│   ├── 翻译本地化/       # 翻译指南
│   ├── 代码贡献/         # 项目开发文档
│   └── 源码分析/         # 游戏机制分析
├── public/              # 静态资源
└── python工具/          # Python 工具脚本
```

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献类型

- 📝 撰写或改进文档
- 🎨 改进 UI/UX

---

## 📮 联系方式

- **GitHub Issues**：[提交问题](https://github.com/AutumnPizazz/unciv-chinese-community/issues)
- **Unciv 中文社区群**：[加入 QQ 群](https://qm.qq.com/q/G5lpttg688)
- **CoeHarMod 模组群**：[加入 QQ 群](https://qm.qq.com/q/amwSqibPmo)

---

## 🔗 相关链接

- [Unciv 官方仓库](https://github.com/yairm210/Unciv)
- [CoeHarMod 模组源代码](https://github.com/AutumnPizazz/CoeHarMod)
- [VitePress 官方文档](https://vitepress.dev/)

---

## 🙏 致谢

感谢所有为 Unciv 中文社区做出贡献的开发者和玩家！

特别感谢：
- [Unciv](https://github.com/yairm210/Unciv) 项目的开发者
- [VitePress](https://vitepress.dev/) 提供的优秀文档框架
- 所有贡献者的热情支持和宝贵建议

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐️ Star！**

Made with ❤️ by Unciv Chinese Community

</div>