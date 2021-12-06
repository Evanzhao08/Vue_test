<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:37:33
 * @LastEditTime: 2021-12-06 22:28:18
 * @FilePath: \Vue_test1\src\components\Student.vue
-->
<template>
  <div>
      <h2 >学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
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
        }
    }
</script>

