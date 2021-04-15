// import Vuex from 'vuex'
// import axios from 'axios'
export const strict = false
export const state = () => ({
    // user : 'no user',
    authUser: false,
    todos:[],
    replies:[],
    post:[],
    test:[],
})
// common getters
export const getters ={
  isLoggedIn (state) {
    return !!state.authUser
  },
  getAuthUser (state) {
    return state.authUser
  },
  gettodos (state) {
    return state.todos
  },
  getReplies (state) {
    return state.replies
  },
  getPost (state) {
    return state.post
  },
  getTest (state) {
    return state.test
  },
 
}

// actionns for commiting mutations
export const actions = {
  
  async nuxtServerInit({ commit }, { $axios }) {
  //  console.log('I am running as nuxt server init')

    //console.log('session is ', request.session)
    try {
      // get the initial data
      let { data } = await $axios.get('myuser')
      commit('loginUser', data)

    } catch (e) {
        console.log('nuxt server error ', e.response)
    }
  },



  
  
}

//mutations for changing data from action
export const mutations = {
  loginUser(state, data) {
    state.authUser = data
  },
  settodos(state, data) {
    state.todos = data
  },
  setReplies(state, data) {
    state.replies = data
  },
  setPost(state, data) {
    state.post = data
  },
  setTest(state, data) {
    state.test = data
  },

}
