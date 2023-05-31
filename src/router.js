import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/contattami',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/about',
                name: 'about',
                component: AppAbout
            },
            {
                path: '/progetti',
                name: 'projects',
                component: ProjectList
            },
            {
                path: '/progetti/:slug',
                name: 'single-project',
                component: SingleProject
            }
        ]
    }
);

export { router };