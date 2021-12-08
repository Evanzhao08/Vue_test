/*
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:10
 * @LastEditTime: 2021-12-06 22:54:14
 * @FilePath: \Vue_test1\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',
    render:h =>h(App)
})