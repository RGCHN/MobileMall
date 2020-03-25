const mutations = {
  addCounter(state,payload){
    payload.count++;
  },
  addProduct(state,payload){
    payload.count = 1;
    payload.checked = false;
    state.cartList.push(payload);
  },
  modifyChecked(state,payload){
    for(let item of state.cartList){
      item.checked = payload;
    }
  },
  addCount(state,payload){
    state.cartList.find( item =>
      item.iid === payload
    ).count ++;
  },
  subCount(state,payload){
    state.cartList.find( item =>
      item.iid === payload
    ).count --;
  }
};
export default mutations
