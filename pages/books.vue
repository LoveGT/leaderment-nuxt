<template>
  <div class="books-index-view">
    <div class="list-wrap">
      <div class="book-list">
        <book-item v-for="(list, index) in lists" :key="index" :item="list"></book-item>
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from '@/components/books/book-item'

export default {
  components: {
    BookItem
  },
  head () {
    return {
      title: '小册',
      meta: [
        { hid: 'books custom title', name: 'books', content: 'books custom title description' }
      ]
    }
  },
  data() {
    return {
      lists: [{
        title: "nuxt.js从入门到放弃",
        desc:"本书教你学习nuxt.js，如何从入门到放弃",
        img: require('@/assets/images/react.jpg'),
        userData: {
          username: "高涛",
          avatarLarge: require('@/assets/images/react.jpg')
        },
        profile: "默认的profile",
        price: "128元",
        lastSectionCount:"20",
        contentSize: "1000",
        lastSectionCount: "20",
        buyCount: "5000"
      },
      {
        title: "Vue.js从入门到放弃",
        desc:"本书教你学习vue.js，如何从入门到放弃",
        img: require('@/assets/images/vue.jpg'),
        userData: {
          username: "高涛",
          avatarLarge: require('@/assets/images/vue.jpg')
        },
        profile: "默认的profile",
        price: "278元",
        lastSectionCount:"20",
        contentSize: "1000",
        lastSectionCount: "20",
        buyCount: "66000"
      },
      {
        title: "react.js从入门到放弃",
        desc:"本书教你学习react.js，如何从入门到放弃",
        img: require('@/assets/images/react.jpg'),
        userData: {
          username: "高涛",
          avatarLarge: require('@/assets/images/react.jpg')
        },
        profile: "默认的profile",
        price: "378元",
        lastSectionCount:"20",
        contentSize: "1000",
        lastSectionCount: "20",
        buyCount: "50000"
      },]
    }
  }
  // async asyncData ({ store, error }) {
  //   const param = {
  //     src: 'web',
  //     pageNum: 1
  //   }
  //   // const [ res ] = await Promise.all([
  //   //   store.dispatch('getListByLastTime', param)
  //   // ])
  //   return {
  //     lists: res.d
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.books-index-view {
  margin 1.767rem auto 0
  width 100%
  position relative
}
.list-wrap {
  display flex
  position relative
  margin-bottom 50px
}
.book-list {
  flex 1
  box-shadow 0 1px 3px 0 rgba(4, 5, 13, .23)
}
@media (max-width 960px) {
  .book-list {
    margin 0 auto 50px
  }
}
</style>
