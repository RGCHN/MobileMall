const mutations = {
  addCounter(state,payload){
    payload.count++;
  },
  addProduct(state,payload){
    payload.count = 1;
    payload.checked = false;
    state.cartList.push(payload);
  },
};
export default mutations
