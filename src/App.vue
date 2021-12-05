<!--
 * @Author: Evan Zhao
 * @Date: 2021-12-05 21:33:23
 * @LastEditTime: 2021-12-05 21:51:28
 * @FilePath: \vue_test\src\App.vue
-->
<template>
  <div>
      <h1 v-text="msg"></h1>
      <button @click="showDOM">点我输出上方的消息</button>
      <School />
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
            showDOM:function(){
                console.log('sss');
            }
        }
        
    }
</script>
