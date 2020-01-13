<template>
  <div class="container card" v-color-swatch="'#CFD8DC'">
    <div class="container__filters">
      <my-input v-focus v-model="searchValue" placeholder="wyszukaj"></my-input>
      <my-select v-model="selectedTechnology" :options="getTechnologies"></my-select>
      <my-select v-model="selectedPosition" :options="getPositions"></my-select>
      <my-button v-if="filtersApplied" class="btn-danger" @click="clearFilters">Wyczyść filtry</my-button>
    </div>
    <div class="container__table">
      <table>
        <tr>
          <th v-for="head in tableHead" :key="head">{{head}}</th>
        </tr>
        <tr
          v-for="(employee, index) in filterByPosition"
          :key="employee.name + employee.lastname + index"
        >
          <td
            v-for="(val, index) in employee"
            :key="'uniqueKey-' + val + index"
          >{{val | formatArray | formatNumber}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeMount } from '@vue/composition-api';
import MyInput from '@/components/MyInput.vue';
import MySelect from '@/components/MySelect.vue';
import MyButton from '@/components/MyButton.vue';

import useEmployeesFilters from './filters/useEmployeesFilters';

export default {
  components: { MyInput, MySelect, MyButton },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  filters: {
    formatArray(value) {
      if (Array.isArray(value)) return value.join(', ');
      return value;
    },
  },
  setup(props, context) {
    const { $store } = context.root;

    const tableHead = [
      'Name',
      'Lastname',
      'Position',
      'Contract Type',
      'Phone number',
      'Technologies',
    ];

    onBeforeMount(async () => {
      console.log('on before mount');
      await $store.dispatch('fetchEmployeesList');
    });

    onMounted(() => {
      console.log('on mounted');
    });

    const {
      searchValue,
      getTechnologies,
      getEmployees,
      getPositions,
      filtersApplied,
      filterByPosition,
      clearFilters,
      selectedTechnology,
      selectedPosition,
    } = useEmployeesFilters($store);

    return {
      tableHead,
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
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 999px;
  height: 500px;

  &__filters {
    margin-bottom: 30px;
  }

  &__table {
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 12px;
    }

    tr {
      background-color: #fff;
    }
  }
}
</style>
