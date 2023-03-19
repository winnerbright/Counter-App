import { createApp } from 'vue';
import App from './App.vue';
import store from './views/store';
import './index.css'


import { createRouter, createWebHistory } from 'vue-router';
import PageNotFound from '@/components/PageNotFound.vue';
import Counter from '@/components/CounterApp.vue';

const routes = [
  {
    path: '/',
    redirect: '/counter'
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
