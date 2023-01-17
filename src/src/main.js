import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { store } from "./store/store.js";
import { routes } from './routes'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')