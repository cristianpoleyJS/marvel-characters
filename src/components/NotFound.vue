<template>
  <div class="not-found">
    <span class="not-found__text">No characters were found for the text you are looking for.</span>
    <img
      src="@/assets/images/not-found.jpg"
      class="not-found__image">
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="scss">
    .not-found {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: center;
        &__text {
            font-size: 2rem;
            padding: 2rem;
            flex: 1 0 40%;
            margin-left: 2rem;
        }
        &__image {
            max-width: rem(600);
            height: rem(460);
            flex: 1 0 40%;
        }
        @include mq('tablet') {
            &__image {
                display: none;
            }
        }
    }
</style>
