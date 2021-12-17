import Vue from 'vue'
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
// 引入store
import store from './store'

Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)
//创建vm
const vm = new Vue({
    el:'#app',
    store,
    render:h =>h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})

console.log(vm);