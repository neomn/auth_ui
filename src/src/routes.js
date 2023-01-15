import main from './components/main.vue'
import register from './components/register.vue'
import recover from './components/recover.vue'
import notFound from "./components/notFound.vue";

const routes = [
    {path: '/login', name:'login', component: main},
    {path: '/register', name: 'register', component: main},
    {path: '/recover', name:'recover', component: main},
    {path: '/404', name:'notFound', component: notFound},
]

export {routes}