import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core' // 引入font awesome svg core
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // 引入font awesome vue component
import { fas } from '@fortawesome/free-solid-svg-icons'// 引入免費svg粗體icon
import { fab } from '@fortawesome/free-brands-svg-icons'// 引入免費品牌icon
import { far } from '@fortawesome/free-regular-svg-icons'// 引入免費常規icon
import './output.css'

library.add(fas, far, fab)// 將三種字體包加入Library以便使用
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
