import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";
import actions from "./action";
import mutations from "./mutations";

Vue.use(Vuex);
const state  = {
  cartList : [{"iid":"1m4tdhy","imgURL":"//s5.mogucdn.com/mlcdn/c45406/180624_6jb1g4kg6i1ab4i4g0echaia49i87_640x960.png","title":"杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣","desc":"杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣","price":"37.00","count":1,"checked":true},{"iid":"1lyp2vg","imgURL":"//s11.mogucdn.com/mlcdn/c45406/180423_0h6j2abd17hka9d4j7dlk710d3af9_640x960.jpg","title":"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤","desc":"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤","price":"39.00","count":1,"checked":true},{"iid":"1m1camo","imgURL":"//s11.mogucdn.com/mlcdn/c45406/180514_31c5j94dicf0h1582cg7j46e7cjfc_640x960.jpg","title":"2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤","desc":"2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤","price":"49.00","count":1,"checked":true}],
  homeBanners:[{"acm":"3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119","height":390,"height923":390,"image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg","image923":"https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg","link":"https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119","title":"焕新女装节","width":750,"width923":750},{"acm":"3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119","height":390,"height923":390,"image":"https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg","image923":"https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg","link":"https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119","title":"入秋穿搭指南","width":750,"width923":750},{"acm":"3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119","height":390,"height923":390,"image":"https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg","image923":"https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg","link":"https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119","title":"秋季护肤大作战","width":750,"width923":750},{"acm":"3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119","height":390,"height923":390,"image":"https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg","image923":"https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg","link":"https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119","title":"流行抢先一步","width":750,"width923":750}]
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
export default store
