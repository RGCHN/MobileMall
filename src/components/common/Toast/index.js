import toast from "./toast";
const Toast = {};
Toast.install = (Vue =>{
  //1. 创建组件构造器
  const toastConstructor = Vue.extend(toast);
  //2. 用组件构造器创建组件
  const instance = new toastConstructor();
  //3. 挂载到dom上
  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);
  //4.给vue原型添加toast方法
  Vue.prototype.$Toast = ((msg,duration) =>{
    instance.message = msg;
    instance.visible = true;
    setTimeout(()=>{
      instance.visible = false;
    },duration)
  })
})

export default Toast