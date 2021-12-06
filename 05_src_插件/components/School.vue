<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-06 21:59:53
 * @LastEditTime: 2021-12-06 22:38:58
 * @FilePath: \Vue_test1\src\components\School.vue
-->
<template>
  <div>
      <h2>学校名称:{{name|mySlice}}</h2>
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
