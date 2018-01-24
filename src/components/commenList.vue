<template>
  <div class="m-list">
    <ul>
      <a v-for="(value,key) in listArr" :key="key" :href="'#/important_link?listVal='+value">
        <li :class="{'active':titleName==value}" @click="transformList(value)">
          {{value}}
        </li>
      </a>
      <a href="http://cpquery.sipo.gov.cn/" target="_blank">
        <li :class="{'active':titleName==value}" @click="transformList('专利审查信息查询')">专利审查信息查询</li>
      </a>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'commenList',
  props: ['listArr'],
  linkData: '',
  data () {
    return {
      titleName: '杂志链接'
    }
  },
  methods: {
    transformList: function (value) {
      this.titleName = value
    }
  },
  mounted: function () {
    var self = this
    if (!this.$route.query.listVal) {
      self.titleName = '杂志链接'
    } else {
      self.titleName = self.$route.query.listVal
    }
  }
}
</script>
<style scoped='scoped'>
.m-list {
  background-color: white;
}
ul {
  border-top: 1px solid #f5f5f5;
  border-left: 1px solid #f5f5f5;
  padding-left: 0;
}
a {
  text-decoration: none;
  color: black;
}
li {
  list-style: none;
  height: 3em;
  line-height: 3em;
  border-bottom: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
  padding-left: 2%;
  letter-spacing: 1px;
}
li:hover {
  cursor: pointer;
  background-color: #2196f3;
  color: white;
}
.active {
  background-color: #2196f3;
  color: white;
}
h1{
  letter-spacing: 2em
}
</style>


