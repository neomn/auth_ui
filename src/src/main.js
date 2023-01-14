import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { routes } from './routes'
import App from './App.vue'
import login from "./components/login.vue";

const Routes = [{path: '/login', name:'login', component: login},
    // {path: '/register', name:'register', component: root},
    // {path: '/recover', name:'recover', component: root},
    ]

const router = createRouter({
    history: createWebHistory(),
    routes: Routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

