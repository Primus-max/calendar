<template>
    <div class="flex task-list__wrapper m-auto">
        <ul class="task-list flex flex-column align-items-start">
            <li class="task-item flex flex-column p-paginator-pages w-12 border-1 border-blue-100 border-round-md mb-1"
                v-for="(task, idx) in newTaskStore"
                :key="task.id"
                :value="task.id"
            >
                <div class="flex border-1 border-blue-100 bg-blue-50 align-items-center pr-2">
                    <p class="flex w-9 h-4rem align-items-center pl-4 m-0"
                       @click="showDescriptionTask(task.id)"
                       v-tooltip.top="task.isShow ?'Закрыть': 'Открыть'"
                    >
                        {{ task.title }}
                    </p>

                    <span class=" flex w-3 justify-content-end m-0 ">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-button-text"
                                @click="editTask(task.id)"
                                v-tooltip.top="'Редактировать'"
                        />
                        <Button icon="pi pi-share-alt" class="p-button-rounded p-button-info p-button-text"
                                v-tooltip.top="'Озадачить'"
                        />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-text"
                                @click="confirmDelDialog(task.id)"
                                v-tooltip.top="'Удалить'"
                        />
                    </span>
                </div>
                <p class="pl-5" v-show="task.isShow">
                    <span class="flex" style="width: 70%">{{ task.description }}</span>
                </p>
            </li>
        </ul>
    </div>

    <Toast :baseZIndex="10"></Toast>
    <ConfirmDialog></ConfirmDialog>

    <Dialog
            class="flex w-3"
            header="Удалить задачу"
            v-model:visible="displayConfirmDelDialog"
            :modal="true"
            :dismissableMask="true"
    >
        <div class="flex flex-column w-5 pt-2 pl-4 h-5">
            <div class="field-radiobutton  flex justify-content-between align-content-center">
                <label for="self">У себя</label>
                <RadioButton id="self" name="city" value="self" />
            </div>
            <div class="field-radiobutton flex justify-content-between align-content-center">
                <label for="all">У всех</label>
                <RadioButton id="all" name="city" value="all"  autofocus/>
            </div>
        </div>
        <template #footer>
            <Button label="отмена" icon="pi pi-check" class="p-button-info p-button-text" iconPos="left"/>
            <Button label="удалить" icon="pi pi-times" class="p-button-warning p-button-text" iconPos="left"
                    @click="removeTask(task.id)"
            />
        </template>
    </Dialog>

</template>

<script>
    import Button from 'primevue/button'
    import Dialog from 'primevue/dialog'
    import RadioButton from 'primevue/radiobutton'

    import Toast from 'primevue/toast'

    import {useStore} from "../../../store/store"
    import {mapWritableState} from 'pinia'

    export default {
        props: ['getTaskLengthFromChild'],
        components: {Button,  Dialog, Toast, RadioButton},

        data() {
            return {
                displayConfirmDelDialog: false,
                newTaskStore: null,
            }
        },

        created() {
            this.newTaskStore = this.taskStore
            this.getTaskLengthFromChild(this.newTaskStore)
        },

        computed: {
            ...mapWritableState(useStore, ['taskStore']),

        },

        methods: {
            editTask(id) {
                this.$router.push(`/edittask/:${id}`)
            },
            showDescriptionTask(taskId) {
                this.newTaskStore.map(task => {
                    if (task.id === taskId && !task.isShow) {
                        task.isShow = true
                    } else if (task.id === taskId && task.isShow) {
                        task.isShow = false
                    }
                })
                console.log(this.$toast.style)
            },
            confirmDelDialog(){
                this.displayConfirmDelDialog = true
            },
            removeTask(id) {
                this.displayConfirmDelDialog = true
                this.newTaskStore.map((task, i) => {
                    if (task.id === id) {
                        this.newTaskStore.splice(i, 1)
                    }
                })
            },
            showSuccess() {
                this.$toast.add({severity: 'success', summary: '', detail: 'Задача успешно перезаписана', life: 3000,});
            },
        },
    }
</script>

<style scoped>
    .task-list__wrapper {
        width: 90%;
    }

    .task-list {
        width: 100%;
        padding: 0;
    }


</style>