import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
// import NewEmployeeForm from '@/views/NewEmployeeForm.vue';
const NewEmployeeForm = () => import(/* webpackChunkName: "new-employee-form" */'@/views/NewEmployeeForm.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/new-employee',
      name: 'newEmployee',
      component: NewEmployeeForm,
    },
  ],
});
