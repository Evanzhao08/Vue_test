<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:23
 * @LastEditTime: 2021-12-09 22:20:52
 * @FilePath: \Vue_test1\src\App.vue
-->
<template>
  <div>
      <!-- <Student @testSend="getStudentName"/> -->
      <Student ref="student"/>
      <School :getSchoolName="getSchoolName"/>
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{Student,School},
        methods: {
            getSchoolName(name){
                console.log(name)
            },
            getStudentName(name,...params){
                console.log(name,params)
            }
        },
        mounted(){     
             this.$refs.student.$on('testSend',this.getStudentName)
             this.$refs.student.$on('demo',this.getStudentName)
            //触发一次不在执行
            //this.$refs.student.$once('testSend',this.getStudentName)
        }
    }
</script>

<style>
.title{
    color: red;
}
</style>