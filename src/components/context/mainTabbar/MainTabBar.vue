<template>
    <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img src="~assets/img/home/add.svg" alt="" slot="item-icon">
        <img src="~assets/img/home/airplay.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category" active-color="yellow">
        <img src="~assets/img/home/address_book.svg" alt="" slot="item-icon">
        <img src="~assets/img/home/album.svg" alt="" slot="item-icon-active">
        <div slot="item-text">记事本</div>
      </tab-bar-item>

      <tab-bar-item path="/profile" active-color="deeppink">
        <img src="~assets/img/home/alert.svg" alt="" slot="item-icon">
        <img src="~assets/img/home/alien.svg" alt="" slot="item-icon-active">
        <div slot="item-text">警告</div>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <img src="~assets/img/home/bell.svg" alt="" slot="item-icon">
        <img src="~assets/img/home/bicycle.svg" alt="" slot="item-icon-active">
        <div slot="item-text">提示</div>
      </tab-bar-item>
    </tab-bar>

</template>

<script>
import TabBar from "components/commons/tabbar/TabBar"
import TabBarItem from "components/commons/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style scoped>

</style>