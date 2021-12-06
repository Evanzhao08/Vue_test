<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:37:33
 * @LastEditTime: 2021-12-06 22:12:26
 * @FilePath: \Vue_test1\src\components\Student.vue
-->
<template>
  <div>
      <h2 @click="showName">学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
//引入一个混合
import {mixin} from '../mixin'
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男'
            }
        },
        mixins:[mixin]
    }
</script>

