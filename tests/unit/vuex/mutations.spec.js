import mutations from '@/store/mutations';

describe('Mutations -', () => {
  it('addNewEmployee', () => {
    const employee = {
      name: 'Łukasz',
      lastname: 'Kochajewski',
      position: 'Frontend developer',
      contractType: 'B2B',
      phoneNumber: '000 000 000',
      technologies: ['Vue.js'],
    };
    const state = {
      employees: [],
    };

    mutations.addNewEmployee(state, employee);

    expect(state).toEqual({
      employees: [employee],
    });
  });
});
