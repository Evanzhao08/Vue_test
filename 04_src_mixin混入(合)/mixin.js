/*
 * @Author: Evan Zhao
 * @Date: 2021-12-06 22:08:44
 * @LastEditTime: 2021-12-06 22:13:53
 * @FilePath: \Vue_test1\src\mixin.js
 */
export const mixin={
    methods: {
        showName(){
            window.confirm(this.name)
        }
    },
    mounted() {
        console.log('您好啊!')
    },
}
        