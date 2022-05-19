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
        </template>

        <task-item/>

        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text"/>
            <Button label="Yes" icon="pi pi-check" autofocus />
        </template>
    </Dialog>
</div>
</template>

<script>
    import Dialog from 'primevue/dialog'
    import TaskItem from "@/components/views/TaskItem";


    // import {useStore} from "../../../store/store"
    import {mapWritableState} from 'pinia'
    import {mapState} from 'pinia'

    export default {
        components: {TaskItem, Dialog},

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

