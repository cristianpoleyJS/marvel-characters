<template>
  <div
    class="character"
    @click="goToInfo()">
    <div
      class="character__photo"
      :style="{
        'background-image': `url(${photoCharacter})`
      }" />
    <div class="character__info">
      <span class="character__info__name">
        {{ character.name }}
      </span>
      <span class="character__info__description">
        {{ character.description }}
      </span>
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
  },
  methods: {

    /**
     * Open in new window la URL of info character clicked.
     */
    goToInfo () {
      window.open(this.character.urls[0].url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
  .character {
    flex: 1 0 25%;
    margin: 1%;
    max-width: rem(375);
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    &__photo {
      margin: 2px;
      background-position-y: center;
      background-size: cover;
      height: rem(200);
    }
    &__info {
      margin: 2px;
      padding: 1rem;
      display: block;
      &__name {
        display: block;
        font-size: 1.2rem;
        font-weight: 500;
      }
      &__description {
        display: block;
        margin-top: 1rem;
      }
    }
    &:hover {
      box-shadow: inset 0 0 0 2px $primary-color;
      cursor: pointer;
    }
  }
</style>
