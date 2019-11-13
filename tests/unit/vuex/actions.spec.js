import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import actions from '@/store/actions';
import Employees from '@/views/Employees.vue';


const employee = {
  name: 'Łukasz',
  lastname: 'Kochajewski',
  position: 'Frontend developer',
  contractType: 'B2B',
  phoneNumber: '000 000 000',
  technologies: ['Vue.js'],
};

describe('Actions - ', () => {
  it('addNewEmployee', async () => {
    const commit = jest.fn();
    await actions.addNewEmployee({ commit }, employee);
    expect(commit).toHaveBeenCalledWith('startLoader');
    expect(commit).toHaveBeenCalledWith('addNewEmployee', employee);
    expect(commit).toHaveBeenCalledWith('stopLoader');
  });
});

const localVue = createLocalVue();

localVue.use(Vuex);

localVue.directive('color-swatch', () => {});


describe('Actions with mocked Vuex', () => {
  let store;
  const mockedActions = {
    fetchEmployeesList: jest.fn(),
  };

  beforeEach(() => {
    store = new Vuex.Store({
      actions: mockedActions,
      getters: {
        getEmployees: () => [],
        getTechnologies: () => [],
      },
    });
  });

  it('dispatches addNewEmployee when form is valid', () => {
    const wrapper = shallowMount(Employees, { store, localVue });
    expect(mockedActions.fetchEmployeesList).toHaveBeenCalled();
  });
});
