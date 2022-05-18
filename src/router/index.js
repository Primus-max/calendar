import {createRouter, createWebHistory} from 'vue-router'
import AddTask from '@/components/views/AddTask.vue'
import Calendar from '@/components/Calendar'



const routes = [
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar

    },
    {
        path: '/addtask',
        name: 'AddTask',
        component: () => import('@/components/views/AddTask.vue')
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
