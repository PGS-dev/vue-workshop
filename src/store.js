import Vue from 'vue';
import Vuex from 'vuex';
import CONSTANTS from '@/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
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
  },
  getters: {
    getLoader: state => state.loading,
    getEmployees: state => state.employees,
    getTechnologies: state => state.technologies,
    getPositions: state => state.positions,
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
  },
  actions: {
    addNewEmployee({ commit }, employee) {
      return new Promise(resolve => {
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
      return new Promise(resolve => {
        commit('startLoader');
        setTimeout(() => {
          commit('addEmployees', CONSTANTS.EMPLOYEES);
          commit('stopLoader');
          resolve();
        }, 1500);
      });
    },
  },
});
