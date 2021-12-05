<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:23
 * @LastEditTime: 2021-12-05 23:00:26
 * @FilePath: \Vue_test1\src\App.vue
-->
<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button ref="btn" @click="showDOM">点我输出上方的消息</button>
      <School ref="sch"/>
  </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:"欢迎学习Vue!"
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title);
                console.log(this.$refs.btn);
                console.log(this.$refs.sch);
            }
        }
        
    }
</script>
