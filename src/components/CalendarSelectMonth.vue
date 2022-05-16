<template>
    <div>
        <div class="choose-section__month flex">
            <button
                    class="choose-btn"
                    @click="prevMonth">
                <i class="pi pi-chevron-left"/>
            </button>
            <span class="uppercase text-xl text-center font-bold choose-section__month-text align-items-center justify-content-center">
                    {{ getMonthName() }}
                </span>
            <button class="choose-btn" @click="nextMonth"><i class="pi pi-chevron-right"></i></button>
        </div>
    </div>
</template>

<script>
    import {mapWritableState} from 'pinia'
    import {useStore} from "../../store/store"

    export default {
        computed: {
            ...mapWritableState(useStore, ['currentDate'])
        },

        methods: {
            getMonthName() {
                let indexMonth = this.currentDate.getMonth()
                const d = new Date(2020, indexMonth, 1)
                return d.toLocaleDateString('ru-RU', {month: 'long'})
            },
            selectMonth(diff) {
                const d = new Date(this.currentDate)
                d.setMonth(d.getMonth() - diff)
                this.currentDate = d
            },
            prevMonth() {
                this.selectMonth(1)
            },
            nextMonth() {
                this.selectMonth(-1)
            },
        },

    }
</script>

<style scoped>
    .choose-section__month {
        width: 20rem;
    }
    .choose-section__month-text {
        width: 7rem;
    }
    .choose-btn {
        margin: 0 25px;
        border: none;
        background: none;
        cursor: pointer;
    }
</style>