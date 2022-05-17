import {createRouter, createWebHistory} from 'vue-router'



const routes = [
    {
        path: '/',
        name: 'Calendar'
    },

    // {
    //     path: '/login',
    //     name: 'login',
    //     meta: {layout: 'empty'},
    //     component: () => import('@/views/Login.vue')
    // },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router
