export const data = JSON.parse("{\"key\":\"v-8f85c2b0\",\"path\":\"/vite/home.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageClass\":\"custom-page-class\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"vite/home.md\"}")

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
