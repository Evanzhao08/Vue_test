<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-10 21:49:55
 * @LastEditTime: 2021-12-10 21:53:49
 * @FilePath: \Vue_test1\src\App.vue
-->
<template>
  <div>
      <h1>{{msg}}</h1>
      <Student/>
      <School/>
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                msg:'你好啊!'
            }
        },
    }
</script>

<style>
.title{
    color: red;
}
</style>