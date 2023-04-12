/*
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-02-28 14:38:40
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-03-03 18:56:45
 * @Description:
 */
import { defaultTheme, defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { searchPlugin } from '@vuepress/plugin-search';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon';
export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/images/pdd.jpg' }]],
  base: '/docs/',
  plugins: [
    // docsearchPlugin({
    //   apiKey: '',
    //   indexName: '',
    //   appId: '',
    // }),
    backToTopPlugin(),
    externalLinkIconPlugin(),
    // 本地搜索
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  lang: 'zh-CN',
  title: '你好,欢迎查看我的文档',
  theme: defaultTheme({
    // logo: '/images/pdd.jpg',
    navbar: [
      {
        text: '指南',
        link: '/guide',
      },
      {
        text: '前端',
        children: [
          {
            text: 'Vite',
            children: [
              {
                text: 'vite搭建框架',
                link: '/vite/index',
              },
              {
                text: 'mock的使用',
                link: '/vite/plugin/mock',
              },
              {
                text: '动态路由的使用',
                link: '/vite/plugin/router',
              },
            ],
          },
          {
            text: 'Webpack',
            children: [
              {
                text: 'webpack的使用',
                link: '/webpack/index',
              },
            ],
          },
          {
            text: 'Javascript文章',
            children: [
              { text: '函数柯里化', link: '/javascript/currying' },
              {
                text: '面试题',
                link: '/interview/index',
              },
            ],
          },
          {
            text: '状态管理',
            children: [
              {
                text: 'Redux原理',
                link: '/redux/index',
              },
            ],
          },
          {
            text: 'Css',
            link: '/css/index',
          },
        ],
      },
      {
        text: '后端',
        children: [
          {
            text: 'Nestjs',
            link: '/nestjs/index',
          },
        ],
      },
      {
        text: '关于',
        link: '/about',
      },
    ],
    sidebarDepth: 2,
    repo: 'https://github.com/tzwtmll',
  }),
});
