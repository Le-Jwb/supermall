<template>
  <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="item in imgLst" :key="item.url">
      <img :src="item.url" width="100%" height="100%"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "SlideShow",
  data(){
    return{
      imgLst:[
        {url:require("@/assets/img/home/img.png")},
        {url:require("@/assets/img/home/img_1.png")},
        {url:require("@/assets/img/home/img_2.png")},
        {url:require("@/assets/img/home/img_3.png")},
        {url:require("@/assets/img/home/img_4.png")},
        {url:require("@/assets/img/home/img_5.png")},
      ],
      bannerHeight: "1000",
      screenWidth: 0
    }
  },
  mounted(){
    // 首次加载时 需要调用一次
    this.screenWidth = window.innerWidth
    this.setSize()
    console.log(this.bannerHeight, this.screenWidth)

    // 窗口大小发生改变时 调用一次
    window.onresize = () =>{
      this.screenWidth = window.innerWidth;
      this.setSize()
      console.log(this.bannerHeight, this.screenWidth)
    }
  },
  methods:{
    setSize(){
      // 通过浏览器宽度 （图片宽度） 计算高度
      this.bannerHeight = 600 / 1920 * this.screenWidth;
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>