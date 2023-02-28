export const data = JSON.parse("{\"key\":\"v-f43a2b9e\",\"path\":\"/vite/p/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"permalink\":\"/vite/p\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"vite/plugin/mock.md\"}")

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
