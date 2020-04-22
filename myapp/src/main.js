import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import ajax from './lib/ajax/Ajax.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//引入css
Vue.use(Element)

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueTouch from "vue-touch"
Vue.use(VueTouch,{name:"v-touch"});


// Vue.prototype.axios = axios;
Vue.config.productionTip = false



new Vue({
  router,
  store,
  Mint,
  render: h => h(App)
}).$mount('#app')
