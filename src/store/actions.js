import { EMPLOYEES } from '@/constants';
// eslint-disable-next-line import/no-cycle
import router from '@/router/router';

export default {
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
    // eslint-disable-next-line consistent-return
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
