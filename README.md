# auth

## Build Setup

下記の内容をコピーし、plugin/firebase.jsに保存してください。

```firebase
import firebase from "firebase/app"
require('firebase/auth')

if (!firebase.apps.length) {
    firebase.initializeApp({
        /*ここに設定をコピーすること*/
    })
}

export default firebase
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
