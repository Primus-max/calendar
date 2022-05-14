<template>
    <div class="flex flex-wrap">
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
    import {useStore} from "../../store/store"
    import {mapWritableState} from 'pinia'

    export default {
        components: {Button},
        data() {
            return {
                daysMonth: [],
            }
        },
        mounted() {
            this.getFirstDayInWeek()
        },
        watch: {
            currentDate() {
                this.getFirstDayInWeek()
            }
        },
        computed:{
            ...mapWritableState(useStore, ['currentDate'])
        },

        methods: {
            getFirstDayInWeek() {
                const month = this.currentDate.getMonth()
                const year = this.currentDate.getFullYear()
                const getDaysOfMonth = new Date(year, month + 1, 0).getDate()
                const getFirsWeekDay = new Date(year, month, 1).getUTCDay()
                this.daysMonth = []

                for (let i = getFirsWeekDay; i < getDaysOfMonth + getFirsWeekDay; i++) {
                    this.daysMonth[i] = i + 1 - getFirsWeekDay
                    console.log(this.currentDate)
                }
            }
        },
    }
</script>

<style scoped>
    .calendar-item {
        width: calc(90% / 7);
    }
</style>