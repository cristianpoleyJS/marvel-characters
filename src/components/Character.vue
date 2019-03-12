<template>
  <div class="character">
    {{ character.name }}
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    character: Object,
    default: () => {
      return { }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
