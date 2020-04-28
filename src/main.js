import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

Vue.config.productionTip = false;

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  render: h => h(App),
}).$mount('#app');
