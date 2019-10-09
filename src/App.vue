<template>
  <div id="app">
    <my-navbar></my-navbar>
    <main id="main" :class="{loading: getLoader}">
      <my-loader v-if="getLoader"></my-loader>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MyNavbar from '@/components/MyNavbar.vue';
import MyLoader from '@/components/MyLoader.vue';

export default {
  name: 'app',
  components: { MyNavbar, MyLoader },
  computed: {
    getLoader() {
      return this.$store.getters.getLoader;
    },
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

#main {
  padding: 100px 20px 0;
  height: auto;
  display: flex;
  justify-content: center;
}

.loading {
  opacity: 0.5;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  overflow: hidden;
  background-color: #FAFAFA;
}
</style>
