<template>
  <div class="recommed">
    <div v-for="item in recommends" class="recommed-item">
      <a :href="item.link">
        <div class="img-div"><img :src=" host + item.image" alt=""></div>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data(){
    return {host: 'http://192.168.3.147:5000/'}
  },
  props:{
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
  .recommed{
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 12px;
    padding: 5px 0 30px;
    border-bottom: 10px solid #eee;
  }
  .recommed-item{
    flex: 1;
    margin:5px;
    width: 80px;
    height: 85px;
  }

  .img-div{
    border-radius:50%;
    background-color: var(--color-tint);
    height: 85px;
    margin-bottom: 12px;
  }
  img{
    margin-top:10px;
    width:58px;
    height: 65px;
  }

</style>