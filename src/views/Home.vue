<template>
  <div class="container">
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
        <tr v-for="(employee, index) in getEmployees" :key="employee.name + index">
          <td v-for="value in employee" :key="'uniqueKey-' +value">{{value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import MyInput from "@/components/MyInput";
import MySelect from "@/components/MySelect";

export default {
  components: { MyInput, MySelect },
  data() {
    return {
      searchValue: "",
      selectedTechnology: null,
      selectedPosition: null,
      tableHead: [
        "Name",
        "Lastname",
        "Position",
        "Contract Type",
        "Phone number",
        "Technologies"
      ]
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
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  &__filters {
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
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  }
}
</style>
