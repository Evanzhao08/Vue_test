<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h3>当前求和放大十倍为:{{bigSum}}</h3>
     <h3>我在{{school}},学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数+</button>
    <button @click="incrementWait(n)">等一等+</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  computed:{
    //借助mapState生成计算属性
    //...mapState({sum:'sum',school:'school',subject:'subject'})
    ...mapState(['school','sum','subject']),
    ...mapGetters(['bigSum'])
  },
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    /* ******************************** */
/*     incrementOdd() {
      this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait',this.n)
    }, */
    //借助mapActions生成对应的方法，方法中会调用actions
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  },
  mounted() {
    console.log('Count',this.$store);
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
