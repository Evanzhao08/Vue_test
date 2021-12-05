<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-02 21:13:41
 * @LastEditTime: 2021-12-02 23:11:27
 * @FilePath: \vue_test\src\components\Student.vue
-->
<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互的东西
export default {
  name: "Student",
  data() {
    return {
      name: "李四",
      age: "18",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: yellowgreen;
}
</style>
