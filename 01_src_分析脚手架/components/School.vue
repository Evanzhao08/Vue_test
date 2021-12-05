<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-02 21:13:41
 * @LastEditTime: 2021-12-02 23:10:46
 * @FilePath: \vue_test\src\components\School.vue
-->
<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互的东西
export default {
  name: "School",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>
