  <template>
    <div class="carousel">
      <div class="shade" v-if="title == '首页' || title == '研究方向'">
        <ul>
          <li v-for="(item, i) in imgArr[1]['word']" :key="item.key" :class="{'active':index===i}">{{item}}</li>
        </ul>
      </div>
      <div :class="{block:true,lunbo:isMargin}">
        <el-carousel height="480px" @change="onchange">
          <el-carousel-item v-for="item in imgArr[0]['images']" :key="item.key">
            <img style="width:100%;height:100%" :src="'./static/图片/'+urlPart+'/'+item.img">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </template>
  <script>
    import axios from 'axios'
    export default{
      name: 'carousel',
      props: ['imgArr'],
      urlPart: '新闻动态滚动',
      data () {
        return {
          index: 0,
          title: '',
          isMargin: false
        }
      },
      methods: {
        onchange: function (index) {
          console.log(arguments)
          this.index = index
        }
      },
      mounted: function () {
        var self = this
        if (this.$route.path === '/') {
          this.urlPart = '新闻动态滚动'
          this.title = '首页'
          this.isMargin = true
        } else if (this.$route.path === '/research') {
          this.urlPart = '研究方向滚动'
          this.title = '研究方向'
          this.isMargin = true
        } else if (this.$route.path === '/achievement') {
          this.urlPart = '最近发表文章滚动'
          this.title = ''
          this.isMargin = false
        } else if (this.$route.path === '/group') {
          this.urlPart = '实验室集体留影滚动'
          this.title = ''
          this.isMargin = false
        } else {
          this.title = ''
          this.isMargin = false
        }

        axios.get('./static/学术成果/' + this.$route.query.title + '.json').then(function (res) {
          self.list = res.data
        })
        axios.get('./static/学术成果/滚动图片.json').then(function (res) {
          self.imgArr[0].images = res.data
        })
        axios.get('./static/研究方向.json').then(function (res) {
          self.imgArr[1].word = res.data.concat()
        })
      }

    }
  </script>
  <style scoped="scoped">
  .carousel{
    margin-bottom: 25px;
    position:relative;
  }
  .shade{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    width:300px;
    z-index:10;
    /* background-color:rgba(33,150,243,0.85); */
    background-color:rgba(14,13,13,0.85);
  }
  .shade ul{
    margin:0;
    padding:0;
  }
  .shade ul li{
    list-style:none;
    color:white;
    height:160px;
    line-height:160px;
    font-size:23px;
    text-align:center;
    letter-spacing:4px;
    padding:auto 20px;
  }
  .shade ul li:hover{
    /* background-color:rgba(14,13,13,0.75); */
    background-color:rgba(33,150,243,0.5);
    cursor:pointer;
  }
  .active{
    background-color:rgba(33,150,243,0.5);
  }
  .lunbo{
    margin-left: 300px;

  }
  </style>
