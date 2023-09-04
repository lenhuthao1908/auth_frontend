import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/interceptors/axios'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')