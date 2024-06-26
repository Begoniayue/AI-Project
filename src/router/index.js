import { createRouter, createWebHistory } from 'vue-router'

import routes from './menu.js'

const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
