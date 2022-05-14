<template>


    <div class="card">
        <div class="choose-section flex">
            <calendar-select-month/>
            <calendar-select-year />
<!--            <div class="choose-section__month flex">-->
            <!--                <button-->
            <!--                        class="choose-btn"-->
            <!--                        @click="prevMonth">-->
            <!--                    <i class="pi pi-chevron-left"/>-->
            <!--                </button>-->
            <!--                <span class="uppercase text-xl text-center font-bold choose-section__month-text align-items-center justify-content-center">-->
            <!--                    {{ getMonthName() }}-->
            <!--                </span>-->
            <!--                <button class="choose-btn" @click="nextMonth"><i class="pi pi-chevron-right"></i></button>-->
            <!--            </div>-->
<!--            <div class="choose-section__year flex">-->
<!--                <button @click="prevYear" class="choose-btn"><i class="pi pi-chevron-left"></i></button>-->
<!--                <span class="text-xl text-center font-bold choose-section__month-text align-items-center justify-content-center">-->
<!--                    {{ getYear() }}-->
<!--                </span>-->
<!--                <button @click="nextYear" class="choose-btn"><i class="pi pi-chevron-right"></i></button>-->
<!--            </div>-->
<!--        </div>-->

        <!--        <div class="flex flex-wrap ">-->
        <!--            <p v-for="i in dayWeek" class="calendar-item h-1rem my-1 mx-1 text-center">{{ i }}</p>-->
        <!--            <div role="button" class="calendar-item flex align-items-center my-1 mx-1 hover:bg-blue-100 active:bg-blue-50 align-content-center justify-content-between px-3  flex-row  shadow-3 h-5rem text-2xl text-color"-->
        <!--                 v-for="i in daysMonth">-->
        <!--                <Button icon="pi pi-plus-circle" class="p-button-rounded p-button-text"/>-->
        <!--                {{i}}-->
        <!--            </div>-->
        </div>

        <calendar-day-week/>
        <calendar-day :date="currentDate"/>

    </div>
</template>

<script>
    import CalendarSelectMonth from "@/components/CalendarSelectMonth"
    import CalendarSelectYear from "@/components/CalendarSelectYear"
    import CalendarDay from "@/components/CalendarDay"
    import CalendarDayWeek from "@/components/CalendarDayWeek"
    import {mapWritableState} from 'pinia'
    import {useStore} from "../../store/store";

    export default {
        components: {CalendarDay, CalendarDayWeek, CalendarSelectMonth, CalendarSelectYear},

        data() {
            return {
                // currentDate: new Date()

                // daysMonth: [],
                // dayWeek: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
            }
        },
        computed: {
            ...mapWritableState(useStore, {
                currentDate: 'currentDate',
                user: (store) => `Hello ${store.name}`
            })
        },

        // mounted() {
        //     this.getFirstDayInWeek()
        // },
        // watch: {
        //     currentDate(){
        //         this.getFirstDayInWeek()
        //     }
        // },
        methods: {
            // getFirstDayInWeek() {
            //     const month = this.currentDate.getMonth()
            //     const year = this.currentDate.getFullYear()
            //     const getDaysOfMonth = new Date(year, month + 1, 0).getDate()
            //     const getFirsWeekDay = new Date(year, month, 1).getUTCDay()
            //     this.daysMonth = []
            //
            //     for (let i = getFirsWeekDay; i < getDaysOfMonth + getFirsWeekDay; i++) {
            //         this.daysMonth[i] = i + 1 - getFirsWeekDay
            //     }
            // },

            // getMonthName() {
            //     let indexMonth = this.currentDate.getMonth()
            //     const d = new Date(2020, indexMonth, 1)
            //     return d.toLocaleDateString('ru-RU', {month: 'long'})
            // },
            // selectMonth(diff) {
            //     const date = new Date(this.currentDate)
            //     date.setMonth(date.getMonth() - diff)
            //     this.currentDate = date
            // },
            // prevMonth() {
            //     this.selectMonth(1)
            // },
            // nextMonth() {
            //     this.selectMonth(-1)
            // },

            getYear() {
                return this.currentDate.getFullYear()
            },
            selectYear(diff) {
                const date = new Date(this.currentDate)
                date.setFullYear(date.getFullYear() - diff)
                this.currentDate = date
            },
            prevYear() {
                this.selectYear(1)
            },
            nextYear() {
                this.selectYear(-1)
            },


        }

    }
</script>

<style scoped>
    /*.calendar-item {*/
    /*    width: calc(90% / 7);*/
    /*}*/


    .card {
        width: 80%;
        margin: auto;
        padding-top: 50px;
    }



</style>