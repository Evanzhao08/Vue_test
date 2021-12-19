<template>
  <div>
      <h1>人员列表</h1>
      <h3 style="color:red">Count组件的求和是:{{sum}}</h3>
      <input  v-model="name" type="text" placeholder="请输入名字">
      <button @click="add">添加</button>
      <button @click="addPerson">随机添加个人</button>
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
                this.$store.dispatch('personAbout/addPerson',personObj)
                this.name = ''
               // ...mapMutations('personAbout',[''])
           },
           addPerson(){
                this.$store.dispatch('personAbout/addPersonServer')
           }
        },
        computed:{
            ...mapState('countAbout',['sum']),
            personList(){
               return this.$store.state.personAbout.personList
           } 
        },
         mounted() {
            console.log('Person',this);
        },
    }
</script>

<style>

</style>