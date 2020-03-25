const actions = {
  addCart(context,payload) {
    return new Promise((resolve) => {
      //查看是否添加过
      const oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      )
      //商品数量+1或者新增加商品
      if (oldProduct) {
        context.commit('addCounter', oldProduct);
        resolve('当前商品数量+1');
      } else {
        context.commit('addProduct', payload);
        resolve('成功添加到购物车');
      }
    })
  }
};
export  default actions
