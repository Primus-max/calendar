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
            <tab-menu-task-list />
        </template>

        <task-item :getTaskLengthFromChild="getTaskLengthFromChild"/>


            <Paginator :rows="4" :totalRecords="totalRecords" ></Paginator>

<!--        <template #footer>-->
<!--            <Button label="No" icon="pi pi-times" class="p-button-text"/>-->
<!--            <Button label="Yes" icon="pi pi-check" autofocus />-->
<!--        </template>-->
    </Dialog>
</div>



</template>

<script>
    import Dialog from 'primevue/dialog'
    import TaskItem from "@/components/views/TaskItem"
    import Paginator from 'primevue/paginator'
    import TabMenuTaskList from "@/components/views/TabMenuTaskList"

    import _ from 'lodash'

    import {useStore} from "../../store/store"
    import {mapState} from 'pinia'

    export default {
        components: {TaskItem, Dialog, Paginator, TabMenuTaskList},

        data(){
            return{
                isDisplayModal: true,

                totalRecords: null,
            }
        },

        watch: {
            isDisplayModal() {
                this.$router.push('./')
            }
        },
        methods:{
            getTaskLengthFromChild(taskLength){

                 this.totalRecords = taskLength.length
                    //_.chunk(taskLength, 4)
                console.log('it is length taskArray', )
            },
        }
    }
</script>

<style scoped>

</style>

