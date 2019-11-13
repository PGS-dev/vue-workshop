<template>
  <div class="container card">
    <span class="title">Formularz dodawania nowego pracownika</span>
    <form @submit.prevent="checkForm" @keydown.enter.prevent="checkForm">
      <template v-for="field in fields">
        <label class="field-label" :key="'label' + field.id" :for="field.id">{{field.label}}</label>
        <form-field
          :key="'field' + field.id"
          :field-type="field.type"
          :id="field.id"
          v-model="newEmployee[field.model]"
          :options="field.options"
        ></form-field>
        <span
          :style="{color: 'red', marginTop: '2px'}"
          :key="'error' + field.id"
          v-show="validate && !newEmployee[field.model]"
        >field is required</span>
      </template>
      <label class="field-label" for="technologies">Technologie</label>
      <multiselect
        v-model="newEmployee.technologies"
        v-bind:options="getTechnologies"
        v-bind:multiple="true"
        placeholder="wybierz opcje"
        select-label="naciśnij enter aby wybrać"
        selected-label="wybrano"
        deselect-label="naciśnij enter aby usunąć"
      ></multiselect>
      <span
        :style="{color: 'red', marginTop: '2px'}"
        v-show="validate && !newEmployee.technologies.length"
      >field is required</span>
      <div class="flex-container">
        <my-button v-on:click.prevent="clearForm">Wyczyść</my-button>
        <my-button class="btn-action" type="submit">Zapisz</my-button>
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
import Multiselect from "vue-multiselect";
import MyButton from "@/components/MyButton.vue";
// import MyInput from '@/components/MyInput.vue';
// import MyButtonTest from '@/components/MyButtonTest';
import MyMixin from "@/mixins/MyMixin";
import FormField from "@/components/FormField";
import { FIELDS } from "@/constants";

export default {
  mixins: [MyMixin],
  components: {
    MyButton,
    Multiselect,
    FormField
    // MyButtonTest,
  },
  data() {
    return {
      newEmployee: {
        name: "",
        lastname: "",
        position: "",
        contractType: "",
        phoneNumber: "",
        technologies: []
      },
      contractTypeOptions: ["Umowa o prace", "Kontrakt B2B", "Student :)"],
      isValid: false,
      fields: FIELDS,
      validate: false
    };
  },
  created() {
    this.newEmployee.technologies.push("Javascript");
    this.newEmployee.position = "Frontend developer";
    this.setFieldOptions("position", this.getPositions);
    this.setFieldOptions("contractType", this.contractTypeOptions);
  },
  mounted() {
    console.log("Mounted hook from component: ", this.mixinProperty);
  },
  watch: {
    newEmployee: {
      handler(newVal, oldVal) {
        if (newVal.technologies.length) {
          this.isValid = Object.keys(newVal).every(key => newVal[key]);
        }
      },
      deep: true
    }
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
      this.validate = true;
      if (this.isValid) {
        await this.$store.dispatch("addNewEmployee", this.newEmployee);
        this.$router.push({ name: "employees" });
      }
    },
    clearForm() {
      this.newEmployee = {
        name: "",
        lastname: "",
        position: "",
        contractType: "",
        phoneNumber: "",
        technologies: []
      };
      this.validate = false;
    },
    setFieldOptions(fieldName, options) {
      const field = this.fields.find(item => item.id === fieldName);
      field.options = options;
    }
  }
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

input,
select {
  margin: 0;
}

.field-label {
  margin-top: 15px;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
