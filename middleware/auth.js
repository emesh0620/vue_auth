import firebase from '~/plugins/firebase'

export default function ({ store, redirect, route }) {
    // 遷移ごとに呼び出されるためstoreに情報があれば処理しない
    // 過去にFirebaseユーザー認証しているか
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        if (!(user)) {
            if(route.name !== "login") redirect("/login")
        }
    })
}