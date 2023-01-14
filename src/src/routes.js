import login from './components/login.vue'
// import register from './components/'
// import recover from './components/'

export function routes() {
        return [
            {path: '/login', name:'login', component: login},
            // {path: '/register', name:'register', component: root},
            // {path: '/recover', name:'recover', component: root},
        ]
}