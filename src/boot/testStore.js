import { boot } from 'quasar/wrappers'
import { myStore } from "../store/myStore";

export default boot(({ app }) => {
  app.config.globalProperties.$myStore = [...myStore]
})

