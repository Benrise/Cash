<template >
    <header class="header" v-if="$route.meta.header === 'authorized' ">
        <div class="header__container">
            <router-link to="/" class="header__page-info">
                Главная
            </router-link>
            <div class="header__media-burger">
                <a href="" class="z-5">
                    <img src="/images/svg/telegram-header.svg">
                </a>
                <div class="header__menu-icon" @click="toggleMenu" :class="{ '_active': isMenuOpen }"><span></span></div>
            </div>
            <nav class="header__menu menu" :class="{ '_active': isMenuOpen }">
                <div class="menu__title">
                    Меню
                </div>
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link to="/replinish" class="menu__link">
                            Пополнить баланс
                        </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/change-password" class="menu__link">
                            Сменить пароль
                        </router-link>
                    </li>
                    <li class="menu__item">
                        <Button link :onclick="logout" class="menu__link p-0">
                            Выйти
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from "primevue/button";

let isMenuOpen = ref(false)
const router = useRouter()

function toggleMenu() {
    document.body.classList.toggle('_lock');
    isMenuOpen.value = !isMenuOpen.value;
}

function logout() {
    localStorage.clear()
    router.push('/')
}
</script>