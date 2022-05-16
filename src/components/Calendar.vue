<template>


    <div class="card">
        <div class="choose-section flex">
            <calendar-select-month/>
            <calendar-select-year/>
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

    export default {
        components: {CalendarDay, CalendarDayWeek, CalendarSelectMonth, CalendarSelectYear},
    }
</script>

<style scoped>
    .card {
        width: 80%;
        margin: auto;
        padding-top: 50px;
    }
</style>