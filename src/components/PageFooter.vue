<template>
  <div class="footer">
    <p>© 2018 | Design by <a href="/">Noah Gao</a></p>
    <p><a href="http://www.miitbeian.gov.cn/">津ICP备16007205号</a></p>
    <p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12010302001093">津公网安备 12010302001093号</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageFooter extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #fff;
  p {
    line-height: 1;
    font-size: 0.5em;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #2c3e50b5;
  }
}
</style>
