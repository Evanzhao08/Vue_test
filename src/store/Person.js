import axios from "axios";
import { nanoid } from "nanoid";



//人员管理功能的action
export default{
    namespaced:true,
  actions: {
    /* person业务 */
    addPerson(context, value) {
      context.commit("ADD_PERSON", value);
    },
    addPersonServer(context){
        axios.get(`https://api.uixsj.cn/hitokoto/get?type=social`).then(
            response=>{
                context.commit("ADD_PERSON", {id:nanoid(),name:response.data})     
            },
           error=>{
               console.log(error.message);
           }
        )
        console.log(this); 
    }
  },
  mutations: {
    /* person业务 */
    ADD_PERSON(state, value) {
      state.personList = [value, ...state.personList];
    },
  },
  state: { personList: [{ id: "001", name: "张三" }] },
  getters: {},
};

