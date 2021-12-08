<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-06 21:59:53
 * @LastEditTime: 2021-12-06 23:04:18
 * @FilePath: \Vue_test1\src\components\School.vue
-->
<template>
  <div class="demo">
      <h2 class="title">学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'ssssssssss',
            address:'长安城'
        }
    }
}
</script>
<style scoped>
    .demo {
        background-color: seagreen;
    }
</style>