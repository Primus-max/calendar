<template>
    <div class="choose-section__year flex">
        <button @click="prevYear" class="choose-btn"><i class="pi pi-chevron-left"></i></button>
        <span class="text-xl text-center font-bold choose-section__month-text align-items-center justify-content-center">
                    {{ getYear() }}
                </span>
        <button @click="nextYear" class="choose-btn"><i class="pi pi-chevron-right"></i></button>
    </div>
</template>

<script>
    import {mapWritableState} from 'pinia'
    import {useStore} from "../store/store"

    export default {
        computed: {
            ...mapWritableState(useStore, ['currentDate'])
        },
        methods: {
            getYear() {
                return this.currentDate.getFullYear()
            },
            selectYear(diff) {
                const date = new Date(this.currentDate)
                date.setFullYear(date.getFullYear() - diff)
                this.currentDate = date
               // console.log(this.currentDate)
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
    .choose-btn {
        margin: 0 12px;
        border: none;
        background: none;
        cursor: pointer;
    }
</style>