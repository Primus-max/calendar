<template>


    <div class="card">
        <div class="flex justify-content-between align-items-center h-auto">

            <main-menu />

        <div class="flex justify-content-end pr-5">
            <calendar-select-month/>
            <calendar-select-year/>
        </div>

        </div>
        <calendar-day-week/>
        <calendar-day/>
    </div>
</template>

<script>
    import CalendarSelectMonth from "@/components/CalendarSelectMonth"
    import CalendarSelectYear from "@/components/CalendarSelectYear"
    import CalendarDay from "@/components/CalendarDay"
    import CalendarDayWeek from "@/components/CalendarDayWeek"
    import MainMenu from './MainMenu'



    export default {
        components: {CalendarDay, CalendarDayWeek, CalendarSelectMonth, CalendarSelectYear, MainMenu},
        data(){
            return{

            }
        },

    }
</script>

<style scoped>
    .card {
        width: 80%;
        margin: auto;
        padding-top: 20px;
    }
</style>