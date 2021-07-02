<template>
  <div id="home">
<!--    导航栏-->
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>

<!--    轮播图 -->
    <slide-show></slide-show>

<!--    信息展示-->
    <recommend-view :recommends="res"></recommend-view>

<!--    每周精选-->
    <feature-view></feature-view>

    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>

    <ul style="text-align: center">
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>

    </ul>
  </div>
</template>

<script>
import {getHomeData} from "network/home";
import NavBar from "components/commons/navbar/NavBar"
import SlideShow from "@/components/commons/slideshow/SlideShow";

import TabControl from '@/components/context/tabControl/TabControl'

import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

export default {
  // 生命周期 创建时
  name: "Home",
  components: {
    NavBar,
    SlideShow,
    RecommendView,
    FeatureView,
    TabControl
  },
  data(){
    return {
      res: null,
      goods:{
        'pop': {page:0, list:[]},
        'news': {page:0, list:[]},
        'sell': {page:0, list:[]}
      }
    }
  },
  created(){
    // 1. 请求数据
    getHomeData().then(res =>{
      console.log("Home getHomeData res",res)
      this.res = res.data.result
    }).catch(err => {
      console.log("Home getHomeData err",err)
    })
  },
  methods:{

  }

}
</script>

<style scoped>
  .home-nav{
    background-color:var(--color-tint);
    color:#ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;

  }

  #home{
    padding-top: 44px;
  }

  .tab-control{
    position:sticky;
    top: 44px;
  }
</style>