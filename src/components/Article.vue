<template>
  <div class="article">
    <div class="container">
      <h2 class="title">{{title}}</h2>
      <p class="date">日期：{{date}}</p>
      <div v-html="content"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'article',
  data: function () {
    return {
      title: '',
      content: '',
      date: ''
    }
  },
  mounted: function () {
    var self = this
    this.title = this.$route.query.title
    axios.get('./static/学术交流/' + this.$route.query.title + '.html').then(function (res) {
      self.content = res.data
    })
    axios.get('./static/学术交流/学术交流.json').then(function (res) {
      res.data.forEach(function (item) {
        if (item.title === self.title) {
          self.date = item.time
        }
      })
    })
  }
}
</script>
<style scoped>
* {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
}

.title,.date{
  text-align: center;
}

.date{
  color: #666;
  font-family: '微软雅黑';
  font-size: 14px;
}
</style>
