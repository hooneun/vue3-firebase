import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/pages/Home.vue';
import SignIn from './components/pages/SignIn.vue';

const history = createWebHistory();
const routes = [ { path: '/', component: Home }, { path: '/signin', component: SignIn } ];
const router = createRouter({ history, routes });

export default router;
