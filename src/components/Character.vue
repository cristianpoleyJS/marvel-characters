<template>
  <div class="character">
    <div
      class="character__photo"
      :style="{
        'background-image': `url(${photoCharacter})`
      }" />
    <div class="character__info">
      {{ character.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    character: {
      type: Object,
      default: () => {
        return { }
      }
    }
  },
  computed: {

    /**
     * Return photo of current character.
     * @returns {String}
     */
    photoCharacter () {
      return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`
    }
  }
}
</script>

<style scoped lang="scss">
  .character {
    flex: 1 0 25%;
    margin: 1%;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    &__photo {
      background-position-y: center;
      background-size: cover;
      height: rem(200);
    }
    &__info {
      padding: 1rem 2rem;
    }
  }
</style>
