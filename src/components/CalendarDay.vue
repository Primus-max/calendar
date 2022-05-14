<template>
    <div class="flex flex-wrap">
        <!--        <p v-for="dayW in daysWeek" class="calendar-item h-1rem my-1 mx-1 text-center">{{ dayW }}</p>-->

        <div class="calendar-item flex align-items-center my-1 mx-1   align-content-center justify-content-between px-3  flex-row   text-2xl text-color"

             v-for="day in daysMonth"
             :class="{
                'shadow-3 h-5rem': day,
                ' hover:bg-blue-100': day
             }"
        >
            <template v-if="day">
                <Button icon="pi pi-plus-circle" class="p-button-rounded p-button-text"/>
                {{day}}
            </template>
        </div>

    </div>
</template>

<script>
    import Button from 'primevue/button'
    import {useStore} from "../../store/store";

    export default {
        components: {Button},
        props: ['date'],
        data() {
            return {
                daysMonth: [],
            }
        },
        mounted() {
            this.getFirstDayInWeek()
        },
        watch: {
            date() {
                this.getFirstDayInWeek()
            }
        },

        methods: {
            getFirstDayInWeek() {
                const month = this.date.getMonth()
                const year = this.date.getFullYear()
                const getDaysOfMonth = new Date(year, month + 1, 0).getDate()
                const getFirsWeekDay = new Date(year, month, 1).getUTCDay()
                this.daysMonth = []

                for (let i = getFirsWeekDay; i < getDaysOfMonth + getFirsWeekDay; i++) {
                    this.daysMonth[i] = i + 1 - getFirsWeekDay
                }
            },
        },
    }
</script>

<style scoped>
    .calendar-item {
        width: calc(90% / 7);
    }
</style>