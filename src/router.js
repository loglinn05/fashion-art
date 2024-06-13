import { createRouter, createWebHistory } from 'vue-router'

import Index from './views/Index.vue'
import Products from "./views/Products.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router