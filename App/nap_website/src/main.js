import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/css/main.css'
import './assets/css/index.css'

import i18n from './i18n'

gsap.registerPlugin(ScrollTrigger);
const app = createApp(App).use(i18n)

library.add(fas, fab)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
AOS.init();

app.mount('#app')
