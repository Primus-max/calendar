<template>
    <!--    <div>-->
    <!--        <Panel-->
    <!--                v-for="(task, idx) in this.newTaskStore"-->
    <!--                :key="task.id"-->
    <!--                :header="task.title"-->
    <!--                v-model:collapsed="task.id"-->
    <!--                class="p-paginator-pages"-->
    <!--                :newTaskstore="newTaskStore"-->

    <!--        >-->
    <!--            <template #icons>-->

    <!--                <div class="flex">-->
    <!--                    <Button class="p-panel-header-icon p-link mr-2 p-button-info">-->
    <!--                    <span class="pi pi-pause text-blue-500"-->
    <!--                          v-tooltip.top="'Остановить'"-->
    <!--                    >-->

    <!--                    </span>-->
    <!--                    </Button>-->

    <!--                    <Button class="p-panel-header-icon p-link mr-2 p-button-success"-->
    <!--                            v-tooltip.top="'Редактировать'"-->
    <!--                            @click="editTask(task.id)"-->
    <!--                    >-->
    <!--                        <span class="pi pi-pencil text-green-500"></span>-->
    <!--                    </Button>-->

    <!--                    <Button @click="removeTask(task.id)" class="p-panel-header-icon p-link mr-2 p-button-danger"-->
    <!--                            v-tooltip.top="'Удалить'"-->
    <!--                    >-->
    <!--                        <span class="pi pi-trash text-red-500"></span>-->
    <!--                    </Button>-->

    <!--                    <Button class="p-panel-header-icon p-link mr-2" @click="task.id = !task.id">-->
    <!--                    <span class="pi pi-chevron-left"-->
    <!--                          :class="{'pi-chevron-down': !task.id}"-->
    <!--                          v-tooltip.top="task.id ? 'Открыть': 'Закрыть'"-->
    <!--                    >-->
    <!--                    </span>-->
    <!--                    </Button>-->
    <!--                </div>-->
    <!--            </template>-->

    <!--            <p class="flex transition-duration-3000">-->
    <!--                {{task.description}}-->
    <!--            </p>-->
    <!--        </Panel>-->
    <!--    </div>-->


    <!--    <div>-->
    <!--        <TreeTable :value="nodes" :paginator="true" :rows="4" sortMode="multiple" class="flex flex-column">-->
    <!--            <Column field="name" header="Задача" :expander="true" :sortable="true"></Column>-->
    <!--&lt;!&ndash;            <Column field="size" header="Size" :sortable="true"></Column>&ndash;&gt;-->
    <!--            <Column field="date" header="Дата" :sortable="true" class="w-2"></Column>-->
    <!--            <Column  headerStyle="width: 10rem" headerClass="text-center" bodyClass="text-center">-->
    <!--                <template #header >-->
    <!--                    <Button type="button" icon="pi pi-cog"></Button>-->
    <!--                </template>-->

    <!--                <template #body >-->
    <!--                    <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>-->
    <!--                    <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>-->
    <!--                </template>-->

    <!--            </Column>-->
    <!--        </TreeTable>-->
    <!--    </div>-->


    <div class="flex w-57rem m-auto">
        <ul class="task-list flex flex-column align-items-start">
            <li class="task-item flex flex-column p-paginator-pages w-12 border-1 border-blue-100 border-round-md mb-1"
                v-for="(task, idx) in newTaskStore"
                :key="task.id"
            >
                <div class="flex border-1 border-blue-100 bg-blue-50 align-items-center">
<!--                    <Button class="p-panel-header-icon  mr-2" @click="task.id = !task.id">-->
<!--                        <span class="pi pi-chevron-left"-->
<!--                              :class="{'pi-chevron-down': !task.id}"-->
<!--                              v-tooltip.top="task.id ? 'Открыть': 'Закрыть'"-->
<!--                        >-->
<!--                         </span>-->
<!--                    </Button>-->
                    <p class="flex w-9 h-4rem align-items-center pl-4 m-0"

                       @click="task.id = !task.id"
                       v-show="!task.id"
                       v-tooltip.top="'Открыть'"
                    >
                        {{ task.id }}
                        {{ task.title }}
                    </p>
                    <p class="flex w-3 justify-content-end m-0">
                        <Button/>
                    </p>

                </div>
                <p class="pl-6"
                   :class="{
                    'isDisplay': isOpenDetailTask
                   }"
                >
                    {{ task.description }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    import Card from 'primevue/card'
    import Button from 'primevue/button'
    import Panel from 'primevue/panel'


    import TreeTable from 'primevue/treetable'
    import Column from 'primevue/column'

    import {useStore} from "../../../store/store"
    import {mapWritableState} from 'pinia'

    export default {
        props: ['getTaskLengthFromChild'],
        components: {Card, Button, Panel, TreeTable, Column},

        data() {
            return {
                isOpenDetailTask: false,
                nodes: null,

                newTaskStore: null,
            }
        },
        // watch() {
        //     this.newTaskStore()
        // },
        mounted() {

        },
        created() {
            this.newTaskStore = this.taskStore
            this.getTaskLengthFromChild(this.newTaskStore)

            //
            // let files = [];
            // for(let i = 0; i < this.newTaskStore.length; i++) {
            //     let node = {
            //         key: i,
            //         data: {
            //             name: this.newTaskStore[i].title,
            //             date: this.newTaskStore[i].date,
            //             icon: 'pi pi-pencil'
            //         },
            //         children: [
            //             {
            //                 key: i + ' - 0',
            //                 data: {
            //                     name: this.newTaskStore[i].description,
            //                     isChildren: true
            //                 }
            //             }
            //         ]
            //     };
            //
            //     files.push(node);
            // }
            //
            // this.nodes = files;
            // console.log('created', !this.nodes[0].children[0].data.isChildren )
        },
        computed: {
            ...mapWritableState(useStore, ['taskStore'])
        },
        methods: {
            editTask(id) {
                this.$router.push(`/edittask/:${id}`)
            },

            removeTask(id) {
                this.newTaskStore.map((task, i) => {
                    if (task.id === id) {
                        this.newTaskStore.splice(i, 1)
                    }
                })
            }
        }

    }
</script>

<style scoped>
    .task-list {
        padding: 0;
        list-style: none;
    }
    .isDisplay{
        display: none;
    }
</style>