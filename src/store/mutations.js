const mutations = {
  addCounter(state,payload){
    payload.count++;
  },
  addProduct(state,payload){
    payload.product.count = 1;
    /*payload.checked = payload.checked;*/
    state.cartList.push(payload.product);
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
