import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { store } from "./store/store.js"
import { routes } from './routes'
import Validations from "./Validations.js";
import App from './App.vue'
// import validations from "./Validations.js";


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

Validations.setup()

const app = createApp(App)
app.use(router)
app.use(store)
app.use(autoAnimatePlugin)
// app.use(Validations)
app.mount('#app')