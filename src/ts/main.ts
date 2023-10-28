import '@/scss/style.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru')

const app = createApp(App)

app
    .use(router)
    .use(PrimeVue)
    .mount('#app')
