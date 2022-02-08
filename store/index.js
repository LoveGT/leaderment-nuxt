import Vue from "vue";
import Vuex from "vuex";
import todosModule from './todos/todos';


Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: () => {
    return {
      name: "gaotao",
      counter: 0,
    };
  },
  getters: {
    doubleCounter(state) {
      return state.counter*2
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {},
  modules: {
    todosModule
  }
});

export default store
