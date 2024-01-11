import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/Login.vue'
import IndexView from '../components/Index.vue'
import CreateView from '../components/Create.vue'
import EditView from '../components/Edit.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: '',
          component: LoginView
        },
        {
            path: '/all',
            name: 'all',
            component: IndexView 
        },
        {
            path: '/add',
            name: 'add',
            component: CreateView 
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: EditView 
        }
    ]
})

export default router