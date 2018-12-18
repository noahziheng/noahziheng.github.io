<template>
  <div id="app" :class="{ fullscreen: fullscreenFlag }">
    <font-awesome-icon
      v-if="$route.name !== 'home'"
      class="back-btn"
      icon="arrow-left"
      size="lg"
      @click="$router.replace({ name: 'home' })"></font-awesome-icon>
    <lang-select></lang-select>
    <router-view class="main-view" :class="{ fullscreen: fullscreenFlag }"></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LangSelect from '@/components/LangSelect.vue';
import PageFooter from '@/components/PageFooter.vue';

import 'normalize.css';

@Component({
  components: {
    LangSelect,
    PageFooter,
  },
})
export default class App extends Vue {
  get fullscreenFlag(): boolean {
    const disableFullscreenRouteNameArr = ['about'];
    return !disableFullscreenRouteNameArr.find((val) => val === this.$route.name);
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
#app, .main-view {
  width: 100%;
}
.fullscreen {
  height: 100%;
}
.fullscreen.main-view {
  align-items: center;
}
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  .main-view {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .back-btn {
    position: absolute;
    top: 30px;
    left: 30px;
    cursor: pointer;
  }
}
</style>
