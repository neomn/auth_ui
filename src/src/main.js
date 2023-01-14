import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


const routes = [
    {path: '/', component: App}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),

})

App.use(router)
createApp(App).mount('#app')
