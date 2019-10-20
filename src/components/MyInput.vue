<template>
  <input v-bind="$attrs" @input="$emit('input', $event.target.value)" :value="value" />
</template>
<script>
export default {
  props: ['value'],
};
</script>
<style lang="scss" scoped>
input:-internal-autofill-selected {
  background-color: #fff;
}
</style>
