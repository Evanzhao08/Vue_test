<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:23
 * @LastEditTime: 2021-12-06 21:43:28
 * @FilePath: \Vue_test1\src\App.vue
-->
<template>
  <div>
      <Student name="李四" sex="女" />
      
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{Student},
    }
</script>
