/*
 * @Author: Evan Zhao
 * @Date: 2021-12-06 22:30:06
 * @LastEditTime: 2021-12-06 22:35:10
 * @FilePath: \Vue_test1\src\plugins.js
 */
export default {
    install(Vue){
        console.log('@@@install',Vue);
        Vue.filter('mySlice',function (value) {
            return value.slice(0,4)
        })
    }
}

