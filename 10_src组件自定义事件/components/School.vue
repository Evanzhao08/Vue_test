<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-06 21:59:53
 * @LastEditTime: 2021-12-09 21:54:15
 * @FilePath: \Vue_test1\src\components\School.vue
-->
<template>
  <div class="demo">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
        <button @click="sendSchoolName">获得学生姓名</button>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data() {
        return {
            name:'ssssssssss',
            address:'长安城'
        }
    },
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
}
</script>
<style scoped>
    .demo {
        background-color: seagreen;
        padding: 30px;
        
    }
</style>