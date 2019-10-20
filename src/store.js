import Vue from 'vue';
import Vuex from 'vuex';
import { EMPLOYEES } from '@/constants';
import router from '@/router/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [
    ],
    loading: false,
    technologies: [
      'Javascript',
      'Java',
      '.NET',
      'Docker',
      'AWS',
      'Azure',
      'MySQL',
      'MongoDB',
      'Node.js',
      'GraphQL',
      'Jenkins',
      'HTML 5',
      'CSS 3',
    ],
    positions: [
      'Frontend developer',
      'Backend developer',
      'DevOps',
      'Solution architect',
      'QA engineer',
      'Business analytics',
      'UX designer',
      'Project manager',
    ],
    user: null,
  },
  getters: {
    getLoader: state => state.loading,
    getEmployees: state => state.employees,
    getTechnologies: state => state.technologies,
    getPositions: state => state.positions,
    getUser: state => state.user,
  },
  mutations: {
    addNewEmployee(state, employee) {
      state.employees.push(employee);
    },
    startLoader(state) {
      state.loading = true;
    },
    stopLoader(state) {
      state.loading = false;
    },
    addEmployees(state, employees) {
      state.employees = employees;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    addNewEmployee({ commit }, employee) {
      return new Promise((resolve, reject) => {
        commit('startLoader');
        setTimeout(() => {
          commit('addNewEmployee', employee);
          commit('stopLoader');
          resolve();
        }, 1500);
      });
    },
    fetchEmployeesList({ commit, getters }) {
      if (getters.getEmployees.length) return;
      return new Promise((resolve) => {
        commit('startLoader');
        setTimeout(() => {
          commit('addEmployees', EMPLOYEES);
          commit('stopLoader');
          resolve();
        }, 1500);
      });
    },
    login({ commit }, payload) {
      commit('setUser', payload);
    },
    logout({ commit }) {
      commit('setUser', null);
      router.push('/login');
    },
  },
});
