<template>
  <div class="lang-select">
    <span
      id="lang-span-en"
      :class="{'lang-active': $i18n.locale === 'en'}"
      @click="handleSelect('en')">En</span>/
    <span
      id="lang-span-cn"
      :class="{'lang-active': $i18n.locale === 'zh'}"
      @click="handleSelect('zh')">中</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private handleSelect(val: string): void {
    this.$i18n.locale = val;
  }
}
</script>

<style lang="scss" scoped>
.lang-select {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 16px;
  span {
    margin: 2px;
    transition: font-weight 0.2s;
    cursor: pointer;
  }
  .lang-active {
    font-weight: 900;
  }
}
</style>
