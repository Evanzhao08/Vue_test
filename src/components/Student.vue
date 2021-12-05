<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:37:33
 * @LastEditTime: 2021-12-05 23:38:15
 * @FilePath: \Vue_test1\src\components\Student.vue
-->
<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <h2>学生年龄:{{age}}</h2>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'我是一个学生'
            }
        },
        props:['name','age','sex']
    }
</script>

