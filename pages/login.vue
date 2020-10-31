<template>
    <div class="page">
        <loader :show="show"></loader>
        <v-app>
            <v-row v-show="show" align="center" justify="space-around">
                <v-card width="400px" class="pa-5">
                    <v-card-title>
                        <h1 class="display-1">ログイン</h1>
                    </v-card-title>
                    <v-card-text>
                        <form class="form" @submit.prevent>
                            <label class="label">
                                <v-text-field label="メールアドレス" type="text" v-model="email"></v-text-field>
                            </label>
                            <label class="label">
                                <v-text-field label="パスワード" type="password" v-model="password"></v-text-field>
                            </label>
                            <div>
                            <v-btn block large color="primary"
                                @click="login">
                            ログイン</v-btn>
                            </div>
                        </form>
                    </v-card-text>
                </v-card>
            </v-row>
        </v-app>
    </div>
</template>

<script>
import loader from '~/components/Loader.vue';

export default {
    layout: 'login',
    data() {
        return {
            email: '',
            password: '',
            checkbox: false,
            show: true
        }
    },
    computed: {
        user () {
            return this.$store.getters['user']
        },
    },
    methods : {
        login() {
            this.show = false
            this.$store.dispatch('login', {email: this.email, password: this.password})
        },            
    }
}

</script>

    <style lang="scss">
    .Login {
    > .form {
        > .button {
        display: block;
        }

        > .label {
        > .input {
            display: block;
            border: 1px solid blck; 
        }
        }
    }
    }
</style>