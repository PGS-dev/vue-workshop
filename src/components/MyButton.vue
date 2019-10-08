<template>
  <button
    class="btn"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot /></button>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.btn {
  background-color: #f5f5f5;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.1rem;

  &:hover {
    background-color: #e0e0e0;
  }
}

.btn-action {
  color: #fff;
  background-color: #4caf50;
  &:hover {
    background-color: #66bb6a;
  }
}
</style>
