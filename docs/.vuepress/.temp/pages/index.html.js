export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"pdd's blog\",\"heroImage\":\"/images/web.png\",\"tagline\":\"Web前端博客，真正的大师永远怀着一颗学徒的心，致敬每一个热爱前端的人。\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/guide/index.md\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/vite/structure\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"前端\",\"details\":\"JavaScript、ES6、Vue框架等前端技术\",\"link\":\"/web/\",\"imgUrl\":\"/images/web.png\"},{\"title\":\"页面\",\"details\":\"html(5)/css(3)，前端页面相关技术\",\"link\":\"/ui/\",\"imgUrl\":\"/images/ui.png\"},{\"title\":\"技术\",\"details\":\"技术文档、教程、技巧、总结等文章\",\"link\":\"/technology/\",\"imgUrl\":\"/images/other.png\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
