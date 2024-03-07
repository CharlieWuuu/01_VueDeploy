import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/CreateVue',
        name: 'CreateVue',
        component: () => import('../views/CreateVue.vue'),
    },
    {
        path: '/DeployOnGit',
        name: 'DeployOnGit',
        component: () => import('../views/DeployOnGit.vue'),
    },
    {
        path: '/VueChartJs',
        name: 'VueChartJs',
        component: () => import('../views/VueChartJs.vue'),
    },
    {
        path: '/VueRouter',
        name: 'VueRouter',
        component: () => import('../views/VueRouter.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
