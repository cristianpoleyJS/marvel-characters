<template>
  <section>
    <!-- Input search characters -->
    <input v-model="inputSearch">
    <!-- Print every character when list characters length > 0-->
    <div
      v-if="characters.length > 0"
      class="list-characters">
      <template v-if="characters.length > 0">
        <Character
          v-for="character of characters"
          :key="character.id"
          :character="character" />
      </template>
    </div>
    <span v-else>
      No characters were found for the text you are looking for.
    </span>
  </section>
</template>

<script>
import { MARVEL_KEY } from '@/utils/constants'
import Character from '@/components/Character'

export default {
  name: 'ListCharacters',
  components: {
    Character
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
  .list-characters {
    display: flex;
    flex-wrap: wrap;
  }
</style>
