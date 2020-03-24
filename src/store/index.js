import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";
import actions from "./action";
import mutations from "./mutations";

Vue.use(Vuex);
const state  = {
  cartList : [],
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
export default store
