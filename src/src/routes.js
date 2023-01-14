import login from './components/login.vue'
import register from './components/register.vue'
import recover from './components/recover.vue'
import notFound from "./components/notFound.vue";

const routes = [
    {path: '/login', name:'login', component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/recover', name:'recover', component: recover},
    {path: '/404', name:'notFound', component: notFound},
]

export {routes}