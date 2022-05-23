<template>
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
                <h3>Редактировать задачу</h3>
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
                <Button @click="closeModal" label="отменить" icon="pi pi-times" class="p-button-text"/>
                <Button @click="saveEditedTask" type="submit" label="записать" icon="pi pi-check"
                        class="p-button-success"/>
            </template>

        </Dialog>
    </div>
    <Toast />

</template>


<script>

    import Button from 'primevue/button'
    import Dialog from 'primevue/dialog'
    import InputText from 'primevue/inputtext'
    import Calendar from 'primevue/calendar'
    import Textarea from 'primevue/textarea'




    import {useStore} from "../../../store/store"
    import {mapWritableState} from 'pinia'
    import {mapState} from 'pinia'

    export default {
        components: {Button, Dialog, InputText, Textarea, Calendar},

        data() {
            return {
                isDisplayModal: true,
                taskTitle: '',
                taskDescription: '',
                taskDate: null,
                taskTime: null,
                newTask: {},
            }
        },
        watch: {
            isDisplayModal() {
                this.$router.push('/tasklist')
            }
        },
        computed: {
            ...mapWritableState(useStore, ['currentDate', 'taskStore']),
            ...mapState(useStore, ['addNewTask'])
        },

        methods: {
            saveEditedTask(){
                this.editTask()

                this.resetForm()
                this.showSuccess()
                this.isDisplayModal = false;
                console.log(this.isDisplayModal)
            },

            editTask() {
                const idTaskToClick = this.$route.params.id.replace(/\:/gi, '')
                return this.taskStore.filter(task => {

                    if (idTaskToClick === task.id) {
                        task.title = this.taskTitle
                        task.description = this.taskDescription
                        task.date = this.taskDate
                        task.time = this.taskTime
                    }
                })
            },

            openModal() {
                this.isDisplayModal = true;
            },
            closeModal() {
                this.isDisplayModal = false
            },
            resetForm() {
                this.taskTitle = ''
                this.taskDescription = ''
                this.taskDate = null
                this.taskTime = null
            },

            showSuccess() {
                this.$toast.add({severity: 'success', summary: '', detail: 'Задача успешно перезаписана', life: 3000});
            },

            getTaskDataFromId() {
                const idTaskToClick = this.$route.params.id.replace(/\:/gi, '')
                return this.taskStore.filter(task => {

                    if (idTaskToClick === task.id) {
                        this.taskTitle = task.title
                        this.taskDescription = task.description
                        this.taskDate = task.date
                        this.taskTime = task.time
                    }
                })
            }
        },

        mounted() {
            console.log(this.$router)
            this.getTaskDataFromId()
        }

    }
</script>

<style scoped>
    .task-title {
        width: 150px;
    }
</style>