export default {
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
};
