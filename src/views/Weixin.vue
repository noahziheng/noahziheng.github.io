<template>
  <div class="container">
    <img src="../assets/qrcode_weixin.png" alt="QRCode">
    <p>{{ $t('tip_weixin') }}</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  font-size: 22px;
  img {
    max-width: 80%;
    border: 3px solid #aaa;
    border-radius: 5px;
    padding: 1px;
  }
}
</style>

