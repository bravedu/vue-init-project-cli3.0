import Vue from 'vue'
import App from './App.vue'
import router from './router'
//加载公共配置
import gbObj from './config/global'

//加载斯第三方插件封装工具
import pgObj from './config/plugins'

//加载工具库
import utilFun from './config/util'
// //加载公共样式,此模块根据个人使用调整
// import './styles/common.less'


Vue.config.productionTip = false
//注册全局变量
Vue.prototype.$utilFun = utilFun;
Vue.prototype.$gbObj   = gbObj;
Vue.prototype.$pgObj = pgObj;

//注册全局公共组件（例如、头部、菜单、底部）
//Vue.component("my-header",Header)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
