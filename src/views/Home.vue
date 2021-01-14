<template>
  <div class="home">
    <img class="avatar" src="../assets/avatar.jpeg">
    <div class="info">
      <h1>{{ $t('name') }}</h1>
      <h3 class="name-sub">{{ $t('name_sub') }}</h3>
      <p class="desc">{{ $t('desc') }}</p>
      <div class="btn-wrapper">
        <router-link
          to="/about">
          <button class="about-btn">{{ $t('aboutme') }}</button>
        </router-link>
        <router-link
          to="/about">
          <button class="blogentry-btn">{{ $t('blogentry') }}</button>
        </router-link>
      </div>
      <website-nav></website-nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WebsiteNav from '@/components/WebsiteNav.vue';

@Component({
  components: {
    WebsiteNav,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  .avatar {
    width: 120px;
    height: auto;
    border-radius: 50%;
    border: 3px solid #aaa;
    margin: 20px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      margin: 0;
    }
    .name-sub {
      margin: 10px 0;
      color: #2c3e50b5;
    }
    .desc {
      margin: 10px 0;
      color: #2c3e50b5;
    }
    .btn-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .about-btn {
      margin: 1em 0.5em;
      font-size: 0.9em;
      font-weight: 600;
      letter-spacing: 0.1em;
      min-width: 8em;
      text-align: center;
      padding: 0.75em 2em;
      border-radius: 2em;
      display: inline-block;
      transition: all 0.15s ease;
      box-sizing: border-box;
      border: 1px solid #2c3e50;
      background-color: #2c3e50;
      color: #fff;
      cursor: pointer;
    }
    .blogentry-btn {
      margin: 1em 0;
      font-size: 0.9em;
      font-weight: 600;
      letter-spacing: 0.1em;
      min-width: 8em;
      text-align: center;
      padding: 0.75em 2em;
      border-radius: 2em;
      display: inline-block;
      transition: all 0.15s ease;
      box-sizing: border-box;
      border: 1px solid #2c3e50;
      background-color: #ffffff;
      color: #2c3e50;
      cursor: pointer;
    }
  }
}
</style>
