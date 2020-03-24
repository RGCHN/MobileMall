const actions = {
  addCart(context,payload){
    //查看是否添加过
    const oldProduct = context.state.cartList.find(
      item => item.iid === payload.iid
    );
    //商品数量+1或者新增加商品
    if(oldProduct){
      context.commit('addCounter',oldProduct);
    }else{
      context.commit('addProduct',payload);
    }

  },

};
export  default actions
