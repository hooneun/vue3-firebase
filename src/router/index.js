import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/pages/Home.vue';
import SignIn from '../components/pages/SignIn.vue';
import SignUp from '../components/pages/SignUp.vue';
import Chat from '../components/pages/Chat.vue';

const history = createWebHistory();
const routes = [
	{ path: '/', component: Home, name: 'Home' },
	{ path: '/login', component: SignIn, name: 'SignIn' },
	{ path: '/join', component: SignUp, name: 'SignUp' },
	{ path: '/chat', component: Chat, name: 'Chat' }
];
const router = createRouter({ history, routes });

export default router;
