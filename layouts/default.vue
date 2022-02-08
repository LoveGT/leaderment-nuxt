<template>
  <div>
    <v-header></v-header>
    <main class="content-container" ref="container">
      <nuxt />
    </main>
    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
import VHeader from "~/components/home/header";
import VFooter from "~/components/home/footer";
export default {
  components: {
    VHeader,
    VFooter,
  },
};
</script>

<style scoped>
  .content-container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    top: 49px;
  }
</style>
