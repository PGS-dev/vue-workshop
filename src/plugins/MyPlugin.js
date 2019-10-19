export default {
  install(Vue, options) {
    const { store } = { ...options };

    // global method and property
    Vue.myGlobalProperty = 'Hello from global property';
    Vue.myGlobalMethod = () => {
      return Vue.myGlobalProperty;
    }

    // instance methods

    Vue.prototype.$startLoader = () => {
      store.commit('startLoader');
    };

    Vue.prototype.$stopLoader = () => {
      store.commit('stopLoader');
    };

    Vue.prototype.$getLoader = () => store.getters.getLoader;
  },
};
