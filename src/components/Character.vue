<template>
  <div class="character">
    <img
      class="character__photo"
      :src="photoCharacter">
    {{ character.name }}
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
    padding: 2rem;
    flex: 1 0 20%;
    margin: 1%;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    &__photo {
      max-width: 200px;
    }
  }
</style>
