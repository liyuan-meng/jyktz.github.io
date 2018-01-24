<template>
  <div class="important-links container" style="margin-top: 2rem;">
    <h1>{{title}}</h1>
    <div class="line"></div>
    <div class="main-content">
      <div class="magazine" v-show="title=='杂志链接'">
        <div v-for="item in listData.杂志链接" :key="item.key">
          <h3>{{item.name}}</h3>
          <ul>
            <a v-for="item1 in item.links" :key="item1.key" :href="item1.href">
              <li>{{item1.name}}</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="topic-group" v-show="title=='课题组链接'">
        <a v-for="item in listData.课题组链接" :key="item.key" :href="item.link">
          <h2>{{item.name}}</h2>
        </a>
      </div>
      <div class="college" v-show="title=='学院链接'">
        <a v-for="item in listData.学院链接" :key="item.key" :href="item.link">
          <h2>{{item.name}}</h2>
        </a>
      </div>
    </div>
    <commen-list class="catalog" :listArr='listArr'></commen-list>
  </div>
</template>
<script>
import commenList from './commenList.vue'
import axios from 'axios'
export default {
  name: 'importantLinks',
  components: {
    'commen-list': commenList
  },
  data () {
    return {
      listArr: [],
      listData: '',
      title: ''
    }
  },
  methods: {
    getData: function () {
      var self = this
      axios.get('./static/重要链接/重要链接.json').then(function (res) {
        self.listData = res.data
        for (var key in res.data) {
          self.listArr.push(key)
        }
        // self.listArr.push('专利审查信息查询')
        if (!self.$route.query.listVal) {
          self.title = self.listArr[0]
        } else {
          self.title = self.$route.query.listVal
        }
      })
    }
  },
  mounted: function () {
    this.getData()
  },
  watch: {
    '$route': function () {
      var self = this
      self.title = self.$route.query.listVal
    }
  }
}
</script>
<style scoped="scoped">
* {
  font-family: "微软雅黑";
}
.important-links:after {
  content: "";
  display: block;
  clear: both;
}
.line {
  border-bottom: 1px solid #c9c6c6;
}
.important-links .main-content {
  float: left;
  margin-right: -300px;
}
.important-links .catalog {
  width: 300px;
  float: right;
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
  line-height: 1.8em;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #2196f3;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: #2196f3;
}
.college h2,
.topic-group h2 {
  color: #2196f3;
  letter-spacing: 1px;
  font-weight: 300;
}
.magazine h3 {
  color: #444444;
  letter-spacing: 1px;
}
h1 {
  color: #333;
  letter-spacing: 1.8px;
}
</style>
