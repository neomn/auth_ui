import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { store } from "./store/store.js"
import { routes } from './routes'
import App from './App.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
export default router

import('./store/store.js').then(({store})=>{
    const app = createApp(App)
    app.use(router)
    app.use(store)
    app.mount('#app')
}).catch((error)=>{})

