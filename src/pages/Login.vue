<template>
    <MainBlock class="login max-w-24rem" title="Вход">
        <template v-slot:elements>
            <div class="login__inputs">
                <div class="login__username">
                    <div class="login__input-title">
                        Электронная почта
                    </div>
                    <InputText class="login__input" type="text" v-model="userdata.username" />
                </div>
                <div class="login__password">
                    <div class="login__input-title">
                        Пароль
                    </div>
                    <InputText class="login__input" type="text" v-model="userdata.password" />
                    <div class="login__footnotes">
                        <router-link to="#" class="login__footnote">
                            Забыл пароль
                        </router-link>
                        <router-link to="/register">
                            <Button link class="login__footnote login__footnote_link p-0" label="Регистрация"></Button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="login__step-buttons">
                <Button severity="secondary" :onclick="back" icon="pi pi-chevron-left"></Button>
                <Button class="w-full" type='button' :onclick="fakeAuth" :loading="loading"  label="Войти"></Button>
            </div>
            <Divider> <b class="login__divider" >или</b> </Divider>
            <a href="https://accounts.google.com/InteractiveLogin" target="_blank">
                <Button class="w-full" label="Войти с помощью" icon="pi pi-google" iconPos="right"></Button>
            </a>
        </template>
    </MainBlock>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import MainBlock from "@/components/blocks/MainBlock.vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const userdata = ref({
    username: '',
    password: ''
})

const router = useRouter();
const loading = ref(false)

function auth() {
    // const response = fetch('https://freefakeapi.io/authapi/login/',{
    //     method:  'POST',
    //     mode: 'no-cors',
    //     redirect: 'follow',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: userdata.value
    // }).then(response => {
    //     if (response.ok){
    //             console.log(response)
    //             return response.json()
    //         }
    //     }).
    // then(data => {
    //     console.log(data)
    //     localStorage.setItem('token', data.token)
    // })
}

function back() {
    router.go(-1)
}

function fakeAuth() {
    loading.value = true;
    //fetch
    setTimeout(() => { 
        loading.value = false;
        localStorage.setItem('token','fakeToken123')
        router.push('/dashboard')
    }, 2000);
    //check router/index.ts for valid token check
}



</script>

<style scoped></style>
