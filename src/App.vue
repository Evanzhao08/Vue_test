<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:23
 * @LastEditTime: 2021-12-05 23:26:29
 * @FilePath: \Vue_test1\src\App.vue
-->
<template>
  <div>
      <Student ref="sch"/>
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{Student},
    }
</script>
