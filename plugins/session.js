import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {

    window.onNuxtReady(() => {
        createPersistedState({
            key: 'login_session',
            paths: [
                "user"
            ]
        })(store)
    })
}