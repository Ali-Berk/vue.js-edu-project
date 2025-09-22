import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudentsView from '../views/StudentsView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'



// Lazy Load ile yüklenen sayfalar başlangıçta yüklenmez ve sayfa açılışında yük olmaz.
// Sadece çağırıldığında renderlanır.
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/students',
    name: 'students',
    component: StudentsView
  },
  {
    path: '/students/:id',
    name: 'studentDetailView',
    component: StudentDetailView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundView',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
