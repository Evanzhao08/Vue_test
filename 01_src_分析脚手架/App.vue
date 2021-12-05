<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-02 21:31:42
 * @LastEditTime: 2021-12-02 23:00:48
 * @FilePath: \vue_test\src\App.vue
-->
<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//引入组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

