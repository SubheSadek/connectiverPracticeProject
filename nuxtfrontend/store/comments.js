// import Vuex from 'vuex'
// import axios from 'axios'
export const strict = false
export const state = () => ({
    // user : 'no user',
    todos: []
})
// common getters
export const getters ={
  getAlltodos (state) {
    return state.todos
  },
 
}

// actionns for commiting mutations
export const actions = {
  
  async fetchtodos({ commit }, { $axios }) {
 
    try {
      // get the initial data
      let { data } = await $axios.get('get-comment')
      commit('settodos', data)
      console.log(data)

    } catch (e) {
        console.log('nuxt server error ', e.response)
    }
  },


  
  
}

//mutations for changing data from action
export const mutations = {
    settodos(state, data) {
    state.todos = data
  },

}
