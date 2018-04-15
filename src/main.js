import Vue from 'vue'
import App from './App.vue'
import imgLazyload from './lib/index.js'

Vue.use(imgLazyload)

new Vue({
  el: '#app',
  render: h => h(App)
})
