import login from './components/login.vue'
import register from './components/register.vue'
import recover from './components/recover.vue'

const routes = [
    {path: '/login', name:'login', component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/recover', name:'recover', component: recover},
]

export {routes}