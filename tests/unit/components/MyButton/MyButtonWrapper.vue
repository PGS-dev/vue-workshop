<template>
  <my-button class="btn-action" @click="onClickHandler">Nacisnij mnie!</my-button>
</template>
<script>
import MyButton from '@/components/MyButton.vue';

export default {
  components: { MyButton },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    onClickHandler() {
      this.text = 'nacisnąłeś mnie!';
    },
  },
};
</script>
