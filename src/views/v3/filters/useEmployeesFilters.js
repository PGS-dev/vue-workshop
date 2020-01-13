import { computed, reactive, toRefs } from '@vue/composition-api';
import useVuexGetters from '../useVuexGetters';
import useSearchFilter from './useSearchFilter';

export default store => {
  const selectFilters = reactive({
    technology: null,
    position: null,
  });

  const { getTechnologies, getPositions, getEmployees } = useVuexGetters(
    store,
  );

  const {
    searchFilter: searchValue,
    searchFilterToLowerCase: searchValueToLowerCase,
    clearSearchFilterValue,
  } = useSearchFilter();

  const filtersApplied = computed(
    () => searchValue.value || selectFilters.technology || selectFilters.position,
  );

  const filterBySearchValue = computed(() => getEmployees.value.filter(employee => {
    const values = `${employee.name.toLowerCase()} ${employee.lastname.toLowerCase()} ${employee.contractType.toLowerCase()}`;
    return values.includes(searchValueToLowerCase.value);
  }));


  const filterByTechnology = computed(() => (selectFilters.technology
    ? filterBySearchValue.value.filter(
      employee => employee.technologies.includes(selectFilters.technology),
    )
    : filterBySearchValue.value));

  const filterByPosition = computed(() => (selectFilters.position
    ? filterByTechnology.value.filter(
      employee => employee.position.includes(selectFilters.position),
    )
    : filterByTechnology.value));

  function clearFilters() {
    clearSearchFilterValue();
    selectFilters.technology = null;
    selectFilters.position = null;
  }

  const { technology: selectedTechnology, position: selectedPosition } = toRefs(selectFilters);

  return {
    searchValue,
    getTechnologies,
    getEmployees,
    getPositions,
    filtersApplied,
    filterByPosition,
    clearFilters,
    selectedTechnology,
    selectedPosition,

  };
};
