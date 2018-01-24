<template>
  <div class="group">
    <!-- <div class="parent">
      <img src="static/图片/left.png" class="left">
      <img src="static/图片/right.png" class="right">
      <carousel  class="carousel" :imgArr="imgData" :onchange="imgChange"></carousel>
    </div> -->
    <div class="container" style="background: white; margin-top: 2rem;">
      <div v-for="item in list" :key="item.key">
        <h3>{{item.title}}</h3>
        <div class="line"></div>
        <div class="members">
          <div class="member" v-for="member in item.members" :key="member.key">
            <img :src="'./static/图片/研究团队/'+member.img" alt="member.name">
            <div class="desc">
              <p>{{member.name}}</p>
              <p>{{member.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import carousel from './Carousel.vue'
  export default {
    name: 'group',
    components: {
      'carousel': carousel
    },
    data: function () {
      return {
        list: [],
        imgData: [{
          images: []
        }, {
          word: []
        }]
      }
    },
    methods: {
      imgChange: function (index) {
        console.log(index)
      }
    },
    mounted: function () {
      var self = this

      axios.get('./static/科研团队/成员.json').then(function (res) {
        self.list = res.data
      })

      axios.get('./static/科研团队/滚动图片.json').then(function (res) {
        self.imgData[0].images = res.data
      })
      axios.get('./static/研究方向.json').then(function (res) {
        self.imgData[1].word = res.data.concat()
      })
    }
  }
</script>
<style scoped>
  /* .parent{
    width:100%;
    display:table;
    table-layout:fixed
    }  */
  .left,.right{
    width:500px;
    height:480px;
  }
  .left{
    float:left;
  }
  .right{
    float:right;
  }
  .carousel{
    width:100%;
    /* float: left; */
    margin-right:500px;
    margin-left:500px;
  }
  .member{
    display: inline-block;
    margin-right: 3rem;
  }

  .member img{
    height: 285px;
  }

  .desc{
    text-align: center;
  }

  .desc p{
    word-break: break-all;
  }

  .desc p:last-child{
    font-size: 12px;
    color: #999;
  }
  .line {
    border-bottom: 1px solid #c9c6c6;
    margin-bottom: 20px;
  }
</style>
