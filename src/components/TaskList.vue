<template>
    <div>
        <Dialog class="p-dialog w-10 z-1"
                v-model:visible="isDisplayModal"
                :maximizable="true"
                :modal="true"
                :dismissableMask="true"
        >

            <template #header>
                <h3>Список задач</h3>
                <tab-menu-task-list/>
            </template>

            <task-item
                    v-for="(task, i) in this.cloneTaskStore"
                    :key="task.id"
                    :task="task"
                    :cloneTaskStore="this.cloneTaskStore"
            />


            <Nagibator :paginationList="this.cloneTaskStore"></Nagibator>

<!--                    <template #footer>-->
<!--                        <Button @click="test" label="No" icon="pi pi-times" class="p-button-text"/>-->
<!--                        <Button label="Yes" icon="pi pi-check" autofocus />-->
<!--                    </template>-->
        </Dialog>
    </div>


</template>

<script>
    import Dialog from 'primevue/dialog'
    import TaskItem from "@/components/views/TaskItem"

    import TabMenuTaskList from "@/components/views/TabMenuTaskList"
    import Nagibator from "@/components/views/Nagibator"


    import {useStore} from "../../store/store"
    import {mapState, mapWritableState} from 'pinia'
    import _ from "lodash";

    export default {
        components: {TaskItem, Dialog,  TabMenuTaskList, Nagibator},

        data() {
            return {
                isDisplayModal: true,
                totalRecords: null,
                cloneTaskStore: [],
            }
        },
        created() {
            this.cloneTaskStore = _.chunk(this.taskStore, 4)
        },
        computed: {
            ...mapWritableState(useStore, ['taskStore']),

        },

        watch: {
            isDisplayModal() {
                this.$router.push('./')
            }
        },
        // methods: {
        //     test(){
        //         console.log(this.cloneTaskStore)
        //     }
        // }
    }
</script>

<style scoped>

</style>

