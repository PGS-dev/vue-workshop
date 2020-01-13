import { EMPLOYEES } from '@/constants';
import router from '@/router/router';

export default {
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
    return new Promise(resolve => {
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
};
