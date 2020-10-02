import { GetterTree, ActionTree, MutationTree } from 'vuex'
import firebase from '~/plugins/firebase'
import 'firebase/app'
import 'firebase/auth'

export const state = () => ({
  user: {
      userUid: '',
      userName: ''
  },
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setUserUid (state, userUid:string) {
    state.user.userUid = userUid
  },

  setUserName (state, userName: string) {
    state.user.userName = userName
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async login ({commit}) {
      console.log('Login action')
      try {
          const privider = new firebase.auth.GoogleAuthProvider()
          const res = await firebase.auth().signInWithPopup(privider)
          const user = res.user
          if (user){
            console.log('success: ' + user )
            console.log('success : ' + user.uid + ' : ' + user.displayName)
            commit('setUserUid', user.uid)
            commit('setUserName', user.displayName)
            return {
              userUid: user.uid,
              userName: user.displayName
            }
          }
      } catch (err) {
          var errCode = err.code
          console.error('catcherror : ' + errCode)
      }
  }
}

export const getters: GetterTree<RootState, RootState> = {
    getUser (state) {
        return state.user
    }
}
