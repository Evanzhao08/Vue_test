/*
 * @Author: Evan Zhao
 * @Date: 2021-12-02 22:37:19
 * @LastEditTime: 2021-12-02 23:28:39
 * @FilePath: \vue_test\src\main.js
 * 该文件整个项目的入口文件
 */
import Vue from 'vue'
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  //render:q=> q('h1','xxx')
  // template:`<App></App>`,
  // components:{App}
})
