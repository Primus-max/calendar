<template>
<div>
    <Dialog class="p-dialog w-10"
            v-model:visible="isDisplayModal"
            :maximizable="true"
            :modal="true"
            :dismissableMask="true"
            baseZIndex="9"
    >

        <template #header>
            <h3>Список задач</h3>
            <tab-menu-task-list />
        </template>

        <task-item/>

        <div class="p-paginatoror">
            <Paginator :rows="10" :totalRecords="totalItemsCount"></Paginator>
        </div>
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
    import TabMenuTaskList from "@/components/views/TabMenuTaskList";

    export default {
        components: {TaskItem, Dialog, Paginator, TabMenuTaskList},

        data(){
            return{
                isDisplayModal: true
            }
        },
        watch: {
            isDisplayModal() {
                this.$router.push('./')
            }
        },

    }
</script>

<style scoped>

</style>

