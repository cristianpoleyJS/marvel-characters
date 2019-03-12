<template>
  <div class="list-characters">
    <input v-model="inputSearch">
    <template v-if="characters.length > 0">
    <Character v-for="character of characters" :character="character" :key="character.id"/>
    </template>
  </div>
</template>

<script>
import Character from '@/components/Character'

export default {
  name: 'ListCharacters',
  components: {
    Character
  },
  data () {
    return {
      characters: [],
      timeout: '',
      inputSearch: ''
    }
  },
  created () {
    this.getCharacters()
  },
  watch: {

    inputSearch (newVal, oldVal) {
      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        this.getCharacters(newVal)
      }, 300)
    }
  },
  methods: {

    async getCharacters (character = '', key = '9c7209dd58feac4a90e01bfa136975e8', limit = 12) {
      try {
        const url = character.length > 0 ? `http://gateway.marvel.com/v1/public/characters?limit=${limit}&nameStartsWith=${character}&apikey=${key}` : `http://gateway.marvel.com/v1/public/characters?limit=12&apikey=${key}`
        const res = await fetch(url)
        const json = await res.json()
        this.characters = json.data.results
      } catch (err) {
        throw err
      }
    }
  }
}
</script>
