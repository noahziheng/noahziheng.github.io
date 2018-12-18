<template>
  <div class="about">
    <h1 v-if="noBlogRedirect">{{ $t('lost') }}</h1>
    <h1 v-else>{{ $t('wait') }}</h1>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NotFound extends Vue {
  private noBlogRedirect = false;

  private created(): void {
    const blogUrl = 'https://blog.noahgao.net';
    axios.get(blogUrl + this.$route.path)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = blogUrl + this.$route.path;
        }
      })
      .catch(() => this.noBlogRedirect = true);
  }
}
</script>
