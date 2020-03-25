import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";
import actions from "./action";
import mutations from "./mutations";

Vue.use(Vuex);
const state  = {
  cartList : [{"iid":"1lrzvr8","imgURL":"//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg","title":"【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服","desc":"【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】","price":"49.00","count":2,"checked":false},{"iid":"1m745k0","imgURL":"//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg","title":"2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮","desc":"你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~","price":"68.00","count":1,"checked":false},{"iid":"1m70y5k","imgURL":"//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg","title":"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装","desc":"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装","price":"59.00","count":1,"checked":false},{"iid":"1m4tdhy","imgURL":"//s5.mogucdn.com/mlcdn/c45406/180624_6jb1g4kg6i1ab4i4g0echaia49i87_640x960.png","title":"杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣","desc":"杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣","price":"37.00","count":1,"checked":false},{"iid":"1lyp2vg","imgURL":"//s11.mogucdn.com/mlcdn/c45406/180423_0h6j2abd17hka9d4j7dlk710d3af9_640x960.jpg","title":"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤","desc":"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤","price":"39.00","count":1,"checked":false},{"iid":"1m1camo","imgURL":"//s11.mogucdn.com/mlcdn/c45406/180514_31c5j94dicf0h1582cg7j46e7cjfc_640x960.jpg","title":"2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤","desc":"2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤","price":"49.00","count":1,"checked":false}],
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
export default store
