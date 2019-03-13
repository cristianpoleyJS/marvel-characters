<template>
  <section>
    <!-- Input search characters -->
    <div class="wrapper-input">
      <span
        class="wrapper-input__input-search">
        <input
          v-model="inputSearch">
        <img
          src="@/assets/images/search.svg"
          class="wrapper-input__input-search__ico">
      </span>
    </div>

    <!-- Spinner loading data -->
    <Spinner v-if="busy" />

    <!-- Print every character when list characters length > 0-->
    <div
      v-else-if="characters.length > 0"
      class="list-characters">
      <template v-if="characters.length > 0">
        <Character
          v-for="character of characters"
          :key="character.id"
          :character="character" />
      </template>
    </div>
    <NotFound v-else />
  </section>
</template>

<script>
import { MARVEL_KEY } from '@/utils/constants'
import Character from '@/components/Character'
import NotFound from '@/components/NotFound'
import Spinner from '@/components/Spinner'

export default {
  name: 'ListCharacters',
  components: {
    Character,
    NotFound,
    Spinner
  },
  data () {
    return {
      inputSearch: '',
      timeout: ''
    }
  },
  computed: {

    /**
     * Returns characters saved in state.
     * @returns {Array}
     */
    characters () {
      return this.$store.getters.getCharacters
    },

    /**
     * Loading searching.
     * @returns {Boolean}
     */
    busy () {
      return this.$store.getters.getBusy
    }
  },
  watch: {

    /**
     * Watch so that every time half a second passes and the text of the search field has been edited,
     * the query is made to the service.
     * @param {String} newVal
     * @param {String} oldValue
     */
    inputSearch (newVal, oldVal) {
      clearTimeout(this.timeout)

      // SetTimeout for half a second to pass.
      this.timeout = setTimeout(() => {
        this.getCharacters(newVal)
      }, 300)
    }
  },
  created () {
    // Consult the service when loading the component.
    this.getCharacters()
  },
  methods: {

    /**
     * Asynchronous function to consult characters in the Marvel API.
     * @param {String} nameCharacter Text for filtering.
     * @param {String} key Key needed to allow the API to be called.
     * @param {Number} limit Limit number of personnel returned by the API.
     */
    async getCharacters (nameCharacter = '', key = MARVEL_KEY, limit = 12) {
      try {
        this.$store.commit('SET_BUSY', true)
        // Different URL because if you search with an empty 'nameStartsWith' the service fails.
        const url = nameCharacter.length > 0
          ? `http://gateway.marvel.com/v1/public/characters?limit=${limit}&nameStartsWith=${nameCharacter}&apikey=${key}`
          : `http://gateway.marvel.com/v1/public/characters?limit=12&apikey=${key}`
        const res = await fetch(url)
        const json = await res.json()
        this.$store.commit('SET_CHARACTERS', json.data.results)
        this.$store.commit('SET_BUSY', false)
      } catch (err) {
        this.$store.commit('SET_BUSY', false)
        throw err
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper-input {
    margin: 2rem 0;
    text-align: center;
    &__input-search {
      position: relative;
      > input {
        height: 2.5rem;
        width: rem(240);
        border-radius: rem(3);
        color: $secondary-text-color;
        border: 1px solid $divider-color;
        padding-left: 0.5rem;
        padding: 0 1rem;
        font-size: 1rem;
        box-sizing: border-box;
        font-weight: 300;
        padding-right: 2.2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:focus {
          border: 0;
          box-shadow: inset 0 0 0 2px $primary-color-light;
          outline: 0;
        }
      }
      &__ico {
        position: absolute;
        right: 0.5rem;
        width: 1.2rem;
        bottom: 0;
      }
    }
  }
  .list-characters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .not-found-results {
    color: $primary-text-color;
  }
</style>
