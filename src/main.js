/*
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:10
 * @LastEditTime: 2021-12-05 22:02:26
 * @FilePath: \vue_test\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',
    render:h =>h(App)
})