import { createApp } from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes,
})

createApp(App).mount('#app')
