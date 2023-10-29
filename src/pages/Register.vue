<template>
    <MainBlock class="login max-w-24rem" title="Регистрация">
        <template v-slot:elements>
            <div class="login__inputs">

                <template v-if="step === 0">
                    <div class="login__username">
                        <div class="login__input-title">
                            Электронная почта
                        </div>
                        <InputText class="login__input" type="text" v-model="userdata.username" />
                    </div>
                </template>
        
                <template v-if="step === 1" >
                    <div class="login__password">
                        <div class="login__input-title">
                            Пароль
                        </div>
                        <InputText class="login__input" type="text" v-model="userdata.password" />
                    </div>
                    <div class="login__password">
                        <div class="login__input-title">
                            Подвердите пароль
                        </div>
                        <InputText class="login__input" type="text" v-model="passwordRepeat" />
                    </div>
                </template>

                <template v-if="step === 2" >
                    <div class="login__password">
                        <div class="login__input-title">
                            Код верификации (выслан на эл. почту)
                        </div>
                        <InputText class="login__input" type="text" v-model="confirmCode" />
                        <div class="login__footnotes">
                            <router-link to="#" class="login__footnote">
                                Не пришел код?
                            </router-link>
                            <Button label="Отправить повторно" link class="login__footnote login__footnote_link p-0"/>
                        </div>
                    </div>
                </template>


            </div>
            
            <div class="login__step-buttons">
                <Button severity="secondary" :onclick="prevStep" icon="pi pi-chevron-left"></Button>
                <Button class="w-full" :onclick="nextStep"  :loading="loading"  label="Далее"></Button>
            </div>
            <template v-if="step < 2">
                <Divider> <b class="login__divider" >или</b> </Divider>
                <a href="https://accounts.google.com/InteractiveLogin" target="_blank">
                    <Button  class="w-full" label="Войти с помощью" icon="pi pi-google" iconPos="right"></Button>
                </a>
                <div class="login__footnotes">
                    <div class="login__footnote">
                        Уже есть аккаунт? <router-link class="login__footnote_link" to="/login">Войти</router-link>
                    </div>
                </div>
            </template>
        </template>
    </MainBlock>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import MainBlock from "@/components/blocks/MainBlock.vue";
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const password = ref('');
const passwordRepeat = ref('');
const userdata = ref({
    username: '',
    password: ''
});
const confirmCode = ref('')

const step = ref(0);
const loading = ref(false)

const router = useRouter();

function nextStep() {
    if (step.value == 2){
        //fetch
        loading.value = true;
        setTimeout(() => { 
            loading.value = false;
            localStorage.setItem('token','fakeToken123')
            router.push('/dashboard')
        }, 1500);
        //check router/index.ts for valid token check
    }
    else
        step.value++;
}

function prevStep() {
    if (step.value == 0){
        router.go(-1)
        return
    }
    step.value--;
}

</script>

<style scoped></style>
