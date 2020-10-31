import firebase from '~/plugins/firebase'

const user = {
    uid: '',
    email: '',
    login: false,
}

export const state = () => ({ user })

export const getters = {
    user: state => {
        return state.user
    }
}

export const actions = {
    login({ commit }, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                
                firebase.auth().onAuthStateChanged(function (user) {
                    console.log(user.metadata.a)
                    if (user) {
                        const param = {
                            uid: user.uid,
                            email: user.email,
                            save: user.save
                        }
                        commit('getData', param)
                        

                    }
                })
            }).catch((error) => {
                alert(error)
            })
    },

    logout({ commit }) {
        commit('reset_vuex_state', param)
    }
}

export const mutations = {
    getData(state, payload) {
        state.user.uid = payload.uid
        state.user.email = payload.email
        state.user.login = true
        this.$router.push('/welcome')
    },
    
    reset_vuex_state(state) {
        state.user = user
        this.$router.push('/login')
    },
}