<template>
  <div class="spinner">
    <!-- Spinner in https://loading.io/css/ -->
    <div class="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style scoped lang="scss">
    .spinner {
        text-align: center;
        margin-top: 10%;
    }
    .lds-ring {
        display: inline-block;
        position: relative;
        width: rem(64);
        height: rem(64);
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: rem(52);
        height: rem(52);
        margin: 0.5rem;
        border: rem(4) solid $primary-color;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: $primary-color transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
