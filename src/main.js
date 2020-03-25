import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from "./store";
import Toast from "./components/common/Toast";
Vue.config.productionTip = false;
//事件总线 用于scroll组件和goodlistitem组件间的事件传递
Vue.prototype.$bus = new Vue();
Vue.use(Toast);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
