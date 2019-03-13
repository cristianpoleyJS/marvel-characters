<template>
  <div id="app">
    <img src="@/assets/images/logo.png">
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    max-width: 1200px;
    margin: 0 auto;
    font-family: $fontFamily;
    > img {
      max-width: rem(150);
      margin-top: 1rem;
    }
  }
</style>
