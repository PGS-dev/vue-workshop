<template>
  <div>
    <my-navbar></my-navbar>
    <main id="main" :class="{loading: $getLoader()}">
      <my-loader v-if="$getLoader()"></my-loader>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>
<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyLoader from "@/components/MyLoader.vue";
export default {
  components: { MyNavbar, MyLoader }
};
</script>
<style lang="scss" scoped>
#main {
  padding: 100px 20px 0;
  height: auto;
  display: flex;
  justify-content: center;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(25%);
  opacity: 0;
}

.slide-fade-leave-active {
  opacity: 0;
}
</style>