import { computed } from '@vue/composition-api';

export default store => {
  const getTechnologies = computed(() => store.getters.getTechnologies);
  const getPositions = computed(() => store.getters.getPositions);
  const getEmployees = computed(() => store.getters.getEmployees);

  return {
    getTechnologies,
    getPositions,
    getEmployees,
  };
};
