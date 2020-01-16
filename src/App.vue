<template>
  <div id="app">
    <my-navbar></my-navbar>
    <main id="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MyNavbar from '@/components/MyNavbar.vue';

export default {
  name: 'app',
  components: { MyNavbar },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

#main {
  padding: 100px 20px 0;
  height: auto;
  display: flex;
  justify-content: center;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  overflow: hidden;
  background-color: #fafafa;
}
</style>
