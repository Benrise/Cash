<template>
    <MainBlock border title="График изменения суммы портфеля">
        <template v-slot:elements>
            <div class="chart">
                <div class="chart__header">
                    <div class="chart__header-title">
                        Портфель
                    </div>
                    <div class="chart__header-value">
                        5.987,34
                    </div>
                    <div class="chart__header-footnote">
                        Общая сумма
                    </div>
                </div>
                <div class="chart__line"></div>
                <Chart type="line" :data="chartData" :options="chartOptions" class="w-full h-15rem" />
            </div>
        </template>
    </MainBlock>
    <MainBlock border title="История пополнений">
        <template v-slot:elements>
            <template v-for="enroll in historyEnrollsData" :key="enroll.id">
                <enroll
                    :date = enroll.date
                    :operation = enroll.operation
                    :value = enroll.value
                />
            </template>
        </template>
    </MainBlock>
</template>

<script setup lang="ts">
import MainBlock from "@/components/blocks/MainBlock.vue";
import Chart from 'primevue/chart';
import Enroll from '@/components/blocks/Enroll.vue';
import dayjs from 'dayjs';
import { ref, onMounted, computed } from "vue";

const chartData = ref();
const chartOptions = ref();
const historyEnrollsData = ref()
const totalAmount = ref()
const monthForward = ref()


onMounted(() => {
    chartOptions.value = setChartOptions();
    monthForward.value = getMonthForward();
    fetchChartData();
    fetchEnrolls();
});


const getMonthForward = () => {
    
    let daysArray = []
    
    for (let i = 30; i > 2; i -= 3) {
        let date = dayjs().subtract(i, 'days')
        daysArray.push(date.format('MMM D'))
    }

    daysArray.push(dayjs().format('MMM D'))

    return daysArray
}

const fetchEnrolls = () => {
    const url = 'https://646897f760c8cb9a2cad369c.mockapi.io/resource'
    const response = fetch(url, {
        method: 'GET',
        headers: {'content-type':'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(data => {
        historyEnrollsData.value = data
    })
    .catch(error => {
        console.log(error);
    })
    Promise.resolve(response)
}

const fetchChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const url = 'https://646897f760c8cb9a2cad369c.mockapi.io/resource2'
    const response = fetch(url, {
        method: 'GET',
        headers: {'content-type':'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(data => {
        //Future working resource for data
        const mockData = {
            labels: monthForward,
            datasets : [
                {
                    label: 'Евро',
                    data: [65, 59, 80, 81, 56, 55, 40, 40, 19, 40, 27],
                    fill: true,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--red-500'),
                    backgroundColor: 'rgba(249,65,68,0.2)'
                },
                {
                    label: 'Доллар',
                    data: [28, 29, 40, 19, 40, 27, 26, 65, 59, 80, 81],
                    fill: true,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--yellow-500'),
                    backgroundColor: 'rgba(249,199,79,0.2)'
                },
                {
                    label: 'Рубль',
                    data: [12, 51, 62, 33, 21, 62, 45, 40, 27, 26, 1],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        }
        chartData.value = mockData;
    })
    .catch(error => {
        console.log(error);
    })
    
    Promise.resolve(response)
}

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
                position: 'bottom',
                align: 'start',
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: documentStyle.getPropertyValue('--gray-800')
                }
            },
            y: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: documentStyle.getPropertyValue('--gray-800'),

                }
            }
        }
    };
}

</script>

<style scoped>

</style>