import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
// import NewEmployeeForm from '@/views/NewEmployeeForm.vue';
const NewEmployeeForm = () => import(/* webpackChunkName: "new-employee-form" */'@/views/NewEmployeeForm.vue');
import AuthGuard from './auth-guard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: AuthGuard,
      children: [
        {
          path: '',
          name: 'employees',
          component: () => import('@/views/Employees.vue'),
        },
        {
          path: '/new-employee',
          name: 'newEmployee',
          component: NewEmployeeForm,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    }
  ],
});
