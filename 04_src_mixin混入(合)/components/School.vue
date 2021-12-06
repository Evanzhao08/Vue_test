<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-06 21:59:53
 * @LastEditTime: 2021-12-06 22:11:06
 * @FilePath: \Vue_test1\src\components\School.vue
-->
<template>
  <div>
      <h2 @click="showName">学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
import {mixin} from '../mixin'
export default {
    name:'School',
    data() {
        return {
            name:'sssss',
            address:'长安城'
        }
    },
    mixins:[mixin]
}
</script>

<style>

</style>