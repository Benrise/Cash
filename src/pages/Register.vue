<template>
    <MainBlock class="login max-w-24rem" title="Регистрация">
        <template v-slot:elements>
            <div class="login__inputs">

                <template v-if="step === 0">
                    <div class="login__email">
                        <div class="login__input-title">
                            Электронная почта
                        </div>
                        <InputText :class="{ 'p-invalid': errors.email}" v-bind="email" class="login__input" type="text" v-model="emailModel" />
                        <small class="p-error  text-xs">
                            {{ errors.email }}
                        </small>
                    </div>
                </template>
        
                <template v-if="step === 1" >
                    <div class="login__password">
                        <div class="login__input-title">
                            Пароль
                        </div>
                        <Password :class="{ 'p-invalid': errors.password}"  @copy.prevent @paste.prevent v-bind="password" :feedback="false" class="login__input" v-model="passwordModel" />
                        <small class="p-error  text-xs">
                            {{ errors.password }}
                        </small>
                    </div>
                    <div class="login__password">
                        <div class="login__input-title">
                            Подвердите пароль
                        </div>
                        <Password :class="{ 'p-invalid': errors.repeatPassword}" @copy.prevent @paste.prevent v-bind="repeatPassword" :feedback="false" class="login__input" v-model="repeatPasswordModel">
                        </Password>
                        <small class="p-error  text-xs">
                            {{ errors.repeatPassword }}
                        </small>
                    </div>
                </template>

                <template v-if="step === 2" >
                    <div class="login__password">
                        <div class="login__input-title">
                            Код верификации (выслан на эл. почту)
                        </div>
                        <InputNumber :class="{ 'p-invalid': errors.code}" inputId="integeronly"  v-bind="code" class="login__input" type="text" v-model="codeModel" />
                        <small class="p-error  text-xs">
                            {{ errors.code }}
                        </small>
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
                <Button class="w-full" :onclick="nextStep" :loading="loading"  label="Далее"></Button>
            </div>
            <template v-if="step < 2">
                <Divider class="p-0"> <b class="login__divider" >или</b> </Divider>
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
import { ref, computed } from 'vue';
import { useForm} from 'vee-validate';
import * as yup from 'yup';
import Password from 'primevue/password';
import InputNumber from 'primevue/inputnumber';


const loading = ref(false)

const router = useRouter();

const step = ref(0);

const emailModel = ref(null);
const passwordModel = ref(null);
const repeatPasswordModel = ref(null);
const codeModel = ref(null)

const schemas = [
  yup.object({
    email: yup.string().required().email(),
  }),
  yup.object({
    password: yup.string().required().min(6),
    repeatPassword: yup
      .string()
      .required()
      .min(6)
      .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
  }),
  yup.object({
    code: yup
      .string()
      .required()
      .min(6)
      .matches(/^[0-9]+$/, 'Код состоит только из цифр'),
  })
];

const currentSchema = computed(() => {
    return schemas[step.value];
});

const { defineComponentBinds, handleSubmit, errors } = useForm({
  validationSchema: currentSchema,
});

const email = defineComponentBinds('email');
const password = defineComponentBinds('password');
const repeatPassword = defineComponentBinds('repeatPassword');
const code = defineComponentBinds('code');

const nextStep = handleSubmit((values) => {
    if (step.value == 2){
        //fetch
        loading.value = true;
        console.log(values)
        setTimeout(() => { 
            loading.value = false;
            localStorage.setItem('token','fakeToken123')
            router.push('/dashboard')
        }, 1500);
        //check router/index.ts for valid token check
    }
    else {
        step.value++;
    }
});

function prevStep() {
    if (step.value == 0){
        router.go(-1)
        return
    }
    step.value--;
}

</script>

<style scoped></style>
