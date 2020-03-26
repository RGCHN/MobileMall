import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from "./store";
import FastClick from 'fastclick';
import VueLazyload from "vue-lazyload";
import Toast from "./components/common/Toast";


Vue.config.productionTip = false;
//事件总线 用于scroll组件和goodlistitem组件间的事件传递
Vue.prototype.$bus = new Vue();
Vue.use(Toast);
Vue.use(VueLazyload,{
  loading:require('./assets/img/home/loading.gif'),
});

//解决移动端300ms延迟
FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
