import Vue from 'vue';
import App from './App.vue';
import router from './router/router';

import '@/css/custom.css';
import store from './store';

import MyPlugin from '@/plugins/MyPlugin';

Vue.config.productionTip = false;

// register global directives
Vue.directive('color-swatch', (el, binding) => {
  // bind and update
  el.style.backgroundColor = binding.value;
});

// register global filters
Vue.filter('formatNumber', value => {
  if (typeof value === 'number') {
    const stringValue = value.toString();
    const firstPart = stringValue.substring(0, 3);
    const secondPart = stringValue.substring(3, 6);
    const thirdPart = stringValue.substring(6, 9);
    return `+48 ${firstPart} ${secondPart} ${thirdPart}`;
  }
  return value;
});
// add custom plugin
Vue.use(MyPlugin, { store });

// use global method
console.log(Vue.myGlobalMethod());

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
