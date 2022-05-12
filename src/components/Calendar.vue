<template>



    <div class="card">

        <div class="choose-section flex">
            <div class="choose-section__month">
                <button class="choose-btn"><i class="pi pi-chevron-left"></i></button>
            </div>
            <div class="choose-section__year"></div>
        </div>

        <div class="flex flex-wrap align-items-center">
            <p v-for="i in dayWeek" class="calendar-item text-center">{{ i }}</p>
            <div class="calendar-item text-center"
                 v-for="i in days">{{i}}
            </div>
        </div>
    </div>

    <button @click="test">test</button>
</template>

<script>


    export default {
        data() {
            return {
                days: [],
                dayWeek: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
            }
        },

        computed: {
            // getDaysOfMonth() {
            //     return new Date(year, month + 1, 0).getDate()
            // },
            // getFirsWeekDay(){
            //     return new Date(year, month + 1, 1).getUTCDay()
            // },
            // getFirstDayInWeek(){
            //     for(let i = this.getFirsWeekDay; i < this.getDaysOfMonth + this.getFirsWeekDay; i++){
            //         this.days[i] = i +  1 - this.getFirsWeekDay
            //     }
            // }


        },
        mounted() {
           this.getFirstDayInWeek()

            console.log('компонент смонтирован')
        },
        methods: {
            getFirstDayInWeek() {
                const currentDate = new Date()
                const month = currentDate.getMonth()
                const year = currentDate.getFullYear()
                const getDaysOfMonth = new Date(year, month + 1, 0).getDate()
                const getFirsWeekDay = new Date(year, month, 1).getUTCDay()

                for (let i = getFirsWeekDay; i < getDaysOfMonth + getFirsWeekDay; i++) {
                    this.days[i] = i + 1 - getFirsWeekDay
                    console.log(this.days)
                }
            },


            test() {
            },

        }

    }
</script>

<style scoped>
    .calendar-item {
        width: calc(100% / 7)
    }

    .card {
        width: 80%;
        margin: auto;
        padding-top: 50px;
    }

    .choose-btn{
        border: none;
        background: none;
        cursor: pointer;
    }

</style>