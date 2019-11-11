import { computed, ref } from '@vue/composition-api';

export default () => {
  const searchFilter = ref('');

  const searchFilterToLowerCase = computed(() => searchFilter.value.toLowerCase());

  const clearSearchFilterValue = function () {
    searchFilter.value = '';
  };
  return {
    searchFilter,
    searchFilterToLowerCase,
    clearSearchFilterValue,
  };
};
