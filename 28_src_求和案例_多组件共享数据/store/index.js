//store
import { setTimeout } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//用于响应组件中的动作
const actions = {
    jiaOdd(context,value) {
        if (context.state.sum % 2) {
            context.commit('JIA',value)
        } 
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 1000);
    },
    /* person业务 */
    addPerson(context,value) {
        context.commit('ADD_PERSON',value)
    }
}
//准备mutations-用于操作数据(state)
const mutations = {
    JIA(state,value){
       state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
     },
     /* person业务 */
     ADD_PERSON(state,value) {
        state.personList = [value,...state.personList]
    }
}
//准备state-用于操作数据
const state = {
    sum:0, 
    school:'史莱克学院',
    subject:'FE',
    personList:[
        {id:'001',name:'张三'}
    ]
}
//准备getter--用于将state中的数据进行加工
const getters = {
    bigSum(state){
       return  state.sum*10
    }
}
//创建store
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})

//暴露store
export default store