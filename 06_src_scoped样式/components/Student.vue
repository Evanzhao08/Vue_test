<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:37:33
 * @LastEditTime: 2021-12-06 23:19:16
 * @FilePath: \Vue_test1\src\components\Student.vue
-->
<template>
  <div class="test">
      <h2 class="title">学生姓名:{{name}}</h2>
      <h2 class="qwe">学生性别:{{sex}}</h2>
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

<style lang="less">
    .test{
        background-color: burlywood;
        .qwe{
            font-size: 40px;
        }
    }
</style>