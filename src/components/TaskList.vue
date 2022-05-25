<template>
    <div>

        <Dialog class="p-dialog w-10 z-1 dialog h-max"
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
                    v-for="(task, i) in this.cloneTaskStore[page]"
                    :key="task.id"
                    :task="task"
                    :cloneTaskStore="this.cloneTaskStore"
            />


            <Nagibator
                    :paginationList="this.cloneTaskStore"
                    :page="page"
                    @prevPage="prevPage"
                    @nextPage="nextPage"
                    @changePage="changePage"
            />


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
    import Button from 'primevue/button'


    import TabMenuTaskList from "@/components/views/TabMenuTaskList"
    import Nagibator from "@/components/views/Nagibator"


    import {useStore} from "../../store/store"
    import {mapState, mapWritableState} from 'pinia'
    import _ from "lodash";

    export default {
        components: {TaskItem, Dialog, TabMenuTaskList, Nagibator, Button},

        data() {
            return {
                isDisplayModal: true,
                currentPage: null,
                page: 0,
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
        methods: {
            pushRouterTask(el){

                // if(+`${this.$route.path}?page=${el}` === this.cloneTaskStore.length - 1){
                //     console.log('it work')
                // }


               this.$router.push(`${this.$route.path}?page=${el + 1}`)
               // console.log(`${this.$route.path}?page=${el}`)
            },
            prevPage(){
                if(this.page === 0 ){
                    return
                }
                this.page -= 1
                this.pushRouterTask(this.page )
            },
            nextPage(){
                if(this.page === this.cloneTaskStore.length - 1){
                    return
                }
                this.page += 1
                this.pushRouterTask(this.page )
            },
            changePage(idx){
                this.page = idx
                this.pushRouterTask(this.page )
                console.log(this.$route.query)
            }
        }
    }
</script>

<style scoped>
.dialog{
    height: 600px;
}

</style>

