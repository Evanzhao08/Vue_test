<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:37:33
 * @LastEditTime: 2021-12-09 22:28:39
 * @FilePath: \Vue_test1\src\components\Student.vue
-->
<template>
  <div class="test">
      <h2>学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <button @click="sendStudentName">获得学生姓名</button>
      <button @click="unbind">解绑事件</button>
      <button @click="xiaohui">销毁组件</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男'
            }
        },
        methods: {
            sendStudentName(){
                this.$emit('testSend',this.name,'sss',112,222,333,444)
                this.$emit('demo',123)
            },
            unbind(){
               // this.$off('testSend') //解绑一个自定义事件
                this.$off(['testSend','demo']) //解绑多个自定义事件
                 this.$off() //解绑所有自定义事件
            },
            xiaohui(){
                this.$destroy()// 销毁当前student实例  自定义事件销毁 
            }
        },
    }
</script>

<style lang="less">
    .test{
        background-color: burlywood;
        padding: 20px;
    }
</style>