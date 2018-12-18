<template>
  <div class="container">
    <template
      v-for="(site, index) in sites">
      <a
        :key="index"
        :href="site.href"
        @click="site.onclick && site.onclick($event, $router)">
        <JuejinLogo
          v-if="site.icon === 'juejin'"
          class="icon-juejin"></JuejinLogo>
        <font-awesome-icon
          v-else
          :icon="[site.icon_prefix ||'fab', site.icon]"
          size="2x"></font-awesome-icon>
      </a>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import JuejinLogo from '../assets/icon-juejin.svg';

@Component({
  components: {
    JuejinLogo,
  },
})
export default class WebsiteNav extends Vue {
  private sites: object[] = [
    {
      icon: 'weixin',
      href: '',
      onclick: (e: Event, router: VueRouter) => {
        e.preventDefault();
        e.stopPropagation();
        router.push({ name: 'weixin' });
      },
    },
    {
      icon: 'github',
      href: 'https://github.com/noahziheng',
    },
    {
      icon: 'juejin',
      href: 'https://juejin.im/user/583bdbf1a22b9d006c1514f8',
    },
    {
      icon_prefix: 'fas',
      icon: 'archive',
      href: 'https://blog.noahgao.net',
    },
    {
      icon: 'weibo',
      href: 'https://weibo.com/noah1719',
    },
    {
      icon: 'zhihu',
      href: 'https://www.zhihu.com/people/noah-gao/activities',
    },
  ];
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  justify-items: center;
  & > * {
    text-decoration: none;
    color: #2c3e50b5;
    margin: 8px;
  }
  & > *:hover {
    color: #2c3e50;
  }
  .icon-juejin {
    font-size: 2em;
    width: 1.125em;
  }
}
</style>
