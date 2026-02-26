import { defineConfig } from 'vitepress'
// @ts-ignore
import taskLists from 'markdown-it-task-lists'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(taskLists)
      md.use(mathjax3)
    }
  },

  title: 'Unciv中文社区',
  description: 'Unciv Chinese Community - 开源策略游戏的中文社区',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/Unciv.ico' }],
    ['meta', { name: 'theme-color', content: '#d98c3a' }],
  ],

  themeConfig: {
    logo: '/Unciv.ico',

    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/原版专区/Unciv基础术语/' },
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: '首页', link: '/' }
        ]
      },
      {
        text: '原版专区',
        collapsed: true,
        items: [
          { text: '基础术语', link: '/原版专区/Unciv基础术语/' },
          { text: '入门指南', link: '/原版专区/众神与国王入门指南/' },
          { text: '自主左二前应该做什么', link: '/原版专区/自主左二前应该做什么/' },
          { text: 'Unciv鳇脯菌校：全局篇', link: '/原版专区/Unciv鳇脯菌校/' },
          { text: '联机教程', link: '/原版专区/联机教程/' }
        ]
      },
      {
        text: '模组专区',
        collapsed: true,
        items: [
          {
            text: 'CoeHarMod',
            collapsed: true,
            items: [
              { text: '模组介绍', link: '/模组专区/CoeHarMod/' },
              { text: '更新日志', link: '/模组专区/CoeHarMod/更新日志/' },
              { text: '更新计划', link: '/模组专区/CoeHarMod/更新日志/更新计划/' }
            ]
          },
        ]
      },
      {
        text: '开发者专区',
        collapsed: true,
        items: [
          { text: '项目结构', link: '/开发者专区/项目结构/' },
          { text: '代码标准', link: '/开发者专区/代码标准/' },
          { text: '构建和部署', link: '/开发者专区/构建和部署/' },
          { text: 'UI 开发', link: '/开发者专区/UI 开发/' },
          { text: 'Uniques 机制', link: '/开发者专区/Uniques 机制/' }
        ]
      },
      {
        text: '模组开发',
        collapsed: true,
        items: [
          { text: '模组开发入门', link: '/模组开发/模组开发入门/' },
          { text: '创建新文明', link: '/模组开发/创建新文明/' },
          { text: 'Uniques 系统', link: '/模组开发/Uniques 系统/' },
          { text: 'Unique 参数', link: '/模组开发/Unique 参数/' },
          { text: '条件 Uniques', link: '/模组开发/条件 Uniques/' },
          { text: '触发条件 Uniques', link: '/模组开发/触发条件 Uniques/' },
          { text: '图像和音频', link: '/模组开发/图像和音频/' },
          { text: '自定义地形集', link: '/模组开发/自定义地形集/' },
          { text: '创建 UI 皮肤', link: '/模组开发/创建 UI 皮肤/' },
          { text: '场景编辑', link: '/模组开发/场景编辑/' },
          { text: '类型检查', link: '/模组开发/类型检查/' },
          { text: 'Mod 文件结构', link: '/模组开发/Mod 文件结构/' },
          { text: 'Mod 文件结构详解', link: '/模组开发/Mod 文件结构详解/' },
          { text: '杂项 JSON 文件说明', link: '/模组开发/杂项 JSON 文件说明/' }
        ]
      },
      {
        text: '源码分析',
        collapsed: true,
        items: [
          { text: '军事实力计算方式', link: '/技术专区/源码分析/军事实力计算方式/' },
          { text: '文明积分计算', link: '/技术专区/源码分析/文明积分计算/' }
        ]
      },
      {
        text: '翻译专区',
        collapsed: true,
        items: [
          { text: '翻译指南', link: '/翻译专区/翻译指南/' },
          { text: '翻译生成', link: '/翻译专区/翻译生成/' },
          { text: '模组翻译', link: '/翻译专区/模组翻译/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AutumnPizazz/unciv-chinese-community' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    editLink: {
      pattern: 'https://github.com/AutumnPizazz/unciv-chinese-community/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})
