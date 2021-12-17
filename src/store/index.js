//store
import Vue from "vue";
import Vuex from "vuex";
import countOptions from './Count';
import personOptions from './Person';
Vue.use(Vuex);

//创建store
const store = new Vuex.Store({
  modules:{
     countAbout:countOptions,
     personAbout:personOptions
  }
});

//暴露store
export default store;
