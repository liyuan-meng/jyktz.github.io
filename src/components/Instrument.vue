<template>
  <div class="instrument">
    <div class="container" style="background: white; margin-top: 2rem;">
      <div v-for="item in list" :key="item.key">
        <h3>{{item.title}}</h3>
        <div class="line"></div>
        <div class="imgs">
          <div class="img" v-for="img in item.imgs" :key="img.key">
            <img :src="'./static/图片/实验器材/'+img.img" alt="img.name">
            <div class="desc">
              <p>{{img.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'instrument',
  data: function () {
    return {
      list: []
    }
  },
  mounted: function () {
    var self = this

    axios.get('./static/实验室仪器/仪器.json').then(function (res) {
      self.list = res.data
    })
  }
}
</script>
<style scoped>
.line {
  border-bottom: 1px solid #c9c6c6;
  margin-bottom: 20px;
}
.img{
  margin-right: 2rem;
}

.img img{
  width: 380px;
}

.desc p{
  word-break: break-all;
}

.desc p:last-child{
  font-size: 12px;
  color: #999;
}
</style>
