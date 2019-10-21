import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入mockjs
require('./mock'); //引入mock数据，关闭则注释该行

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
