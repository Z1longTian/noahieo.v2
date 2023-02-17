import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: () => import('@/views/landing/LandingPage.vue'),
        meta: { title: 'Noah - Vote The Best Art'}
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.afterEach((to, from) => {
    // scroll to top of the page after navigation
    window.scrollTo(0, 0)
    // change page title
    document.title = to.meta.title
})

export default router
