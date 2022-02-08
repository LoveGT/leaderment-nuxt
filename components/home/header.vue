<template>
  <div class="v-header">
    <div class="header-container">
      <nuxt-link to="/">
        <img src="~/assets/images/juejin.svg" alt="掘金" class="logo-img" />
      </nuxt-link>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="main-nav-list">
            <v-dropdown></v-dropdown>
          </li>
          <li class="nav-list-item searc">
            <v-input></v-input>
          </li>
          <li class="nav-list-item write">
            <img src="~/assets/images/write.svg" />
            <span>写文章</span>
          </li>
          <li class="nav-list-item auth">
            <span class="login">登录</span>
            <span class="register">注册</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import VDropdown from "./dropdown";
export default {
  name: "VHeader",
  components: {VDropdown},
  data() {
    return {};
  },
};
</script>

<style scoped>
@import "../../styles/header.css";
ul {
  list-style: none;
}
.v-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 49px;
  background: #fff;
  color: #909090;
  border-bottom: 1px solid #f1f1f1;
}
.header-container {
  max-width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
}
.main-nav {
  height: 100%;
  flex: 1 0 auto;
}
</style>
