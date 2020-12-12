/**
 * 项目启动口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式
import './styles/index.less'

Vue.config.productionTip = false

// 创建vue根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app') // 挂载index页面中 id是app的
