export default {
  data() {
    return {
      mixinProperty: 'Mixin property',
    };
  },
  mounted() {
    console.log('Mounted hook from mixin');
  },
  computed: {
    getTechnologies() {
      return this.$store.getters.getTechnologies;
    },
    getPositions() {
      return this.$store.getters.getPositions;
    },
  },
};
