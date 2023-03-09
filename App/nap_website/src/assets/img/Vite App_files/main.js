import { createApp } from '/node_modules/.vite/deps/vue.js?v=6fb3f8e9'
import { createPinia } from '/node_modules/.vite/deps/pinia.js?v=6fb3f8e9'

import App from '/src/App.vue'
import router from '/src/router/index.js?t=1677071424467'

import { library } from '/node_modules/.vite/deps/@fortawesome_fontawesome-svg-core.js?v=6fb3f8e9'
import { fas } from '/node_modules/.vite/deps/@fortawesome_free-solid-svg-icons.js?v=6fb3f8e9'
import { fab } from '/node_modules/.vite/deps/@fortawesome_free-brands-svg-icons.js?v=6fb3f8e9'
import { FontAwesomeIcon } from '/node_modules/.vite/deps/@fortawesome_vue-fontawesome.js?v=6fb3f8e9'

import __vite__cjsImport8_aos from "/node_modules/.vite/deps/aos.js?v=6fb3f8e9"; const AOS = __vite__cjsImport8_aos.__esModule ? __vite__cjsImport8_aos.default : __vite__cjsImport8_aos
import '/node_modules/aos/dist/aos.css'

import '/src/assets/css/main.css?t=1677070933319'
import '/src/assets/css/index.css?t=1677071424467'

import i18n from '/src/i18n.js'

const app = createApp(App).use(i18n)

library.add(fas, fab)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
AOS.init();

app.mount('#app')
