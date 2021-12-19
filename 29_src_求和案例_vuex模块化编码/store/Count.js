//求和功能的action
export default{
    namespaced:true,
  actions: {
    jiaOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit("JIA", value);
      }, 1000);
    },
  },
  mutations: {
    JIA(state, value) {
      state.sum += value;
    },
    JIAN(state, value) {
      state.sum -= value;
    },
  },
  state: { sum: 0, school: "史莱克学院", subject: "FE" },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};