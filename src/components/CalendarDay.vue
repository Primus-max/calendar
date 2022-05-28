<template>
    <div class="flex flex-wrap">
        <div class="calendar-item flex align-items-center my-1 mx-1 align-content-center justify-content-between pr-3  flex-row   text-2xl text-color"

             v-for="day in daysMonth"
             :key="day"
             :class="{
                'shadow-3 h-5rem': day,
                'hover:bg-blue-100': day,
                'bg-cyan-200': day === this.currentDate.getDate(),
             }"
        >
            <template v-if="day">
                <div class="flex flex-column align-items-center">
                    <Button @click="openModal" v-tooltip="'Добавить задачу'" icon="pi pi-plus-circle"
                            class="p-button-rounded p-button-text align-content-end p-0"/>
                    <button label="3" class="btn"
                            v-tooltip="'Задачи на этот день'"
                    >
                       2
                        </button>
                </div>
                {{day}}
            </template>
        </div>
    </div>

    <div class="add-task-modal">
        <Dialog
                v-model:visible="isDisplayModal"
                :modal="true"
                :dismissableMask="true"
                :style="{
                            width: '55%'
                        }"
        >

            <template #header>
                <h3>Новая задача</h3>
            </template>

            <form @submit.prevent>
                <div class="flex flex-column p-input-filled w-11">

                        <span class="flex mb-3">
                           <label for="title" class="mr-3 task-title">Название задачи</label>
        	                <Textarea
                                    :autoResize="true"
                                    id="title"
                                    type="text"
                                    rows="1"
                                    cols="44"
                                    class="p-inputtext-sm"
                                    v-model="taskTitle"
                                    autofocus
                            />
                        </span>

                    <span class="flex mb-3">
                            <label for="description" class="mr-3 task-title">Описание задачи</label>
                            <Textarea
                                    id="description"
                                    :autoResize="true"
                                    rows="2"
                                    cols="30"
                                    type="text"
                                    class="p-inputtext-lg"
                                    v-model="taskDescription"
                            />
                        </span>

                    <span class="flex mb-3">
                            <label for="beginDate" class="mr-3 task-title">Начало задачи</label>
                                <span class="flex flex-column">
                            <Calendar
                                    class="mb-3"
                                    id="beginDate"
                                    v-model="taskDate"
                                    :showIcon="true"
                                    icon="pi pi-calendar"
                                    placeholder="дата"
                            />
                            <Calendar
                                    v-model="taskTime"
                                    :showIcon="true"
                                    icon="pi pi-clock"
                                    placeholder="время"
                                    :timeOnly="true"
                            />
                                </span>
                        </span>

                </div>
            </form>


            <template #footer>
                <Button @click="closeModal" label="отчистить" icon="pi pi-times" class="p-button-text"/>
                <Button @click="createNewTask" type="submit" label="записать" icon="pi pi-check"
                        class="p-button-success"/>
            </template>

        </Dialog>
    </div>
    <Toast/>
    <router-view/>
</template>

<script>
    import Button from 'primevue/button'
    import Dialog from 'primevue/dialog'
    import InputText from 'primevue/inputtext'
    import Calendar from 'primevue/calendar'
    import Textarea from 'primevue/textarea'


    import {useStore} from "../store/store"
    import {mapWritableState} from 'pinia'
    import {mapState} from 'pinia'


    export default {
        components: {Button, Dialog, InputText, Textarea, Calendar},
        props: ['day'],

        data() {
            return {
                taskTitle: '',
                taskDescription: '',
                taskDate: null,
                taskTime: null,
                isDisplayModal: false,
                daysMonth: [],
                newTask: {}
            }
        },
        mounted() {
            this.getFirstDayInWeek()
        },
        watch: {
            currentDate() {
                this.getFirstDayInWeek()
            },

        },
        computed: {
            ...mapWritableState(useStore, ['currentDate', 'taskStore']),
            ...mapState(useStore, ['addNewTask'])
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
                    // this.daysMonth[i] = new Date(year, month, (i + 1 - getFirsWeekDay))
                }
            },

            createNewTask() {
                this.newTask = {
                    title: this.taskTitle,
                    description: this.taskDescription,
                    date: this.taskDate,
                    time: this.taskTime.toLocaleTimeString('ru-Ru')
                }
                this.addNewTask(this.newTask)

                this.resetForm()
                this.showSuccess()
                this.isDisplayModal = false;
            },

            resetForm() {
                this.taskTitle = ''
                this.taskDescription = ''
                this.taskDate = null
                this.taskTime = null
            },

            openModal() {
                this.isDisplayModal = true;
                console.log(this.$toast)
            },

            closeModal() {
                this.resetForm()
            },

            showSuccess() {
                this.$toast.add({severity: 'success', summary: '', detail: 'Задача успешно добавлена', life: 3000});
            },

        },
    }
</script>

<style scoped>
    .calendar-item {
        width: calc(90% / 7);
        user-select: none;
    }

    .task-title {
        width: 150px;
    }

    .btn{
        width: 1.5rem;
        height: 1.5rem;

        color: white;
        font-weight: bold;
        border: none;
        border-radius: 100%;
        background: #00a803;
        cursor: pointer;
    }
</style>