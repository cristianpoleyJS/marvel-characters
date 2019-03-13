import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [ ],
    busy: false
  },
  getters: {

    /**
     * Return array marvel characters with current input search.
     * @returns {Boolean}
     */
    getCharacters: state => state.characters,

    /**
     * Return value busy var, if busy is true, show Spinner.
     * @returns {Boolean}
     */
    getBusy: state => state.busy
  },
  mutations: {

    /**
     * Modify value 'characters' with new list of return service API.
     * @param {Object} state State app.
     * @param {Array} value New characters (max 12 elements).
     */
    SET_CHARACTERS (state, value) {
      state.characters = value
    },

    /**
     * Set busy when getting data service API.
     * @param {Object} state State app.
     * @param {Boolean} value New value.
     */
    SET_BUSY (state, value) {
      state.busy = value
    }
  }
})
