export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/guide/\",\"title\":\"指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"前端\",\"slug\":\"前端\",\"link\":\"#前端\",\"children\":[{\"level\":3,\"title\":\"React\",\"slug\":\"react\",\"link\":\"#react\",\"children\":[]},{\"level\":3,\"title\":\"Vue\",\"slug\":\"vue\",\"link\":\"#vue\",\"children\":[]}]},{\"level\":2,\"title\":\"后端\",\"slug\":\"后端\",\"link\":\"#后端\",\"children\":[{\"level\":3,\"title\":\"nodejs\",\"slug\":\"nodejs\",\"link\":\"#nodejs\",\"children\":[]},{\"level\":3,\"title\":\"nestjs\",\"slug\":\"nestjs\",\"link\":\"#nestjs\",\"children\":[]}]},{\"level\":2,\"title\":\"工程化\",\"slug\":\"工程化\",\"link\":\"#工程化\",\"children\":[{\"level\":3,\"title\":\"vite\",\"slug\":\"vite\",\"link\":\"#vite\",\"children\":[]},{\"level\":3,\"title\":\"webpack\",\"slug\":\"webpack\",\"link\":\"#webpack\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"guide/index.md\"}")

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
