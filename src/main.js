import { createApp } from "vue"
import router from "@/router"
import pinia from '@/stores'
import App from "@/App.vue"
import '@/assets/css/index.scss'

const app = createApp(App)

// plugins
app.use(pinia)
app.use(router)

app.mount("#app")
