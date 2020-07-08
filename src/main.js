import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
import moment from 'moment';

Vue.use(VueRouter)

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY/DD/MM ')
  }
});
const router=new VueRouter({
  routes:Routes,
    mode:"history",
  
})


new Vue({
  el: '#app',
  
  render: h => h(App),
  router:router
})



