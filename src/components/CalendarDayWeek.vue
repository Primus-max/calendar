<template>
    <div class="flex flex-wrap mb-3 align-content-center">
        <p v-for="day in daysWeek" class="flex align-items-center justify-content-center calendar-item h-1rem my-1 mx-1 text-center surface-200 h-2rem">{{ day }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                daysWeek: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
            }
        }
    }
</script>

<style scoped>
    .calendar-item {
        width: calc(90% / 7);

    }

</style>