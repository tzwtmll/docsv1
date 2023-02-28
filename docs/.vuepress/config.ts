/*
 * @Author: pdd 483662261@qq.com
 * @Date: 2023-02-28 14:38:40
 * @LastEditors: pdd 483662261@qq.com
 * @LastEditTime: 2023-02-28 18:08:16
 * @Description:
 */
import { defaultTheme, defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
export default defineUserConfig({
  plugins: [
    docsearchPlugin({
      apiKey: '',
      indexName: '',
      appId: '',
    }),
  ],
  lang: 'zh-CN',
  title: '你好,欢迎查看我的文档',
  description: '这是由vuepress构建静态网站',
  theme: defaultTheme({
    // logo: '/images/pdd.jpg',
    navbar: [
      {
        text: '指南',
        link: '/guide/index.md',
      },
      {
        text: '前端',
        children: [
          // {
          //   text: '前端文章',
          //   children: [{ text: 'JavaScript', link: '/pages/a61298' }],
          // },
          {
            text: 'Vite',
            children: [
              {
                text: 'vite搭建框架',
                link: '/vite/structure',
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
        ],
      },
    ],
  }),
});
