<template>
  <div class="character">
    <img class="character__photo" :src="photoCharacter">
    {{ character.name }}
  </div>
</template>

<script>
export default {
  name: 'Character',
  computed: {
    photoCharacter () {
      return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`
    }
  },
  props: {
    character: Object,
    default: () => {
      return { }
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
    border: 1px solid #c4c4c4
  }
    .character__photo {
      max-width: 200px;
    }
</style>
