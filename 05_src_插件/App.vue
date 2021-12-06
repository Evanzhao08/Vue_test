<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:23
 * @LastEditTime: 2021-12-06 22:06:52
 * @FilePath: \Vue_test1\src\App.vue
-->
<template>
  <div>
      <Student/>
      <hr>
      <School />
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{Student,School},
    }
</script>
