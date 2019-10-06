<template>
  <div class="card">
    <span class="title">Formularz dodawania nowego pracownika</span>
    <form @submit.prevent="checkForm">
      <label for="name">Imię</label>
      <my-input
        id="name"
        v-model.trim="newEmployee.name"
      ></my-input>
      <label for="lastname">Nazwisko</label>
      <my-input
        id="lastname"
        v-model.trim="newEmployee.lastname"
      ></my-input>
      <label for="position">Stanowisko</label>
      <select
        id="position"
        v-model="newEmployee.position"
      >
        <option value="">wybierz opcje</option>
        <option
          v-for="option in positionOptions"
          :key="option"
        >{{option}}</option>
      </select>
      <label for="technologies">Technologie</label>
      <multiselect
        v-model="newEmployee.technologies"
        v-bind:options="technologies"
        v-bind:multiple="true"
        placeholder="wybierz opcje"
        select-label="naciśnij enter aby wybrać"
        selected-label="wybrano"
        deselect-label="naciśnij enter aby usunąć"
      ></multiselect>
      <label for="phoneNumber">Numer Telefonu</label>
      <my-input
        id="phoneNumber"
        v-model.trim.number="newEmployee.phoneNumber"
      ></my-input>
      <label for="contractType">Forma zatrudnienia</label>
      <select
        id="contractType"
        v-model="newEmployee.contractType"
      >
        <option value="">wybierz opcje</option>
        <option
          v-for="option in contractTypeOptions"
          :key="option"
        >{{option}}</option>
      </select>
      <div class="flex-container">
        <my-button v-on:click.prevent="clearForm">Wyczyść</my-button>
        <my-button
          :disabled="!formIsValid"
          :class="{disabled: !formIsValid}"
          class="btn-action"
          type="submit"
        >Zapisz</my-button>
      </div>
    </form>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';

export default {
  components: {
    MyButton,
    MyInput,
    Multiselect,
  },
  data() {
    return {
      newEmployee: {
        name: '',
        lastname: '',
        position: '',
        contractType: '',
        phoneNumber: '',
        technologies: [],
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
      technologies: [
        'Javascript',
        'Java',
        '.NET',
        'Docker',
        'AWS',
        'Azure',
        'MySQL',
        'MongoDB',
        'Node.js',
        'GraphQL',
        'Jenkins',
        'HTML 5',
        'CSS 3',
      ],
    };
  },
  created() {
    this.newEmployee.technologies.push('Javascript');
    this.newEmployee.position = 'Frontend developer';
  },
  computed: {
    formIsValid() {
      return (
        Object.keys(this.newEmployee).every(key => this.newEmployee[key])
        && this.newEmployee.technologies.length
      );
    },
  },
  methods: {
    checkForm() {
      if (this.formIsValid) {
        // TODO
        console.log(this.newEmployee);
      }
    },
    clearForm() {
      this.newEmployee = {
        name: '',
        lastname: '',
        position: '',
        contractType: '',
        phoneNumber: '',
        technologies: [],
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

.multiselect {
  margin: 2px 10px 15px;
  width: auto;
}
</style>
<style>
.multiselect .multiselect__tags {
  border-color: #ccc;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
