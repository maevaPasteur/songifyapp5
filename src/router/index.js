import Router from 'vue-router';
import Vue from 'vue';

// Import Pages
import Home from '@/pages/Home';

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
        }
    ]
});

export default router;
