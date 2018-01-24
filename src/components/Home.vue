<template>
  <div class="home container">
    <carousel class="carousel" :imgArr="imgData" :onchange="imgChange"></carousel>
    <div class="parent">
      <div class="introduce">
        <h2>金燕教授简介</h2>
        <div class="line"></div>
        <img style="width:100%;height:100%;text-align:center;display:inline" src="static/图片/教授.png">
        <p>金燕教授，女，博士生导师。2001年7月获陕西师范大学分析化学专业理学硕士学位，2004年12月湖南大学获分析化学理学博士学位，2005-2006年在清华大学化学系博士后流动站从事博士后研究，2006年底加入陕西师范大学化学化工学院。主要研究方向为生物传感及生化分析，目前研究工作主要集中在光学生物传感、药物筛选、即时检测研究等方面。</p>
        <p>先后主持国家自然科学基金三项，参与教育部基金重点项目一项，2010年入选教育部新世纪优秀人才资助计划。迄今为止，申请中国发明专利7项，其中已授权发明专利3项，生化分析及生物传感新原理和新方法研究方面的成果分别获得陕西省高等学校科学技术奖一等奖和陕西省科技进步奖二等奖，并先后在Analytical Chemistry、Biosensors and Bioelectronics、Chemical Communications、ACS Applied Materials & Interfaces等国内外期刊上发表论文近60篇，发表的论文在SCI上记录的他人引用1300次。</p>
      </div>
      <div class="news">
        <h2>组内新闻</h2>
        <div class="line"></div>
        <div v-for="(item, index) in newsData" :key="item.key" v-if="index < 2">
          <a :href="'#/article?title='+item.title">
            <h3>{{item.title}}</h3>
          </a>
          <p>{{item.content}}<a :href="'#/article?title='+item.title">详情</a></p>
        </div>
      </div>
      <div class="employ">
        <h2>招生信息</h2>
        <div class="line"></div>
        <h3>研究方向</h3>
        <p>本课题组主要的研究方向是生物传感及生化分析。目前研究工作主要集中在光学生物传感、药物筛选、即时检测研究等方面。</p>
        <h3>研究生（硕士、博士）招生要求</h3>
        <p>具备生物、化学等专业背景，具有较强的科研能力和创新意识，具有扎实的专业基础知识，较强的责任心和团队协作能力。组内每年招收硕士生（保研/外考）2人、直博生/博士生1人。鼓励本科生申请免试推荐的5年制直博生。</p>
        <h3>博士后招聘要求</h3>
        <p>具备生物，材料，化学背景的人员申报博士后，需提供个人简历和科研经历，并附4篇代表论文。</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import carousel from './Carousel.vue'
export default {
  name: 'home',
  components: {
    'carousel': carousel
  },
  data () {
    return {
      newsData: '',
      imgData: [{
        images: []
      }, {
        word: []
      }]
    }
  },
  methods: {
    getData: function () {
      var self = this
      axios.get('./static/主页/新闻.json').then(function (res) {
        self.newsData = res.data.map(function (item, index) {
          if (item['content'].length > 255) {
            item['content'] = item['content'].substring(0, 235) + '...'
          }
          return item
        })
      })
      axios.get('./static/主页/滚动图片.json').then(function (res) {
        self.imgData[0].images = res.data
      })
      axios.get('./static/研究方向.json').then(function (res) {
        self.imgData[1].word = res.data.concat()
      })
    },
    imgChange: function (index) {
      console.log(index)
    }
  },
  mounted: function () {
    this.getData()
  }
}
</script>
<style scoped="scoped">
.carousel {
  margin-top: 20px;
}
.introduce {
  float: left;
  width: 35.3%;
}
.news {
  float: left;
  width: 31.3%;
  margin-left: 3%;
  margin-right: 3%;
}
.employ{
  float: left;
  width: 27.3%;
}
.news p,.employ p,.introduce p{
  text-indent: 2em;
  letter-spacing: 1px;
  line-height: 1.8em;
  font-size: 14px;
}
.parent:after {
  content: "";
  display: block;
  clear: both;
}
a {
  text-decoration: none;
  color: #2196f3;
  letter-spacing: 1px;
}
a:hover {
  text-decoration: underline;
}
h1 {
  color: #333;
  letter-spacing: 1.8px;
}
h2 {
  letter-spacing: 1px;
  font-weight: 300;
}
.line {
  border-bottom: 1px solid #c9c6c6;
}
</style>
