<template>
  <div class="navbar">
    <div class="container">
      <span class="logo">
        <img src="static/图片/logo.png" alt="">
        <div class="title">
          <p style="font-size: 20px">金燕教授课题组</p>
          <p style="font-size: 14px;color: white">Yan Jin’s Group</p>
        </div>
      </span>
      <div class="nav-list">
        <ul>
          <li><a href="#/">首页</a></li>
          <li><a href="#/research">研究方向</a></li>
          <li>
            <a href="#/achievement?title=成果">学术成果</a>
          </li>
          <li><a href="#/group">科研团队</a></li>
          <li><a href="#/instrument">实验室仪器</a></li>
          <li><a href="#/news">学术交流</a></li>
          <li><a href="#/important_link">重要链接</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style>
.container {
  width: 998px;
  margin: 0 auto;
}
.navbar {
  background-image: linear-gradient(90deg, #790101, #cd0101);
  height: 62px;
  box-shadow: 0 0 2px #666;
}

.logo {
  float: left;
  color: yellow;
  font-size: 28px;
  line-height: 62px;
  font-family: "Times New Roman";
}
.logo:after {
  display: block;
  content: '';
  clear: both;
}
.logo img {
  float: left;
  margin-top: 13px;
  line-height: 62px;
  height: 36px;
  vertical-align: text-top;
}
.logo .title {
  float: left;
  margin-top: 7px;
  margin-left: 15px;
}
.logo p {
  margin: 0;
  line-height: 1.5em;
}
.nav-list ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list{
  float: right;
}

.nav-list li{
  float: left;
}

.nav-list li>ul{
  position: absolute;
  display: none;
  background-color: #cd0101;
  z-index: 20000;
}

.nav-list li:hover>ul{
  display: block;
}

.nav-list a{
  display: inline-block;
  text-decoration: none;
  color: white;
  line-height: 62px;
  width: 5.5em;
  text-align: center;
  font-size: 17px;
}

.nav-list a:hover{
  background-color: rgba(0,0,0,0.1);
}
</style>

