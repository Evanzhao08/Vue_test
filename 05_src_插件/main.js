/*
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:10
 * @LastEditTime: 2021-12-06 22:31:59
 * @FilePath: \Vue_test1\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import plugins from './plugins'

//使用插件 应用
Vue.use(plugins)
//创建vm
new Vue({
    el:'#app',
    render:h =>h(App)
})