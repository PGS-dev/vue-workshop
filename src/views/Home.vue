<template>
  <div class="container card">
    <div class="container__filters">
      <my-input v-model="searchValue" placeholder="wyszukaj"></my-input>
      <my-select v-model="selectedTechnology" :options="getTechnologies"></my-select>
      <my-select v-model="selectedPosition" :options="getPositions"></my-select>
    </div>
    <div class="container__table">
      <table>
        <tr>
          <th v-for="head in tableHead" :key="head">{{head}}</th>
        </tr>
        <tr
          v-for="(employee, index) in filterEmployeesBySearchValue"
          :key="employee.name + employee.lastname + index"
        >
          <td v-for="(val, index) in employee" :key="'uniqueKey-' + val + index">{{val}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import MyInput from '@/components/MyInput';
import MySelect from '@/components/MySelect';

export default {
  components: { MyInput, MySelect },
  data() {
    return {
      searchValue: '',
      selectedTechnology: null,
      selectedPosition: null,
      tableHead: [
        'Name',
        'Lastname',
        'Position',
        'Contract Type',
        'Phone number',
        'Technologies',
      ],
    };
  },
  computed: {
    getTechnologies() {
      return this.$store.getters.getTechnologies;
    },
    getPositions() {
      return this.$store.getters.getPositions;
    },
    getEmployees() {
      return this.$store.getters.getEmployees;
    },
    searchValueToLowerCase() {
      return this.searchValue.toLowerCase();
    },
    filterEmployeesBySearchValue() {
      return this.getEmployees.filter((employee) => {
        const values = `${employee.name.toLowerCase()} ${employee.lastname.toLowerCase()} ${employee.contractType.toLowerCase()}`;
        return values.includes(this.searchValueToLowerCase);
      });
    },
  },
  async created() {
    await this.$store.dispatch('fetchEmployeesList');
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
