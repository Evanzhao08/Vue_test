<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:37:33
 * @LastEditTime: 2021-12-05 22:58:02
 * @FilePath: \Vue_test1\src\components\School.vue
-->
<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'asss',
                address:'xassss'
            }
        },
    }
</script>

<style>
.school{
    background: gray;
}
</style>