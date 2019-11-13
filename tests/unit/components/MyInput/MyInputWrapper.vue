<template>
  <div>
    <my-input v-model="model"></my-input>
    <p class="text">{{model}}</p>
  </div>
</template>
<script>
import MyInput from '@/components/MyInput.vue';

export default {
  components: { MyInput },
  data() {
    return {
      model: '',
    };
  },
};
</script>
