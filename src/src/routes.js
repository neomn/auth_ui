import root from './components/Root.vue'
import notFound from "./components/NotFound.vue";

const routes = [
    {path: '/login', name:'login', component: root},
    {path: '/register', name: 'register', component: root},
    {path: '/recover', name:'recover', component: root},
    {path: '/404', name:'notFound', component: notFound},
]

export {routes}