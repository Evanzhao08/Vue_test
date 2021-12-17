<template>
  <div>
      <h1>人员列表</h1>
      <h3 style="color:red">Count组件的求和是:{{sum}}</h3>
      <input  v-model="name" type="text" placeholder="请输入名字">
      <button @click="add">添加</button>
      <ul>
          <li v-for="{id,name} in personList" :key="id">{{name}}</li>
      </ul>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {nanoid} from 'nanoid'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        methods: {
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.dispatch('addPerson',personObj)
                this.name = ''
           }
        },
        computed:{
            ...mapState(['sum']),
            personList(){
               return this.$store.state.personList
           } 
        }
    }
</script>

<style>

</style>