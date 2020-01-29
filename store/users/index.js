import Cookie from 'js-cookie'
const firebase = require('firebase')
/* eslint-disable */
const state = () => ({
  user: null,
  loadingState: 'notLoading'
})

export const mutations = {
  SET_LOADING_STATE: (state, status) => {
    state.loadingState = status
  },
  SET_USERS: (state, account) => {
    state.user = account
  }
}

export const actions = {
  async login ({ commit }, account) {
    commit('SET_LOADING_STATE', 'loading')
    try {
      // Login the user
      await firebase.auth().signInWithEmailAndPassword(account.email, account.password)
      console.log('Is it me jesus')
      // Get JWT from firebase
      const token = await firebase.auth().currentUser.getIdToken()
      const user = firebase.auth().currentUser
      const email = user.email
      const uid = user.uid
      // Set JWT to the cookie
      Cookie.set('access_token', token)

      // Set the user locally
      commit('SET_USER', {
        email,
        uid
      })
      commit('SET_LOADING_STATE', 'notLoading')
    } catch (error) {
      commit('SET_LOADING_STATE', 'somethig was wrong')
      console.log(error)
    }
  }
}
