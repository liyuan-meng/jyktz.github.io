  <template>
    <div class="research container">
      <carousel class="carousel" :imgArr='imgData'></carousel>
      <!-- <el-row style="margin-top:30px">
        <el-col :span='11' style="margin-right:40px" v-for="item in images" :key="item.key">
          <el-card style="margin-top:20px;">
            <img :src="'./static/图片/'+item.img" class="image" style="width:100%;height:280px;">
            <div style="padding: 14px;text-align:center">
              <h3>{{item.name}}</h3>
            </div>
          </el-card>
        </el-col>
      </el-row> -->
    </div>
  </template>
  <script>
import axios from 'axios'
import carousel from './Carousel.vue'
export default {
  name: 'research',
  components: {
    'carousel': carousel
  },
  data () {
    return {
      images: [],
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
      axios.get('./static/研究方向/滚动图片.json').then(function (res) {
        self.imgData[0].images = res.data
        self.images = res.data
      })
      axios.get('./static/研究方向.json').then(function (res) {
        self.imgData[1].word = res.data.concat()
      })
    }
  },
  mounted: function () {
    this.getData()
    console.log(this.imgData)
  }
}
</script>
  <style scoped="scoped">
.carousel {
  margin-top: 20px;
}
</style>
