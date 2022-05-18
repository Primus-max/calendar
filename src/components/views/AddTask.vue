<template>
    <h1>СТРАНИЦА ДОБАВЛЕНИЯ ЗАДАЧИ</h1>
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
</template>

<script>
    import Button from 'primevue/button'
    import Dialog from 'primevue/dialog'
    import InputText from 'primevue/inputtext'
    import Calendar from 'primevue/calendar'
    import Textarea from 'primevue/textarea'

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
                this.$router.push('./')
            }
        },
        methods: {
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
        }

    }
</script>

<style scoped>
    .task-title {
        width: 150px;
    }
</style>