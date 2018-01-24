<template>
  <div class="news">
    <div class="container">
      <h2>学术交流</h2>
      <div class="line"></div>
      <ul class="list">
        <li v-for="item in list" :key="item.key">
          <h3>
            <a class="title" :href="'#/article?title='+item.title">{{item.title}}</a>
            <span class="time">{{item.time}}</span>
          </h3>
          <p class="content">{{item.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'news',
  data: function () {
    return {
      list: []
    }
  },
  mounted: function () {
    var self = this

    axios.get('./static/学术交流/学术交流.json').then(function (res) {
      self.list = res.data
    })
  }
}
</script>
<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.list p{
  text-indent: 2em;
}
.time {
  color: #999;
  font-size: 14px;
  letter-spacing:1px;
  line-height:1.8em;
}

a {
  color: #2196f3;
  text-decoration: none;
}

.content {
  color: #333;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.075em;
}
h3 a{
  letter-spacing:1px;
}
.line {
  border-bottom: 1px solid #c9c6c6;
}
</style>
