<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <router-link class="tab-item" to="/">商品</router-link>
      <router-link class="tab-item" to="/ratings">评价</router-link>
      <router-link class="tab-item" to="/sellers">商家</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/Header'
export default {
  name: 'App',
  components: {
    'v-header': Header
  }
}
</script>

<style lang="scss">
@import 'styles/mixins.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7,17,27,0.1));
    .tab-item {
      text-align: center;
      flex: 1;
      text-decoration: none;
      color: rgb(77,85,93);
      font-size: 14px;
      &.router-link-exact-active {
        color: rgb(240,20,20);
      }
    }
  }
}
</style>
