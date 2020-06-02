const theme = localStorage.getItem("theme") || 'light'

let savedTheme = {
  light: true,
  dark: true
}
if (theme === 'light') {
  savedTheme.light = true
  savedTheme.dark = false
} else {
  savedTheme.light = false
  savedTheme.dark = true
}


export default {
  namespaced: true,

  state: () => {
    return {
      theme: savedTheme,
    }
  },

  mutations: {
    theme (state, payload) {
      state.theme = payload.theme
    },
  },

  getters: {
    theme (state) {
      return state.theme
    }
  },

  actions: {
  }
}
