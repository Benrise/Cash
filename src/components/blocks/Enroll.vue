<template>
    <div class="enroll">
        <div class="enroll__date">
            <div class="enroll__day">
                {{day}}
            </div>
            <div class="enroll__hour">
                {{hour}}
            </div>
        </div>
        <div class="enroll__operation">
            {{operation}}
        </div>
        <div class="enroll__value">
            {{formattedValue}}
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs';
import dayjs_ru from'dayjs/locale/ru';

const props = defineProps({
    date: {
        type: String,
        default: '00-00-00T00:00:00.000Z'
    },
    operation: {
        type: String,
        default: 'Название операции пополнения'
    },
    value: {
        type: Number,
        default: 0
    }
})

const day = computed(() => {
    const date = dayjs(props.date)
    date.$L = 'ru'
    return date.format('D MMM')
})

const hour = computed(() => {
    const date = dayjs(props.date)
    return date.format('hh:ss', "Europe/Russia")
})

 const formattedValue = computed(() => {
    return '+ ' + props.value
 })
</script>
