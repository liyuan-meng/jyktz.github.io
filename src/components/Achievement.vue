<template>
  <div class="achievement">
    <div class="container">
      <div style="width: 720px; margin: 0 auto">
        <carousel class="carousel" :imgArr="imgData" :onchange="imgChange"></carousel>
      </div>
      <div class="article">
        <h2>研究成果</h2>
        <div class="line"></div>
        <ul class="list">
          <li class="list-item" v-for="(item,key) in articleList" :key="item.key">
            <h3>
              <a :href="item.href" target="_blank">{{item.name}}</a>
            </h3>
            <a :href="item.href" target="_blank"><p>{{(key+1)+'. '}}{{item.content}}</p></a>
          </li>
        </ul>
      </div>
      <div class="invention">
        <h2>发明专利</h2>
        <div class="line"></div>
        <ul class="list">
          <li class="list-item" v-for="(item,key) in inventionList" :key="item.key">
            <h3>
              <a :href="item.href" target="_blank">{{item.name}}</a>
            </h3>
            <p>{{(key+1)+'. '}}{{item.content}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import carousel from './Carousel.vue'
export default {
  name: 'achievement',
  components: {
    'carousel': carousel
  },
  data: function () {
    return {
      articleList: [],
      inventionList: [],
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

    axios.get('./static/学术成果/成果.json').then(function (res) {
      self.articleList = res.data
    })
    axios.get('./static/学术成果/专利.json').then(function (res) {
      self.inventionList = res.data
    })

    axios.get('./static/学术成果/滚动图片.json').then(function (res) {
      self.imgData[0].images = res.data
    })
    axios.get('./static/研究方向.json').then(function (res) {
      self.imgData[1].word = res.data.concat()
    })
  }
}
</script>
<style scoped>
.container{
  overflow: hidden;
}
.carousel{
  margin-top:20px;
}
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
}
.article{
  float: left;
  width: 55%;
}
.invention{
  float: right;
  width: 39%;
}
a {
  color: #2196f3;
  text-decoration: none;
  font-size: 18px;
}
li>a:hover{
  text-decoration: underline;
  cursor: pointer;
}
.line {
  border-bottom: 1px solid #c9c6c6;
}
</style>
