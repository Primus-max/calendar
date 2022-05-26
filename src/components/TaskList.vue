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

            <div class="task-list__body">
                <task-item
                        v-for="(task, i) in this.cloneTaskStore[page]"
                        :key="task.id"
                        :task="task"
                        :cloneTaskStore="this.cloneTaskStore"
                />
            </div>

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

    <!--    <div class="page-wrapper">-->
    <!--        <div class="task-item__overlay">-->
    <!--            <div class="task-list__modal">-->
    <!--                <div class="task-list__header">-->
    <!--                    <h3>Список задач</h3>-->
    <!--                    <tab-menu-task-list/>-->
    <!--                </div>-->

    <!--                <div class="task-list__body">-->

    <!--                        <task-item-->
    <!--                                v-for="(task, i) in this.cloneTaskStore[page]"-->
    <!--                                :key="task.id"-->
    <!--                                :task="task"-->
    <!--                                :cloneTaskStore="this.cloneTaskStore"-->
    <!--                        />-->

    <!--                </div>-->

    <!--                <Nagibator-->
    <!--                        :paginationList="this.cloneTaskStore"-->
    <!--                        :page="page"-->
    <!--                        @prevPage="prevPage"-->
    <!--                        @nextPage="nextPage"-->
    <!--                        @changePage="changePage"-->
    <!--                />-->

    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->


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
            pushRouterTask(el) {

                // if(+`${this.$route.path}?page=${el}` === this.cloneTaskStore.length - 1){
                //     console.log('it work')
                // }


                this.$router.push(`${this.$route.path}?page=${el + 1}`)
                // console.log(`${this.$route.path}?page=${el}`)
            },
            prevPage() {
                if (this.page === 0) {
                    return
                }
                this.page -= 1
                this.pushRouterTask(this.page)
            },
            nextPage() {
                if (this.page === this.cloneTaskStore.length - 1) {
                    return
                }
                this.page += 1
                this.pushRouterTask(this.page)
            },
            changePage(idx) {
                this.page = idx
                this.pushRouterTask(this.page)
                console.log(this.$route.query)
            }
        }
    }
</script>

<style scoped>
    .page-wrapper {
        width: 100%;
        height: 100%
    }

    .task-item__overlay {
        position: fixed;
        margin: 0;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
    }

    .task-list__modal {
        min-width: 65rem;
        min-height: 75vh;


        background: white;
    }

    .task-list__body {
        width: 100%;
        min-height: 450px;
        padding: 3rem 0 0 0;

        display: flex;
        flex-direction: column;
    }


</style>

