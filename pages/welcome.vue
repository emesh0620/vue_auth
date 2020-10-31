<template>
    <div class="page">


        <div v-if="user.login">
            <v-btn 
                    block 
                    large 
                    color="primary"
                    @click="logout">
            ログアウト</v-btn>
            <p v-if="user.login" class="text">
                {{ user }}
            </p>

            
            ログインに成功！
            <nuxt-link to="/"
                >このサイトについて（Nuxt アプリケーション内部リンク）</nuxt-link>
        </div>
    </div>
</template>

<script>
    import firebase from '~/plugins/firebase'

    export default {

    /**/

    methods : {
        logout(){
            console.log("ログアウトしました");
            this.$store.commit('reset_vuex_state');
            /*firebase.auth().signOut().then(()=>{
                console.log("ログアウトしました");
                //this.$store.commit('reset_vuex_state');
            })
            .catch( (error)=>{
                console.log(`ログアウト時にエラーが発生しました (${error})`);
            });?*/
            
        }
        
    },
    computed: {
            user () {
                let get = this.$store.getters['user'];
                return this.$store.getters['user']
            },
        },
    }
</script>