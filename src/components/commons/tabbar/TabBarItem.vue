<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor:{
      type: String,
      default: "red"
    }
  },
  data(){
    return {
    }
  },
  computed:{
    isActive(){
      // 根据当前活跃的路由 找到当前传递过来的所有路由中所匹配的路由
      // 然后显示在界面中取反 如果匹配到的路由为True 则显示 name为item-icon-active的插槽 就是代表展示当前路由下的组件
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      // 如果为True 则把字体颜色也改了
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    // 点击之后更换路由
    itemClick(){
      this.$router.replace(this.path)
      console.log("ItemClick", this.$route, this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex:2;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
.active{
  color:rosybrown;
}
</style>