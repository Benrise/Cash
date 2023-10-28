<template>
    <MainBlock center title="Добро пожаловать!">
        <template v-slot:elements>
            <div class="user-type-select">
                <router-link to="/  " class="user-type-select__type">
                    <div class="user-type-select__logo">
                        <i class="pi pi-user"></i>
                    </div>
                    <div class="user-type-select__text">
                        Зарегистрированный пользователь
                    </div>
                </router-link>
                <router-link to="/register" class="user-type-select__type">
                    <div class="user-type-select__logo">
                        <i class="pi pi-user-plus"></i>
                    </div>
                    <div class="user-type-select__text">
                        Новый пользователь
                    </div>
                </router-link>
            </div>
        </template>
    </MainBlock>
</template>

<script setup lang="ts">
import MainBlock from "@/components/blocks/MainBlock.vue";
</script>
