<template>
  <div class="repos-page">
    <div>counter:{{$store.state.counter}}</div>
    <div>counterCpd:{{counterCpd}}</div>
    <div>mapStateCounter:{{counterMap}}</div>
    <el-button type="primary" size='mini' @click="increment">+1</el-button>
    <el-button type="primary" size='mini' @click="decrement">-1</el-button>
    <ul>
      <li v-for="item in todosList" :key="item.id">
        <h5>{{ item.name}}</h5>
        <p>{{item.content}}</p>
      </li>
    </ul>
    <ul>
      <li v-for="item in todosList2" :key="item.id">
        <h5>{{ item.name}}</h5>
        <p>{{item.content}}</p>
      </li>
    </ul>
    <ul>
      <li v-for="item in todosList3" :key="item.id">
        <h5>{{ item.name}}</h5>
        <p>{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations,mapGetters} from 'vuex';
;

export default {
  head () {
    return {
      title: '开源库',
      meta: [
        { hid: 'repos custom title', name: 'repos', content: 'repos custom title description' }
      ]
    }
  },
  methods: {
    // ...mapMutations([
    //   'increment',
    //   'decrement'
    // ]),
    ...mapMutations({
      increment: 'increment',
      decrement: 'decrement'
    }),
    // increment() {
    //   this.$store.commit("increment")
    // }
  },
  mounted(){

  },
  computed: {
    todosList() {
      return this.$store.state.todosModule.todoList
    },
    counterCpd() {
      return this.$store.state.counter
    },
    ...mapState({
      counterMap: state => state.counter,
    }),
    ...mapState('todosModule',{
      todosList3: state => state.todoList
    }),
    ...mapGetters("todosModule", {
      todosList2: 'formateTodos'
    })
  }
}
</script>

<style lang="stylus" scoped>
.repos-page {
  font-size 20px
  margin-top 1.767rem
  text-align center
}
</style>
