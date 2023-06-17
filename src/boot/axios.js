import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { myStore } from "../store/myStore";

const api = axios.create({ baseURL: 'https://api.example.com' })

export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
  app.config.globalProperties.$ali = myStore

})

export { api }
