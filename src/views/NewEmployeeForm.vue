<template>
  <div class="container card">
    <span class="title">Formularz dodawania nowego pracownika</span>
    <form @submit.prevent="checkForm">
      <label for="name">Imię</label>
      <my-input id="name" v-model.trim="newEmployee.name"></my-input>
      <label for="lastname">Nazwisko</label>
      <my-input id="lastname" v-model.trim="newEmployee.lastname"></my-input>
      <label for="position">Stanowisko</label>
      <select id="position" v-model="newEmployee.position">
        <option value>wybierz opcje</option>
        <option v-for="option in getPositions" :key="option">{{option}}</option>
      </select>
      <label for="technologies">Technologie</label>
      <multiselect
        v-model="newEmployee.technologies"
        v-bind:options="getTechnologies"
        v-bind:multiple="true"
        placeholder="wybierz opcje"
        select-label="naciśnij enter aby wybrać"
        selected-label="wybrano"
        deselect-label="naciśnij enter aby usunąć"
      ></multiselect>
      <label for="phoneNumber">Numer Telefonu</label>
      <my-input id="phoneNumber" v-model.trim.number="newEmployee.phoneNumber"></my-input>
      <label for="contractType">Forma zatrudnienia</label>
      <select id="contractType" v-model="newEmployee.contractType">
        <option value>wybierz opcje</option>
        <option v-for="option in contractTypeOptions" :key="option">{{option}}</option>
      </select>
      <div class="flex-container">
        <my-button v-on:click.prevent="clearForm">Wyczyść</my-button>
        <my-button
          :disabled="!isValid"
          :class="{disabled: !isValid}"
          class="btn-action"
          type="submit"
        >Zapisz</my-button>
        <!-- <my-button-test
          :disabled="!formIsValid"
          :class="{disabled: !formIsValid}"
          class="btn btn-action"
          @click="test"
        >Test Button</my-button-test>-->
      </div>
    </form>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
// import MyButtonTest from '@/components/MyButtonTest';
import MyMixin from '@/mixins/MyMixin';

export default {
  mixins: [MyMixin],
  components: {
    MyButton,
    MyInput,
    Multiselect,
    // MyButtonTest,
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
      isValid: false,
    };
  },
  created() {
    this.newEmployee.technologies.push('Javascript');
    this.newEmployee.position = 'Frontend developer';
  },
  mounted() {
    console.log('Mounted hook from component: ', this.mixinProperty);
  },
  watch: {
    newEmployee: {
      handler(newVal, oldVal) {
        if (newVal.technologies.length) {
          this.isValid = Object.keys(newVal).every(key => newVal[key]);
        }
      },
      deep: true,
    },
  },
  computed: {
    // formIsValid() {
    //   return (
    //     Object.keys(this.newEmployee).every(key => this.newEmployee[key]) &&
    //     this.newEmployee.technologies.length
    //   );
    // },
  },
  methods: {
    async checkForm() {
      if (this.formIsValid) {
        await this.$store.dispatch('addNewEmployee', this.newEmployee);
        this.$router.push({ name: 'home' });
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
.container {
  width: 600px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
}

.multiselect {
  margin: 2px 10px 15px 0;
  width: auto;
}
</style>
<style>
.multiselect .multiselect__tags {
  border-color: #ccc;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
