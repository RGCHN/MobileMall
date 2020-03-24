const mutations = {
  addCart(state,info){
    //查看是否添加过
    const oldInfo = state.cartList.find(
        item => item.iid === info.iid
    );
    //商品数量+1或者新增加商品
    if(oldInfo){
      oldInfo.count +=1;
    }else{
      info.count = 1;
      info.checked = true;
      state.cartList.push(info)
    }

  },
  setDetailNavIndex(n){
    this.state.detailNavIndex = n;
    console.log(this.state.detailNavIndex);
  }

};
export default mutations
