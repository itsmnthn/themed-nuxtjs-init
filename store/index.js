import Vuex from 'vuex'

// Modules
import app from './app'

// create store
const createStore = () =>
  new Vuex.Store({
    // modules
    modules: {
      app
    }
  })

export default createStore
