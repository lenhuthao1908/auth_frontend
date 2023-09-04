import {
  createRouter,
  createWebHistory
} from 'vue-router'
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ForgotView from '@/views/ForgotView.vue';
import ResetView from '@/views/ResetView.vue';
import HomeView from '@/views/user/HomeView.vue';
import HomeAdminView from '@/views/admin/HomeAdminView.vue';
import UserView from '@/views/UserView.vue';
import AdminView from '@/views/AdminView.vue';
const routes = [{
    path: '/login',
    component: LoginView
  },
  {
    path: '/register',
    component: RegisterView
  },
  {
    path: '/forgot',
    component: ForgotView,
  },
  {
    path: '/reset/:token',
    component: ResetView,
  },
  {
    path: '',
    component: UserView,
    children: [{
      path: '',
      component: HomeView,
    }]
  },
  {
    path: "/admin",
    component: AdminView,
    children: [{
      path: '/',
      component: HomeAdminView,
    }]
  },
  {
    path: '/:pathMatch(.*)*',
    // name: 'NotFound',
    // component: NotFound 
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router