<template>
  <div id="app">
    <router-view/>

    <main-tab-bar/>
  </div>
</template>

<script>
import router from '@/router/index'
import MainTabBar from 'components/context/mainTabbar/MainTabBar'

export default {
  name: 'App',
  router,
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
