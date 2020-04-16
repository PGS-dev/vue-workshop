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
          v-for="(employee, index) in filterEmployeesByPosition"
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
import MyInput from '@/components/MyInput';
import MySelect from '@/components/MySelect';
import MyButton from '@/components/MyButton.vue';
import MyMixin from '@/mixins/MyMixin';

export default {
  mixins: [MyMixin],
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
    getEmployees() {
      return this.$store.getters.getEmployees;
    },
    searchValueToLowerCase() {
      return this.searchValue.toLowerCase();
    },
    filterEmployeesBySearchValue() {
      return this.getEmployees.filter(employee => {
        const values = `${employee.name.toLowerCase()} ${employee.lastname.toLowerCase()} ${employee.contractType.toLowerCase()}`;
        return values.includes(this.searchValueToLowerCase);
      });
    },
    filterEmployeesByTechnology() {
      return this.selectedTechnology
        ? this.filterEmployeesBySearchValue.filter(employee => employee.technologies.includes(this.selectedTechnology))
        : this.filterEmployeesBySearchValue;
    },
    filterEmployeesByPosition() {
      return this.selectedPosition
        ? this.filterEmployeesByTechnology.filter(employee => employee.position.includes(this.selectedPosition))
        : this.filterEmployeesByTechnology;
    },
    filtersApplied() {
      return (
        this.searchValue || this.selectedTechnology || this.selectedPosition
      );
    },
  },
  async created() {
    await this.$store.dispatch('fetchEmployeesList');
  },
  mounted() {
    console.log('Mounted hook from component:', this.mixinProperty);
  },
  methods: {
    clearFilters() {
      this.searchValue = '';
      this.selectedTechnology = null;
      this.selectedPosition = null;
    },
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
