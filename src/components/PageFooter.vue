<template>
  <div class="footer">
    <p>♥ Built with Love</p>
    <p><a href="https://beian.miit.gov.cn">津ICP备16007205号-1</a></p>
    <p><a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12010302001093">津公网安备 12010302001093号</a></p>
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
  p {
    font-family: "Lucida Grande", "Helvetica Neue", Calibri, sans-serif;
    line-height: 1;
    font-size: 0.6em;
    color: #ccc;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #2c3e50b5;
  }
}
</style>
