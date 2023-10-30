<template>
    <MainBlock class="login max-w-24rem" title="Вход">
        <template v-slot:elements>
            <div class="login__inputs">
                <div class="login__email">
                    <div class="login__input-title">
                        Электронная почта
                    </div>
                    <InputText :class="{ 'p-invalid': errors.email}" v-bind="email" class="login__input" type="text"  v-model="emailModel" />
                    <small class="p-error  text-xs">
                        {{ errors.email }}
                    </small>
                </div>
                <div class="login__password">
                    <div class="login__input-title">
                        Пароль
                    </div>
                    <Password :class="{ 'p-invalid': errors.password}" v-bind="" toggleMask class="login__input" :feedback="false" v-model="passwordModel" />
                    <small class="p-error  text-xs">
                        {{ errors.password }}
                    </small>
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
                <Button class="w-full" type='button' :onclick="onSubmit" :loading="loading"  label="Войти"></Button>
            </div>
            <Divider  class="p-0"> <b class="login__divider" >или</b> </Divider>
            <a href="https://accounts.google.com/InteractiveLogin" target="_blank">
                <Button class="w-full" label="Войти с помощью" icon="pi pi-google" iconPos="right"></Button>
            </a>
        </template>
    </MainBlock>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from 'primevue/password';
import Divider from "primevue/divider";
import MainBlock from "@/components/blocks/MainBlock.vue";
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const schema = yup.object({
  email: yup.string().required().email().label('Электронная почта'),
  password: yup.string().required().min(6).label('Пароль'),
});

const { defineComponentBinds, handleSubmit, errors} = useForm({
  validationSchema: schema,
});

const email = defineComponentBinds('email');
const password = defineComponentBinds('password');

const router = useRouter();
const loading = ref(false);

const emailModel = ref(null);
const passwordModel = ref(null);

// function onSubmit() {
    // if (!emailModel.value || !passwordModel.value) return
    // userdata.value.email = emailModel.value;
    // userdata.value.password = passwordModel.value;
    // loading.value = true;
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
    //     loading.value = false;
    //     router.push('/dashboard')
    // })
// }

function back() {
    router.go(-1)
}

const onSubmit = handleSubmit((values) => {
    console.log(values)
    loading.value = true;
    setTimeout(() => { 
        loading.value = false;
        localStorage.setItem('token','fakeToken123')
        router.push('/dashboard')
    }, 2000);
});

</script>

<style scoped></style>
