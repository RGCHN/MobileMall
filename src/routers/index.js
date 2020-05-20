import Vue from 'vue'
import VueRouter from  'vue-router'

const Home = () => import('../views/Home/Home');
const Cart = () => import('../views/Cart/Cart');
const Category = () => import('../views/Category/Category');
const Profile = ()=> import('../views/Profile/Profile');
const Detail = () => import('../views/Detail/Detail');
Vue.use(VueRouter);

const routes = [
  {
    path:'',
    redirect:'/home',
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/Category',
    component:Category,
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/Detail:goodID',
    component:Detail
  },
];

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
