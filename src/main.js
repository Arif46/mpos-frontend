import 'babel-polyfill'
import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store/store'
import i18n from './i18n'
import './Utils/fliter'

// bootstrap vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'remixicon/fonts/remixicon.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

// validation
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// toast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
import 'izitoast/dist/css/iziToast.min.css';
Vue.use(iziToast);

// alert
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}
Vue.use(VueSweetalert2, options)

// set permisssion
import Permissions from './mixins/Permissions';
Vue.mixin(Permissions);
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:3000',
//     vuex: {
//       store,
//       actionPrefix: 'SOCKET_'
//     },
//   options: {}
// }))

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  i18n,
  components: {
    App
  }
})


