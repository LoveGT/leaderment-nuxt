const todosModule = {
  namespaced: true,
  state() {
    return {
      todoList: [
        { id: 1, name: "JS", content: "永远的神" },
        { id: 2, name: "Vue", content: "永远的神父" },
        { id: 3, name: "Nuxt", content: "永远的痛" },
        { id: 4, name: "React", content: "永远的渴望" },
      ],
    };
  },
  getters: {
    formateTodos(state) {
      let newTodos = []
      state.todoList.forEach(item => {
        item = {...item, content:item.content +"-gaotao"}
        newTodos.push(item)
      })
      return newTodos
      // console.log(result, 'result');
      // return 111
    },

  }
};

export default todosModule
