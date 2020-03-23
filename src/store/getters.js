const getters = {
  cartList(state){
    return state.cartList;
  },
  cartCount(state,getters) {
    return getters.cartList.length;
  },
  getDetailNavIndex(state){
    return state.detailNavIndex;
  }
};

export default getters
