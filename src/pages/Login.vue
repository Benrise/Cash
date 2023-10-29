<template>
    <MainBlock class="login max-w-24rem" title="Вход">
        <template v-slot:elements>
            <div class="login__inputs">
                <div class="login__username">
                    <div class="login__input-title">
                        Электронная почта
                    </div>
                    <InputText class="login__input" type="text" v-model="login" />
                </div>
                <div class="login__password">
                    <div class="login__input-title">
                        Пароль
                    </div>
                    <InputText class="login__input" type="text" v-model="password" />
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
            <router-link to="/dashboard"><Button class="w-full" label="Войти"></Button></router-link>
            <Divider> <b class="login__divider" >или</b> </Divider>
            <Button label="Войти с помощью" icon="pi pi-google" iconPos="right"></Button>
        </template>
    </MainBlock>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import MainBlock from "@/components/blocks/MainBlock.vue";
import { ref } from 'vue';

const login = ref(null);
const password = ref(null);


</script>

<style scoped></style>
