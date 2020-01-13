<template>
  <div class="card">
    <span class="title">Formularz dodawania nowego pracownika</span>
    <form @submit.prevent="checkForm">
      <label for="name">Imię</label>
      <input id="name" v-model.trim="newEmployee.name" />
      <label for="lastname">Nazwisko</label>
      <input id="lastname" v-model.trim="newEmployee.lastname" />
      <label for="position">Stanowisko</label>
      <select id="position" v-model="newEmployee.position">
        <option value>wybierz opcje</option>
        <option v-for="option in positionOptions" :key="option">{{option}}</option>
      </select>
      <label for="phoneNumber">Numer Telefonu</label>
      <input id="phoneNumber" v-model.trim.number="newEmployee.phoneNumber" />
      <label for="contractType">Forma zatrudnienia</label>
      <select id="contractType" v-model="newEmployee.contractType">
        <option value>wybierz opcje</option>
        <option v-for="option in contractTypeOptions" :key="option">{{option}}</option>
      </select>
      <div class="flex-container">
        <button class="btn" v-on:click.prevent="clearForm">Wyczyść</button>
        <button class="btn btn-action" type="submit">Zapisz</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newEmployee: {
        name: '',
        lastname: '',
        position: '',
        contractType: '',
        phoneNumber: '',
      },
      contractTypeOptions: ['Umowa o prace', 'Kontrakt B2B', 'Student :)'],
      positionOptions: [
        'Frontend developer',
        'Backend developer',
        'DevOps',
        'Solution architect',
        'QA engineer',
        'Business analytics',
        'UX designer',
        'Project manager',
      ],
    };
  },
  created() {
    this.newEmployee.position = 'Frontend developer';
  },
  computed: {
    formIsValid() {
      return Object.keys(this.newEmployee).every(key => this.newEmployee[key]);
    },
  },
  methods: {
    checkForm() {
      console.log('Działa');
    },
    clearForm() {
      this.newEmployee = {
        name: '',
        lastname: '',
        position: '',
        contractType: '',
        phoneNumber: '',
      };
    },
  },
};
</script>
<style scoped>
.card {
  width: 600px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  height: auto;
  padding: 20px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
}

label {
  margin-left: 10px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
}

.btn {
  background-color: #f5f5f5;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.1rem;
}

.btn:hover {
  background-color: #e0e0e0;
}

.btn-action {
  color: #fff;
  background-color: #4caf50;
}

.btn-action:hover {
  background-color: #66bb6a;
}
</style>
