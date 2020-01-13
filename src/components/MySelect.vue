<template>
  <select :value="value" @input="$emit('input', $event.target.value)">
    <option :value="null">Wybierz opcje...</option>
    <option v-for="option in options" :key="option">{{option}}</option>
  </select>
</template>
<script>
export default {
  props: ['options', 'value'],
};
</script>
<style lang="scss" scoped>
</style>
