<template>
  <div class="footer-bar">
    <div class="container">
      <p>友情链接：
        <a href="http://www.snnu.edu.cn" target="_blank">陕西师范大学</a>
        <a href="http://www.chem.snnu.edu.cn/" target="_blank">陕西师范大学化学化工学院</a>
      </p>
      <p>地址：陕西省西安市长安区西长安街620号陕西师范大学南校区</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footerBar'
}
</script>
<style>
.footer-bar {
  margin-top: 6rem;
}
.footer-bar * {
  color: #666;
  font-size: 14px;
}

.footer-bar a {
  text-decoration: none;
  color: #409eff;
}
</style>

