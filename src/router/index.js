import Router from 'vue-router';
import Vue from 'vue';

// Import Pages
import Home from '@/pages/Home';
import Song from '@/pages/Song';

Vue.use(Router);

const router = new Router({
    scrollBehavior() {
        return {x: 0, y: 0};
    },
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/sons/:id',
            name: 'song',
            component: Song
        }
    ]
});

export default router;
