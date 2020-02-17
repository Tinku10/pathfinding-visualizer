import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.directive('drag', {
  
//   bind(el, binding, vnode) {
//     if(buttonPressed == 0 && )
//   }
// });
export let bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')

