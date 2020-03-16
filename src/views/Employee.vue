<template>
  <div>
    <h3>ID: {{id}}</h3>
    <p>imie: {{employee.name}}</p>
    <p>nazwisko: {{employee.lastname}}</p>
    <p>stanowisko: {{employee.position}}</p>
    <p>umowa: {{employee.contractType}}</p>
    <p>numer tel.: {{employee.phoneNumber}}</p>
    <p>technologie: {{employee.technologies.toString()}}</p>
  </div>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    employee() {
      return this.$store.state.employee;
    },
  },
  beforeDestroy() {
    this.$store.commit('setEmployee', {});
  },
};
</script>
<style lang="scss" scoped>
</style>
