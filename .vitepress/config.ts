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
      { text: '模组', link: '/模组专区/CoeHarMod/' }
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
          { text: '军事实力', link: '/原版专区/军事实力计算方式/' }
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
              { text: '更新计划', link: '/模组专区/CoeHarMod/更新日志/更新计划' }
            ]
          },
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
