import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const itGenApp = createApp(App)
itGenApp.use(router)
itGenApp.mount('#app')
