<template>
    <header class="header">
        <div class="header__container">
            <div class="header__page-info">
                Главная
            </div>
            <div class="header__media-burger">
                <a href="" class="z-5">
                    <img src="public/images/svg/telegram-header.svg">
                </a>
                <div class="header__menu-icon" @click="toggleMenu" :class="{ '_active': isMenuOpen }"><span></span></div>
            </div>
            <nav class="header__menu menu" :class="{ '_active': isMenuOpen }">
                <div class="menu__title">
                    Меню
                </div>
                <ul class="menu__list">
                    <li class="menu__item">
                        <router-link to="/replinish" class="menu__link" :class="{ 'menu__link_active': $route.path === '/form'}">
                            Пополнить баланс
                        </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/change-password" class="menu__link" :class="{ 'menu__link_active': $route.path === '/preview' }">
                            Превью
                        </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/logout" class="menu__link" :class="{ 'menu__link_active': $route.path === '/preview' }">
                            Выйти
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let isMenuOpen = ref(false)

function toggleMenu() {
    document.body.classList.toggle('_lock');
    isMenuOpen.value = !isMenuOpen.value;
}
</script>